interface Env {
  EVENTS_KV: KVNamespace;
}

export const onRequestGet: PagesFunction<Env> = async ({ env, params }) => {
  const key = String(params.key);
  const { value, metadata } = await env.EVENTS_KV.getWithMetadata<{ contentType?: string }>(key, "arrayBuffer");
  if (value === null) {
    return new Response("Nem található", { status: 404 });
  }

  const headers = new Headers();
  headers.set("Content-Type", metadata?.contentType ?? "application/octet-stream");
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return new Response(value, { headers });
};
