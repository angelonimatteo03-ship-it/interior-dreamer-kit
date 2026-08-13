import { useEffect, useMemo, useRef, useState } from "react";
import type { RoomOpening } from "@/lib/designs.functions";
import { getExactFurnitureKind } from "@/lib/furniture-kind";
import { Maximize2, MousePointer2, RotateCcw } from "lucide-react";
import type { BufferGeometry, Group, Material, Object3D } from "three";

export type ExactRoomFurniture = {
  id: string;
  name: string;
  category: string;
  widthCm: number;
  depthCm: number;
  xCm: number;
  yCm: number;
  rotation: 0 | 90 | 180 | 270;
};

type ExactRoom3DProps = {
  width: number;
  length: number;
  wallColor: string;
  openings: RoomOpening[];
  furniture: ExactRoomFurniture[];
};

function materialColors(item: ExactRoomFurniture) {
  const value = item.name.toLowerCase();
  const dark = value.includes("marrone") || value.includes("nero") || value.includes("noce");
  const white = value.includes("bianc") || value.includes("avorio") || value.includes("ecru");
  const green = value.includes("verde") || value.includes("kaki");
  return {
    wood: dark ? 0x76513b : white ? 0xd8cbb8 : 0xb88b5b,
    fabric: green ? 0x84947c : dark ? 0x7b5544 : white ? 0xe7e0d5 : 0xd8c9b7,
    accent: dark ? 0x3a2c27 : 0x6d533d,
  };
}

