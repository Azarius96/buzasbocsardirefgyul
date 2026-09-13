import {
  isAuthorized,
  loadEvents,
  saveEvents,
  photoKey,
  MAX_PHOTOS_PER_EVENT,
  MAX_PHOTO_BYTES,
  type ChurchEvent,
  type EventPhoto,
} from "../../_lib/events";

interface Env {
  EVENTS_KV: KVNamespace;
  ADMIN_TOKEN: string;
}

const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!isAuthorized(request, env)) {
    return new Response("Nincs jogosultság", { status: 401 });
  }

  const form = await request.formData();
  const title = String(form.get("title") ?? "").trim();
  const description = String(form.get("description") ?? "").trim();
  const date = String(form.get("date") ?? "").trim();
  if (!title || !date) {
    return new Response("Hiányzó cím vagy dátum", { status: 400 });
  }

  const files = form.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_PHOTOS_PER_EVENT) {
    return new Response(`Legfeljebb ${MAX_PHOTOS_PER_EVENT} fénykép engedélyezett eseményenként`, { status: 400 });
  }
  for (const file of files) {
    if (!ALLOWED_TYPES.has(file.type)) {
      return new Response(`Nem támogatott fájltípus: ${file.type}`, { status: 400 });
    }
    if (file.size > MAX_PHOTO_BYTES) {
      return new Response(`A(z) "${file.name}" fájl túl nagy (max. ${MAX_PHOTO_BYTES / 1024 / 1024} MB)`, {
        status: 400,
      });
    }
  }

  const eventId = crypto.randomUUID();
  const photos: EventPhoto[] = [];
  for (const file of files) {
    const photoId = crypto.randomUUID();
    const key = photoKey(eventId, photoId);
    await env.EVENTS_KV.put(key, await file.arrayBuffer(), { metadata: { contentType: file.type } });
    photos.push({ key, contentType: file.type });
  }

  const event: ChurchEvent = {
    id: eventId,
    title,
    description,
    date,
    createdAt: new Date().toISOString(),
    photos,
  };

  const events = await loadEvents(env.EVENTS_KV);
  events.push(event);
  await saveEvents(env.EVENTS_KV, events);

  return Response.json(event, { status: 201 });
};

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  if (!isAuthorized(request, env)) {
    return new Response("Nincs jogosultság", { status: 401 });
  }
  const events = await loadEvents(env.EVENTS_KV);
  return Response.json(events);
};
