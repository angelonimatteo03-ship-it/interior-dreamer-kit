import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { createParser } from "eventsource-parser";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { PRODUCTS, CATEGORIES, WALL_COLORS, getFootprint, type Product } from "@/lib/products";
import {
  saveDesign,
  loadMyDesign,
  type PlacedItem as SavedPlacedItem,
  type RoomOpening,
} from "@/lib/designs.functions";
import { supabase } from "@/integrations/supabase/client";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  DoorOpen,
  Grid3x3,
  Maximize2,
  Printer,
  RotateCw,
  Search,
  Square,
  Trash2,
  Minus,
  Plus,
  Sparkles,
  SlidersHorizontal,
  ThumbsDown,
  ThumbsUp,
  Upload,
  X,
  Save,
  Share2,
  ExternalLink,
  LogIn,
  User,
  ZoomIn,
  ZoomOut,
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
/* Types + helpers                                                    */
/* ------------------------------------------------------------------ */

type PlacedItem = {
  uid: string;
  productId: string;
  // position in cm from top-left of the room
  x: number;
  y: number;
  rotation: 0 | 90 | 180 | 270;
};

type SaveState = "idle" | "dirty" | "saving" | "saved" | "error";

const eur = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

function formatPrice(v: number) {
  return eur.format(v);
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function newUid() {
  return `i-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
}

/* ------------------------------------------------------------------ */
/* Main App                                                           */
/* ------------------------------------------------------------------ */

const SAVED_PRODUCTS_STORAGE_KEY = "mdm.savedProducts.v1";
const DRAFT_STORAGE_KEY = "mdm.draft.v2";

type Draft = {
  step: 1 | 2 | 3 | 4;
  width: number;
  length: number;
  wallColor: string;
  items: PlacedItem[];
  openings?: RoomOpening[];
  customProducts: Product[];
  designName: string;
  designId: string | null;
  savedSlug: string | null;
};

function App() {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [width, setWidth] = useState(5); // meters
  const [length, setLength] = useState(4);
  const [wallColor, setWallColor] = useState(WALL_COLORS[0].value);
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [openings, setOpenings] = useState<RoomOpening[]>([]);
  const [customProducts, setCustomProducts] = useState<Product[]>([]);
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [loadingDesign, setLoadingDesign] = useState(false);

  // Persistence / save status
  const [designName, setDesignName] = useState("");
  const [designId, setDesignId] = useState<string | null>(null);
  const [savedSlug, setSavedSlug] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [lastSavedAt, setLastSavedAt] = useState<number | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const hydrated = useRef(false);

  const loadDesignFn = useServerFn(loadMyDesign);
  const saveDesignFn = useServerFn(saveDesign);

  // Load saved products from localStorage on mount (client-only).
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(SAVED_PRODUCTS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSavedProducts(parsed as Product[]);
      }
    } catch {
      // ignore corrupt storage
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(SAVED_PRODUCTS_STORAGE_KEY, JSON.stringify(savedProducts));
    } catch {
      // ignore quota errors
    }
  }, [savedProducts]);

  // Track auth state for the header.
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ? { email: data.user.email } : null);
      setAuthReady(true);
    });
    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        setUser(session?.user ? { email: session.user.email } : null);
      }
    });
    return () => subscription.subscription.unsubscribe();
  }, []);

  // Restore local draft (anonymous persistence + return-after-login), or load
  // a saved design from the ?design= param.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlDesignId = params.get("design");

    if (urlDesignId) {
      setLoadingDesign(true);
      loadDesignFn({ data: urlDesignId })
        .then((design) => {
          setWidth(Number(design.width));
          setLength(Number(design.length));
          setWallColor(design.wall_color);
          setItems((design.items as unknown as SavedPlacedItem[]) ?? []);
          setOpenings((design.openings as unknown as RoomOpening[]) ?? []);
          setDesignName(design.name ?? "");
          setDesignId(design.id);
          setSavedSlug(design.is_public ? design.slug : null);
          setStep(3);
          setSaveState("saved");
          setLastSavedAt(Date.now());
        })
        .catch(() => {
          toast.error("Progetto non trovato o non accessibile.");
        })
        .finally(() => {
          setLoadingDesign(false);
          hydrated.current = true;
        });
      return;
    }

    try {
      const raw = window.localStorage.getItem(DRAFT_STORAGE_KEY);
      if (raw) {
        const d = JSON.parse(raw) as Draft;
        if (d && typeof d.width === "number") {
          setWidth(d.width);
          setLength(d.length);
          setWallColor(d.wallColor);
          setItems(Array.isArray(d.items) ? d.items : []);
          setOpenings(Array.isArray(d.openings) ? d.openings : []);
          setCustomProducts(Array.isArray(d.customProducts) ? d.customProducts : []);
          setDesignName(d.designName ?? "");
          setDesignId(d.designId ?? null);
          setSavedSlug(d.savedSlug ?? null);
          setStep(d.step === 4 ? 3 : (d.step ?? 1));
        }
      }
    } catch {
      // ignore corrupt draft
    }
    hydrated.current = true;
  }, [loadDesignFn]);

  // Persist the working draft locally (works signed-out too).
  useEffect(() => {
    if (!hydrated.current || typeof window === "undefined") return;
    const draft: Draft = {
      step,
      width,
      length,
      wallColor,
      items,
      openings,
      customProducts,
      designName,
      designId,
      savedSlug,
    };
    try {
      window.localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
    } catch {
      // ignore quota errors
    }
  }, [
    step,
    width,
    length,
    wallColor,
    items,
    openings,
    customProducts,
    designName,
    designId,
    savedSlug,
  ]);

  // Mark unsaved changes whenever the project content changes.
  const firstDirtyRun = useRef(true);
  useEffect(() => {
    if (firstDirtyRun.current) {
      firstDirtyRun.current = false;
      return;
    }
    setSaveState((s) => (s === "saving" ? s : "dirty"));
  }, [width, length, wallColor, items, openings, designName]);

  const userProducts = useMemo(
    () => [...customProducts, ...savedProducts],
    [customProducts, savedProducts],
  );

  const persist = useCallback(
    async (opts?: { silent?: boolean }) => {
      if (!user) return null;
      setSaveState("saving");
      setSaveError(null);
      try {
        const result = await saveDesignFn({
          data: {
            id: designId ?? undefined,
            name: designName.trim() || "Progetto senza nome",
            width,
            length,
            wallColor,
            items,
            openings,
            isPublic: true,
          },
        });
        setDesignId(result.id);
        setSavedSlug(result.slug);
        setSaveState("saved");
        setLastSavedAt(Date.now());
        if (!opts?.silent) toast.success("Progetto salvato");
        return result;
      } catch (e) {
        setSaveState("error");
        setSaveError(e instanceof Error ? e.message : "Errore durante il salvataggio.");
        if (!opts?.silent) toast.error("Errore di salvataggio");
        return null;
      }
    },
    [user, designId, designName, width, length, wallColor, items, openings, saveDesignFn],
  );

  // Debounced autosave — only for signed-in users on an already saved project.
  useEffect(() => {
    if (!user || !designId || saveState !== "dirty") return;
    const t = setTimeout(() => {
      void persist({ silent: true });
    }, 1500);
    return () => clearTimeout(t);
  }, [user, designId, saveState, persist]);

  const resetProject = () => {
    setItems([]);
    setOpenings([]);
    setCustomProducts([]);
    setDesignName("");
    setDesignId(null);
    setSavedSlug(null);
    setSaveState("idle");
    setLastSavedAt(null);
    setStep(1);
    try {
      window.localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {
      /* noop */
    }
    navigate({ to: "/", replace: true });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        step={step}
        onStep={setStep}
        user={user}
        authReady={authReady}
        saveState={saveState}
        lastSavedAt={lastSavedAt}
        onRetrySave={() => void persist()}
      />
      <main className="mx-auto w-full max-w-[1500px] px-4 pb-24 pt-5 sm:px-6 sm:pt-7 lg:px-8">
        {loadingDesign && (
          <div className="mb-4 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 text-sm text-muted-foreground">
            Caricamento progetto…
          </div>
        )}

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
          <OpeningsStep
            width={width}
            length={length}
            wallColor={wallColor}
            openings={openings}
            setOpenings={setOpenings}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <Step2
            width={width}
            length={length}
            wallColor={wallColor}
            openings={openings}
            items={items}
            setItems={setItems}
            customProducts={customProducts}
            setCustomProducts={setCustomProducts}
            savedProducts={savedProducts}
            setSavedProducts={setSavedProducts}
            userProducts={userProducts}
            onBack={() => setStep(2)}
            onNext={() => setStep(4)}
          />
        )}
        {step === 4 && (
          <Step3
            width={width}
            length={length}
            wallColor={wallColor}
            items={items}
            openings={openings}
            customProducts={userProducts}
            user={user}
            designName={designName}
            setDesignName={setDesignName}
            saveState={saveState}
            saveError={saveError}
            savedSlug={savedSlug}
            onSave={() => void persist()}
            onBack={() => setStep(3)}
            onEditRoom={() => setStep(1)}
            onRestart={resetProject}
          />
        )}
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header + stepper                                                   */
/* ------------------------------------------------------------------ */

const STEPS = [
  { n: 1 as const, label: "Stanza" },
  { n: 2 as const, label: "Aperture" },
  { n: 3 as const, label: "Progettazione" },
  { n: 4 as const, label: "Riepilogo" },
];

function SaveStatus({
  saveState,
  lastSavedAt,
  onRetrySave,
  user,
}: {
  saveState: SaveState;
  lastSavedAt: number | null;
  onRetrySave: () => void;
  user: { email?: string } | null;
}) {
  if (!user || saveState === "idle") return null;
  const time = lastSavedAt
    ? new Date(lastSavedAt).toLocaleTimeString("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  if (saveState === "error") {
    return (
      <span className="flex items-center gap-2 text-xs text-destructive">
        Errore di salvataggio
        <button onClick={onRetrySave} className="underline underline-offset-2">
          Riprova
        </button>
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
      {saveState === "saving" && "Salvataggio…"}
      {saveState === "dirty" && "Modifiche non salvate"}
      {saveState === "saved" && (
        <>
          <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
          Salvato{time ? ` · ${time}` : ""}
        </>
      )}
    </span>
  );
}

function Header({
  step,
  onStep,
  user,
  authReady,
  saveState,
  lastSavedAt,
  onRetrySave,
}: {
  step: 1 | 2 | 3 | 4;
  onStep: (s: 1 | 2 | 3 | 4) => void;
  user: { email?: string } | null;
  authReady: boolean;
  saveState: SaveState;
  lastSavedAt: number | null;
  onRetrySave: () => void;
}) {
  return (
    <header className="no-print sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="eyebrow">Maisons du Monde</p>
          <h1 className="truncate text-base leading-tight sm:text-lg">Configuratore Stanze</h1>
        </div>

        <nav aria-label="Avanzamento" className="hidden md:block">
          <ol className="flex items-center gap-2.5">
            {STEPS.map((s, i) => {
              const active = s.n === step;
              const done = s.n < step;
              return (
                <li key={s.n} className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => (s.n <= step ? onStep(s.n) : undefined)}
                    disabled={s.n > step}
                    aria-current={active ? "step" : undefined}
                    className={
                      "flex min-h-9 items-center gap-2 rounded-full px-2.5 text-sm transition-colors " +
                      (active
                        ? "text-foreground"
                        : done
                          ? "text-foreground/80 hover:bg-secondary"
                          : "cursor-default text-muted-foreground")
                    }
                  >
                    <span
                      className={
                        "flex h-6 w-6 items-center justify-center rounded-full border text-[11px] font-semibold " +
                        (active
                          ? "border-primary bg-primary text-primary-foreground"
                          : done
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border bg-card text-muted-foreground")
                      }
                    >
                      {done ? <Check className="h-3.5 w-3.5" aria-hidden /> : s.n}
                    </span>
                    <span className={active ? "font-medium" : ""}>{s.label}</span>
                  </button>
                  {i < STEPS.length - 1 && <span className="h-px w-5 bg-border" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <SaveStatus
              saveState={saveState}
              lastSavedAt={lastSavedAt}
              onRetrySave={onRetrySave}
              user={user}
            />
          </div>
          {authReady && user ? (
            <Link to="/my-designs" className="btn btn-secondary btn-sm">
              <User className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">I miei progetti</span>
              <span className="sr-only sm:hidden">I miei progetti</span>
            </Link>
          ) : (
            <Link to="/auth" className="btn btn-secondary btn-sm">
              <LogIn className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">Accedi</span>
              <span className="sr-only sm:hidden">Accedi</span>
            </Link>
          )}
        </div>
      </div>

      {/* Compact mobile stepper */}
      <div className="border-t border-border/60 px-4 pb-2 pt-1.5 md:hidden">
        <ol className="flex items-stretch gap-2">
          {STEPS.map((s) => {
            const active = s.n === step;
            const done = s.n < step;
            return (
              <li key={s.n} className="flex-1">
                <button
                  type="button"
                  onClick={() => (s.n <= step ? onStep(s.n) : undefined)}
                  disabled={s.n > step}
                  aria-current={active ? "step" : undefined}
                  className="flex w-full min-h-11 flex-col justify-center gap-1.5 rounded-md px-1 text-left disabled:cursor-default"
                >
                  <span
                    className={
                      "h-1 w-full rounded-full " +
                      (active ? "bg-primary" : done ? "bg-accent" : "bg-border")
                    }
                  />
                  <span
                    className={
                      "flex items-center gap-1 text-[11px] " +
                      (active ? "font-medium text-foreground" : "text-muted-foreground")
                    }
                  >
                    {done ? (
                      <Check className="h-3 w-3 text-accent" aria-hidden />
                    ) : (
                      <span className="tabular-nums">{s.n}.</span>
                    )}
                    {s.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="pt-1 lg:hidden">
          <SaveStatus
            saveState={saveState}
            lastSavedAt={lastSavedAt}
            onRetrySave={onRetrySave}
            user={user}
          />
        </div>
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
    <section className="grid gap-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-10">
      <div className="surface space-y-8 p-5 sm:p-7">
        <div>
          <p className="eyebrow">Passo 1 di 4</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">La stanza</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Inserisci le misure reali e scegli la finitura delle pareti. Potrai modificarle in
            qualsiasi momento.
          </p>
        </div>

        <div className="space-y-7">
          <DimensionField label="Larghezza" value={width} onChange={onWidth} min={2} max={8} />
          <DimensionField label="Lunghezza" value={length} onChange={onLength} min={2} max={8} />
        </div>

        <div className="hairline" />

        <div>
          <div className="mb-1 flex items-baseline justify-between gap-3">
            <p className="text-sm font-medium">Colore pareti</p>
            <p className="text-xs text-muted-foreground">
              {WALL_COLORS.find((c) => c.value === wallColor)?.name}
            </p>
          </div>
          <p className="mb-4 text-xs text-muted-foreground">
            Le tinte influenzano anche il render 3D.
          </p>
          <div
            role="radiogroup"
            aria-label="Colore pareti"
            className="grid grid-cols-4 gap-2.5 sm:grid-cols-6"
          >
            {WALL_COLORS.map((c) => {
              const selected = c.value === wallColor;
              return (
                <button
                  key={c.value}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onWallColor(c.value)}
                  className={
                    "group flex flex-col items-center gap-1.5 rounded-lg border p-1.5 text-center transition-all " +
                    (selected
                      ? "border-primary bg-primary/5"
                      : "border-transparent hover:border-border")
                  }
                >
                  <span
                    className={
                      "relative block h-11 w-full rounded-md border " +
                      (selected ? "border-primary/50" : "border-border/70")
                    }
                    style={{ backgroundColor: c.value }}
                  >
                    {selected && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check className="h-4 w-4 text-ink" aria-hidden />
                      </span>
                    )}
                  </span>
                  <span
                    className={
                      "text-[11px] leading-tight " +
                      (selected ? "text-foreground" : "text-muted-foreground")
                    }
                  >
                    {c.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <button onClick={onNext} className="btn btn-primary w-full sm:w-auto">
          Continua a porte e finestre
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {/* Live preview */}
      <div className="surface flex flex-col items-center justify-center gap-4 bg-secondary/40 p-5 sm:p-8">
        <p className="eyebrow">Anteprima in scala</p>
        <div
          className="w-full max-w-lg rounded-lg border-[6px] shadow-inner"
          style={{
            borderColor: "#8a7863",
            backgroundColor: wallColor,
            aspectRatio: `${width} / ${length}`,
          }}
        />
        <p className="text-sm text-muted-foreground">
          {width} × {length} m · {(width * length).toFixed(1)} m²
        </p>
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
  const id = `dim-${label.toLowerCase()}`;
  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        <div className="flex items-center gap-1.5">
          <input
            id={id}
            type="number"
            min={min}
            max={max}
            step={0.1}
            value={value}
            onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value) || min)))}
            className="field w-20 text-right tabular-nums"
          />
          <span className="text-sm text-muted-foreground">m</span>
        </div>
      </div>
      <input
        type="range"
        aria-label={`${label} in metri`}
        min={min}
        max={max}
        step={0.1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range"
      />
      <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
        <span>min {min} m</span>
        <span>max {max} m</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* STEP 2 — Doors and windows                                         */
/* ------------------------------------------------------------------ */

const WALL_LABELS: Record<RoomOpening["wall"], string> = {
  top: "Parete superiore",
  right: "Parete destra",
  bottom: "Parete inferiore",
  left: "Parete sinistra",
};

function openingWallLength(wall: RoomOpening["wall"], roomWidthCm: number, roomLengthCm: number) {
  return wall === "top" || wall === "bottom" ? roomWidthCm : roomLengthCm;
}

function RoomOpeningsOverlay({
  openings,
  roomWidthCm,
  roomLengthCm,
}: {
  openings: RoomOpening[];
  roomWidthCm: number;
  roomLengthCm: number;
}) {
  return (
    <>
      {openings.map((opening) => {
        const wallLength = openingWallLength(opening.wall, roomWidthCm, roomLengthCm);
        const offset = clamp(opening.offsetCm, 0, Math.max(0, wallLength - opening.widthCm));
        const start = `${(offset / wallLength) * 100}%`;
        const size = `${(Math.min(opening.widthCm, wallLength) / wallLength) * 100}%`;
        const horizontal = opening.wall === "top" || opening.wall === "bottom";
        const style: React.CSSProperties = horizontal
          ? {
              left: start,
              width: size,
              height: "7px",
              [opening.wall]: 0,
            }
          : {
              top: start,
              height: size,
              width: "7px",
              [opening.wall]: 0,
            };
        return (
          <span
            key={opening.uid}
            aria-hidden
            className={
              "pointer-events-none absolute z-20 shadow-[0_0_0_2px_rgba(255,255,255,0.9)] " +
              (opening.type === "door" ? "bg-primary" : "bg-accent")
            }
            style={style}
          />
        );
      })}
    </>
  );
}

function OpeningMeasureField({
  id,
  label,
  value,
  min,
  max,
  step = 5,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  const safeMax = Math.max(min, max);
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <label htmlFor={`${id}-range`} className="text-xs font-medium">
          {label}
        </label>
        <span className="flex items-center gap-1">
          <input
            id={`${id}-number`}
            aria-label={`${label} in centimetri`}
            type="number"
            min={min}
            max={safeMax}
            step={step}
            value={value}
            onChange={(event) => onChange(clamp(Number(event.target.value) || min, min, safeMax))}
            className="field min-h-9 w-20 py-1 text-right text-xs tabular-nums"
          />
          <span className="text-xs text-muted-foreground">cm</span>
        </span>
      </div>
      <input
        id={`${id}-range`}
        type="range"
        min={min}
        max={safeMax}
        step={step}
        value={clamp(value, min, safeMax)}
        onChange={(event) => onChange(Number(event.target.value))}
        className="range"
      />
    </div>
  );
}

function OpeningsStep({
  width,
  length,
  wallColor,
  openings,
  setOpenings,
  onBack,
  onNext,
}: {
  width: number;
  length: number;
  wallColor: string;
  openings: RoomOpening[];
  setOpenings: React.Dispatch<React.SetStateAction<RoomOpening[]>>;
  onBack: () => void;
  onNext: () => void;
}) {
  const roomWidthCm = width * 100;
  const roomLengthCm = length * 100;

  useEffect(() => {
    setOpenings((current) => {
      let changed = false;
      const repaired = current.map((opening) => {
        const wallLength = openingWallLength(opening.wall, roomWidthCm, roomLengthCm);
        const widthCm = Math.min(opening.widthCm, wallLength);
        const offsetCm = clamp(opening.offsetCm, 0, Math.max(0, wallLength - widthCm));
        if (widthCm === opening.widthCm && offsetCm === opening.offsetCm) return opening;
        changed = true;
        return { ...opening, widthCm, offsetCm };
      });
      return changed ? repaired : current;
    });
  }, [roomWidthCm, roomLengthCm, setOpenings]);

  const addOpening = (type: RoomOpening["type"]) => {
    const widthCm = type === "door" ? 90 : 120;
    setOpenings((current) => [
      ...current,
      {
        uid: `o-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        type,
        wall: "top",
        widthCm,
        heightCm: type === "door" ? 210 : 120,
        sillHeightCm: type === "window" ? 90 : 0,
        offsetCm: Math.round((roomWidthCm - widthCm) / 10) * 5,
      },
    ]);
  };

  const updateOpening = (uid: string, patch: Partial<RoomOpening>) => {
    setOpenings((current) =>
      current.map((opening) => {
        if (opening.uid !== uid) return opening;
        const next = { ...opening, ...patch };
        const wallLength = openingWallLength(next.wall, roomWidthCm, roomLengthCm);
        const minWidth = next.type === "door" ? 60 : 40;
        next.widthCm = clamp(next.widthCm, minWidth, wallLength);
        next.offsetCm = clamp(next.offsetCm, 0, Math.max(0, wallLength - next.widthCm));
        return next;
      }),
    );
  };

  const conflictingIds = useMemo(() => {
    const ids = new Set<string>();
    for (let i = 0; i < openings.length; i += 1) {
      for (let j = i + 1; j < openings.length; j += 1) {
        const a = openings[i];
        const b = openings[j];
        if (a.wall !== b.wall) continue;
        if (a.offsetCm < b.offsetCm + b.widthCm && b.offsetCm < a.offsetCm + a.widthCm) {
          ids.add(a.uid);
          ids.add(b.uid);
        }
      }
    }
    return ids;
  }, [openings]);

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)] lg:gap-10">
      <div className="surface min-w-0 p-5 sm:p-7">
        <div>
          <p className="eyebrow">Passo 2 di 4</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Porte e finestre</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Aggiungi le aperture, scegli la parete e regola posizione e misure reali. Puoi anche
            continuare senza inserirne.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => addOpening("door")}
            className="btn btn-secondary w-full"
          >
            <DoorOpen className="h-4 w-4" aria-hidden />
            Aggiungi porta
          </button>
          <button
            type="button"
            onClick={() => addOpening("window")}
            className="btn btn-secondary w-full"
          >
            <Square className="h-4 w-4" aria-hidden />
            Aggiungi finestra
          </button>
        </div>

        {conflictingIds.size > 0 && (
          <p
            role="alert"
            className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2 text-xs text-destructive"
          >
            Alcune aperture si sovrappongono sulla stessa parete. Regola la loro posizione prima di
            continuare.
          </p>
        )}

        <div className="mt-6 space-y-4">
          {openings.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border px-4 py-8 text-center text-sm text-muted-foreground">
              Nessuna apertura aggiunta.
            </div>
          ) : (
            openings.map((opening, index) => {
              const wallLength = openingWallLength(opening.wall, roomWidthCm, roomLengthCm);
              const maxOffset = Math.max(0, wallLength - opening.widthCm);
              return (
                <article
                  key={opening.uid}
                  className={
                    "rounded-xl border p-4 " +
                    (conflictingIds.has(opening.uid) ? "border-destructive/60" : "border-border")
                  }
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={opening.type === "door" ? "text-primary" : "text-accent"}>
                        {opening.type === "door" ? (
                          <DoorOpen className="h-5 w-5" aria-hidden />
                        ) : (
                          <Square className="h-5 w-5" aria-hidden />
                        )}
                      </span>
                      <div>
                        <h3 className="text-base">
                          {opening.type === "door" ? "Porta" : "Finestra"} {index + 1}
                        </h3>
                        <p className="text-[11px] text-muted-foreground">
                          {opening.widthCm} × {opening.heightCm} cm
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenings((current) => current.filter((item) => item.uid !== opening.uid))
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      aria-label={`Rimuovi ${opening.type === "door" ? "porta" : "finestra"} ${index + 1}`}
                    >
                      <Trash2 className="h-4 w-4" aria-hidden />
                    </button>
                  </div>

                  <label htmlFor={`${opening.uid}-wall`} className="mt-4 block text-xs font-medium">
                    Parete
                    <select
                      id={`${opening.uid}-wall`}
                      value={opening.wall}
                      onChange={(event) =>
                        updateOpening(opening.uid, {
                          wall: event.target.value as RoomOpening["wall"],
                        })
                      }
                      className="field mt-1.5"
                    >
                      {Object.entries(WALL_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <OpeningMeasureField
                      id={`${opening.uid}-width`}
                      label="Larghezza"
                      value={opening.widthCm}
                      min={opening.type === "door" ? 60 : 40}
                      max={Math.min(opening.type === "door" ? 180 : 300, wallLength)}
                      onChange={(value) => updateOpening(opening.uid, { widthCm: value })}
                    />
                    <OpeningMeasureField
                      id={`${opening.uid}-height`}
                      label="Altezza"
                      value={opening.heightCm}
                      min={opening.type === "door" ? 180 : 40}
                      max={opening.type === "door" ? 260 : 220}
                      onChange={(value) => updateOpening(opening.uid, { heightCm: value })}
                    />
                    <OpeningMeasureField
                      id={`${opening.uid}-offset`}
                      label="Distanza dall’angolo"
                      value={opening.offsetCm}
                      min={0}
                      max={maxOffset}
                      onChange={(value) => updateOpening(opening.uid, { offsetCm: value })}
                    />
                    {opening.type === "window" && (
                      <OpeningMeasureField
                        id={`${opening.uid}-sill`}
                        label="Altezza davanzale"
                        value={opening.sillHeightCm}
                        min={0}
                        max={180}
                        onChange={(value) => updateOpening(opening.uid, { sillHeightCm: value })}
                      />
                    )}
                  </div>
                </article>
              );
            })
          )}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={onBack} className="btn btn-secondary w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Torna alla stanza
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={conflictingIds.size > 0}
            className="btn btn-primary w-full sm:ml-auto sm:w-auto"
          >
            Continua alla progettazione
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="surface flex min-h-[360px] flex-col items-center justify-center gap-5 bg-secondary/40 p-5 sm:p-8 lg:sticky lg:top-24 lg:self-start">
        <div className="text-center">
          <p className="eyebrow">Pianta della stanza</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Porte in terracotta · finestre in verde salvia
          </p>
        </div>
        <div
          className="relative w-full max-w-2xl overflow-hidden rounded-lg border-[6px] shadow-inner"
          style={{
            borderColor: "#8a7863",
            backgroundColor: wallColor,
            aspectRatio: `${width} / ${length}`,
          }}
        >
          <RoomOpeningsOverlay
            openings={openings}
            roomWidthCm={roomWidthCm}
            roomLengthCm={roomLengthCm}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          {width} × {length} m · {openings.length} {openings.length === 1 ? "apertura" : "aperture"}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* STEP 3 — Room design (editor)                                      */
/* ------------------------------------------------------------------ */

const CUSTOM_CATEGORY = "I miei prodotti";
const SAVED_CATEGORY = "Prodotti salvati";
const SORT_STORAGE_KEY = "mdm.catalogSort.v1";

type SortKey = "recommended" | "price-asc" | "price-desc" | "name";

const SORT_LABELS: Record<SortKey, string> = {
  recommended: "Consigliati",
  "price-asc": "Prezzo crescente",
  "price-desc": "Prezzo decrescente",
  name: "Nome A-Z",
};

const ZOOM_MIN = 10;
const ZOOM_MAX = 200;
const ZOOM_STEP = 10;
const SNAP_CM = 5;

function Step2({
  width,
  length,
  wallColor,
  openings,
  items,
  setItems,
  customProducts,
  setCustomProducts,
  savedProducts,
  setSavedProducts,
  userProducts,
  onBack,
  onNext,
}: {
  width: number;
  length: number;
  wallColor: string;
  openings: RoomOpening[];
  items: PlacedItem[];
  setItems: React.Dispatch<React.SetStateAction<PlacedItem[]>>;
  customProducts: Product[];
  setCustomProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  savedProducts: Product[];
  setSavedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  userProducts: Product[];
  onBack: () => void;
  onNext: () => void;
}) {
  const [selectedUid, setSelectedUid] = useState<string | null>(null);
  const [zoom, setZoom] = useState(100);
  const [fitZoom, setFitZoom] = useState(100);
  const [showGrid, setShowGrid] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [tab, setTab] = useState<"catalog" | "project">("catalog");
  const [announce, setAnnounce] = useState("");
  const [centerRequest, setCenterRequest] = useState(0);
  const [fitRequest, setFitRequest] = useState(0);

  const isFitZoom = zoom === fitZoom;

  const changeZoom = useCallback(
    (delta: number) => {
      const nextZoom = clamp(zoom + delta, ZOOM_MIN, ZOOM_MAX);
      setZoom(nextZoom);
      setAnnounce(`Zoom ${nextZoom}%`);
    },
    [zoom],
  );

  const handleFitZoom = useCallback((nextZoom: number) => {
    setFitZoom(nextZoom);
    setZoom(nextZoom);
    setAnnounce(`Vista adattata, zoom ${nextZoom}%`);
  }, []);

  const roomWidthCm = width * 100;
  const roomLengthCm = length * 100;

  const findProduct = useCallback(
    (id: string) => PRODUCTS.find((x) => x.id === id) ?? userProducts.find((x) => x.id === id),
    [userProducts],
  );

  const selectedItem = items.find((i) => i.uid === selectedUid) ?? null;
  const selectedProduct = selectedItem ? findProduct(selectedItem.productId) : null;

  // Keep restored projects valid after room-size changes and repair older
  // drafts that may contain furniture outside the room boundaries.
  useEffect(() => {
    setItems((prev) => {
      let changed = false;
      const next = prev.map((it) => {
        const product = findProduct(it.productId);
        if (!product) return it;
        const fp = getFootprint(product);
        const rotated = it.rotation === 90 || it.rotation === 270;
        const itemWidth = rotated ? fp.d : fp.w;
        const itemHeight = rotated ? fp.w : fp.d;
        const x = clamp(it.x, 0, Math.max(0, roomWidthCm - itemWidth));
        const y = clamp(it.y, 0, Math.max(0, roomLengthCm - itemHeight));
        if (x === it.x && y === it.y) return it;
        changed = true;
        return { ...it, x, y };
      });
      return changed ? next : prev;
    });
  }, [findProduct, roomWidthCm, roomLengthCm, setItems]);

  const addProduct = useCallback(
    (p: Product) => {
      const fp = getFootprint(p);
      const uid = newUid();
      setItems((prev) => [
        ...prev,
        {
          uid,
          productId: p.id,
          x: Math.max(0, (roomWidthCm - fp.w) / 2),
          y: Math.max(0, (roomLengthCm - fp.d) / 2),
          rotation: 0,
        },
      ]);
      setSelectedUid(uid);
      setAnnounce(`${p.nome} aggiunto alla stanza`);
    },
    [roomWidthCm, roomLengthCm, setItems],
  );

  const rotateSelected = () => {
    if (!selectedUid) return;
    setItems((prev) =>
      prev.map((it) => {
        if (it.uid !== selectedUid) return it;
        const product = findProduct(it.productId);
        if (!product) return it;
        const rotation = ((it.rotation + 90) % 360) as 0 | 90 | 180 | 270;
        const fp = getFootprint(product);
        const rotated = rotation === 90 || rotation === 270;
        const itemWidth = rotated ? fp.d : fp.w;
        const itemHeight = rotated ? fp.w : fp.d;
        return {
          ...it,
          rotation,
          x: clamp(it.x, 0, Math.max(0, roomWidthCm - itemWidth)),
          y: clamp(it.y, 0, Math.max(0, roomLengthCm - itemHeight)),
        };
      }),
    );
    setAnnounce("Arredo ruotato di 90 gradi");
  };

  const recenterSelected = () => {
    if (!selectedItem || !selectedProduct) return;
    const fp = getFootprint(selectedProduct);
    const rotated = selectedItem.rotation === 90 || selectedItem.rotation === 270;
    const itemWidth = rotated ? fp.d : fp.w;
    const itemHeight = rotated ? fp.w : fp.d;
    setItems((prev) =>
      prev.map((it) =>
        it.uid === selectedItem.uid
          ? {
              ...it,
              x: Math.max(0, (roomWidthCm - itemWidth) / 2),
              y: Math.max(0, (roomLengthCm - itemHeight) / 2),
            }
          : it,
      ),
    );
    setAnnounce("Posizione ripristinata al centro");
  };

  const removeItem = useCallback(
    (uid: string) => {
      const removed = items.find((i) => i.uid === uid);
      if (!removed) return;
      const index = items.findIndex((i) => i.uid === uid);
      setItems((prev) => prev.filter((i) => i.uid !== uid));
      if (selectedUid === uid) setSelectedUid(null);
      const name = findProduct(removed.productId)?.nome ?? "Arredo";
      setAnnounce(`${name} rimosso dalla stanza`);
      toast("Arredo rimosso", {
        description: name,
        action: {
          label: "Annulla",
          onClick: () => {
            setItems((prev) => {
              const next = [...prev];
              next.splice(Math.min(index, next.length), 0, removed);
              return next;
            });
            setSelectedUid(removed.uid);
          },
        },
      });
    },
    [items, selectedUid, setItems, findProduct],
  );

  const removeOneOfProduct = (productId: string) => {
    const last = [...items].reverse().find((i) => i.productId === productId);
    if (last) removeItem(last.uid);
  };

  const removeCustom = (id: string) => {
    setCustomProducts((prev) => prev.filter((p) => p.id !== id));
    setItems((prev) => prev.filter((it) => it.productId !== id));
  };

  const removeSaved = (id: string) => {
    setSavedProducts((prev) => prev.filter((p) => p.id !== id));
    setItems((prev) => prev.filter((it) => it.productId !== id));
  };

  const showInRoom = (productId: string) => {
    const first = items.find((i) => i.productId === productId);
    if (!first) return;
    setSelectedUid(first.uid);
    setCenterRequest((n) => n + 1);
    setMobileCatalogOpen(false);
  };

  const grouped = useMemo(() => {
    const map = new Map<string, { product: Product; qty: number }>();
    for (const it of items) {
      const p = findProduct(it.productId);
      if (!p) continue;
      const entry = map.get(p.id);
      if (entry) entry.qty += 1;
      else map.set(p.id, { product: p, qty: 1 });
    }
    return Array.from(map.values());
  }, [items, findProduct]);

  const projectTotal = grouped.reduce((s, r) => s + r.product.prezzo * r.qty, 0);

  const catalog = (
    <CatalogPanel
      tab={tab}
      setTab={setTab}
      items={items}
      grouped={grouped}
      projectTotal={projectTotal}
      customProducts={customProducts}
      setCustomProducts={setCustomProducts}
      savedProducts={savedProducts}
      setSavedProducts={setSavedProducts}
      onAdd={addProduct}
      onRemoveOne={removeOneOfProduct}
      onRemoveCustom={removeCustom}
      onRemoveSaved={removeSaved}
      onShowInRoom={showInRoom}
      selectedProductId={selectedItem?.productId ?? null}
    />
  );

  return (
    <section
      className={
        "grid gap-6 " +
        (sidebarOpen
          ? "lg:grid-cols-[minmax(0,1fr)_minmax(420px,440px)] lg:gap-7"
          : "lg:grid-cols-1")
      }
    >
      <p aria-live="polite" className="sr-only">
        {announce}
      </p>

      {/* Editor */}
      <div className="surface min-w-0 p-4 sm:p-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="eyebrow">Passo 3 di 4</p>
            <h2 className="mt-1 text-2xl sm:text-3xl">Progettazione stanza</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {items.length === 0
                ? "Apri il catalogo e aggiungi il primo arredo."
                : "Seleziona e trascina gli arredi per posizionarli."}
            </p>
          </div>
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="btn btn-secondary btn-sm hidden lg:inline-flex"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Apri catalogo
            </button>
          )}
        </div>

        {/* Contextual toolbar */}
        <div className="mb-3 flex flex-wrap items-center gap-2 rounded-xl border border-border bg-secondary/40 p-2">
          {selectedItem && selectedProduct ? (
            <>
              <span className="min-w-0 flex-1 truncate px-1 text-xs font-medium">
                {selectedProduct.nome}
              </span>
              <span className="rounded-full bg-card px-2 py-1 text-[11px] tabular-nums text-muted-foreground">
                {selectedItem.rotation}°
              </span>
              <button onClick={rotateSelected} className="btn btn-secondary btn-sm">
                <RotateCw className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">Ruota 90°</span>
              </button>
              <button onClick={recenterSelected} className="btn btn-secondary btn-sm">
                <Crosshair className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">Ripristina posizione</span>
              </button>
              <button
                onClick={() => removeItem(selectedItem.uid)}
                className="btn btn-secondary btn-sm text-destructive"
              >
                <Trash2 className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">Rimuovi</span>
              </button>
            </>
          ) : (
            <span className="px-1 text-xs text-muted-foreground">
              Seleziona un arredo nella pianta per ruotarlo, spostarlo o rimuoverlo.
            </span>
          )}
        </div>

        {/* Zoom / view controls */}
        <div
          className="mb-3 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Controlli della vista"
        >
          <div
            className="flex items-center overflow-hidden rounded-full border border-border bg-card shadow-sm"
            role="group"
            aria-label="Controlli zoom"
          >
            <button
              type="button"
              onClick={() => changeZoom(-ZOOM_STEP)}
              disabled={zoom <= ZOOM_MIN}
              className="flex h-11 w-11 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:relative focus-visible:z-10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label={
                zoom <= ZOOM_MIN
                  ? "Zoom minimo raggiunto"
                  : `Riduci zoom al ${Math.max(ZOOM_MIN, zoom - ZOOM_STEP)}%`
              }
              aria-controls="room-canvas"
              title={
                zoom <= ZOOM_MIN
                  ? "Zoom minimo raggiunto"
                  : `Riduci al ${Math.max(ZOOM_MIN, zoom - ZOOM_STEP)}%`
              }
            >
              <ZoomOut className="h-[18px] w-[18px]" aria-hidden />
            </button>
            <output
              className="flex h-11 min-w-12 items-center justify-center border-x border-border px-2 text-center text-sm font-medium tabular-nums text-foreground"
              aria-live="polite"
              aria-atomic="true"
              aria-label={`Zoom attuale ${zoom}%`}
            >
              {zoom}%
            </output>
            <button
              type="button"
              onClick={() => changeZoom(ZOOM_STEP)}
              disabled={zoom >= ZOOM_MAX}
              className="flex h-11 w-11 shrink-0 items-center justify-center text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:relative focus-visible:z-10 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label={
                zoom >= ZOOM_MAX
                  ? "Zoom massimo raggiunto"
                  : `Aumenta zoom al ${Math.min(ZOOM_MAX, zoom + ZOOM_STEP)}%`
              }
              aria-controls="room-canvas"
              title={
                zoom >= ZOOM_MAX
                  ? "Zoom massimo raggiunto"
                  : `Aumenta al ${Math.min(ZOOM_MAX, zoom + ZOOM_STEP)}%`
              }
            >
              <ZoomIn className="h-[18px] w-[18px]" aria-hidden />
            </button>
          </div>
          <button
            type="button"
            onClick={() => setFitRequest((n) => n + 1)}
            disabled={isFitZoom}
            aria-controls="room-canvas"
            className={`btn btn-sm min-h-11 px-4 transition-colors ${
              isFitZoom
                ? "border-primary/30 bg-primary/10 text-primary opacity-100"
                : "btn-secondary"
            }`}
            title={
              isFitZoom
                ? `La stanza è già interamente visibile (${zoom}%)`
                : "Mostra l'intera stanza nello spazio disponibile"
            }
          >
            <Maximize2 className="h-4 w-4" aria-hidden />
            {isFitZoom ? "Vista adattata" : "Adatta alla vista"}
          </button>
          <button
            type="button"
            onClick={() => setShowGrid((g) => !g)}
            aria-pressed={showGrid}
            className="btn btn-secondary btn-sm min-h-11 px-4"
          >
            <Grid3x3 className="h-4 w-4" aria-hidden />
            {showGrid ? "Nascondi griglia" : "Mostra griglia"}
          </button>
          <span className="ml-auto text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {width} × {length} m · {items.length} {items.length === 1 ? "pezzo" : "pezzi"}
          </span>
        </div>

        <RoomCanvas
          roomWidthCm={roomWidthCm}
          roomLengthCm={roomLengthCm}
          wallColor={wallColor}
          openings={openings}
          items={items}
          setItems={setItems}
          customProducts={userProducts}
          selectedUid={selectedUid}
          setSelectedUid={setSelectedUid}
          onRemove={removeItem}
          onRotate={rotateSelected}
          zoom={zoom}
          onFitZoom={handleFitZoom}
          fitRequest={fitRequest}
          showGrid={showGrid}
          centerRequest={centerRequest}
          onOpenCatalog={() => {
            setTab("catalog");
            setSidebarOpen(true);
            setMobileCatalogOpen(true);
          }}
        />

        <Render3DPanel
          width={width}
          length={length}
          wallColor={wallColor}
          openings={openings}
          items={items}
          customProducts={userProducts}
        />
      </div>

      {/* Desktop sidebar */}
      {sidebarOpen && (
        <aside className="surface hidden min-w-0 flex-col p-4 lg:flex lg:max-h-[calc(100vh-7rem)] lg:sticky lg:top-24">
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="eyebrow">Workspace</p>
            <button
              onClick={() => setSidebarOpen(false)}
              className="btn btn-ghost btn-sm"
              aria-label="Comprimi catalogo"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
              Comprimi
            </button>
          </div>
          {catalog}
        </aside>
      )}

      {/* Mobile catalog sheet */}
      {mobileCatalogOpen && (
        <MobileSheet title="Catalogo e progetto" onClose={() => setMobileCatalogOpen(false)}>
          {catalog}
        </MobileSheet>
      )}

      {/* Nav */}
      <div className="col-span-full flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button onClick={onBack} className="btn btn-secondary w-full sm:w-auto">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Indietro
        </button>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => setMobileCatalogOpen(true)}
            className="btn btn-secondary w-full sm:w-auto lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden />
            Apri catalogo
          </button>
          <button onClick={onNext} className="btn btn-primary w-full sm:w-auto">
            Vai al riepilogo
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile bottom sheet (focus trap + Escape + scroll lock)            */
/* ------------------------------------------------------------------ */

