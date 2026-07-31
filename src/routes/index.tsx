import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { createParser } from "eventsource-parser";
import { useServerFn } from "@tanstack/react-start";
import {
  PRODUCTS,
  CATEGORIES,
  WALL_COLORS,
  getFootprint,
  type Product,
} from "@/lib/products";
import {
  saveDesign,
  loadMyDesign,
  type PlacedItem as SavedPlacedItem,
} from "@/lib/designs.functions";
import { supabase } from "@/integrations/supabase/client";
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
  Save,
  Share2,
  ExternalLink,
  LogIn,
  User,
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

const SAVED_PRODUCTS_STORAGE_KEY = "mdm.savedProducts.v1";

function App() {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [width, setWidth] = useState(5); // meters
  const [length, setLength] = useState(4);
  const [wallColor, setWallColor] = useState(WALL_COLORS[0].value);
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [customProducts, setCustomProducts] = useState<Product[]>([]);
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [loadingDesign, setLoadingDesign] = useState(false);

  const loadDesignFn = useServerFn(loadMyDesign);

  // Load saved products from localStorage on mount (client-only to avoid SSR mismatch).
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

  // Persist saved products.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(
        SAVED_PRODUCTS_STORAGE_KEY,
        JSON.stringify(savedProducts),
      );
    } catch {
      // ignore quota errors
    }
  }, [savedProducts]);

  // Track auth state for the header.
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user ? { email: data.user.email } : null));
    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
        setUser(session?.user ? { email: session.user.email } : null);
      }
    });
    return () => subscription.subscription.unsubscribe();
  }, []);

  // Load a shared/saved design from the URL ?design= param.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const designId = params.get("design");
    if (!designId) return;
    setLoadingDesign(true);
    loadDesignFn({ data: designId })
      .then((design) => {
        setWidth(Number(design.width));
        setLength(Number(design.length));
        setWallColor(design.wall_color);
        setItems((design.items as unknown as SavedPlacedItem[]) ?? []);
        setStep(2);
      })
      .catch(() => {
        // silently fail; the user can continue with a blank project
      })
      .finally(() => setLoadingDesign(false));
  }, [loadDesignFn]);

  // Merged pool of user-scoped products (session + persisted) — used for
  // lookups by placed items in the 2D canvas, 3D render, and summary.
  const userProducts = useMemo(
    () => [...customProducts, ...savedProducts],
    [customProducts, savedProducts],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header step={step} user={user} />
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8">
        {loadingDesign && (
          <div className="mb-4 rounded-md bg-primary/10 px-4 py-2 text-sm text-primary">
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
          <Step2
            width={width}
            length={length}
            wallColor={wallColor}
            items={items}
            setItems={setItems}
            customProducts={customProducts}
            setCustomProducts={setCustomProducts}
            savedProducts={savedProducts}
            setSavedProducts={setSavedProducts}
            userProducts={userProducts}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <Step3
            width={width}
            length={length}
            wallColor={wallColor}
            items={items}
            customProducts={userProducts}
            user={user}
            onBack={() => setStep(2)}
            onRestart={() => {
              setItems([]);
              setCustomProducts([]);
              setStep(1);
              navigate({ to: "/", replace: true });
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

function Header({
  step,
  user,
}: {
  step: 1 | 2 | 3;
  user: { email?: string } | null;
}) {
  const steps = [
    { n: 1, label: "Stanza" },
    { n: 2, label: "Progettazione" },
    { n: 3, label: "Riepilogo" },
  ];
  return (
    <header className="no-print sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="eyebrow">Maisons du Monde</p>
          <h1 className="truncate text-lg leading-tight sm:text-xl">Configuratore Stanze</h1>
        </div>

        <nav aria-label="Avanzamento" className="hidden md:block">
          <ol className="flex items-center gap-3">
            {steps.map((s, i) => {
              const active = s.n === step;
              const done = s.n < step;
              return (
                <li key={s.n} className="flex items-center gap-3">
                  <div
                    className={
                      "flex items-center gap-2 text-sm transition-colors " +
                      (active
                        ? "text-foreground"
                        : done
                          ? "text-foreground/80"
                          : "text-muted-foreground")
                    }
                    aria-current={active ? "step" : undefined}
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
                      {s.n}
                    </span>
                    <span className={active ? "font-medium" : ""}>{s.label}</span>
                  </div>
                  {i < steps.length - 1 && <span className="h-px w-6 bg-border" />}
                </li>
              );
            })}
          </ol>
        </nav>

        {user ? (
          <Link to="/my-designs" className="btn btn-secondary btn-sm">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">I miei progetti</span>
          </Link>
        ) : (
          <Link to="/auth" className="btn btn-secondary btn-sm">
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Accedi</span>
          </Link>
        )}
      </div>

      {/* Compact mobile stepper */}
      <div className="border-t border-border/60 px-4 py-2 md:hidden">
        <ol className="flex items-center gap-2">
          {steps.map((s) => {
            const active = s.n === step;
            const done = s.n < step;
            return (
              <li key={s.n} className="flex flex-1 flex-col gap-1.5">
                <span
                  className={
                    "h-1 w-full rounded-full " +
                    (active ? "bg-primary" : done ? "bg-accent" : "bg-border")
                  }
                />
                <span
                  className={
                    "text-[11px] " +
                    (active ? "font-medium text-foreground" : "text-muted-foreground")
                  }
                >
                  {s.n}. {s.label}
                </span>
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
    <section className="grid gap-6 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-10">
      <div className="surface space-y-8 p-5 sm:p-7">
        <div>
          <p className="eyebrow">Passo 1 di 3</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">La stanza</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Inserisci le misure reali e scegli la finitura delle pareti.
            Potrai modificarle in qualsiasi momento.
          </p>
        </div>

        <div className="space-y-7">
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
                      "block h-11 w-full rounded-md border transition-shadow " +
                      (selected
                        ? "border-primary/40 shadow-[inset_0_0_0_2px_var(--color-card)]"
                        : "border-border/70")
                    }
                    style={{ backgroundColor: c.value }}
                  />
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
          Continua alla progettazione
          <ArrowRight className="h-4 w-4" />
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
            onChange={(e) =>
              onChange(
                Math.max(min, Math.min(max, Number(e.target.value) || min)),
              )
            }
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
  savedProducts,
  setSavedProducts,
  userProducts,
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
  savedProducts: Product[];
  setSavedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  userProducts: Product[];
  onBack: () => void;
  onNext: () => void;
}) {
  const CUSTOM_CATEGORY = "I miei prodotti";
  const SAVED_CATEGORY = "Prodotti salvati";
  const allCategories = useMemo(
    () => [...CATEGORIES, CUSTOM_CATEGORY, SAVED_CATEGORY],
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

  const removeSaved = (id: string) => {
    setSavedProducts((prev) => prev.filter((p) => p.id !== id));
    setItems((prev) => prev.filter((it) => it.productId !== id));
  };

  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const base =
      category === CUSTOM_CATEGORY
        ? customProducts
        : category === SAVED_CATEGORY
          ? savedProducts
          : PRODUCTS.filter((p) => p.categoria === category);
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((p) => p.nome.toLowerCase().includes(q));
  }, [category, customProducts, savedProducts, query]);

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8">
      {/* Room canvas */}
      <div className="surface p-4 sm:p-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Passo 2 di 3</p>
            <h2 className="mt-1.5 text-2xl sm:text-3xl">Progettazione stanza</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Trascina gli arredi, tocca un pezzo per ruotarlo o rimuoverlo.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={rotateSelected}
              disabled={!selectedUid}
              className="btn btn-secondary btn-sm"
            >
              <RotateCw className="h-4 w-4" />
              Ruota 90°
            </button>
            <button
              onClick={() => selectedUid && removeItem(selectedUid)}
              disabled={!selectedUid}
              className="btn btn-secondary btn-sm text-destructive"
            >
              <Trash2 className="h-4 w-4" />
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
          customProducts={userProducts}
          selectedUid={selectedUid}
          setSelectedUid={setSelectedUid}
          onRemove={removeItem}
        />

        <p className="mt-3 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {width} × {length} m — vista dall'alto in scala · {items.length}{" "}
          {items.length === 1 ? "pezzo" : "pezzi"}
        </p>

        <Render3DPanel
          width={width}
          length={length}
          wallColor={wallColor}
          items={items}
          customProducts={userProducts}
        />
      </div>

      {/* Product sidebar */}
      <aside className="surface flex flex-col p-4 sm:p-5">
        <div>
          <p className="eyebrow">Catalogo</p>
          <h3 className="mt-1 text-xl">Arredi e complementi</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Tocca un prodotto per posizionarlo al centro della stanza.
          </p>
        </div>

        <label className="sr-only" htmlFor="catalog-search">
          Cerca prodotti
        </label>
        <input
          id="catalog-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca per nome…"
          className="field mt-4"
        />

        {/* Category tabs */}
        <div className="-mx-1 mt-3 flex flex-wrap gap-1.5 px-1">
          {allCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={
                  "rounded-full border px-3 py-1.5 text-[11px] font-medium transition-colors " +
                  (active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground")
                }
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          {category === CUSTOM_CATEGORY && (
            <CustomProductUploader
              onAdd={(p, save) => {
                setCustomProducts((prev) => [...prev, p]);
                if (save) {
                  setSavedProducts((prev) => {
                    if (prev.some((x) => x.id === p.id)) return prev;
                    return [...prev, p];
                  });
                }
              }}
            />
          )}

          {category === SAVED_CATEGORY && savedProducts.length > 0 && (
            <p className="mb-3 text-[11px] leading-snug text-muted-foreground">
              I prodotti salvati restano disponibili anche nei progetti futuri su
              questo dispositivo.
            </p>
          )}
        </div>

        <div className="max-h-[560px] space-y-1.5 overflow-y-auto pr-1">
          {filteredProducts.length === 0 && (
            <p className="rounded-lg border border-dashed border-border px-3 py-6 text-center text-xs text-muted-foreground">
              {query.trim()
                ? "Nessun risultato per questa ricerca."
                : category === CUSTOM_CATEGORY
                  ? "Nessun prodotto personale. Caricane uno qui sopra."
                  : category === SAVED_CATEGORY
                    ? "Nessun prodotto salvato. Quando aggiungi un tuo prodotto, spunta la casella per salvarlo qui."
                    : "Nessun prodotto in questa categoria."}
            </p>
          )}
          {filteredProducts.map((p: Product) => {
            const isCustom = category === CUSTOM_CATEGORY;
            const isSaved = category === SAVED_CATEGORY;
            return (
              <div
                key={p.id}
                className="group flex w-full items-center gap-3 rounded-xl border border-transparent p-2 text-left transition-colors hover:border-border hover:bg-secondary/50"
              >
                <button
                  onClick={() => addProduct(p)}
                  className="flex flex-1 items-center gap-3 text-left"
                >
                  <img
                    src={p.immagine_url}
                    alt={p.nome}
                    loading="lazy"
                    className="h-14 w-14 flex-shrink-0 rounded-lg border border-border/60 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-xs leading-snug">{p.nome}</p>
                    <p className="mt-1 text-xs font-semibold tabular-nums text-primary">
                      {p.prezzo > 0
                        ? `€ ${p.prezzo.toFixed(2)}`
                        : `${p.larghezza_cm ?? "?"}×${p.profondita_cm ?? "?"} cm`}
                    </p>
                  </div>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                {(isCustom || isSaved) && (
                  <button
                    onClick={() => (isCustom ? removeCustom(p.id) : removeSaved(p.id))}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    aria-label={
                      isCustom
                        ? "Elimina prodotto personale"
                        : "Rimuovi dai prodotti salvati"
                    }
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      {/* Nav */}
      <div className="col-span-full flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button onClick={onBack} className="btn btn-secondary w-full sm:w-auto">
          <ArrowLeft className="h-4 w-4" />
          Indietro
        </button>
        <button onClick={onNext} className="btn btn-primary w-full sm:w-auto">
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
  width,
  length,
  wallColor,
  items,
  customProducts,
  user,
  onBack,
  onRestart,
}: {
  width: number;
  length: number;
  wallColor: string;
  items: PlacedItem[];
  customProducts: Product[];
  user: { email?: string } | null;
  onBack: () => void;
  onRestart: () => void;
}) {
  const [designName, setDesignName] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [savedSlug, setSavedSlug] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const saveDesignFn = useServerFn(saveDesign);

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

  const handleSave = async () => {
    if (!user) {
      setSaveError("Accedi per salvare il progetto.");
      return;
    }
    const name = designName.trim() || "Progetto senza nome";
    setSaving(true);
    setSaveError(null);
    try {
      const result = await saveDesignFn({
        data: {
          name,
          width,
          length,
          wallColor,
          items,
          isPublic: true,
        },
      });
      setSavedSlug(result.slug);
    } catch (e) {
      setSaveError(e instanceof Error ? e.message : "Errore durante il salvataggio.");
    } finally {
      setSaving(false);
    }
  };

  const shareUrl = savedSlug ? `${window.location.origin}/share/${savedSlug}` : "";

  const copyLink = async () => {
    if (!shareUrl) return;
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-6">
      <div className="surface p-5 sm:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Passo 3 di 3</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Shopping list</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {grouped.length === 0
                ? "Nessun prodotto selezionato."
                : `${grouped.length} prodotti · ${items.length} pezzi · stanza ${width} × ${length} m`}
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="no-print btn btn-secondary w-full sm:w-auto"
          >
            <Printer className="h-4 w-4" />
            Esporta shopping list
          </button>
        </div>

        {grouped.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
            Torna indietro e aggiungi prodotti alla stanza.
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
                          <img
                            src={product.immagine_url}
                            alt={product.nome}
                            className="h-14 w-14 rounded-lg border border-border/60 object-cover"
                          />
                          <div className="min-w-0">
                            <p className="line-clamp-2 leading-snug">{product.nome}</p>
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
                        € {product.prezzo.toFixed(2)}
                      </td>
                      <td className="p-3 text-right font-semibold tabular-nums">
                        € {(product.prezzo * qty).toFixed(2)}
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
                      € {total.toFixed(2)}
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
                  <img
                    src={product.immagine_url}
                    alt={product.nome}
                    className="h-16 w-16 flex-shrink-0 rounded-lg border border-border/60 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm leading-snug">{product.nome}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {product.categoria} · qtà {qty}
                    </p>
                    <p className="mt-1 text-sm font-semibold tabular-nums">
                      € {(product.prezzo * qty).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
                <span className="text-sm font-medium">Totale indicativo</span>
                <span className="text-lg font-semibold tabular-nums text-primary">
                  € {total.toFixed(2)}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="no-print surface p-5 sm:p-8">
        <p className="eyebrow">Condivisione</p>
        <h3 className="mt-2 text-2xl">Salva e condividi il progetto</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Ritrovalo nel tuo account o invialo al cliente con un link pubblico.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="flex-1">
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
          <button
            onClick={handleSave}
            disabled={saving || !user}
            className="btn btn-primary w-full sm:w-auto"
          >
            <Save className="h-4 w-4" />
            {saving ? "Salvataggio…" : "Salva progetto"}
          </button>
        </div>

        {!user && (
          <p className="mt-3 text-xs text-muted-foreground">
            <Link to="/auth" className="font-medium text-primary underline-offset-2 hover:underline">
              Accedi
            </Link>{" "}
            per salvare e condividere il progetto.
          </p>
        )}

        {saveError && (
          <p className="mt-3 rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
            {saveError}
          </p>
        )}

        {savedSlug && (
          <div className="mt-5 rounded-xl border border-border bg-secondary/40 p-4">
            <p className="text-sm font-medium">Progetto salvato</p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="text"
                readOnly
                aria-label="Link pubblico del progetto"
                value={shareUrl}
                onFocus={(e) => e.currentTarget.select()}
                className="field min-w-0 flex-1 text-xs"
              />
              <div className="flex gap-2">
                <a
                  href={shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm flex-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Apri
                </a>
                <button onClick={copyLink} className="btn btn-secondary btn-sm flex-1">
                  <Share2 className="h-4 w-4" />
                  {copied ? "Copiato!" : "Copia link"}
                </button>
              </div>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Chiunque abbia il link può visualizzare il progetto.
            </p>
          </div>
        )}
      </div>

      <div className="no-print flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button onClick={onBack} className="btn btn-secondary w-full sm:w-auto">
          <ArrowLeft className="h-4 w-4" />
          Modifica stanza
        </button>
        <button onClick={onRestart} className="btn btn-ghost w-full sm:w-auto">
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

function CustomProductUploader({
  onAdd,
}: {
  onAdd: (p: Product, save: boolean) => void;
}) {
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
        Spunta la casella per salvare il prodotto in "Prodotti salvati" e
        riutilizzarlo nei prossimi progetti.
      </p>
    </div>
  );
}


