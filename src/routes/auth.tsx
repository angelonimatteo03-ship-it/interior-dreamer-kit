import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Accedi — Configuratore Stanze MDM" },
      {
        name: "description",
        content:
          "Accedi o crea un account per salvare e condividere i tuoi progetti stanza Maisons du Monde.",
      },
      { property: "og:title", content: "Accedi — Configuratore Stanze MDM" },
      {
        property: "og:description",
        content: "Salva e condividi i tuoi progetti stanza Maisons du Monde.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        navigate({ to: "/my-designs", replace: true });
      }
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        setMessage("Controlla la tua email per confermare l'account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate({ to: "/my-designs", replace: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Errore durante l'autenticazione");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/my-designs` },
    });
    if (error) {
      setError(error.message || "Errore Google Sign In");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md">
        <div className="mb-7 text-center">
          <p className="eyebrow">Maisons du Monde</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Configuratore Stanze</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Accedi per ritrovare e condividere i tuoi progetti."
              : "Crea un account: bastano email e password."}
          </p>
        </div>

        <div className="surface p-6 sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field"
                placeholder="nome@studio.it"
              />
            </div>
            <div>
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field"
                placeholder="Almeno 6 caratteri"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </p>
            )}
            {message && (
              <p className="rounded-lg bg-accent/15 px-3 py-2 text-xs text-foreground">
                {message}
              </p>
            )}

            <button type="submit" disabled={loading} className="btn btn-primary w-full">
              {loading ? "Attendere…" : mode === "signin" ? "Accedi" : "Registrati"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              oppure
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <button onClick={handleGoogle} className="btn btn-secondary w-full">
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continua con Google
          </button>

          <p className="mt-5 text-center text-xs text-muted-foreground">
            {mode === "signin" ? "Non hai un account?" : "Hai già un account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "signin" ? "signup" : "signin");
                setError(null);
                setMessage(null);
              }}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {mode === "signin" ? "Registrati" : "Accedi"}
            </button>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            ← Torna al configuratore
          </Link>
        </div>
      </div>
    </div>
  );
}
