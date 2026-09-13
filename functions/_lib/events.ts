export interface EventPhoto {
  key: string;
  contentType: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  description: string;
  date: string; // ISO 8601 (YYYY-MM-DD)
  createdAt: string;
  photos: EventPhoto[];
}

const EVENTS_KEY = "events";
export const MAX_PHOTOS_PER_EVENT = 12;
export const MAX_PHOTO_BYTES = 8 * 1024 * 1024;

export async function loadEvents(kv: KVNamespace): Promise<ChurchEvent[]> {
  const raw = await kv.get(EVENTS_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveEvents(kv: KVNamespace, events: ChurchEvent[]): Promise<void> {
  events.sort((a, b) => b.date.localeCompare(a.date));
  await kv.put(EVENTS_KEY, JSON.stringify(events));
}

export function isAuthorized(request: Request, env: { ADMIN_TOKEN?: string }): boolean {
  if (!env.ADMIN_TOKEN) return false;
  const header = request.headers.get("Authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  return token.length > 0 && token === env.ADMIN_TOKEN;
}
