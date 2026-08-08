import { createFileRoute } from "@tanstack/react-router";

type GatewayImage = {
  type?: string;
  image_url?: { url?: string };
};

type GatewayResponse = {
  choices?: Array<{
    message?: {
      images?: GatewayImage[];
      content?: string | Array<GatewayImage>;
    };
  }>;
  error?: { message?: string };
};

const ALLOWED_ORIGINS = [
  "https://interior-dreamer-kit.vercel.app",
  "https://interior-dreamer-kit.lovable.app",
];

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  try {
    const { hostname, protocol } = new URL(origin);
    if (protocol !== "https:" && hostname !== "localhost" && hostname !== "127.0.0.1") {
      return false;
    }
    return (
      hostname.endsWith(".lovable.app") ||
      hostname.endsWith(".lovableproject.com") ||
      hostname.endsWith(".vercel.app") ||
      hostname === "localhost" ||
      hostname === "127.0.0.1"
    );
  } catch {
    return false;
  }
}

function corsHeaders(origin: string | null): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": isAllowedOrigin(origin)
      ? (origin as string)
      : ALLOWED_ORIGINS[1],
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function completedImageEvent(base64: string) {
  return `event: image_generation.completed\ndata: ${JSON.stringify({ b64_json: base64 })}\n\n`;
}

function toBase64(bytes: Uint8Array) {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...Array.from(bytes.subarray(i, i + chunk)));
  }
  return btoa(binary);
}

async function imageUrlToBase64(url: string) {
  const dataUrl = url.match(/^data:image\/[a-zA-Z0-9.+-]+;base64,(.+)$/s);
  if (dataUrl) return dataUrl[1];

  const response = await fetch(url);
  if (!response.ok) throw new Error("Impossibile scaricare il render generato");
  return toBase64(new Uint8Array(await response.arrayBuffer()));
}

/**
 * Render fotorealistico via Lovable AI Gateway.
 * Ospitata sul backend Lovable (dove LOVABLE_API_KEY è gestita
 * automaticamente); il frontend, anche su Vercel, chiama questo endpoint
 * in cross-origin, così nessun runtime esterno legge la chiave.
 */
export const Route = createFileRoute("/api/public/render-room")({
  server: {
    handlers: {
      OPTIONS: async ({ request }) =>
        new Response(null, { status: 204, headers: corsHeaders(request.headers.get("origin")) }),
      POST: async ({ request }) => {
        const cors = corsHeaders(request.headers.get("origin"));
        try {
          const { prompt, images } = (await request.json().catch(() => ({}))) as {
            prompt?: string;
            images?: string[];
          };

          if (!prompt || typeof prompt !== "string") {
            return new Response("Descrizione della stanza mancante", {
              status: 400,
              headers: cors,
            });
          }

          const apiKey = process.env["LOVABLE_API_KEY"];
          if (!apiKey) {
            return new Response(
              "Il servizio di rendering non è disponibile in questo ambiente.",
              { status: 503, headers: cors },
            );
          }

          const references = (Array.isArray(images) ? images : [])
            .filter((url) => typeof url === "string" && url.length > 0)
            .slice(0, 12);

          const content: Array<
            | { type: "text"; text: string }
            | { type: "image_url"; image_url: { url: string } }
          > = [{ type: "text", text: prompt }];
          for (const url of references) {
            content.push({ type: "image_url", image_url: { url } });
          }

          const upstream = await fetch(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "google/gemini-2.5-flash-image",
                messages: [{ role: "user", content }],
                modalities: ["image", "text"],
                stream: false,
              }),
            },
          );

          if (upstream.status === 429) {
            return new Response(
              "Troppe richieste di render in poco tempo. Attendi qualche istante e riprova.",
              { status: 429, headers: cors },
            );
          }
          if (upstream.status === 402) {
            return new Response(
              "Crediti AI esauriti: ricarica il credito del progetto per generare nuovi render.",
              { status: 402, headers: cors },
            );
          }

          const result = (await upstream.json().catch(() => null)) as
            | GatewayResponse
            | null;
          if (!upstream.ok) {
            console.error("Lovable AI render failed", {
              status: upstream.status,
              message: result?.error?.message,
            });
            return new Response(
              "Non è stato possibile generare il render. Riprova tra poco.",
              { status: 502, headers: cors },
            );
          }

          const message = result?.choices?.[0]?.message;
          const contentImages = Array.isArray(message?.content)
            ? message.content
            : [];
          const imageUrl = [...(message?.images ?? []), ...contentImages]
            .find((image) => image?.image_url?.url)
            ?.image_url?.url;

          if (!imageUrl) {
            console.error("Lovable AI returned no image");
            return new Response(
              "Il servizio non ha restituito un’immagine. Riprova.",
              { status: 502, headers: cors },
            );
          }

          const base64 = await imageUrlToBase64(imageUrl);
          return new Response(completedImageEvent(base64), {
            headers: {
              ...cors,
              "Content-Type": "text/event-stream; charset=utf-8",
              "Cache-Control": "no-cache, no-store",
            },
          });
        } catch (error) {
          console.error("Room render error", error);
          return new Response(
            "Errore durante la generazione del render. Riprova.",
            { status: 500, headers: cors },
          );
        }
      },
    },
  },
});
