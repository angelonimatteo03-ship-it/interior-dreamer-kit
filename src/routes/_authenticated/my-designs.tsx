import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { listMyDesigns, deleteDesign, togglePublic } from "@/lib/designs.functions";
import { useServerFn } from "@tanstack/react-start";
import { Trash2, Share2, ExternalLink, LogOut } from "lucide-react";

export const Route = createFileRoute("/_authenticated/my-designs")({
  head: () => ({
    meta: [
      { title: "I miei progetti — Configuratore Stanze MDM" },
      { name: "description", content: "Gestisci i tuoi progetti salvati nel configuratore stanze." },
      { property: "og:title", content: "I miei progetti — Configuratore Stanze MDM" },
      { property: "og:description", content: "Gestisci i tuoi progetti salvati nel configuratore stanze." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MyDesignsPage,
});

function MyDesignsPage() {
  const queryClient = useQueryClient();
  const listFn = useServerFn(listMyDesigns);
  const deleteFn = useServerFn(deleteDesign);
  const toggleFn = useServerFn(togglePublic);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const { data: designs = [], isLoading } = useQuery({
    queryKey: ["my-designs"],
    queryFn: () => listFn(),
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Eliminare questo progetto?")) return;
    await deleteFn({ data: id });
    queryClient.invalidateQueries({ queryKey: ["my-designs"] });
  };

  const handleToggle = async (id: string, current: boolean) => {
    await toggleFn({ data: { id, isPublic: !current } });
    queryClient.invalidateQueries({ queryKey: ["my-designs"] });
  };

  const copyLink = (slug: string) => {
    const url = `${window.location.origin}/share/${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-card/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Maisons du Monde
            </p>
            <h1 className="text-2xl leading-tight">I miei progetti</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Nuovo progetto
            </Link>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary"
            >
              <LogOut className="h-4 w-4" />
              Esci
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Caricamento…</p>
        ) : designs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border py-16 text-center">
            <p className="text-muted-foreground">Nessun progetto salvato.</p>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Crea il primo progetto
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {designs.map((d) => (
              <div
                key={d.id}
                className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="truncate text-lg font-medium">{d.name}</h3>
                  <button
                    onClick={() => handleDelete(d.id)}
                    className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Elimina"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <p className="mt-1 text-xs text-muted-foreground">
                  {d.width} × {d.length} m · {new Date(d.updated_at).toLocaleDateString("it-IT")}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Link
                    to="/"
                    search={{ design: d.id }}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Apri
                  </Link>

                  <button
                    onClick={() => handleToggle(d.id, d.is_public)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      d.is_public
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <Share2 className="h-3.5 w-3.5" />
                    {d.is_public ? "Pubblico" : "Privato"}
                  </button>

                  {d.is_public && (
                    <>
                      <a
                        href={`/share/${d.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Apri link
                      </a>
                      <button
                        onClick={() => copyLink(d.slug)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary"
                      >
                        {copiedSlug === d.slug ? "Copiato!" : "Copia link"}
                      </button>
                    </>
                  )}
                </div>

                {d.is_public && (
                  <p className="mt-3 truncate text-[11px] text-muted-foreground">
                    /share/{d.slug}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