function MobileSheet({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && ref.current) {
        const nodes = ref.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex]:not([tabindex="-1"])',
        );
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    ref.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="no-print fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-ink/40" onClick={onClose} aria-hidden />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="absolute inset-x-0 bottom-0 flex h-[92svh] flex-col rounded-t-2xl border-t border-border bg-card pb-[env(safe-area-inset-bottom)] shadow-lift outline-none"
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <h2 className="text-lg">{title}</h2>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary"
            aria-label="Chiudi catalogo"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="flex min-h-0 flex-1 flex-col px-4 py-3">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Catalog + "Nel progetto" panel                                     */
/* ------------------------------------------------------------------ */

function CatalogPanel({
  tab,
  setTab,
  items,
  grouped,
  projectTotal,
  customProducts,
  setCustomProducts,
  savedProducts,
  setSavedProducts,
  onAdd,
  onRemoveOne,
  onRemoveCustom,
  onRemoveSaved,
  onShowInRoom,
  selectedProductId,
}: {
  tab: "catalog" | "project";
  setTab: (t: "catalog" | "project") => void;
  items: PlacedItem[];
  grouped: { product: Product; qty: number }[];
  projectTotal: number;
  customProducts: Product[];
  setCustomProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  savedProducts: Product[];
  setSavedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  onAdd: (p: Product) => void;
  onRemoveOne: (productId: string) => void;
  onRemoveCustom: (id: string) => void;
  onRemoveSaved: (id: string) => void;
  onShowInRoom: (productId: string) => void;
  selectedProductId: string | null;
}) {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("recommended");
  const [detail, setDetail] = useState<Product | null>(null);

  useEffect(() => {
    try {
      const s = window.sessionStorage.getItem(SORT_STORAGE_KEY) as SortKey | null;
      if (s && s in SORT_LABELS) setSort(s);
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(SORT_STORAGE_KEY, sort);
    } catch {
      /* noop */
    }
  }, [sort]);

  const allCategories = useMemo(() => [...CATEGORIES, CUSTOM_CATEGORY, SAVED_CATEGORY], []);

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const p of PRODUCTS) m.set(p.categoria, (m.get(p.categoria) ?? 0) + 1);
    m.set(CUSTOM_CATEGORY, customProducts.length);
    m.set(SAVED_CATEGORY, savedProducts.length);
    return m;
  }, [customProducts.length, savedProducts.length]);

  const qtyOf = (id: string) => items.filter((i) => i.productId === id).length;

  const filteredProducts = useMemo(() => {
    const base =
      category === CUSTOM_CATEGORY
        ? customProducts
        : category === SAVED_CATEGORY
          ? savedProducts
          : PRODUCTS.filter((p) => p.categoria === category);
    const q = query.trim().toLowerCase();
    const list = q ? base.filter((p) => p.nome.toLowerCase().includes(q)) : [...base];
    if (sort === "price-asc") list.sort((a, b) => a.prezzo - b.prezzo);
    if (sort === "price-desc") list.sort((a, b) => b.prezzo - a.prezzo);
    if (sort === "name") list.sort((a, b) => a.nome.localeCompare(b.nome, "it"));
    return list;
  }, [category, customProducts, savedProducts, query, sort]);

  const resetFilters = () => {
    setQuery("");
    setCategory(CATEGORIES[0]);
    setSort("recommended");
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Catalogo e progetto"
        className="mb-3 grid grid-cols-2 gap-1 rounded-full border border-border bg-secondary/50 p-1"
      >
        {(["catalog", "project"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={
              "min-h-9 rounded-full px-3 text-xs font-medium transition-colors " +
              (tab === t
                ? "bg-card text-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {t === "catalog" ? "Catalogo" : `Nel progetto (${items.length})`}
          </button>
        ))}
      </div>

      {tab === "project" ? (
        <ProjectPanel
          grouped={grouped}
          total={projectTotal}
          itemCount={items.length}
          onAdd={onAdd}
          onRemoveOne={onRemoveOne}
          onShowInRoom={onShowInRoom}
          selectedProductId={selectedProductId}
          onOpenCatalog={() => setTab("catalog")}
        />
      ) : (
        <>
          {/* Sticky search */}
          <div className="sticky top-0 z-10 space-y-2 bg-card pb-2">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <label className="sr-only" htmlFor="catalog-search">
                Cerca prodotti
              </label>
              <input
                id="catalog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca per nome…"
                className="field pl-9 pr-10"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary"
                  aria-label="Cancella ricerca"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              )}
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2">
              <label className="sr-only" htmlFor="catalog-category">
                Categoria
              </label>
              <select
                id="catalog-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="field h-9 min-h-9 min-w-0 py-0 text-xs"
                aria-label="Filtra per categoria"
              >
                {allCategories.map((c) => (
                  <option key={c} value={c}>
                    {c} ({counts.get(c) ?? 0})
                  </option>
                ))}
              </select>
              <label className="sr-only" htmlFor="catalog-sort">
                Ordina prodotti
              </label>
              <select
                id="catalog-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="field h-9 min-h-9 min-w-0 py-0 text-xs"
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
                  <option key={k} value={k}>
                    {SORT_LABELS[k]}
                  </option>
                ))}
              </select>
              <span className="whitespace-nowrap text-[11px] text-muted-foreground">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "risultato" : "risultati"}
              </span>
            </div>

            {query.trim() && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-[11px]">
                  “{query.trim()}”
                  <button onClick={() => setQuery("")} aria-label="Rimuovi filtro ricerca">
                    <X className="h-3 w-3" aria-hidden />
                  </button>
                </span>
                <button
                  onClick={resetFilters}
                  className="text-[11px] text-primary underline-offset-2 hover:underline"
                >
                  Azzera tutto
                </button>
              </div>
            )}
          </div>

          {category === CUSTOM_CATEGORY && (
            <CustomProductUploader
              onAdd={(p, save) => {
                setCustomProducts((prev) => [...prev, p]);
                if (save) {
                  setSavedProducts((prev) =>
                    prev.some((x) => x.id === p.id) ? prev : [...prev, p],
                  );
                }
              }}
            />
          )}

          {category === SAVED_CATEGORY && savedProducts.length > 0 && (
            <p className="mb-3 text-[11px] leading-snug text-muted-foreground">
              I prodotti salvati restano disponibili anche nei progetti futuri su questo
              dispositivo.
            </p>
          )}

          <div className="min-h-0 flex-1 overflow-y-auto pr-1 lg:max-h-none max-h-[52vh]">
            {filteredProducts.length === 0 && (
              <div className="rounded-xl border border-dashed border-border px-3 py-8 text-center">
                <p className="text-xs text-muted-foreground">
                  {query.trim()
                    ? "Nessun risultato per questa ricerca."
                    : category === CUSTOM_CATEGORY
                      ? "Nessun prodotto personale. Caricane uno qui sopra."
                      : category === SAVED_CATEGORY
                        ? "Nessun prodotto salvato."
                        : "Nessun prodotto in questa categoria."}
                </p>
                <button onClick={resetFilters} className="btn btn-secondary btn-sm mt-3">
                  Azzera ricerca e filtri
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 gap-2">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  qty={qtyOf(p.id)}
                  onAdd={() => onAdd(p)}
                  onRemoveOne={() => onRemoveOne(p.id)}
                  onDetail={() => setDetail(p)}
                  onDeleteProduct={
                    category === CUSTOM_CATEGORY
                      ? () => onRemoveCustom(p.id)
                      : category === SAVED_CATEGORY
                        ? () => onRemoveSaved(p.id)
                        : undefined
                  }
                  deleteLabel={
                    category === CUSTOM_CATEGORY
                      ? "Elimina prodotto personale"
                      : "Rimuovi dai prodotti salvati"
                  }
                />
              ))}
            </div>
          </div>
        </>
      )}

      {detail && (
        <ProductDetail
          product={detail}
          qty={qtyOf(detail.id)}
          onAdd={() => onAdd(detail)}
          onRemoveOne={() => onRemoveOne(detail.id)}
          onClose={() => setDetail(null)}
        />
      )}
    </div>
  );
}