export function ExactRoom3D({ width, length, wallColor, openings, furniture }: ExactRoom3DProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorDetail, setErrorDetail] = useState("");
  const [resetKey, setResetKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const stableFurniture = useMemo(() => furniture, [furniture]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let frame = 0;
    let resizeObserver: ResizeObserver | undefined;
    let cleanupScene: (() => void) | undefined;

    setStatus("loading");
    setErrorDetail("");

    void Promise.all([
      import("three"),
      import("three/examples/jsm/controls/OrbitControls.js"),
      import("three/examples/jsm/geometries/RoundedBoxGeometry.js"),
    ])
      .then(([THREE, { OrbitControls }, { RoundedBoxGeometry }]) => {
        if (disposed) return;

        const roomWidth = width;
        const roomLength = length;
        const wallHeight = 2.75;
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf5f0e8);
        scene.fog = new THREE.Fog(0xf5f0e8, 15, 26);

        const camera = new THREE.PerspectiveCamera(46, 1, 0.03, 40);
        const overviewDistance = Math.max(roomWidth, roomLength);
        camera.position.set(roomWidth * 0.68, overviewDistance * 0.92, roomLength * 0.92);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.08;
        renderer.domElement.setAttribute("aria-label", "Stanza 3D interattiva fedele alla pianta");
        renderer.domElement.style.display = "block";
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";
        host.replaceChildren(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.07;
        controls.target.set(0, 0.45, -roomLength * 0.08);
        controls.minDistance = 1.2;
        controls.maxDistance = Math.max(roomWidth, roomLength) * 1.9;
        controls.maxPolarAngle = Math.PI * 0.49;
        controls.minPolarAngle = Math.PI * 0.12;

        const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
        const floorCanvas = document.createElement("canvas");
        floorCanvas.width = 1024;
        floorCanvas.height = 1024;
        const floorContext = floorCanvas.getContext("2d");
        if (floorContext) {
          floorContext.fillStyle = "#d8c4a6";
          floorContext.fillRect(0, 0, 1024, 1024);
          for (let row = 0; row < 12; row += 1) {
            for (let column = -1; column < 7; column += 1) {
              const plankWidth = 176;
              const plankHeight = 84;
              const x = column * plankWidth + (row % 2) * (plankWidth / 2);
              const y = row * plankHeight;
              const tone = 199 + ((row * 13 + column * 17 + 35) % 24);
              floorContext.fillStyle = `rgb(${tone + 20}, ${tone + 8}, ${tone - 10})`;
              floorContext.fillRect(x + 2, y + 2, plankWidth - 4, plankHeight - 4);
              floorContext.strokeStyle = "rgba(105,77,46,.16)";
              floorContext.strokeRect(x + 2, y + 2, plankWidth - 4, plankHeight - 4);
              floorContext.beginPath();
              floorContext.moveTo(x + 22, y + 24);
              floorContext.bezierCurveTo(x + 70, y + 8, x + 112, y + 38, x + 154, y + 18);
              floorContext.strokeStyle = "rgba(121,88,52,.08)";
              floorContext.stroke();
            }
          }
        }
        const floorTexture = new THREE.CanvasTexture(floorCanvas);
        floorTexture.colorSpace = THREE.SRGBColorSpace;
        floorTexture.wrapS = THREE.RepeatWrapping;
        floorTexture.wrapT = THREE.RepeatWrapping;
        floorTexture.repeat.set(Math.max(1, roomWidth / 3), Math.max(1, roomLength / 3));
        floorTexture.anisotropy = maxAnisotropy;
        const floor = new THREE.Mesh(
          new THREE.PlaneGeometry(roomWidth, roomLength),
          new THREE.MeshStandardMaterial({ map: floorTexture, roughness: 0.78, metalness: 0 }),
        );
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);

        const wallMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(wallColor),
          roughness: 0.92,
        });
        const trimMaterial = new THREE.MeshStandardMaterial({ color: 0xeee7dc, roughness: 0.72 });
        const woodMaterial = new THREE.MeshStandardMaterial({ color: 0xa97d50, roughness: 0.7 });
        const glassMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xb9d6dc,
          roughness: 0.08,
          transmission: 0.48,
          transparent: true,
          opacity: 0.55,
        });

        const addMesh = (
          geometry: BufferGeometry,
          material: Material,
          parent: Object3D = scene,
          shadows = true,
        ) => {
          const mesh = new THREE.Mesh(geometry, material);
          mesh.castShadow = shadows;
          mesh.receiveShadow = shadows;
          parent.add(mesh);
          return mesh;
        };

        const addWallBox = (
          wall: RoomOpening["wall"],
          start: number,
          span: number,
          bottom: number,
          height: number,
        ) => {
          if (span <= 0.005 || height <= 0.005) return;
          const thickness = 0.09;
          const horizontal = wall === "top" || wall === "bottom";
          const geometry = new THREE.BoxGeometry(
            horizontal ? span : thickness,
            height,
            horizontal ? thickness : span,
          );
          const mesh = addMesh(geometry, wallMaterial);
          const alongCenter = start + span / 2;
          mesh.position.set(
            horizontal
              ? -roomWidth / 2 + alongCenter
              : wall === "left"
                ? -roomWidth / 2
                : roomWidth / 2,
            bottom + height / 2,
            horizontal
              ? wall === "top"
                ? -roomLength / 2
                : roomLength / 2
              : -roomLength / 2 + alongCenter,
          );
        };

        const addOpeningDetails = (opening: RoomOpening) => {
          const horizontal = opening.wall === "top" || opening.wall === "bottom";
          const offset = opening.offsetCm / 100;
          const openingWidth = opening.widthCm / 100;
          const openingHeight = Math.min(opening.heightCm / 100, wallHeight - 0.04);
          const sill = opening.type === "window" ? opening.sillHeightCm / 100 : 0;
          const center = offset + openingWidth / 2;
          const y = sill + openingHeight / 2;
          const wallX =
            opening.wall === "left"
              ? -roomWidth / 2
              : opening.wall === "right"
                ? roomWidth / 2
                : -roomWidth / 2 + center;
          const wallZ =
            opening.wall === "top"
              ? -roomLength / 2
              : opening.wall === "bottom"
                ? roomLength / 2
                : -roomLength / 2 + center;
          const panel = addMesh(
            new THREE.BoxGeometry(
              horizontal ? openingWidth * 0.93 : 0.035,
              openingHeight * 0.95,
              horizontal ? 0.035 : openingWidth * 0.93,
            ),
            opening.type === "door" ? woodMaterial : glassMaterial,
          );
          panel.position.set(wallX, y, wallZ);

          const frameWidth = 0.065;
          const frameDepth = 0.08;
          const makeFrame = (along: number, frameY: number, w: number, h: number) => {
            const frame = addMesh(
              new THREE.BoxGeometry(horizontal ? w : frameDepth, h, horizontal ? frameDepth : w),
              trimMaterial,
            );
            frame.position.set(
              horizontal ? -roomWidth / 2 + along : wallX,
              frameY,
              horizontal ? wallZ : -roomLength / 2 + along,
            );
          };
          makeFrame(offset, y, frameWidth, openingHeight + 0.12);
          makeFrame(offset + openingWidth, y, frameWidth, openingHeight + 0.12);
          makeFrame(center, sill + openingHeight, openingWidth + 0.12, frameWidth);
          if (opening.type === "window") {
            makeFrame(center, sill, openingWidth + 0.12, frameWidth);
            makeFrame(center, y, frameWidth * 0.62, openingHeight);
            makeFrame(center, y, openingWidth, frameWidth * 0.62);
          } else {
            const knob = addMesh(
              new THREE.SphereGeometry(0.035, 18, 12),
              new THREE.MeshStandardMaterial({ color: 0x8a6941, metalness: 0.75, roughness: 0.3 }),
            );
            knob.position.set(
              horizontal ? wallX + openingWidth * 0.32 : wallX,
              1.02,
              horizontal ? wallZ : wallZ + openingWidth * 0.32,
            );
          }
        };

        // La parete frontale resta aperta: la stanza Ã¨ leggibile come una casa delle bambole
        // e gli arredi vicini al bordo inferiore non nascondono quelli sul fondo.
        for (const wall of ["top", "right", "left"] as const) {
          const wallLength = wall === "top" ? roomWidth : roomLength;
          const wallOpenings = openings
            .filter((opening) => opening.wall === wall)
            .sort((a, b) => a.offsetCm - b.offsetCm);
          let cursor = 0;
          for (const opening of wallOpenings) {
            const offset = Math.max(cursor, opening.offsetCm / 100);
            const openingWidth = Math.min(opening.widthCm / 100, wallLength - offset);
            addWallBox(wall, cursor, offset - cursor, 0, wallHeight);
            const sill = opening.type === "window" ? opening.sillHeightCm / 100 : 0;
            const openingHeight = Math.min(opening.heightCm / 100, wallHeight - sill);
            addWallBox(wall, offset, openingWidth, 0, sill);
            addWallBox(
              wall,
              offset,
              openingWidth,
              sill + openingHeight,
              wallHeight - sill - openingHeight,
            );
            addOpeningDetails(opening);
            cursor = offset + openingWidth;
          }
          addWallBox(wall, cursor, wallLength - cursor, 0, wallHeight);
        }
        // Le aperture sulla parete frontale restano visibili nel punto esatto anche se la parete
        // Ã¨ aperta per consentire la lettura completa della stanza.
        openings.filter((opening) => opening.wall === "bottom").forEach(addOpeningDetails);

        const skirting = (sizeX: number, sizeZ: number, x: number, z: number) => {
          const mesh = addMesh(new THREE.BoxGeometry(sizeX, 0.1, sizeZ), trimMaterial);
          mesh.position.set(x, 0.05, z);
        };
        skirting(roomWidth, 0.035, 0, -roomLength / 2 + 0.06);
        skirting(0.035, roomLength, -roomWidth / 2 + 0.06, 0);
        skirting(0.035, roomLength, roomWidth / 2 - 0.06, 0);

        const rounded = (
          parent: Group,
          x: number,
          y: number,
          z: number,
          color: number,
          radius = 0.035,
        ) => {
          const geometry = new RoundedBoxGeometry(
            Math.max(0.025, x),
            Math.max(0.025, y),
            Math.max(0.025, z),
            4,
            Math.min(radius, x / 4, y / 4, z / 4),
          );
          return addMesh(
            geometry,
            new THREE.MeshStandardMaterial({ color, roughness: 0.7 }),
            parent,
          );
        };

        const addLeg = (
          parent: Group,
          x: number,
          z: number,
          height: number,
          color: number,
          radius = 0.035,
        ) => {
          const leg = addMesh(
            new THREE.CylinderGeometry(radius, radius * 1.08, height, 16),
            new THREE.MeshStandardMaterial({ color, roughness: 0.65 }),
            parent,
          );
          leg.position.set(x, height / 2, z);
          return leg;
        };

        for (const item of stableFurniture) {
          const group = new THREE.Group();
          const itemWidth = Math.max(0.22, item.widthCm / 100);
          const itemDepth = Math.max(0.22, item.depthCm / 100);
          const colors = materialColors(item);
          const kind = getExactFurnitureKind(item);

          if (kind === "bed") {
            const base = rounded(
              group,
              itemWidth * 0.96,
              0.3,
              itemDepth * 0.96,
              colors.fabric,
              0.08,
            );
            base.position.y = 0.22;
            const mattress = rounded(
              group,
              itemWidth * 0.88,
              0.25,
              itemDepth * 0.83,
              0xf0ece5,
              0.09,
            );
            mattress.position.set(0, 0.47, itemDepth * 0.045);
            const headboard = rounded(group, itemWidth * 0.94, 1.05, 0.13, colors.fabric, 0.07);
            headboard.position.set(0, 0.74, -itemDepth * 0.44);
            for (const x of [-itemWidth * 0.22, itemWidth * 0.22]) {
              const pillow = rounded(
                group,
                itemWidth * 0.34,
                0.12,
                itemDepth * 0.19,
                0xf8f5ef,
                0.055,
              );
              pillow.position.set(x, 0.64, -itemDepth * 0.24);
              pillow.rotation.x = -0.11;
            }
            const throwBlanket = rounded(
              group,
              itemWidth * 0.78,
              0.035,
              itemDepth * 0.26,
              0xd2c5b1,
              0.018,
            );
            throwBlanket.position.set(0, 0.615, itemDepth * 0.27);
          } else if (kind === "desk") {
            const top = rounded(group, itemWidth, 0.09, itemDepth, colors.wood, 0.045);
            top.position.y = 0.76;
            for (const x of [-itemWidth * 0.36, itemWidth * 0.36]) {
              addLeg(group, x, 0, 0.72, colors.wood, Math.max(0.035, itemWidth * 0.045));
            }
          } else if (kind === "dining-table" || kind === "coffee-table") {
            const isCoffeeTable = kind === "coffee-table";
            const topHeight = isCoffeeTable ? 0.43 : 0.77;
            const topThickness = isCoffeeTable ? 0.065 : 0.085;
            const top = rounded(group, itemWidth, topThickness, itemDepth, colors.wood, 0.045);
            top.position.y = topHeight;
            const legHeight = topHeight - topThickness / 2;
            for (const x of [-itemWidth * 0.38, itemWidth * 0.38]) {
              for (const z of [-itemDepth * 0.36, itemDepth * 0.36]) {
                addLeg(
                  group,
                  x,
                  z,
                  legHeight,
                  colors.wood,
                  Math.max(0.025, Math.min(itemWidth, itemDepth) * 0.055),
                );
              }
            }
          } else if (kind === "chair") {
            const seat = rounded(
              group,
              itemWidth * 0.68,
              0.13,
              itemDepth * 0.56,
              colors.fabric,
              0.06,
            );
            seat.position.y = 0.53;
            const back = rounded(group, itemWidth * 0.72, 0.54, 0.12, colors.fabric, 0.07);
            back.position.set(0, 0.79, itemDepth * 0.25);
            back.rotation.x = -0.1;
            addLeg(group, 0, 0, 0.47, 0x332f2c, 0.035);
            for (let index = 0; index < 5; index += 1) {
              const angle = (index / 5) * Math.PI * 2;
              const arm = addMesh(
                new THREE.BoxGeometry(0.028, 0.028, itemDepth * 0.34),
                new THREE.MeshStandardMaterial({
                  color: 0x302e2c,
                  metalness: 0.45,
                  roughness: 0.38,
                }),
                group,
              );
              arm.position.set(
                Math.sin(angle) * itemDepth * 0.16,
                0.08,
                Math.cos(angle) * itemDepth * 0.16,
              );
              arm.rotation.y = angle;
            }
          } else if (kind === "cabinet") {
            for (const x of [-itemWidth * 0.38, itemWidth * 0.38]) {
              for (const z of [-itemDepth * 0.34, itemDepth * 0.34])
                addLeg(group, x, z, 0.12, colors.wood, 0.025);
            }
            const body = rounded(
              group,
              itemWidth * 0.94,
              0.56,
              itemDepth * 0.9,
              colors.wood,
              0.035,
            );
            body.position.y = 0.4;
            const rows = item.name.toLowerCase().includes("12 cassetti") ? 4 : 3;
            const columns = item.name.toLowerCase().includes("12 cassetti")
              ? 3
              : itemWidth > 0.8
                ? 2
                : 1;
            for (let row = 0; row < rows; row += 1) {
              for (let column = 0; column < columns; column += 1) {
                const drawerWidth = (itemWidth * 0.82) / columns;
                const drawer = rounded(
                  group,
                  drawerWidth * 0.9,
                  0.11,
                  0.025,
                  colors.wood + 0x080604,
                  0.012,
                );
                drawer.position.set(
                  -itemWidth * 0.41 + drawerWidth * (column + 0.5),
                  0.23 + row * (0.42 / rows),
                  itemDepth * 0.46,
                );
                const knob = addMesh(
                  new THREE.SphereGeometry(0.016, 12, 8),
                  new THREE.MeshStandardMaterial({
                    color: colors.accent,
                    metalness: 0.35,
                    roughness: 0.45,
                  }),
                  group,
                );
                knob.position.set(drawer.position.x, drawer.position.y, itemDepth * 0.49);
              }
            }
          } else if (kind === "sofa") {
            const base = rounded(group, itemWidth, 0.32, itemDepth * 0.86, colors.fabric, 0.08);
            base.position.y = 0.28;
            const seat = rounded(
              group,
              itemWidth * 0.84,
              0.18,
              itemDepth * 0.58,
              colors.fabric + 0x080808,
              0.07,
            );
            seat.position.set(0, 0.52, 0.03);
            const back = rounded(group, itemWidth * 0.92, 0.62, 0.16, colors.fabric, 0.06);
            back.position.set(0, 0.72, itemDepth * 0.35);
          } else if (kind === "wardrobe") {
            const body = rounded(group, itemWidth, 1.9, itemDepth, colors.wood, 0.025);
            body.position.y = 0.95;
            const split = rounded(group, 0.012, 1.72, 0.02, colors.accent, 0.005);
            split.position.set(0, 0.96, itemDepth / 2 + 0.011);
          } else {
            const body = rounded(group, itemWidth, 0.68, itemDepth, colors.wood, 0.04);
            body.position.y = 0.34;
          }

          const rotated = item.rotation === 90 || item.rotation === 270;
          const occupiedWidth = rotated ? itemDepth : itemWidth;
          const occupiedDepth = rotated ? itemWidth : itemDepth;
          group.position.set(
            -roomWidth / 2 + item.xCm / 100 + occupiedWidth / 2,
            0,
            -roomLength / 2 + item.yCm / 100 + occupiedDepth / 2,
          );
          group.rotation.y = (item.rotation * Math.PI) / 180;
          group.userData = { productId: item.id, productName: item.name };
          scene.add(group);
        }

        scene.add(new THREE.HemisphereLight(0xfffbf4, 0x8b765f, 2.2));
        const sun = new THREE.DirectionalLight(0xffeed1, 3.5);
        sun.position.set(-roomWidth * 0.55, 4.8, roomLength * 0.4);
        sun.castShadow = true;
        sun.shadow.mapSize.set(2048, 2048);
        sun.shadow.camera.near = 0.2;
        sun.shadow.camera.far = 14;
        sun.shadow.camera.left = -6;
        sun.shadow.camera.right = 6;
        sun.shadow.camera.top = 6;
        sun.shadow.camera.bottom = -6;
        scene.add(sun);
        const fill = new THREE.PointLight(0xfff5df, 1.3, 9);
        fill.position.set(roomWidth * 0.25, 2.1, roomLength * 0.22);
        scene.add(fill);

        const render = () => {
          frame = requestAnimationFrame(render);
          controls.update();
          renderer.render(scene, camera);
        };
        const resize = () => {
          const rect = host.getBoundingClientRect();
          if (rect.width < 1 || rect.height < 1) return;
          renderer.setSize(rect.width, rect.height, false);
          camera.aspect = rect.width / rect.height;
          camera.updateProjectionMatrix();
        };
        resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(host);
        resize();
        render();
        setStatus("ready");

        cleanupScene = () => {
          cancelAnimationFrame(frame);
          resizeObserver?.disconnect();
          controls.dispose();
          scene.traverse((object) => {
            if (!(object instanceof THREE.Mesh)) return;
            object.geometry.dispose();
            const materials = Array.isArray(object.material) ? object.material : [object.material];
            materials.forEach((material) => material.dispose());
          });
          floorTexture.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch((error: unknown) => {
        if (!disposed) {
          setErrorDetail(error instanceof Error ? error.message : "Errore grafico sconosciuto");
          setStatus("error");
        }
      });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cleanupScene?.();
    };
  }, [width, length, wallColor, openings, stableFurniture, resetKey]);

  const toggleFullscreen = async () => {
    const host = hostRef.current?.parentElement;
    if (!host) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    } else {
      await host.requestFullscreen();
      setIsFullscreen(true);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-[#f5f0e8] shadow-inner">
      <div ref={hostRef} className="h-[520px] w-full sm:h-[620px]" />
      {status === "loading" ? (
        <div className="absolute inset-0 grid place-items-center bg-[#f5f0e8] text-sm text-muted-foreground">
          Costruzione della stanza 3Dâ€¦
        </div>
      ) : null}
      {status === "error" ? (
        <div className="absolute inset-0 grid place-items-center bg-[#f5f0e8] p-8 text-center text-sm text-destructive">
          <span>
            Il browser non Ã¨ riuscito ad avviare la vista 3D. Prova ad aggiornare la pagina.
            {errorDetail ? ` Dettaglio: ${errorDetail}` : ""}
          </span>
        </div>
      ) : null}
      <div className="absolute left-3 top-3 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur">
          <MousePointer2 className="h-3.5 w-3.5" aria-hidden />
          Trascina per ruotare Â· rotella per zoom
        </span>
      </div>
      <div className="absolute right-3 top-3 flex gap-2">
        <button
          type="button"
          onClick={() => setResetKey((value) => value + 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/85 text-foreground shadow-sm backdrop-blur hover:bg-white"
          aria-label="Ripristina inquadratura"
          title="Ripristina inquadratura"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => void toggleFullscreen()}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/85 text-foreground shadow-sm backdrop-blur hover:bg-white"
          aria-label={isFullscreen ? "Esci da schermo intero" : "Apri a schermo intero"}
          title={isFullscreen ? "Esci da schermo intero" : "Schermo intero"}
        >
          <Maximize2 className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent px-4 pb-3 pt-12 text-xs text-white">
        Geometria derivata direttamente dalla piantina Â· nessun riposizionamento automatico
      </div>
    </div>
  );
}
