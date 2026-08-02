import { createFileRoute } from "@tanstack/react-router";
import { getVercelOidcToken } from "@vercel/oidc";

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

function completedImageEvent(base64: string) {
  return `event: image_generation.completed\ndata: ${JSON.stringify({ b64_json: base64 })}\n\n`;
}

async function imageUrlToBase64(url: string) {
  const dataUrl = url.match(/^data:image\/[a-zA-Z0-9.+-]+;base64,(.+)$/s);
  if (dataUrl) return dataUrl[1];

  const response = await fetch(url);
  if (!response.ok) throw new Error("Impossibile scaricare il render generato");
  return Buffer.from(await response.arrayBuffer()).toString("base64");
}

/**
 * Generates a photorealistic room render through Vercel AI Gateway.
 * Production deployments authenticate automatically with Vercel OIDC, so
 * this feature is independent from Lovable and does not expose credentials.
 */
export const Route = createFileRoute("/api/render-room")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { prompt, images } = (await request.json()) as {
            prompt?: string;
            images?: string[];
          };

          if (!prompt || typeof prompt !== "string") {
            return new Response("Descrizione della stanza mancante", { status: 400 });
          }

          const token =
            process.env.AI_GATEWAY_API_KEY ?? (await getVercelOidcToken());
          if (!token) {
            return new Response(
              "Il servizio di rendering non è disponibile in questo ambiente.",
              { status: 503 },
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
            "https://ai-gateway.vercel.sh/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "google/gemini-3.1-flash-image-preview",
                messages: [{ role: "user", content }],
                modalities: ["text", "image"],
                stream: false,
              }),
            },
          );

          const result = (await upstream.json().catch(() => null)) as
            | GatewayResponse
            | null;
          if (!upstream.ok) {
            console.error("AI Gateway render failed", {
              status: upstream.status,
              message: result?.error?.message,
            });
            return new Response(
              "Non è stato possibile generare il render. Riprova tra poco.",
              { status: 502 },
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
            console.error("AI Gateway returned no image");
            return new Response(
              "Il servizio non ha restituito un’immagine. Riprova.",
              { status: 502 },
            );
          }

          const base64 = await imageUrlToBase64(imageUrl);
          return new Response(completedImageEvent(base64), {
            headers: {
              "Content-Type": "text/event-stream; charset=utf-8",
              "Cache-Control": "no-cache, no-store",
            },
          });
        } catch (error) {
          console.error("Room render error", error);
          return new Response(
            "Errore durante la generazione del render. Riprova.",
            { status: 500 },
          );
        }
      },
    },
  },
});