function ProductThumb({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");
  return (
    <span
      className={
        "relative block flex-shrink-0 overflow-hidden rounded-lg border border-border/60 bg-secondary " +
        (className ?? "h-20 w-20")
      }
    >
      {state === "loading" && (
        <span className="absolute inset-0 animate-pulse bg-secondary" aria-hidden />
      )}
      {state === "error" ? (
        <span className="absolute inset-0 flex items-center justify-center text-[10px] text-muted-foreground">
          Immagine n/d
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setState("ok")}
          onError={() => setState("error")}
          className="h-full w-full object-cover"
        />
      )}
    </span>
  );
}

function QtyControl({
  qty,
  onAdd,
  onRemoveOne,
  name,
}: {
  qty: number;
  onAdd: () => void;
  onRemoveOne: () => void;
  name: string;
}) {
  if (qty === 0) {
    return (
      <button onClick={onAdd} className="btn btn-primary btn-sm">
        <Plus className="h-4 w-4" aria-hidden />
        Aggiungi
      </button>
    );
  }
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card p-0.5">
      <button
        onClick={onRemoveOne}
        className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
        aria-label={`Rimuovi un'unità di ${name}`}
      >
        <Minus className="h-4 w-4" aria-hidden />
      </button>
      <span className="min-w-6 text-center text-sm font-semibold tabular-nums" aria-live="polite">
        {qty}
      </span>
      <button
        onClick={onAdd}
        className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
        aria-label={`Aggiungi un'unità di ${name}`}
      >
        <Plus className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}

