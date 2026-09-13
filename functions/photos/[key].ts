interface Env {
  EVENT_PHOTOS: R2Bucket;
}

export const onRequestGet: PagesFunction<Env> = async ({ env, params, request }) => {
  const key = String(params.key);
  const ifNoneMatch = request.headers.get("If-None-Match");

  const object = await env.EVENT_PHOTOS.get(key, {
    onlyIf: ifNoneMatch ? { etagDoesNotMatch: ifNoneMatch } : undefined,
  });
  if (object === null) {
    return new Response("Nem található", { status: 404 });
  }
  if (!("body" in object) || !object.body) {
    return new Response(null, { status: 304 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  return new Response(object.body, { headers });
};
