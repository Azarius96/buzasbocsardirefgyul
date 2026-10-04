# Búzásbocsárdi Református Egyházközség – weboldal

Statikus weboldal (HTML + CSS + JS, build lépés nélkül). A teljes oldal a `public/` mappában van.

```
public/
  index.html            Kezdőlap (alkalmak, hitvallás, Facebook-hírek, támogatók, kapcsolat)
  bocsard.html          Búzásbocsárd – falu- és templomtörténet, lelkészek, képek
  karacsonyfalva.html   Alsókarácsonyfalva – falu- és templomtörténet
  404.html
  _headers              Cloudflare HTTP-fejlécek
  assets/               stíluslap, JS, képek, támogatói logók
wrangler.jsonc          Cloudflare-konfiguráció
```

## Közzététel Cloudflare-en

**A) Parancssorból (Wrangler):**

```bash
npx wrangler login
npx wrangler deploy
```

Az oldal ezután a `https://buzasbocsard-reformatus.<fiók>.workers.dev` címen érhető el;
saját domain a Cloudflare irányítópulton (Workers & Pages → a projekt → Settings → Domains) adható hozzá.

**B) Git-tárolóból (GitHub → Cloudflare):** töltsd fel a mappát egy GitHub-tárolóba, majd a Cloudflare
irányítópulton: *Workers & Pages → Create → Import a repository*. Build parancs: nincs; kimeneti mappa: `public`.

## Facebook

A hírek a gyülekezet Facebook-oldalán jelennek meg; a weboldal ide hivatkozik (menü, Alkalmak, Hírek, Kapcsolat, lábléc):
https://www.facebook.com/BuzasbocsardiReformatusEgyhazkozseg

## Tartalom és források

Minden történeti adat forrással van jelölve (az aloldalak alján „Források” lista):
- *Küküllő-mente, Küküllőszög* útikönyv, 384–387. o.
- nre.ro – Nagyenyedi Református Egyházmegye, gyülekezeti adatlap (a fényképek forrása is)
- reformatus.ro – EREK címtár (elérhetőségek)
- hu/ro/en Wikipédia, maszol.ro cikkek

### Ellenőrizendő / kiegészítendő
- **Istentiszteleti rend:** vasárnap 9:30 Alsókarácsonyfalva, 11:00 Búzásbocsárd (`index.html` „Alkalmak” rész,
  ill. `karacsonyfalva.html`). Új alkalom (bibliaóra, ifjúsági) ugyanitt adható hozzá.
- **Kötő Ferencz Barna szolgálatának vége** (2016–2024) a 2024. októberi beiktatás alapján szerepel.
- **Templomépítés éve:** az útikönyv szerint 1866-ban átépítették; a nre.ro és a Wikipédia 1926-ot említ
  (ez valószínűleg az alsókarácsonyfalvi templom éve). Az oldal az útikönyvet követi.
- **Fényképek:** az nre.ro egyházmegyei oldaláról valók – érdemes saját, nagyobb felbontású képekre cserélni
  (`public/assets/img/`, azonos fájlnévvel).
- **Crăciunelu de Jos:** a községnek nincs közzétett logója/címere (hivatalos honlapján is csak felirat van),
  ezért feliratos jelvény szerepel. Ha a polgármesteri hivataltól kaptok logót, tedd `public/assets/logos/craciunelu.png`
  néven, és cseréld a `.wordmark` blokkot `<img>`-re az `index.html`-ben.

## Helyi előnézet

```bash
python3 -m http.server 8787 -d public
```

## Keresőoptimalizálás (Google, Bing, MI-asszisztensek)

- `public/robots.txt` – minden kereső és MI-robot (GPTBot, ClaudeBot, PerplexityBot, Google-Extended stb.) számára engedélyezett
- `public/sitemap.xml` – oldaltérkép
- `public/llms.txt` – tömör összefoglaló MI-asszisztenseknek
- Minden oldalon: canonical link, Open Graph, schema.org JSON-LD (Organization + két Church, istentiszteleti időpontokkal)
- `public/<kulcs>.txt` – IndexNow-kulcs (Bing, Yandex, Seznam, Naver azonnali értesítése)

**Ha saját domainre költözik az oldal**, a régi címet (`buzasbocsard-reformatus.szabo-laszlo-lorand.workers.dev`)
mindenhol cserélni kell az újra:

```bash
grep -rl "szabo-laszlo-lorand.workers.dev" public | xargs sed -i '' 's#buzasbocsard-reformatus.szabo-laszlo-lorand.workers.dev#UJ-DOMAIN.ro#g'
```

Tartalom módosítása után (deploy után) a keresők értesítése IndexNow-val:

```bash
curl -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json" -d '{"host":"buzasbocsard-reformatus.szabo-laszlo-lorand.workers.dev","key":"f5a751f81e5c72ed4148dc3b71bb60eb","urlList":["https://buzasbocsard-reformatus.szabo-laszlo-lorand.workers.dev/"]}'
```