function ProductCard({
  product,
  qty,
  onAdd,
  onRemoveOne,
  onDetail,
  onDeleteProduct,
  deleteLabel,
}: {
  product: Product;
  qty: number;
  onAdd: () => void;
  onRemoveOne: () => void;
  onDetail: () => void;
  onDeleteProduct?: () => void;
  deleteLabel?: string;
}) {
  const fp = getFootprint(product);
  return (
    <article
      className={
        "flex gap-2.5 rounded-xl border p-2 transition-colors " +
        (qty > 0 ? "border-accent/60 bg-accent/5" : "border-border bg-card hover:bg-secondary/40")
      }
    >
      <button onClick={onDetail} className="flex-shrink-0" aria-label={`Dettagli ${product.nome}`}>
        <ProductThumb src={product.immagine_url} alt={product.nome} className="h-16 w-16" />
      </button>
      <div className="flex min-w-0 flex-1 flex-col">
        <button onClick={onDetail} className="text-left">
          <h4 className="line-clamp-2 text-xs font-medium leading-snug">{product.nome}</h4>
        </button>
        <p className="mt-0.5 text-[11px] text-muted-foreground">
          {product.categoria} · {fp.w}×{fp.d} cm
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-sm font-semibold tabular-nums text-primary">
            {product.prezzo > 0 ? formatPrice(product.prezzo) : "Prodotto personale"}
          </span>
          {qty > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-foreground">
              <Check className="h-3 w-3" aria-hidden />
              Aggiunto
            </span>
          )}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 pt-1.5">
          <QtyControl qty={qty} onAdd={onAdd} onRemoveOne={onRemoveOne} name={product.nome} />
          {onDeleteProduct && (
            <button
              onClick={onDeleteProduct}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              aria-label={deleteLabel}
            >
              <Trash2 className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function ProductDetail({
  product,
  qty,
  onAdd,
  onRemoveOne,
  onClose,
}: {
  product: Product;
  qty: number;
  onAdd: () => void;
  onRemoveOne: () => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    ref.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  const fp = getFootprint(product);
  return (
    <div className="no-print fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <div className="absolute inset-0 bg-ink/40" onClick={onClose} aria-hidden />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={product.nome}
        tabIndex={-1}
        className="surface relative w-full max-w-md overflow-hidden rounded-t-2xl outline-none sm:rounded-xl"
      >
        <div className="flex items-start gap-3 p-5">
          <ProductThumb src={product.immagine_url} alt={product.nome} className="h-28 w-28" />
          <div className="min-w-0 flex-1">
            <p className="eyebrow">{product.categoria}</p>
            <h3 className="mt-1 text-lg leading-snug">{product.nome}</h3>
            <p className="mt-1 text-sm font-semibold tabular-nums text-primary">
              {product.prezzo > 0 ? formatPrice(product.prezzo) : "Prodotto personale"}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Ingombro {fp.w}×{fp.d} cm
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary"
            aria-label="Chiudi dettaglio prodotto"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        {product.descrizione && (
          <p className="px-5 pb-3 text-sm text-muted-foreground">{product.descrizione}</p>
        )}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-secondary/40 p-4">
          <QtyControl qty={qty} onAdd={onAdd} onRemoveOne={onRemoveOne} name={product.nome} />
          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Scheda prodotto
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectPanel({
  grouped,
  total,
  itemCount,
  onAdd,
  onRemoveOne,
  onShowInRoom,
  selectedProductId,
  onOpenCatalog,
}: {
  grouped: { product: Product; qty: number }[];
  total: number;
  itemCount: number;
  onAdd: (p: Product) => void;
  onRemoveOne: (id: string) => void;
  onShowInRoom: (id: string) => void;
  selectedProductId: string | null;
  onOpenCatalog: () => void;
}) {
  if (grouped.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border px-4 py-10 text-center">
        <p className="text-sm">Nessun arredo nel progetto</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Apri il catalogo e aggiungi il primo arredo.
        </p>
        <button onClick={onOpenCatalog} className="btn btn-primary btn-sm mt-4">
          Apri catalogo
        </button>
      </div>
    );
  }
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1 max-h-[52vh] lg:max-h-none">
        {grouped.map(({ product, qty }) => {
          const selected = product.id === selectedProductId;
          return (
            <div
              key={product.id}
              className={
                "flex gap-3 rounded-xl border p-2.5 transition-colors " +
                (selected
                  ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                  : "border-border bg-card hover:bg-secondary/40")
              }
            >
              <button
                onClick={() => onShowInRoom(product.id)}
                className="flex min-w-0 flex-1 gap-3 text-left"
              >
                <ProductThumb src={product.immagine_url} alt={product.nome} className="h-16 w-16" />
                <span className="min-w-0 flex-1">
                  <span className="line-clamp-2 block text-xs font-medium leading-snug">
                    {product.nome}
                  </span>
                  <span className="mt-1 block text-[11px] text-muted-foreground">
                    {qty} × {formatPrice(product.prezzo)}
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold tabular-nums">
                    {formatPrice(product.prezzo * qty)}
                  </span>
                </span>
              </button>
              <div className="flex flex-col items-end justify-between gap-1">
                <QtyControl
                  qty={qty}
                  onAdd={() => onAdd(product)}
                  onRemoveOne={() => onRemoveOne(product.id)}
                  name={product.nome}
                />
                <button
                  onClick={() => onShowInRoom(product.id)}
                  className="text-[11px] text-primary underline-offset-2 hover:underline"
                >
                  Mostra nella stanza
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
        <span className="text-xs text-muted-foreground">
          {itemCount} {itemCount === 1 ? "pezzo" : "pezzi"}
        </span>
        <span className="text-base font-semibold tabular-nums text-primary">
          {formatPrice(total)}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Room canvas with drag & drop                                       */
/* ------------------------------------------------------------------ */

function RoomCanvas({
  roomWidthCm,
  roomLengthCm,
  wallColor,
  openings,
  items,
  setItems,
  customProducts,
  selectedUid,
  setSelectedUid,
  onRemove,
  onRotate,
  zoom,
  onFitZoom,
  fitRequest,
  showGrid,
  centerRequest,
  onOpenCatalog,
}: {
  roomWidthCm: number;
  roomLengthCm: number;
  wallColor: string;
  openings: RoomOpening[];
  items: PlacedItem[];
  setItems: React.Dispatch<React.SetStateAction<PlacedItem[]>>;
  customProducts: Product[];
  selectedUid: string | null;
  setSelectedUid: (u: string | null) => void;
  onRemove: (u: string) => void;
  onRotate: () => void;
  zoom: number;
  onFitZoom: (zoom: number) => void;
  fitRequest: number;
  showGrid: boolean;
  centerRequest: number;
  onOpenCatalog: () => void;
}) {
  const findProduct = (id: string) =>
    PRODUCTS.find((x) => x.id === id) ?? customProducts.find((x) => x.id === id);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const selectedRef = useRef<HTMLDivElement | null>(null);
  const lastViewportWidthRef = useRef<number | null>(null);
  const [dragging, setDragging] = useState(false);

  const fitToViewport = useCallback(() => {
    const viewport = scrollRef.current;
    if (!viewport || typeof window === "undefined") return;

    const rect = viewport.getBoundingClientRect();
    const availableHeight = Math.max(180, window.innerHeight - Math.max(rect.top, 80) - 20);
    const heightAtFullWidth = viewport.clientWidth * (roomLengthCm / roomWidthCm);
    if (!Number.isFinite(heightAtFullWidth) || heightAtFullWidth <= 0) return;

    const fittedZoom = Math.floor(
      clamp((availableHeight / heightAtFullWidth) * 100, ZOOM_MIN, 100),
    );
    onFitZoom(fittedZoom);

    requestAnimationFrame(() => {
      viewport.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }, [onFitZoom, roomLengthCm, roomWidthCm]);

  // Keep the complete room visible on first render, when its dimensions
  // change, and whenever the available column width changes.
  useEffect(() => {
    const viewport = scrollRef.current;
    if (!viewport) return;

    // Ignore height-only changes produced by manual zoom. Observing every
    // resize previously caused zoom +/- to snap immediately back to "fit".
    lastViewportWidthRef.current = null;
    const fitWhenWidthChanges = () => {
      const nextWidth = viewport.getBoundingClientRect().width;
      const previousWidth = lastViewportWidthRef.current;
      if (previousWidth !== null && Math.abs(nextWidth - previousWidth) < 1) return;
      lastViewportWidthRef.current = nextWidth;
      fitToViewport();
    };
    const fitAfterWindowResize = () => {
      lastViewportWidthRef.current = viewport.getBoundingClientRect().width;
      fitToViewport();
    };

    const frame = requestAnimationFrame(fitWhenWidthChanges);
    const observer =
      typeof ResizeObserver === "undefined" ? null : new ResizeObserver(fitWhenWidthChanges);
    observer?.observe(viewport);
    window.addEventListener("resize", fitAfterWindowResize);

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("resize", fitAfterWindowResize);
    };
  }, [fitToViewport]);

  useEffect(() => {
    if (fitRequest === 0) return;
    fitToViewport();
  }, [fitRequest, fitToViewport]);

  const dragState = useRef<{
    uid: string;
    startClientX: number;
    startClientY: number;
    origX: number;
    origY: number;
    scale: number;
  } | null>(null);

  // Bring the selected piece into view when requested from the project panel.
  useEffect(() => {
    if (centerRequest === 0) return;
    selectedRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }, [centerRequest]);

  const getScale = () => {
    const el = containerRef.current;
    if (!el) return 1;
    return el.clientWidth / roomWidthCm;
  };

  const onPointerDown = (e: React.PointerEvent, it: PlacedItem) => {
    e.stopPropagation();
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    setSelectedUid(it.uid);
    setDragging(true);
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
        const p = findProduct(it.productId);
        if (!p) return it;
        const fp = getFootprint(p);
        const rotated = it.rotation === 90 || it.rotation === 270;
        const w = rotated ? fp.d : fp.w;
        const h = rotated ? fp.w : fp.d;
        const snap = (v: number) => Math.round(v / SNAP_CM) * SNAP_CM;
        return {
          ...it,
          x: clamp(snap(d.origX + dx), 0, Math.max(0, roomWidthCm - w)),
          y: clamp(snap(d.origY + dy), 0, Math.max(0, roomLengthCm - h)),
        };
      }),
    );
  };

  const onPointerUp = () => {
    dragState.current = null;
    setDragging(false);
  };

  const nudge = (it: PlacedItem, dx: number, dy: number) => {
    const p = findProduct(it.productId);
    if (!p) return;
    const fp = getFootprint(p);
    const rotated = it.rotation === 90 || it.rotation === 270;
    const w = rotated ? fp.d : fp.w;
    const h = rotated ? fp.w : fp.d;
    setItems((prev) =>
      prev.map((x) =>
        x.uid === it.uid
          ? {
              ...x,
              x: clamp(x.x + dx, 0, Math.max(0, roomWidthCm - w)),
              y: clamp(x.y + dy, 0, Math.max(0, roomLengthCm - h)),
            }
          : x,
      ),
    );
  };

  return (
    <div
      id="room-canvas"
      ref={scrollRef}
      className="w-full max-h-[calc(100svh-13rem)] overflow-auto overscroll-contain"
    >
      <div style={{ width: `${zoom}%` }} className="mx-auto">
        <div
          ref={containerRef}
          className="relative mx-auto w-full touch-none select-none overflow-hidden rounded-md border-[6px] shadow-inner"
          style={{
            borderColor: "#8a7863",
            backgroundColor: wallColor,
            aspectRatio: `${roomWidthCm} / ${roomLengthCm}`,
            cursor: dragging ? "grabbing" : "default",
          }}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onClick={() => setSelectedUid(null)}
        >
          {showGrid && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)",
                backgroundSize: `${100 / (roomWidthCm / 100)}% ${100 / (roomLengthCm / 100)}%`,
              }}
            />
          )}

          <RoomOpeningsOverlay
            openings={openings}
            roomWidthCm={roomWidthCm}
            roomLengthCm={roomLengthCm}
          />

          {items.map((it) => {
            const p = findProduct(it.productId);
            if (!p) return null;
            const fp = getFootprint(p);
            const rotated = it.rotation === 90 || it.rotation === 270;
            const wCm = rotated ? fp.d : fp.w;
            const hCm = rotated ? fp.w : fp.d;
            const selected = it.uid === selectedUid;
            const oversized = wCm > roomWidthCm || hCm > roomLengthCm;
            return (
              <div
                key={it.uid}
                ref={selected ? selectedRef : undefined}
                role="button"
                tabIndex={0}
                aria-label={`${p.nome}, rotazione ${it.rotation} gradi${selected ? ", selezionato" : ""}`}
                aria-pressed={selected}
                onPointerDown={(e) => onPointerDown(e, it)}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedUid(it.uid);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedUid(it.uid);
                  }
                  if (!selected) return;
                  if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    nudge(it, -SNAP_CM, 0);
                  }
                  if (e.key === "ArrowRight") {
                    e.preventDefault();
                    nudge(it, SNAP_CM, 0);
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    nudge(it, 0, -SNAP_CM);
                  }
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    nudge(it, 0, SNAP_CM);
                  }
                  if (e.key === "r" || e.key === "R") {
                    e.preventDefault();
                    onRotate();
                  }
                  if (e.key === "Delete" || e.key === "Backspace") {
                    e.preventDefault();
                    onRemove(it.uid);
                  }
                }}
                className={
                  "group absolute overflow-visible rounded-md border-2 bg-card shadow-md transition-shadow " +
                  (dragging ? "cursor-grabbing " : "cursor-grab ") +
                  (selected
                    ? "border-primary shadow-lift outline outline-2 outline-offset-2 outline-primary"
                    : oversized
                      ? "border-dashed border-destructive"
                      : "border-white/70 hover:border-primary/60")
                }
                style={{
                  left: `${(it.x / roomWidthCm) * 100}%`,
                  top: `${(it.y / roomLengthCm) * 100}%`,
                  width: `${(wCm / roomWidthCm) * 100}%`,
                  height: `${(hCm / roomLengthCm) * 100}%`,
                }}
                title={`${p.nome} — ${it.rotation}°`}
              >
                <img
                  src={p.immagine_url}
                  alt=""
                  draggable={false}
                  className="pointer-events-none absolute left-1/2 top-1/2 max-w-none rounded-sm object-cover"
                  style={{
                    width: rotated ? `${(hCm / wCm) * 100}%` : "100%",
                    height: rotated ? `${(wCm / hCm) * 100}%` : "100%",
                    transform: `translate(-50%, -50%) rotate(${it.rotation}deg)`,
                  }}
                />
                {selected && (
                  <>
                    <button
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        onRotate();
                      }}
                      className="absolute -left-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft"
                      aria-label="Ruota di 90 gradi"
                      title="Ruota 90°"
                    >
                      <RotateCw className="h-3.5 w-3.5" aria-hidden />
                    </button>
                    <button
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(it.uid);
                      }}
                      className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-soft"
                      aria-label="Rimuovi arredo"
                      title="Rimuovi"
                    >
                      <X className="h-3.5 w-3.5" aria-hidden />
                    </button>
                    {oversized && (
                      <span className="absolute -bottom-6 left-0 whitespace-nowrap rounded-full bg-destructive px-2 py-0.5 text-[10px] text-destructive-foreground">
                        Non entra nella stanza
                      </span>
                    )}
                  </>
                )}
              </div>
            );
          })}

          {items.length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="text-sm text-ink/70">Apri il catalogo e aggiungi il primo arredo</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenCatalog();
                }}
                className="btn btn-primary btn-sm"
              >
                <Plus className="h-4 w-4" aria-hidden />
                Apri catalogo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* STEP 4 — Summary                                                   */
