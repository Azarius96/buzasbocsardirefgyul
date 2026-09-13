import { isAuthorized, loadEvents, saveEvents } from "../../../_lib/events";

interface Env {
  EVENTS_KV: KVNamespace;
  ADMIN_TOKEN: string;
}

export const onRequestDelete: PagesFunction<Env> = async ({ request, env, params }) => {
  if (!isAuthorized(request, env)) {
    return new Response("Nincs jogosultság", { status: 401 });
  }

  const id = String(params.id);
  const events = await loadEvents(env.EVENTS_KV);
  const event = events.find((e) => e.id === id);
  if (!event) {
    return new Response("Nem található", { status: 404 });
  }

  await Promise.all(event.photos.map((photo) => env.EVENTS_KV.delete(photo.key)));
  await saveEvents(
    env.EVENTS_KV,
    events.filter((e) => e.id !== id),
  );

  return new Response(null, { status: 204 });
};
