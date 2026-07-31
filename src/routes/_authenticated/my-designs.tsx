import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { listMyDesigns, deleteDesign, togglePublic } from "@/lib/designs.functions";
import { useServerFn } from "@tanstack/react-start";
import { Trash2, Share2, ExternalLink, LogOut, Plus } from "lucide-react";

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
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="eyebrow">Maisons du Monde</p>
            <h1 className="truncate text-lg leading-tight sm:text-xl">I miei progetti</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="btn btn-primary btn-sm">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Nuovo progetto</span>
            </Link>
            <button onClick={handleSignOut} className="btn btn-secondary btn-sm">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Esci</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {isLoading ? (
          <p className="text-sm text-muted-foreground">Caricamento…</p>
        ) : designs.length === 0 ? (
          <div className="surface flex flex-col items-center px-6 py-16 text-center">
            <p className="eyebrow">Archivio vuoto</p>
            <h2 className="mt-2 text-2xl">Nessun progetto salvato</h2>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Configura una stanza e salvala: la ritroverai qui, pronta da
              modificare o condividere.
            </p>
            <Link to="/" className="btn btn-primary mt-6">
              Crea il primo progetto
            </Link>
          </div>
        ) : (
          <>
            <p className="mb-5 text-sm text-muted-foreground">
              {designs.length} {designs.length === 1 ? "progetto" : "progetti"} salvati
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {designs.map((d) => (
                <article key={d.id} className="surface flex flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-xl leading-snug">{d.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {d.width} × {d.length} m ·{" "}
                        {new Date(d.updated_at).toLocaleDateString("it-IT")}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(d.id)}
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      aria-label={`Elimina ${d.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <Link
                      to="/"
                      search={{ design: d.id }}
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Apri
                    </Link>

                    <button
                      onClick={() => handleToggle(d.id, d.is_public)}
                      aria-pressed={d.is_public}
                      className={
                        "btn btn-sm " +
                        (d.is_public
                          ? "btn-secondary border-accent/50 text-foreground"
                          : "btn-secondary text-muted-foreground")
                      }
                    >
                      <Share2 className="h-4 w-4" />
                      {d.is_public ? "Pubblico" : "Privato"}
                    </button>
                  </div>

                  {d.is_public && (
                    <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-3">
                      <p className="truncate text-[11px] text-muted-foreground">
                        /share/{d.slug}
                      </p>
                      <div className="mt-2 flex gap-2">
                        <a
                          href={`/share/${d.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm flex-1"
                        >
                          Apri link
                        </a>
                        <button
                          onClick={() => copyLink(d.slug)}
                          className="btn btn-secondary btn-sm flex-1"
                        >
                          {copiedSlug === d.slug ? "Copiato!" : "Copia"}
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
