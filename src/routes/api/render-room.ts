import { createFileRoute } from "@tanstack/react-router";

/**
 * Server route: streams an AI-generated interior render (PNG in base64)
 * from the Lovable AI Gateway to the client, using Server-Sent Events.
 */
export const Route = createFileRoute("/api/render-room")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { prompt } = (await request.json()) as { prompt: string };
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });
        if (!prompt || typeof prompt !== "string") {
          return new Response("Missing prompt", { status: 400 });
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
              model: "google/gemini-2.5-flash-image",
              prompt,
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
