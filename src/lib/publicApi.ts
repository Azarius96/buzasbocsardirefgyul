/**
 * A gyülekezeti adatbázis (Oracle-szerveren futó, Cloudflare Pages proxy mögötti) nyilvános,
 * hitelesítés nélküli statisztikai végpontja - csak összesített, nem személyes adatot ad vissza.
 */
export const STATS_API_URL =
  'https://gyulekezeti-adatbazis.pages.dev/api/public/stats?slugs=buzasbocsard,alsokaracsonyfalva';

export interface PublicStats {
  ev: number;
  tagletszam: number;
  elhunytakEbbenAzEvben: number;
}
