import { createFileRoute } from "@tanstack/react-router";

/**
 * Server route: streams an AI-generated interior render (PNG in base64)
 * from the Lovable AI Gateway using Nano Banana 2 (gemini-3.1-flash-image).
 *
 * Accepts:
 *   { prompt: string, images?: string[] }
 * where `images` are reference photos (https URLs or data:image/*;base64,...)
 * passed to the model to reproduce products more faithfully.
 */
export const Route = createFileRoute("/api/render-room")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { prompt, images } = (await request.json()) as {
          prompt: string;
          images?: string[];
        };
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        if (!prompt || typeof prompt !== "string") {
          return new Response("Missing prompt", { status: 400 });
        }

        // Cap reference images to keep the request size reasonable
        const refs = (Array.isArray(images) ? images : [])
          .filter((u) => typeof u === "string" && u.length > 0)
          .slice(0, 12);

        // Gemini image models take messages + modalities. The text goes in a
        // text block; each reference photo goes in its own image_url block.
        const content: Array<
          | { type: "text"; text: string }
          | { type: "image_url"; image_url: { url: string } }
        > = [{ type: "text", text: prompt }];
        for (const url of refs) {
          content.push({ type: "image_url", image_url: { url } });
        }

        const upstream = await fetch(
          "https://ai.gateway.lovable.dev/v1/images/generations",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${key}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // Nano Banana 2 — high-quality, supports image references
              model: "google/gemini-3.1-flash-image",
              messages: [{ role: "user", content }],
              modalities: ["image", "text"],
              stream: true,
            }),
          },
        );

        if (!upstream.ok || !upstream.body) {
          return new Response(await upstream.text(), { status: upstream.status });
        }
        return new Response(upstream.body, {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
          },
        });
      },
    },
  },
});