/* ------------------------------------------------------------------ */

function Step3({
  width,
  length,
  wallColor,
  items,
  openings,
  customProducts,
  user,
  designName,
  setDesignName,
  saveState,
  saveError,
  savedSlug,
  onSave,
  onBack,
  onEditRoom,
  onRestart,
}: {
  width: number;
  length: number;
  wallColor: string;
  items: PlacedItem[];
  openings: RoomOpening[];
  customProducts: Product[];
  user: { email?: string } | null;
  designName: string;
  setDesignName: (v: string) => void;
  saveState: SaveState;
  saveError: string | null;
  savedSlug: string | null;
  onSave: () => void;
  onBack: () => void;
  onEditRoom: () => void;
  onRestart: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [confirmNew, setConfirmNew] = useState(false);
  const [origin, setOrigin] = useState("");
  const confirmDialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setOrigin(window.location.origin), []);

  useEffect(() => {
    if (!confirmNew) return;
    const dialog = confirmDialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setConfirmNew(false);
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [confirmNew]);

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
  const shareUrl = savedSlug && origin ? `${origin}/share/${savedSlug}` : "";
  const wallName = WALL_COLORS.find((c) => c.value === wallColor)?.name;

  const copyLink = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copiato");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Impossibile copiare il link");
    }
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(340px,400px)] lg:gap-8">
      {/* Shopping list */}
      <div className="surface min-w-0 p-5 sm:p-7">
        <div className="mb-6">
          <p className="eyebrow">Passo 4 di 4</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Riepilogo del progetto</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {grouped.length === 0
              ? "Nessun prodotto selezionato."
              : `${grouped.length} prodotti · ${items.length} pezzi · ${openings.length} ${openings.length === 1 ? "apertura" : "aperture"} · stanza ${width} × ${length} m${wallName ? ` · pareti ${wallName}` : ""}`}
          </p>
        </div>

        {openings.length > 0 && (
          <div className="mb-6 rounded-xl border border-border bg-secondary/35 p-4">
            <p className="eyebrow">Porte e finestre</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {openings.map((opening, index) => (
                <li key={opening.uid} className="rounded-lg bg-card px-3 py-2 text-xs">
                  <span className="font-medium">
                    {opening.type === "door" ? "Porta" : "Finestra"} {index + 1}
                  </span>
                  <span className="block text-muted-foreground">
                    {WALL_LABELS[opening.wall]} · {opening.widthCm} × {opening.heightCm} cm
                    {opening.type === "window" ? ` · davanzale ${opening.sillHeightCm} cm` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {grouped.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-14 text-center">
            <p className="text-sm text-muted-foreground">
              Torna alla progettazione e aggiungi arredi alla stanza.
            </p>
            <button onClick={onBack} className="btn btn-primary btn-sm mt-4">
              Modifica arredi
            </button>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden overflow-hidden rounded-xl border border-border sm:block">
              <table className="w-full text-sm">
                <thead className="bg-secondary/70 text-left text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  <tr>
                    <th className="p-3 font-medium">Prodotto</th>
                    <th className="p-3 text-center font-medium">Qtà</th>
                    <th className="p-3 text-right font-medium">Prezzo</th>
                    <th className="p-3 text-right font-medium">Subtotale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {grouped.map(({ product, qty }) => (
                    <tr key={product.id} className="bg-card align-top">
                      <td className="p-3">
                        <div className="flex items-start gap-3">
                          <ProductThumb
                            src={product.immagine_url}
                            alt={product.nome}
                            className="h-14 w-14"
                          />
                          <div className="min-w-0">
                            <p className="leading-snug">{product.nome}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {product.categoria}
                            </p>
                            {product.link && (
                              <a
                                href={product.link}
                                target="_blank"
                                rel="noreferrer"
                                className="no-print text-xs text-primary underline-offset-2 hover:underline"
                              >
                                Scheda prodotto ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-center">
                        <span className="inline-flex min-w-8 items-center justify-center rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold tabular-nums">
                          {qty}
                        </span>
                      </td>
                      <td className="p-3 text-right tabular-nums text-muted-foreground">
                        {formatPrice(product.prezzo)}
                      </td>
                      <td className="p-3 text-right font-semibold tabular-nums">
                        {formatPrice(product.prezzo * qty)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-secondary/50">
                    <td className="p-4 text-right font-medium" colSpan={3}>
                      Totale indicativo
                    </td>
                    <td className="p-4 text-right text-xl font-semibold tabular-nums text-primary">
                      {formatPrice(total)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Mobile list */}
            <div className="space-y-3 sm:hidden">
              {grouped.map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="flex items-start gap-3 rounded-xl border border-border p-3"
                >
                  <ProductThumb
                    src={product.immagine_url}
                    alt={product.nome}
                    className="h-16 w-16"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm leading-snug">{product.nome}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {product.categoria} · qtà {qty} × {formatPrice(product.prezzo)}
                    </p>
                    <p className="mt-1 text-sm font-semibold tabular-nums">
                      {formatPrice(product.prezzo * qty)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
                <span className="text-sm font-medium">Totale indicativo</span>
                <span className="text-lg font-semibold tabular-nums text-primary">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Prezzi indicativi; promozioni e consegna possono variare.
            </p>
          </>
        )}

        <div className="no-print mt-6 flex flex-col gap-3 sm:flex-row">
          <button onClick={onBack} className="btn btn-secondary w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Modifica arredi
          </button>
          <button onClick={onEditRoom} className="btn btn-secondary w-full sm:w-auto">
            Modifica la stanza
          </button>
          <button
            onClick={() => window.print()}
            className="btn btn-secondary w-full sm:ml-auto sm:w-auto"
          >
            <Printer className="h-4 w-4" aria-hidden />
            Stampa
          </button>
        </div>
      </div>

      {/* Actions */}
      <aside className="no-print space-y-4 lg:sticky lg:top-24 lg:self-start">
        <div className="surface p-5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-sm text-muted-foreground">Totale indicativo</span>
            <span className="text-2xl font-semibold tabular-nums text-primary">
              {formatPrice(total)}
            </span>
          </div>

          <div className="mt-4">
            <label className="label" htmlFor="design-name">
              Nome del progetto
            </label>
            <input
              id="design-name"
              type="text"
              value={designName}
              onChange={(e) => setDesignName(e.target.value)}
              placeholder="es. Soggiorno mediterraneo"
              className="field"
            />
          </div>

          {user ? (
            <button
              onClick={onSave}
              disabled={saveState === "saving"}
              className="btn btn-primary mt-4 w-full"
            >
              <Save className="h-4 w-4" aria-hidden />
              {saveState === "saving"
                ? "Salvataggio…"
                : saveState === "saved"
                  ? "Salvato"
                  : "Salva progetto"}
            </button>
          ) : (
            <>
              <Link to="/auth" className="btn btn-primary mt-4 w-full">
                <LogIn className="h-4 w-4" aria-hidden />
                Accedi per salvare
              </Link>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                Il progetto resta su questo dispositivo finché non accedi.
              </p>
            </>
          )}

          {saveState === "error" && (
            <div className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
              {saveError ?? "Errore di salvataggio."}{" "}
              <button onClick={onSave} className="underline underline-offset-2">
                Riprova
              </button>
            </div>
          )}
        </div>

        <div className="surface p-5">
          <p className="eyebrow">Condivisione</p>
          <h3 className="mt-1.5 text-xl">Condividi il progetto</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Il link mostra stanza, arredi e shopping list in sola lettura.
          </p>

          {savedSlug ? (
            <div className="mt-4 space-y-2">
              <input
                type="text"
                readOnly
                aria-label="Link pubblico del progetto"
                value={shareUrl}
                onFocus={(e) => e.currentTarget.select()}
                className="field text-xs"
              />
              <div className="flex gap-2">
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm flex-1"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden />
                  Apri link
                </a>
                <button onClick={copyLink} className="btn btn-secondary btn-sm flex-1">
                  <Share2 className="h-4 w-4" aria-hidden />
                  {copied ? "Link copiato" : "Copia link"}
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-4 rounded-lg border border-dashed border-border px-3 py-4 text-xs text-muted-foreground">
              Salva il progetto per generare il link di condivisione.
            </p>
          )}
        </div>

        <button onClick={() => setConfirmNew(true)} className="btn btn-ghost w-full">
          Nuova configurazione
        </button>
      </aside>

      {confirmNew && (
        <div className="no-print fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-ink/40"
            onClick={() => setConfirmNew(false)}
            aria-hidden
          />
          <div
            ref={confirmDialogRef}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="confirm-new-title"
            aria-describedby="confirm-new-description"
            className="surface relative w-full max-w-sm p-5"
          >
            <h3 id="confirm-new-title" className="text-xl">
              Creare una nuova configurazione?
            </h3>
            <p id="confirm-new-description" className="mt-2 text-sm text-muted-foreground">
              {saveState === "saved"
                ? "Il progetto attuale resta salvato nel tuo account."
                : "Le modifiche non salvate andranno perse."}
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                onClick={() => setConfirmNew(false)}
                className="btn btn-secondary w-full sm:w-auto"
              >
                Annulla
              </button>
              <button
                onClick={() => {
                  setConfirmNew(false);
                  onRestart();
                }}
                className="btn btn-primary w-full sm:w-auto"
              >
                Crea nuova configurazione
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const RENDER_API_PATH = "/api/public/render-room";
// Il render è servito dal backend Lovable, dove LOVABLE_API_KEY è gestita
// automaticamente. Da altri host (es. Vercel) si chiama lo stesso endpoint
// in cross-origin, così la chiave non esiste mai fuori dal backend Lovable.
const RENDER_API_HOST = "https://interior-dreamer-kit.lovable.app";

function renderRoomEndpoint() {
  if (typeof window === "undefined") return RENDER_API_PATH;
  const host = window.location.hostname;
  const isLovableHost =
    host.endsWith(".lovable.app") ||
    host.endsWith(".lovableproject.com") ||
    host === "localhost" ||
    host === "127.0.0.1";
  return isLovableHost ? RENDER_API_PATH : `${RENDER_API_HOST}${RENDER_API_PATH}`;
}

type RenderMode = "creative" | "faithful";

function findRenderProduct(productId: string, customProducts: Product[]) {
  return (
    PRODUCTS.find((product) => product.id === productId) ??
    customProducts.find((product) => product.id === productId)
  );
}

function createLayoutReference(
  width: number,
  length: number,
  wallColor: string,
  openings: RoomOpening[],
  items: PlacedItem[],
  customProducts: Product[],
) {
  const canvas = document.createElement("canvas");
  canvas.width = 1500;
  canvas.height = 1100;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Impossibile creare la planimetria di riferimento");

  const roomWidthCm = width * 100;
  const roomLengthCm = length * 100;
  const planLeft = 70;
  const planTop = 150;
  const planMaxWidth = 940;
  const planMaxHeight = 850;
  const scale = Math.min(planMaxWidth / roomWidthCm, planMaxHeight / roomLengthCm);
  const roomPixelWidth = roomWidthCm * scale;
  const roomPixelHeight = roomLengthCm * scale;
  const roomLeft = planLeft + (planMaxWidth - roomPixelWidth) / 2;
  const roomTop = planTop + (planMaxHeight - roomPixelHeight) / 2;

  context.fillStyle = "#fffdf9";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#2f2923";
  context.font = "700 34px Arial, sans-serif";
  context.fillText("PLANIMETRIA VINCOLANTE — VISTA DALL'ALTO", 70, 62);
  context.font = "22px Arial, sans-serif";
  context.fillStyle = "#695f55";
  context.fillText(
    `${width} × ${length} m · origine coordinate nell'angolo in alto a sinistra`,
    70,
    102,
  );

  context.fillStyle = wallColor;
  context.fillRect(roomLeft, roomTop, roomPixelWidth, roomPixelHeight);
  context.strokeStyle = "rgba(82, 70, 57, 0.18)";
  context.lineWidth = 1;
  for (let x = 50; x < roomWidthCm; x += 50) {
    const pixelX = roomLeft + x * scale;
    context.beginPath();
    context.moveTo(pixelX, roomTop);
    context.lineTo(pixelX, roomTop + roomPixelHeight);
    context.stroke();
  }
  for (let y = 50; y < roomLengthCm; y += 50) {
    const pixelY = roomTop + y * scale;
    context.beginPath();
    context.moveTo(roomLeft, pixelY);
    context.lineTo(roomLeft + roomPixelWidth, pixelY);
    context.stroke();
  }
  context.strokeStyle = "#796b5b";
  context.lineWidth = 16;
  context.strokeRect(roomLeft, roomTop, roomPixelWidth, roomPixelHeight);

  let doorNumber = 0;
  let windowNumber = 0;
  for (const opening of openings) {
    const horizontal = opening.wall === "top" || opening.wall === "bottom";
    const openingStart = opening.offsetCm * scale;
    const openingSize = opening.widthCm * scale;
    const isDoor = opening.type === "door";
    const marker = isDoor ? `D${++doorNumber}` : `F${++windowNumber}`;
    context.strokeStyle = isDoor ? "#b4482f" : "#4b887c";
    context.lineWidth = 20;
    context.beginPath();
    if (horizontal) {
      const y = opening.wall === "top" ? roomTop : roomTop + roomPixelHeight;
      context.moveTo(roomLeft + openingStart, y);
      context.lineTo(roomLeft + openingStart + openingSize, y);
    } else {
      const x = opening.wall === "left" ? roomLeft : roomLeft + roomPixelWidth;
      context.moveTo(x, roomTop + openingStart);
      context.lineTo(x, roomTop + openingStart + openingSize);
    }
    context.stroke();

    context.fillStyle = "#fffdf9";
    const centerX = horizontal
      ? roomLeft + openingStart + openingSize / 2
      : opening.wall === "left"
        ? roomLeft + 24
        : roomLeft + roomPixelWidth - 24;
    const centerY = horizontal
      ? opening.wall === "top"
        ? roomTop + 24
        : roomTop + roomPixelHeight - 24
      : roomTop + openingStart + openingSize / 2;
    context.beginPath();
    context.arc(centerX, centerY, 20, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = isDoor ? "#943520" : "#356b61";
    context.font = "700 17px Arial, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(marker, centerX, centerY + 1);
  }

  const palette = ["#d9a66f", "#8eaaa0", "#c9897c", "#9da6c1", "#b7a2c8", "#d1b765"];
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    const product = findRenderProduct(item.productId, customProducts);
    if (!product) continue;
    const footprint = getFootprint(product);
    const rotated = item.rotation === 90 || item.rotation === 270;
    const occupiedWidth = rotated ? footprint.d : footprint.w;
    const occupiedDepth = rotated ? footprint.w : footprint.d;
    const centerX = roomLeft + (item.x + occupiedWidth / 2) * scale;
    const centerY = roomTop + (item.y + occupiedDepth / 2) * scale;
    const baseWidth = footprint.w * scale;
    const baseDepth = footprint.d * scale;

    context.save();
    context.translate(centerX, centerY);
    context.rotate((item.rotation * Math.PI) / 180);
    context.fillStyle = palette[index % palette.length];
    context.strokeStyle = "#40372f";
    context.lineWidth = 3;
    context.fillRect(-baseWidth / 2, -baseDepth / 2, baseWidth, baseDepth);
    context.strokeRect(-baseWidth / 2, -baseDepth / 2, baseWidth, baseDepth);
    context.strokeStyle = "#40372f";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(0, 4);
    context.lineTo(0, -Math.max(14, baseDepth / 2 - 8));
    context.stroke();
    context.beginPath();
    context.moveTo(-8, -Math.max(10, baseDepth / 2 - 12));
    context.lineTo(0, -Math.max(18, baseDepth / 2 - 4));
    context.lineTo(8, -Math.max(10, baseDepth / 2 - 12));
    context.fillStyle = "#40372f";
    context.fill();
    context.restore();

    context.fillStyle = "#fffdf9";
    context.beginPath();
    context.arc(centerX, centerY, 24, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "#40372f";
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = "#2f2923";
    context.font = "700 18px Arial, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(`E${index + 1}`, centerX, centerY + 1);
  }

  const legendX = 1060;
  context.textAlign = "left";
  context.textBaseline = "alphabetic";
  context.fillStyle = "#2f2923";
  context.font = "700 25px Arial, sans-serif";
  context.fillText("Elementi", legendX, 165);
  context.font = "18px Arial, sans-serif";
  items.forEach((item, index) => {
    const product = findRenderProduct(item.productId, customProducts);
    if (!product) return;
    const footprint = getFootprint(product);
    const rotated = item.rotation === 90 || item.rotation === 270;
    const occupiedWidth = rotated ? footprint.d : footprint.w;
    const occupiedDepth = rotated ? footprint.w : footprint.d;
    const lineY = 205 + index * 58;
    context.fillStyle = "#2f2923";
    context.font = "700 18px Arial, sans-serif";
    context.fillText(`E${index + 1} · ${product.nome.slice(0, 31)}`, legendX, lineY);
    context.fillStyle = "#695f55";
    context.font = "16px Arial, sans-serif";
    context.fillText(
      `x ${Math.round(item.x)} · y ${Math.round(item.y)} cm · ${occupiedWidth}×${occupiedDepth} · ${item.rotation}°`,
      legendX,
      lineY + 24,
    );
  });

  const openingsStart = Math.min(870, 230 + items.length * 58);
  context.fillStyle = "#2f2923";
  context.font = "700 25px Arial, sans-serif";
  context.fillText("Aperture", legendX, openingsStart);
  context.font = "17px Arial, sans-serif";
  openings.forEach((opening, index) => {
    context.fillStyle = opening.type === "door" ? "#943520" : "#356b61";
    context.fillText(
      `${opening.type === "door" ? "Porta" : "Finestra"} ${index + 1} · ${WALL_LABELS[opening.wall]} · offset ${opening.offsetCm} cm`,
      legendX,
      openingsStart + 34 + index * 30,
    );
  });

  return canvas.toDataURL("image/png");
}

function buildRenderPrompt(
  width: number,
  length: number,
  wallColor: string,
  openings: RoomOpening[],
  items: PlacedItem[],
  customProducts: Product[],
  renderMode: RenderMode,
  feedback?: { likes: number; dislikes: number; lastFeedback: "like" | "dislike" | null },
): { prompt: string; images: string[] } {
  const colorName = WALL_COLORS.find((c) => c.value === wallColor)?.name.toLowerCase() ?? "neutro";

  // Aggregate placed pieces by product id and attach product references once.
  const counts = new Map<string, number>();
  for (const it of items) counts.set(it.productId, (counts.get(it.productId) ?? 0) + 1);

  const images: string[] = [];
  const pieceLines: string[] = [];
  const productReferences = new Map<string, string[]>();
  let refIndex = renderMode === "faithful" ? 1 : 0;

  for (const [id, qty] of counts) {
    const p = findRenderProduct(id, customProducts);
    if (!p) continue;

    // Collect reference photos: the main image + any extra reference photos.
    const refs = [p.immagine_url, ...(p.reference_images ?? [])].filter(Boolean);
    const refTags: string[] = [];
    for (const url of refs) {
      if (images.length >= (renderMode === "faithful" ? 11 : 12)) break;
      refIndex += 1;
      images.push(url);
      refTags.push(`[REF ${refIndex}]`);
    }
    productReferences.set(id, refTags);

    const link = p.link ? ` — scheda prodotto: ${p.link}` : "";
    const note = p.descrizione ? ` (${p.descrizione})` : "";
    pieceLines.push(
      `- ${qty}× ${p.nome}${note}${link}${refTags.length ? " " + refTags.join(" ") : ""}`,
    );
  }

  const roomWidthCm = width * 100;
  const roomLengthCm = length * 100;
  const faithfulLines = items.flatMap((item, index) => {
    const product = findRenderProduct(item.productId, customProducts);
    if (!product) return [];
    const footprint = getFootprint(product);
    const rotated = item.rotation === 90 || item.rotation === 270;
    const occupiedWidth = rotated ? footprint.d : footprint.w;
    const occupiedDepth = rotated ? footprint.w : footprint.d;
    const centerX = item.x + occupiedWidth / 2;
    const centerY = item.y + occupiedDepth / 2;
    const refs = productReferences.get(item.productId) ?? [];
    return [
      `[ELEMENTO E${index + 1}] ${product.nome}${refs.length ? ` ${refs.join(" ")}` : ""}: impronta a terra ${occupiedWidth}×${occupiedDepth} cm; angolo superiore sinistro x=${Math.round(item.x)} cm, y=${Math.round(item.y)} cm; centro x=${Math.round(centerX)} cm (${Math.round((centerX / roomWidthCm) * 100)}% della larghezza), y=${Math.round(centerY)} cm (${Math.round((centerY / roomLengthCm) * 100)}% della lunghezza); rotazione ${item.rotation}°; distanze libere dalle pareti sinistra=${Math.round(item.x)} cm, destra=${Math.round(roomWidthCm - item.x - occupiedWidth)} cm, alta=${Math.round(item.y)} cm, bassa=${Math.round(roomLengthCm - item.y - occupiedDepth)} cm.`,
    ];
  });

  const piecesBlock =
    renderMode === "faithful"
      ? faithfulLines.length
        ? `La PRIMA immagine allegata è la [REF 1 — PLANIMETRIA VINCOLANTE]. Ogni rettangolo E1, E2, ecc. corrisponde esattamente agli elementi elencati qui. Mantieni numero, posizione, ingombro relativo e orientamento di ogni elemento:\n${faithfulLines.join("\n")}`
        : "La [REF 1 — PLANIMETRIA VINCOLANTE] mostra una stanza vuota: non aggiungere arredi."
      : pieceLines.length
        ? `Riproduci fedelmente ogni prodotto usando le foto di riferimento numerate qui sotto (materiali, colore, forma, texture e proporzioni devono corrispondere all'originale):\n${pieceLines.join("\n")}`
        : "La stanza è vuota, minimalista.";

  const openingsBlock = openings.length
    ? `Rispetta esattamente queste aperture architettoniche: ${openings
        .map((opening, index) => {
          const sill = opening.type === "window" ? `, davanzale a ${opening.sillHeightCm} cm` : "";
          return `${opening.type === "door" ? "porta" : "finestra"} ${index + 1} sulla ${WALL_LABELS[opening.wall].toLowerCase()}, ${opening.widthCm}×${opening.heightCm} cm, a ${opening.offsetCm} cm dall'angolo${sill}`;
        })
        .join("; ")}.`
    : "La stanza non ha aperture visibili nell'inquadratura.";

  const feedbackLines: string[] = [];
  if (feedback && (feedback.likes > 0 || feedback.dislikes > 0)) {
    if (feedback.lastFeedback === "dislike") {
      feedbackLines.push(
        renderMode === "faithful"
          ? `IMPORTANTE — feedback cliente sul render precedente: NEGATIVO. Le posizioni non rispettavano abbastanza la piantina. Correggi rigorosamente geometria, distanze dalle pareti, orientamenti e aperture seguendo la [REF 1] e le coordinate di ogni ELEMENTO. NON ricomporre la stanza.`
          : `IMPORTANTE — feedback cliente sul render precedente: NEGATIVO. I prodotti non erano abbastanza fedeli alle foto di riferimento. In questa nuova versione: aumenta drasticamente la fedeltà visiva ad ogni [REF] (materiali, colori esatti, texture, forma, proporzioni, dettagli di finitura). NON inventare varianti, NON stilizzare, NON modificare colori o tessuti. Mantieni composizione e inquadratura della stanza.`,
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

  const layoutConstraint =
    renderMode === "faithful"
      ? `MODALITÀ FEDELE ALLA PIANTA — VINCOLO PRIORITARIO: trasforma la planimetria [REF 1] in una vista prospettica fotorealistica senza cambiare il layout. Non spostare, centrare, allineare, raggruppare, eliminare, duplicare o sostituire alcun ELEMENTO. Non cambiare la parete, la posizione o la dimensione relativa di porte e finestre. Mantieni gli stessi rapporti davanti/dietro, destra/sinistra e le stesse distanze relative. Scegli la posizione della fotocamera in modo da mostrare il layout, senza alterarlo per migliorare la composizione. La fedeltà geometrica ha priorità assoluta sullo stile.`
      : "Puoi scegliere l'inquadratura più armoniosa mantenendo tutti i prodotti richiesti.";

  const prompt = [
    `Fotografia interior design fotorealistica di una stanza di ${width}×${length} metri,`,
    `pareti color ${colorName} (${wallColor}), pavimento in parquet chiaro a listoni,`,
    layoutConstraint,
    openingsBlock,
    `luce naturale morbida coerente con le finestre configurate, atmosfera Maisons du Monde calda e accogliente,`,
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
  openings,
  items,
  customProducts,
}: {
  width: number;
  length: number;
  wallColor: string;
  openings: RoomOpening[];
  items: PlacedItem[];
  customProducts: Product[];
}) {
  const [src, setSrc] = useState<string | null>(null);
  const [isFinal, setIsFinal] = useState(false);
  const [loadingMode, setLoadingMode] = useState<RenderMode | null>(null);
  const [lastMode, setLastMode] = useState<RenderMode>("creative");
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"like" | "dislike" | null>(null);
  const [feedbackStats, setFeedbackStats] = useState<{
    likes: number;
    dislikes: number;
    lastFeedback: "like" | "dislike" | null;
  }>({ likes: 0, dislikes: 0, lastFeedback: null });

  const generate = async (renderMode: RenderMode) => {
    setLoadingMode(renderMode);
    setLastMode(renderMode);
    setError(null);
    setSrc(null);
    setIsFinal(false);
    setFeedback(null);
    const { prompt, images } = buildRenderPrompt(
      width,
      length,
      wallColor,
      openings,
      items,
      customProducts,
      renderMode,
      feedbackStats,
    );
    try {
      const requestImages =
        renderMode === "faithful"
          ? [
              createLayoutReference(width, length, wallColor, openings, items, customProducts),
              ...images,
            ]
          : images;
      const res = await fetch(renderRoomEndpoint(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, images: requestImages }),
      });
      if (!res.ok || !res.body) {
        throw new Error(await res.text().catch(() => "Errore generazione"));
      }
      let sawCompleted = false;
      let streamError: string | undefined;
      const parser = createParser({
        onEvent(event) {
          let payload: {
            type?: string;
            error?: { message?: string };
            b64_json?: string;
          };
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
          if (typeof payload.b64_json !== "string") return;
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
      if (!sawCompleted) throw new Error("Nessuna immagine ricevuta");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Errore generazione");
    } finally {
      setLoadingMode(null);
    }
  };

  return (
    <div className="no-print mt-6 rounded-xl border border-border bg-secondary/45 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="eyebrow">Visualizzazione AI</p>
          <p className="mt-1 text-sm font-medium">Render fotorealistico</p>
          <p className="text-xs text-muted-foreground">
            Un'anteprima realistica della stanza in pochi secondi.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <button
            type="button"
            onClick={() => generate("creative")}
            disabled={loadingMode !== null}
            className="btn btn-secondary btn-sm w-full sm:w-auto"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            {loadingMode === "creative"
              ? "Generazione…"
              : src
                ? "Rigenera liberamente"
                : "Genera render 3D"}
          </button>
          <button
            type="button"
            onClick={() => generate("faithful")}
            disabled={loadingMode !== null}
            className="btn btn-primary btn-sm w-full sm:w-auto"
          >
            <Crosshair className="h-4 w-4" aria-hidden />
            {loadingMode === "faithful"
              ? "Generazione fedele…"
              : src && lastMode === "faithful"
                ? "Rigenera fedele"
                : "Render fedele alla pianta"}
          </button>
        </div>
      </div>

      <p className="mt-3 rounded-lg border border-primary/15 bg-background/75 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Render fedele alla pianta</span> usa una
        planimetria tecnica con coordinate e rotazioni per mantenere arredi, porte e finestre nelle
        posizioni impostate.
      </p>

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
              alt={
                lastMode === "faithful"
                  ? "Render 3D fedele alla pianta della stanza"
                  : "Render 3D della stanza"
              }
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
                    : lastMode === "faithful"
                      ? "Il render rispetta posizioni, porte e finestre della pianta?"
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

function CustomProductUploader({ onAdd }: { onAdd: (p: Product, save: boolean) => void }) {
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
  const [saveToLibrary, setSaveToLibrary] = useState(false);

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
    setSaveToLibrary(false);
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
    onAdd(
      {
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
      },
      saveToLibrary,
    );
    reset();
  };

  return (
    <div className="mb-4 space-y-3 rounded-xl border border-dashed border-border bg-secondary/30 p-3">
      <p className="text-xs font-medium">Aggiungi un tuo prodotto</p>
      <p className="text-[11px] leading-snug text-muted-foreground">
        Più foto carichi (angolazioni diverse, dettagli materiali) e più il render 3D sarà fedele al
        prodotto reale.
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
                onClick={() => setImages((prev) => prev.filter((_, j) => j !== i))}
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
        className="field text-xs"
      />

      <input
        type="url"
        placeholder="Link scheda prodotto (opzionale)"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="field text-xs"
      />

      <input
        type="text"
        placeholder="Descrizione breve (materiale, colore…)"
        value={descrizione}
        onChange={(e) => setDescrizione(e.target.value)}
        className="field text-xs"
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
            className="field text-xs"
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
            className="field text-xs"
          />
          cm
        </label>
      </div>

      {error && (
        <p className="rounded-md bg-destructive/10 px-2 py-1 text-[11px] text-destructive">
          {error}
        </p>
      )}

      <div className="flex items-center gap-2">
        <button
          type="button"
          role="checkbox"
          aria-checked={saveToLibrary}
          aria-label='Salva in "Prodotti salvati"'
          title='Salva in "Prodotti salvati" per riutilizzarlo in futuro'
          onClick={() => setSaveToLibrary((v) => !v)}
          className={
            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border transition-colors " +
            (saveToLibrary
              ? "border-primary bg-primary"
              : "border-input bg-background hover:border-primary/60")
          }
        >
          {saveToLibrary && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-primary-foreground"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>
        <button
          onClick={submit}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Plus className="h-3.5 w-3.5" />
          Aggiungi al catalogo
        </button>
      </div>
      <p className="text-[10px] leading-snug text-muted-foreground">
        Spunta la casella per salvare il prodotto in "Prodotti salvati" e riutilizzarlo nei prossimi
        progetti.
      </p>
    </div>
  );
}
