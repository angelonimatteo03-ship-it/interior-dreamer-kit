import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { createParser } from "eventsource-parser";
import {
  PRODUCTS,
  CATEGORIES,
  WALL_COLORS,
  getFootprint,
  type Product,
} from "@/lib/products";
import {
  ArrowLeft,
  ArrowRight,
  Printer,
  RotateCw,
  Trash2,
  Minus,
  Plus,
  Sparkles,
  ThumbsDown,
  ThumbsUp,
  Upload,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Configuratore Stanze MDM — Maisons du Monde" },
      {
        name: "description",
        content:
          "Configura la stanza dei tuoi clienti: dimensioni, colori pareti, arredi Maisons du Monde e shopping list stampabile.",
      },
      { property: "og:title", content: "Configuratore Stanze MDM — Maisons du Monde" },
      {
        property: "og:description",
        content:
          "Configura la stanza dei tuoi clienti: dimensioni, colori pareti, arredi Maisons du Monde e shopping list stampabile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

type PlacedItem = {
  uid: string;
  productId: string;
  // position in cm from top-left of the room
  x: number;
  y: number;
  rotation: 0 | 90 | 180 | 270;
};

/* ------------------------------------------------------------------ */
/* Main App                                                           */
/* ------------------------------------------------------------------ */

function App() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [width, setWidth] = useState(5); // meters
  const [length, setLength] = useState(4);
  const [wallColor, setWallColor] = useState(WALL_COLORS[0].value);
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [customProducts, setCustomProducts] = useState<Product[]>([]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header step={step} />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        {step === 1 && (
          <Step1
            width={width}
            length={length}
            wallColor={wallColor}
            onWidth={setWidth}
            onLength={setLength}
            onWallColor={setWallColor}
            onNext={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <Step2
            width={width}
            length={length}
            wallColor={wallColor}
            items={items}
            setItems={setItems}
            customProducts={customProducts}
            setCustomProducts={setCustomProducts}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <Step3
            items={items}
            customProducts={customProducts}
            onBack={() => setStep(2)}
            onRestart={() => {
              setItems([]);
              setCustomProducts([]);
              setStep(1);
            }}
          />
        )}
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header + stepper                                                   */
/* ------------------------------------------------------------------ */

function Header({ step }: { step: 1 | 2 | 3 }) {
  const steps = [
    { n: 1, label: "Stanza" },
    { n: 2, label: "Progettazione" },
    { n: 3, label: "Riepilogo" },
  ];
  return (
    <header className="no-print border-b border-border/60 bg-card/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Maisons du Monde
          </p>
          <h1 className="text-2xl leading-tight">Configuratore Stanze</h1>
        </div>
        <ol className="flex items-center gap-2 sm:gap-4">
          {steps.map((s, i) => {
            const active = s.n === step;
            const done = s.n < step;
            return (
              <li key={s.n} className="flex items-center gap-2 sm:gap-4">
                <div
                  className={
                    "flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors " +
                    (active
                      ? "border-primary bg-primary text-primary-foreground"
                      : done
                        ? "border-accent bg-accent/20 text-foreground"
                        : "border-border bg-transparent text-muted-foreground")
                  }
                >
                  <span
                    className={
                      "flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold " +
                      (active
                        ? "bg-primary-foreground text-primary"
                        : done
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground")
                    }
                  >
                    {s.n}
                  </span>
                  <span className="hidden font-medium sm:inline">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <span className="h-px w-4 bg-border sm:w-8" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* STEP 1 — Room setup                                                */
/* ------------------------------------------------------------------ */

function Step1({
  width,
  length,
  wallColor,
  onWidth,
  onLength,
  onWallColor,
  onNext,
}: {
  width: number;
  length: number;
  wallColor: string;
  onWidth: (v: number) => void;
  onLength: (v: number) => void;
  onWallColor: (v: string) => void;
  onNext: () => void;
}) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div>
          <h2 className="text-3xl">Impostazione della stanza</h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Inserisci le dimensioni della stanza del cliente e scegli il colore
            delle pareti per iniziare la progettazione.
          </p>
        </div>

        <div className="space-y-6">
          <DimensionField
            label="Larghezza"
            value={width}
            onChange={onWidth}
            min={2}
            max={8}
          />
          <DimensionField
            label="Lunghezza"
            value={length}
            onChange={onLength}
            min={2}
            max={8}
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Colore pareti</p>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8 lg:grid-cols-4 xl:grid-cols-8">
            {WALL_COLORS.map((c) => {
              const selected = c.value === wallColor;
              return (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => onWallColor(c.value)}
                  className={
                    "group flex flex-col items-center gap-1.5 rounded-xl border p-2 text-center transition-all " +
                    (selected
                      ? "border-primary shadow-sm ring-2 ring-primary/20"
                      : "border-border hover:border-primary/40")
                  }
                >
                  <span
                    className="h-12 w-full rounded-lg border border-border/50"
                    style={{ backgroundColor: c.value }}
                  />
                  <span className="text-[11px] leading-tight text-muted-foreground group-hover:text-foreground">
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Continua
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Live preview */}
      <div className="flex items-center justify-center rounded-2xl border border-border bg-secondary/40 p-6">
        <div className="w-full max-w-sm">
          <p className="mb-3 text-center text-xs uppercase tracking-widest text-muted-foreground">
            Anteprima — {width} × {length} m
          </p>
          <div
            className="mx-auto aspect-square w-full max-w-xs rounded-md border-[6px] shadow-inner"
            style={{
              borderColor: "#8a7863",
              backgroundColor: wallColor,
              aspectRatio: `${width} / ${length}`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

function DimensionField({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-sm font-medium">{label}</label>
        <span className="text-sm text-muted-foreground">
          <input
            type="number"
            min={min}
            max={max}
            step={0.1}
            value={value}
            onChange={(e) =>
              onChange(
                Math.max(min, Math.min(max, Number(e.target.value) || min)),
              )
            }
            className="w-16 rounded-md border border-input bg-background px-2 py-1 text-right text-sm text-foreground"
          />
          <span className="ml-1">m</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={0.1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-primary)]"
      />
      <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
        <span>{min}m</span>
        <span>{max}m</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* STEP 2 — Room design                                               */
/* ------------------------------------------------------------------ */

function Step2({
  width,
  length,
  wallColor,
  items,
  setItems,
  customProducts,
  setCustomProducts,
  onBack,
  onNext,
}: {
  width: number;
  length: number;
  wallColor: string;
  items: PlacedItem[];
  setItems: React.Dispatch<React.SetStateAction<PlacedItem[]>>;
  customProducts: Product[];
  setCustomProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  onBack: () => void;
  onNext: () => void;
}) {
  const CUSTOM_CATEGORY = "I miei prodotti";
  const allCategories = useMemo(
    () => [...CATEGORIES, CUSTOM_CATEGORY],
    [],
  );
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [selectedUid, setSelectedUid] = useState<string | null>(null);

  const roomWidthCm = width * 100;
  const roomLengthCm = length * 100;

  const addProduct = (p: Product) => {
    const fp = getFootprint(p);
    const uid = `i-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    setItems((prev) => [
      ...prev,
      {
        uid,
        productId: p.id,
        // center the new piece
        x: Math.max(0, (roomWidthCm - fp.w) / 2),
        y: Math.max(0, (roomLengthCm - fp.d) / 2),
        rotation: 0,
      },
    ]);
    setSelectedUid(uid);
  };

  const rotateSelected = () => {
    if (!selectedUid) return;
    setItems((prev) =>
      prev.map((it) =>
        it.uid === selectedUid
          ? { ...it, rotation: (((it.rotation + 90) % 360) as 0 | 90 | 180 | 270) }
          : it,
      ),
    );
  };

  const removeItem = (uid: string) => {
    setItems((prev) => prev.filter((i) => i.uid !== uid));
    if (selectedUid === uid) setSelectedUid(null);
  };

  const removeCustom = (id: string) => {
    setCustomProducts((prev) => prev.filter((p) => p.id !== id));
    // also remove any placed instances of it
    setItems((prev) => prev.filter((it) => it.productId !== id));
  };

  const filteredProducts = useMemo(
    () =>
      category === CUSTOM_CATEGORY
        ? customProducts
        : PRODUCTS.filter((p) => p.categoria === category),
    [category, customProducts],
  );

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_360px]">

      {/* Room canvas */}
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl">Progettazione stanza</h2>
            <p className="text-sm text-muted-foreground">
              Trascina gli oggetti, seleziona per ruotarli o rimuoverli.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={rotateSelected}
              disabled={!selectedUid}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
            >
              <RotateCw className="h-3.5 w-3.5" />
              Ruota 90°
            </button>
            <button
              onClick={() => selectedUid && removeItem(selectedUid)}
              disabled={!selectedUid}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-40"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Rimuovi
            </button>
          </div>
        </div>

        <RoomCanvas
          roomWidthCm={roomWidthCm}
          roomLengthCm={roomLengthCm}
          wallColor={wallColor}
          items={items}
          setItems={setItems}
          customProducts={customProducts}
          selectedUid={selectedUid}
          setSelectedUid={setSelectedUid}
          onRemove={removeItem}
        />

        <p className="mt-3 text-center text-[11px] uppercase tracking-widest text-muted-foreground">
          {width} × {length} m — vista dall'alto in scala
        </p>

        <Render3DPanel
          width={width}
          length={length}
          wallColor={wallColor}
          items={items}
          customProducts={customProducts}
        />
      </div>

      {/* Product sidebar */}
      <aside className="rounded-2xl border border-border bg-card p-4 sm:p-5">
        <h3 className="text-lg">Catalogo</h3>
        <p className="mb-3 text-xs text-muted-foreground">
          Clicca un prodotto per aggiungerlo alla stanza.
        </p>

        {/* Category tabs */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {allCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={
                  "rounded-full border px-3 py-1 text-[11px] font-medium transition-colors " +
                  (active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:text-foreground")
                }
              >
                {c}
              </button>
            );
          })}
        </div>

        {category === CUSTOM_CATEGORY && (
          <CustomProductUploader
            onAdd={(p) => setCustomProducts((prev) => [...prev, p])}
          />
        )}

        <div className="max-h-[560px] space-y-2 overflow-y-auto pr-1">
          {filteredProducts.length === 0 && (
            <p className="text-sm text-muted-foreground">
              {category === CUSTOM_CATEGORY
                ? "Nessun prodotto personale. Caricane uno qui sopra."
                : "Nessun prodotto in questa categoria."}
            </p>
          )}
          {filteredProducts.map((p: Product) => {
            const isCustom = category === CUSTOM_CATEGORY;
            return (
              <div
                key={p.id}
                className="group flex w-full items-center gap-3 rounded-xl border border-border bg-background p-2 text-left transition-colors hover:border-primary/50 hover:bg-secondary/40"
              >
                <button
                  onClick={() => addProduct(p)}
                  className="flex flex-1 items-center gap-3 text-left"
                >
                  <img
                    src={p.immagine_url}
                    alt={p.nome}
                    loading="lazy"
                    className="h-14 w-14 flex-shrink-0 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-xs leading-tight">
                      {p.nome}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-primary">
                      {p.prezzo > 0
                        ? `€ ${p.prezzo.toFixed(2)}`
                        : `${p.larghezza_cm ?? "?"}×${p.profondita_cm ?? "?"} cm`}
                    </p>
                  </div>
                  <Plus className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
                </button>
                {isCustom && (
                  <button
                    onClick={() => removeCustom(p.id)}
                    className="flex-shrink-0 rounded-full p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Elimina prodotto personale"
                    title="Elimina dal catalogo personale"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </aside>


      {/* Nav */}
      <div className="col-span-full flex items-center justify-between pt-2">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          Indietro
        </button>
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Vai al riepilogo
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Room canvas with drag & drop                                       */
/* ------------------------------------------------------------------ */

function RoomCanvas({
  roomWidthCm,
  roomLengthCm,
  wallColor,
  items,
  setItems,
  customProducts,
  selectedUid,
  setSelectedUid,
  onRemove,
}: {
  roomWidthCm: number;
  roomLengthCm: number;
  wallColor: string;
  items: PlacedItem[];
  setItems: React.Dispatch<React.SetStateAction<PlacedItem[]>>;
  customProducts: Product[];
  selectedUid: string | null;
  setSelectedUid: (u: string | null) => void;
  onRemove: (u: string) => void;
}) {
  const findProduct = (id: string) =>
    PRODUCTS.find((x) => x.id === id) ??
    customProducts.find((x) => x.id === id);
  const containerRef = useRef<HTMLDivElement | null>(null);
  // Track drag offsets in cm so we don't need extra state re-renders
  const dragState = useRef<{
    uid: string;
    startClientX: number;
    startClientY: number;
    origX: number;
    origY: number;
    scale: number;
  } | null>(null);

  const getScale = () => {
    const el = containerRef.current;
    if (!el) return 1;
    return el.clientWidth / roomWidthCm;
  };

  const onPointerDown = (e: React.PointerEvent, it: PlacedItem) => {
    e.stopPropagation();
    (e.target as Element).setPointerCapture(e.pointerId);
    setSelectedUid(it.uid);
    dragState.current = {
      uid: it.uid,
      startClientX: e.clientX,
      startClientY: e.clientY,
      origX: it.x,
      origY: it.y,
      scale: getScale(),
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragState.current;
    if (!d) return;
    const dx = (e.clientX - d.startClientX) / d.scale;
    const dy = (e.clientY - d.startClientY) / d.scale;
    setItems((prev) =>
      prev.map((it) => {
        if (it.uid !== d.uid) return it;
        const p = findProduct(it.productId)!;
        const fp = getFootprint(p);
        const rotated = it.rotation === 90 || it.rotation === 270;
        const w = rotated ? fp.d : fp.w;
        const h = rotated ? fp.w : fp.d;
        return {
          ...it,
          x: clamp(d.origX + dx, 0, roomWidthCm - w),
          y: clamp(d.origY + dy, 0, roomLengthCm - h),
        };
      }),
    );
  };

  const onPointerUp = () => {
    dragState.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full touch-none select-none overflow-hidden rounded-md border-[6px] shadow-inner"
      style={{
        borderColor: "#8a7863",
        backgroundColor: wallColor,
        aspectRatio: `${roomWidthCm} / ${roomLengthCm}`,
      }}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClick={() => setSelectedUid(null)}
    >
      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: `${100 / (roomWidthCm / 100)}% ${100 / (roomLengthCm / 100)}%`,
        }}
      />

      {items.map((it) => {
        const p = findProduct(it.productId);
        if (!p) return null;
        const fp = getFootprint(p);
        const rotated = it.rotation === 90 || it.rotation === 270;
        const wCm = rotated ? fp.d : fp.w;
        const hCm = rotated ? fp.w : fp.d;
        const selected = it.uid === selectedUid;
        return (
          <div
            key={it.uid}
            onPointerDown={(e) => onPointerDown(e, it)}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedUid(it.uid);
            }}
            className={
              "group absolute cursor-grab overflow-hidden rounded-md border-2 bg-card shadow-md transition-shadow active:cursor-grabbing " +
              (selected
                ? "border-primary shadow-lg ring-2 ring-primary/30"
                : "border-white/70 hover:border-primary/60")
            }
            style={{
              left: `${(it.x / roomWidthCm) * 100}%`,
              top: `${(it.y / roomLengthCm) * 100}%`,
              width: `${(wCm / roomWidthCm) * 100}%`,
              height: `${(hCm / roomLengthCm) * 100}%`,
            }}
            title={p.nome}
          >
            <img
              src={p.immagine_url}
              alt={p.nome}
              draggable={false}
              className="pointer-events-none h-full w-full object-cover"
              style={{ transform: `rotate(${it.rotation}deg)` }}
            />
            {selected && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(it.uid);
                }}
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow"
                aria-label="Rimuovi"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        );
      })}

      {items.length === 0 && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <p className="rounded-full bg-background/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
            Aggiungi prodotti dal catalogo →
          </p>
        </div>
      )}
    </div>
  );
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

/* ------------------------------------------------------------------ */
/* STEP 3 — Summary                                                   */
/* ------------------------------------------------------------------ */

function Step3({
  items,
  customProducts,
  onBack,
  onRestart,
}: {
  items: PlacedItem[];
  customProducts: Product[];
  onBack: () => void;
  onRestart: () => void;
}) {
  // Aggregate quantities by product
  const grouped = useMemo(() => {
    const map = new Map<string, { product: Product; qty: number }>();
    for (const it of items) {
      const p =
        PRODUCTS.find((x) => x.id === it.productId) ??
        customProducts.find((x) => x.id === it.productId);
      if (!p) continue;
      const entry = map.get(p.id);
      if (entry) entry.qty += 1;
      else map.set(p.id, { product: p, qty: 1 });
    }
    return Array.from(map.values());
  }, [items, customProducts]);

  const total = grouped.reduce((s, r) => s + r.product.prezzo * r.qty, 0);

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl">Riepilogo shopping list</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {grouped.length === 0
                ? "Nessun prodotto selezionato."
                : `${grouped.length} prodotti · ${items.length} pezzi totali`}
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Printer className="h-4 w-4" />
            Esporta Shopping List
          </button>
        </div>

        {grouped.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
            Torna indietro e aggiungi prodotti alla stanza.
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary/60 text-left text-xs uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="p-3">Prodotto</th>
                  <th className="p-3 text-center">Qtà</th>
                  <th className="p-3 text-right">Prezzo</th>
                  <th className="p-3 text-right">Subtotale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {grouped.map(({ product, qty }) => (
                  <tr key={product.id} className="bg-card">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.immagine_url}
                          alt={product.nome}
                          className="h-14 w-14 rounded-md object-cover"
                        />
                        <div className="min-w-0">
                          <p className="line-clamp-2 leading-snug">
                            {product.nome}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {product.categoria}
                          </p>
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noreferrer"
                            className="no-print text-xs text-primary underline-offset-2 hover:underline"
                          >
                            Scheda prodotto ↗
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
                        <Minus className="h-3 w-3 opacity-0" />
                        {qty}
                      </span>
                    </td>
                    <td className="p-3 text-right tabular-nums">
                      € {product.prezzo.toFixed(2)}
                    </td>
                    <td className="p-3 text-right font-semibold tabular-nums">
                      € {(product.prezzo * qty).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-secondary/40">
                  <td className="p-4 text-right font-medium" colSpan={3}>
                    Totale
                  </td>
                  <td className="p-4 text-right text-xl font-semibold text-primary tabular-nums">
                    € {total.toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>

      <div className="no-print flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" />
          Modifica stanza
        </button>
        <button
          onClick={onRestart}
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Nuova configurazione
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3D Render panel — AI-generated interior visualization              */
/* ------------------------------------------------------------------ */

function buildRenderPrompt(
  width: number,
  length: number,
  wallColor: string,
  items: PlacedItem[],
  customProducts: Product[],
  feedback?: { likes: number; dislikes: number; lastFeedback: "like" | "dislike" | null },
): { prompt: string; images: string[] } {
  const colorName =
    WALL_COLORS.find((c) => c.value === wallColor)?.name.toLowerCase() ??
    "neutro";

  // Aggregate placed pieces by product id
  const counts = new Map<string, number>();
  for (const it of items) counts.set(it.productId, (counts.get(it.productId) ?? 0) + 1);

  const images: string[] = [];
  const pieceLines: string[] = [];
  let refIndex = 0;

  for (const [id, qty] of counts) {
    const p =
      PRODUCTS.find((x) => x.id === id) ??
      customProducts.find((x) => x.id === id);
    if (!p) continue;

    // Collect reference photos: the main image + any extra reference photos.
    const refs = [p.immagine_url, ...(p.reference_images ?? [])].filter(Boolean);
    const refTags: string[] = [];
    for (const url of refs) {
      if (images.length >= 12) break;
      refIndex += 1;
      images.push(url);
      refTags.push(`[REF ${refIndex}]`);
    }

    const link = p.link ? ` — scheda prodotto: ${p.link}` : "";
    const note = p.descrizione ? ` (${p.descrizione})` : "";
    pieceLines.push(
      `- ${qty}× ${p.nome}${note}${link}${refTags.length ? " " + refTags.join(" ") : ""}`,
    );
  }

  const piecesBlock = pieceLines.length
    ? `Riproduci fedelmente ogni prodotto usando le foto di riferimento numerate qui sotto (materiali, colore, forma, texture e proporzioni devono corrispondere all'originale):\n${pieceLines.join("\n")}`
    : "La stanza è vuota, minimalista.";

  const feedbackLines: string[] = [];
  if (feedback && (feedback.likes > 0 || feedback.dislikes > 0)) {
    if (feedback.lastFeedback === "dislike") {
      feedbackLines.push(
        `IMPORTANTE — feedback cliente sul render precedente: NEGATIVO. I prodotti non erano abbastanza fedeli alle foto di riferimento. In questa nuova versione: aumenta drasticamente la fedeltà visiva ad ogni [REF] (materiali, colori esatti, texture, forma, proporzioni, dettagli di finitura). NON inventare varianti, NON stilizzare, NON modificare colori o tessuti. Mantieni composizione e inquadratura della stanza.`,
      );
    } else if (feedback.lastFeedback === "like") {
      feedbackLines.push(
        `Feedback cliente sul render precedente: POSITIVO. Mantieni lo stesso stile, atmosfera, palette e livello di realismo. Conserva la stessa fedeltà ai prodotti di riferimento variando leggermente inquadratura/luce per una nuova versione coerente.`,
      );
    }
    if (feedback.dislikes >= 2) {
      feedbackLines.push(
        `Il cliente ha già segnalato più volte scarsa somiglianza dei prodotti: dai priorità assoluta alla riproduzione 1:1 delle foto [REF] rispetto a qualsiasi scelta stilistica.`,
      );
    }
  }

  const prompt = [
    `Fotografia interior design fotorealistica di una stanza di ${width}×${length} metri,`,
    `pareti color ${colorName} (${wallColor}), pavimento in parquet chiaro a listoni,`,
    `luce naturale morbida da grande finestra laterale, atmosfera Maisons du Monde calda e accogliente,`,
    `estetica scandinava/mediterranea con tessuti bouclé, legno naturale, ceramica, ottone brunito.`,
    piecesBlock,
    `Le foto di riferimento allegate mostrano l'aspetto ESATTO di ogni prodotto: mantieni identici modello, colore, tessuto e finiture — non inventare varianti.`,
    ...feedbackLines,
    `Rendering fotorealistico ad alta risoluzione, vista prospettica grandangolare a livello degli occhi, dettagli nitidi dei materiali, ombre morbide, profondità di campo cinematografica.`,
  ].join(" ");

  return { prompt, images };
}

function Render3DPanel({
  width,
  length,
  wallColor,
  items,
  customProducts,
}: {
  width: number;
  length: number;
  wallColor: string;
  items: PlacedItem[];
  customProducts: Product[];
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [isFinal, setIsFinal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"like" | "dislike" | null>(null);
  const [feedbackStats, setFeedbackStats] = useState<{
    likes: number;
    dislikes: number;
    lastFeedback: "like" | "dislike" | null;
  }>({ likes: 0, dislikes: 0, lastFeedback: null });

  const generate = async () => {
    setLoading(true);
    setError(null);
    setSrc(null);
    setIsFinal(false);
    setFeedback(null);
    const { prompt, images } = buildRenderPrompt(
      width,
      length,
      wallColor,
      items,
      customProducts,
      feedbackStats,
    );
    try {
      const res = await fetch("/api/render-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, images }),
      });
      if (!res.ok || !res.body) {
        throw new Error(await res.text().catch(() => "Errore generazione"));
      }
      let sawCompleted = false;
      let streamError: string | undefined;
      const parser = createParser({
        onEvent(event) {
          let payload: any;
          try {
            payload = JSON.parse(event.data);
          } catch {
            return;
          }
          if (event.event === "error" || payload?.type === "error") {
            streamError = payload?.error?.message ?? "Errore generazione";
            return;
          }
          if (
            event.event !== "image_generation.partial_image" &&
            event.event !== "image_generation.completed"
          )
            return;
          const final = event.event === "image_generation.completed";
          flushSync(() => {
            setSrc(`data:image/png;base64,${payload.b64_json}`);
            if (final) setIsFinal(true);
          });
          if (final) sawCompleted = true;
        },
      });
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        parser.feed(value);
      }
      if (streamError) throw new Error(streamError);
      if (!sawCompleted && !src) throw new Error("Nessuna immagine ricevuta");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Errore generazione");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="no-print mt-6 rounded-xl border border-border bg-secondary/30 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium">Render 3D fotorealistico</p>
          <p className="text-xs text-muted-foreground">
            Genera un'anteprima realistica della stanza con l'AI.
          </p>
        </div>
        <button
          onClick={generate}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          <Sparkles className="h-4 w-4" />
          {loading ? "Generazione…" : src ? "Rigenera" : "Genera Render 3D"}
        </button>
      </div>

      {error && (
        <p className="mt-3 rounded-md bg-destructive/10 px-3 py-2 text-xs text-destructive">
          {error}
        </p>
      )}

      {src && (
        <>
          <div className="mt-4 overflow-hidden rounded-lg border border-border bg-background">
            <img
              src={src}
              alt="Render 3D della stanza"
              className={
                "h-auto w-full object-cover transition-[filter] duration-500 " +
                (isFinal ? "blur-0" : "blur-xl")
              }
            />
          </div>
          {isFinal && (
            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                {feedback === "like"
                  ? "Grazie! Terremo lo stesso stile al prossimo render."
                  : feedback === "dislike"
                    ? "Grazie! Miglioreremo la fedeltà ai prodotti al prossimo render."
                    : "Il render è fedele ai prodotti?"}
              </p>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Mi piace"
                  aria-pressed={feedback === "like"}
                  onClick={() => {
                    const next = feedback === "like" ? null : "like";
                    setFeedback(next);
                    if (next) {
                      setFeedbackStats((s) => ({
                        likes: s.likes + 1,
                        dislikes: s.dislikes,
                        lastFeedback: "like",
                      }));
                    }
                  }}
                  className={
                    "inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors " +
                    (feedback === "like"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground")
                  }
                >
                  <ThumbsUp className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Non mi piace"
                  aria-pressed={feedback === "dislike"}
                  onClick={() => {
                    const next = feedback === "dislike" ? null : "dislike";
                    setFeedback(next);
                    if (next) {
                      setFeedbackStats((s) => ({
                        likes: s.likes,
                        dislikes: s.dislikes + 1,
                        lastFeedback: "dislike",
                      }));
                    }
                  }}
                  className={
                    "inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors " +
                    (feedback === "dislike"
                      ? "border-destructive bg-destructive text-destructive-foreground"
                      : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-foreground")
                  }
                >
                  <ThumbsDown className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Custom product uploader — user-supplied images                     */
/* ------------------------------------------------------------------ */

function CustomProductUploader({ onAdd }: { onAdd: (p: Product) => void }) {
  const [nome, setNome] = useState("");
  const [larghezza, setLarghezza] = useState(80);
  const [profondita, setProfondita] = useState(60);
  const [link, setLink] = useState("");
  const [descrizione, setDescrizione] = useState("");
  // Multiple reference photos: the first one is the "main" catalog image,
  // any extra photos are sent to the render model to guide realism.
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const onFiles = (files: FileList | null) => {
    setError(null);
    if (!files || files.length === 0) return;
    const pending: File[] = [];
    for (const f of Array.from(files)) {
      if (!f.type.startsWith("image/")) {
        setError("Ogni file deve essere un'immagine.");
        return;
      }
      if (f.size > 4 * 1024 * 1024) {
        setError("Immagine troppo grande (max 4 MB).");
        return;
      }
      pending.push(f);
    }
    Promise.all(
      pending.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const r = new FileReader();
            r.onload = () => resolve(String(r.result));
            r.onerror = () => reject(new Error("read"));
            r.readAsDataURL(file);
          }),
      ),
    )
      .then((urls) => setImages((prev) => [...prev, ...urls].slice(0, 5)))
      .catch(() => setError("Errore durante la lettura di un file."));
  };

  const reset = () => {
    setNome("");
    setLarghezza(80);
    setProfondita(60);
    setLink("");
    setDescrizione("");
    setImages([]);
    setError(null);
  };

  const submit = () => {
    if (images.length === 0) {
      setError("Carica almeno un'immagine.");
      return;
    }
    if (!nome.trim()) {
      setError("Inserisci un nome.");
      return;
    }
    onAdd({
      id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      nome: nome.trim().slice(0, 80),
      categoria: "I miei prodotti",
      prezzo: 0,
      immagine_url: images[0],
      link: link.trim(),
      descrizione: descrizione.trim().slice(0, 160) || undefined,
      reference_images: images.slice(1),
      larghezza_cm: Math.max(10, Math.min(500, larghezza)),
      profondita_cm: Math.max(10, Math.min(500, profondita)),
    });
    reset();
  };

  return (
    <div className="mb-4 space-y-3 rounded-xl border border-dashed border-border bg-secondary/30 p-3">
      <p className="text-xs font-medium">Aggiungi un tuo prodotto</p>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Più foto carichi (angolazioni diverse, dettagli materiali) e più il render 3D sarà fedele al prodotto reale.
      </p>

      {images.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {images.map((url, i) => (
            <div key={i} className="relative">
              <img
                src={url}
                alt={`Riferimento ${i + 1}`}
                className="h-14 w-14 rounded object-cover"
              />
              <button
                type="button"
                onClick={() =>
                  setImages((prev) => prev.filter((_, j) => j !== i))
                }
                className="absolute -right-1.5 -top-1.5 rounded-full bg-background p-0.5 shadow ring-1 ring-border"
                aria-label="Rimuovi immagine"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      <label
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          onFiles(e.dataTransfer.files);
        }}
        className={`flex cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed px-3 py-4 text-xs transition-colors ${
          dragOver
            ? "border-primary bg-primary/5 text-foreground"
            : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
        }`}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => onFiles(e.target.files)}
        />
        <Upload className="h-4 w-4" />
        <span>
          {images.length === 0
            ? "Carica foto (una o più)"
            : `Aggiungi altre foto (${images.length}/5)`}
        </span>
        <span className="hidden text-[10px] text-muted-foreground md:block">
          oppure trascina qui le immagini
        </span>
      </label>

      <input
        type="text"
        placeholder="Nome prodotto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs"
      />

      <input
        type="url"
        placeholder="Link scheda prodotto (opzionale)"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs"
      />

      <input
        type="text"
        placeholder="Descrizione breve (materiale, colore…)"
        value={descrizione}
        onChange={(e) => setDescrizione(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs"
      />


      <input
        type="text"
        placeholder="Nome prodotto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs"
      />

      <div className="grid grid-cols-2 gap-2">
        <label className="flex items-center gap-1 text-[11px] text-muted-foreground">
          L
          <input
            type="number"
            min={10}
            max={500}
            value={larghezza}
            onChange={(e) => setLarghezza(Number(e.target.value) || 0)}
            className="w-full rounded-md border border-input bg-background px-2 py-1 text-xs"
          />
          cm
        </label>
        <label className="flex items-center gap-1 text-[11px] text-muted-foreground">
          P
          <input
            type="number"
            min={10}
            max={500}
            value={profondita}
            onChange={(e) => setProfondita(Number(e.target.value) || 0)}
            className="w-full rounded-md border border-input bg-background px-2 py-1 text-xs"
          />
          cm
        </label>
      </div>

      {error && (
        <p className="rounded-md bg-destructive/10 px-2 py-1 text-[11px] text-destructive">
          {error}
        </p>
      )}

      <button
        onClick={submit}
        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <Plus className="h-3.5 w-3.5" />
        Aggiungi al catalogo
      </button>
    </div>
  );
}


