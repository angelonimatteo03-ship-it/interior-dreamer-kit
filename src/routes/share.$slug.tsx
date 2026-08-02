import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { loadDesign } from "@/lib/designs.functions";
import { PRODUCTS, getFootprint } from "@/lib/products";
import type { PlacedItem } from "@/lib/designs.functions";

export const Route = createFileRoute("/share/$slug")({
  head: () => ({
    meta: [
      { title: "Progetto condiviso — Configuratore Stanze MDM" },
      { name: "description", content: "Visualizza un progetto stanza condiviso." },
      { property: "og:title", content: "Progetto condiviso — Configuratore Stanze MDM" },
      { property: "og:description", content: "Visualizza un progetto stanza condiviso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: async ({ params, context }) => {
    const options = queryOptions({
      queryKey: ["shared-design", params.slug],
      queryFn: () => loadDesign({ data: params.slug }),
    });
    await context.queryClient.ensureQueryData(options);
    return { slug: params.slug, options };
  },
  component: SharedDesignPage,
  errorComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Link non disponibile</p>
        <h1 className="mt-2 text-3xl">Progetto non trovato</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Il link potrebbe essere scaduto o il progetto è stato reso privato.
        </p>
        <Link to="/" className="btn btn-primary mt-6">
          Torna al configuratore
        </Link>
      </div>
    </div>
  ),
});

type SharedDesign = Awaited<ReturnType<typeof loadDesign>>;

function SharedDesignPage() {
  const { options } = Route.useLoaderData();
  const { data: design } = useSuspenseQuery({ ...options, queryKey: options.queryKey as readonly unknown[] });

  const roomWidthCm = design.width * 100;
  const roomLengthCm = design.length * 100;
  const items = (design.items as unknown as PlacedItem[]) ?? [];

  const grouped = new Map<string, { nome: string; categoria: string; prezzo: number; immagine_url: string; qty: number }>();
  for (const it of items) {
    const p = PRODUCTS.find((x) => x.id === it.productId);
    if (!p) continue;
    const entry = grouped.get(p.id);
    if (entry) entry.qty += 1;
    else
      grouped.set(p.id, {
        nome: p.nome,
        categoria: p.categoria,
        prezzo: p.prezzo,
        immagine_url: p.immagine_url,
        qty: 1,
      });
  }
  const rows = Array.from(grouped.values());
  const total = rows.reduce((s, r) => s + r.prezzo * r.qty, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="eyebrow">Maisons du Monde · Progetto condiviso</p>
            <h1 className="truncate text-lg leading-tight sm:text-xl">{design.name}</h1>
          </div>
          <Link to="/" className="btn btn-primary btn-sm">
            <span className="hidden sm:inline">Crea il tuo progetto</span>
            <span className="sm:hidden">Crea</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-8">
          <section className="surface p-4 sm:p-6">
            <p className="eyebrow">Pianta in scala</p>
            <div
              className="relative mx-auto mt-4 rounded-lg border-[6px] shadow-inner"
              style={{
                borderColor: "#8a7863",
                backgroundColor: design.wall_color,
                aspectRatio: `${design.width} / ${design.length}`,
                maxWidth: "100%",
              }}
            >
              {items.map((it) => {
                const p = PRODUCTS.find((x) => x.id === it.productId);
                if (!p) return null;
                const fp = getFootprint(p);
                const wCm = it.rotation === 90 || it.rotation === 270 ? fp.d : fp.w;
                const hCm = it.rotation === 90 || it.rotation === 270 ? fp.w : fp.d;
                return (
                  <div
                    key={it.uid}
                    className="absolute overflow-hidden rounded-md border border-white/50 shadow-sm"
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
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {design.width} × {design.length} m · {items.length}{" "}
              {items.length === 1 ? "pezzo" : "pezzi"}
            </p>
          </section>

          <aside className="surface p-5 sm:p-6">
            <p className="eyebrow">Shopping list</p>
            <h2 className="mt-1.5 text-2xl">Prodotti selezionati</h2>
            {rows.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">
                Nessun prodotto nella stanza.
              </p>
            ) : (
              <>
                <ul className="mt-4 divide-y divide-border">
                  {rows.map((r) => (
                    <li key={r.nome} className="flex items-center gap-3 py-3">
                      <img
                        src={r.immagine_url}
                        alt={r.nome}
                        className="h-12 w-12 flex-shrink-0 rounded-lg border border-border/60 object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-sm leading-snug">{r.nome}</p>
                        <p className="text-xs text-muted-foreground">
                          {r.categoria} · qtà {r.qty}
                        </p>
                      </div>
                      <span className="text-sm tabular-nums">
                        € {(r.prezzo * r.qty).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-3">
                  <span className="text-sm font-medium">Totale indicativo</span>
                  <span className="text-lg font-semibold tabular-nums text-primary">
                    € {total.toFixed(2)}
                  </span>
                </div>
              </>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}
