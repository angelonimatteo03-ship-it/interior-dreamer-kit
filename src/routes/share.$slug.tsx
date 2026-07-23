import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { loadDesign } from "@/lib/designs.functions";
import { PRODUCTS, getFootprint } from "@/lib/products";
import type { PlacedItem } from "@/lib/designs.functions";

export const Route = createFileRoute("/share/$slug")({
  head: ({ params }) => ({
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
  errorComponent: ({ error, reset }) => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Progetto non trovato</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Il link potrebbe essere scaduto o il progetto è stato reso privato.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Torna al configuratore
        </Link>
      </div>
    </div>
  ),
});

type SharedDesign = Awaited<ReturnType<typeof loadDesign>>;

function SharedDesignPage() {
  const { options } = Route.useLoaderData();
  const { data: design } = useSuspenseQuery<SharedDesign>(options);

  const roomWidthCm = design.width * 100;
  const roomLengthCm = design.length * 100;
  const items = (design.items as unknown as PlacedItem[]) ?? [];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Maisons du Monde
            </p>
            <h1 className="text-2xl leading-tight">{design.name}</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Crea il tuo progetto
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {design.width} × {design.length} m
              </p>
            </div>
            <div
              className="relative mx-auto rounded-md border-[6px] shadow-inner"
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
                    className="absolute rounded border border-white/40 shadow-sm"
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
          </div>

          <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-medium">Shopping list</h2>
            {items.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nessun prodotto nella stanza.</p>
            ) : (
              <ul className="divide-y divide-border">
                {items.map((it) => {
                  const p = PRODUCTS.find((x) => x.id === it.productId);
                  if (!p) return null;
                  return (
                    <li key={it.uid} className="flex items-center gap-3 py-3">
                      <img src={p.immagine_url} alt={p.nome} className="h-12 w-12 rounded-md object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{p.nome}</p>
                        <p className="text-xs text-muted-foreground">{p.categoria}</p>
                      </div>
                      <span className="text-sm tabular-nums">€ {p.prezzo.toFixed(2)}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
