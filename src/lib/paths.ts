/**
 * A `build.format: 'file'` beállítás miatt build közben a pathname `.html` végű
 * (`/index.html`, `/tortenet.html`), a kiszolgált URL viszont kiterjesztés nélküli.
 * Ez a függvény adja vissza a kanonikus, kiterjesztés nélküli útvonalat.
 */
export function normalizePathname(pathname: string): string {
  const withoutHtml = pathname.replace(/\.html$/, '').replace(/\/index$/, '');
  const trimmed = withoutHtml.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}
