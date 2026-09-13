import { loadEvents } from "../_lib/events";

interface Env {
  EVENTS_KV: KVNamespace;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const events = await loadEvents(env.EVENTS_KV);
  return Response.json(events);
};
