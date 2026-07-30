# Búzásbocsárdi Református Egyházközség – weboldal

A Búzásbocsárdi Református Egyházközség (Bucerdea Grânoasă, jud. Alba, Románia) statikus
weboldala. [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), kifejezetten
Cloudflare-re optimalizálva: teljesen statikus kimenet, önállóan kiszolgált fontok, külső
szkriptek nélkül.

## Fejlesztés

Node.js **22.12.0 vagy újabb** szükséges (lásd `.nvmrc`).

```bash
nvm use          # 22.12.0
npm ci
npm run dev      # http://localhost:4321
```

| Script                 | Leírás                                     |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | fejlesztői szerver                         |
| `npm run build`        | statikus build a `dist/` könyvtárba        |
| `npm run preview`      | a build előnézete                          |
| `npm run check`        | `astro check` (típus- és sablonellenőrzés) |
| `npm run format`       | Prettier formázás                          |
| `npm run format:check` | formázás ellenőrzése (CI)                  |
| `npm run deploy`       | build + `wrangler deploy`                  |

## Tartalom szerkesztése

A szövegek nagy része adatvezérelt, egyetlen fájlban: [`src/data/site.ts`](src/data/site.ts).

- `contact` – lelkipásztor, e-mail-címek, postai cím, koordináták
- `services` – istentiszteleti rend (**az időpontokat a lelkipásztorral egyeztetve kell
  véglegesíteni**)
- `timeline` – történeti idővonal
- `ministers` – lelkészek listája
- `nav` – menüpontok

Az egyes oldalak a `src/pages/` könyvtárban találhatók (fájlnév = útvonal).

## Kiszolgálás Cloudflare-en

Két lehetőség van, mindkettő ugyanazt a `dist/` kimenetet szolgálja ki:

### 1. Cloudflare Pages (ajánlott, git-alapú)

Új Pages projekt a repóhoz kötve:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Environment variable:** `NODE_VERSION=22.12.0`

Minden `main`-re push automatikusan deployol, a PR-ok pedig preview URL-t kapnak.

### 2. Workers static assets (`wrangler`)

```bash
npx wrangler login
npm run deploy
```

A beállítások a [`wrangler.jsonc`](wrangler.jsonc) fájlban vannak (`assets.directory: ./dist`,
404-es oldal kezelése, trailing slash elhagyása).

### Fejlécek, átirányítások, cache

- [`public/_headers`](public/_headers) – biztonsági fejlécek (CSP, HSTS, `X-Frame-Options`,
  `Permissions-Policy`) és cache-szabályok: a hash-elt `/_astro/*` assetek egy évig
  `immutable`, a HTML mindig újravalidál.
- [`public/_redirects`](public/_redirects) – régi/alternatív útvonalak 301-es átirányítása.
- A CSP `frame-src` direktívája az OpenStreetMap beágyazott térképét engedi (kapcsolat oldal).
  Ha másik térképszolgáltatóra váltunk, ezt frissíteni kell.

## Képek hozzáadása

A `public/` könyvtárba tett képek a gyökérből érhetők el (pl. `public/templom.jpg` →
`/templom.jpg`). Optimalizált változatokhoz érdemes az Astro `<Image />` komponensét használni a
`src/assets/` könyvtárból importált képekkel.

## Domain

A `astro.config.mjs` `site` értéke (`https://buzasbocsard.ro`) a canonical URL-eket, a sitemapet
és az OG metaadatokat határozza meg – éles domain esetén ezt és a
[`public/robots.txt`](public/robots.txt) sitemap sorát kell frissíteni.
