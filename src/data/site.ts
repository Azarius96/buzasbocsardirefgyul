export const site = {
  name: 'Búzásbocsárdi Református Egyházközség',
  shortName: 'Búzásbocsárdi Református Egyházközség',
  tagline: 'Krisztus szeretete kötelez minket',
  description:
    'A Búzásbocsárdi Református Egyházközség honlapja: a 14. századi templom története, gyülekezeti élet, istentiszteleti rend és elérhetőség. Bucerdea Grânoasă, Fehér megye, Erdély.',
  url: 'https://buzasbocsard.ro',
  locale: 'hu-RO',
  presbytery: 'Nagyenyedi Református Egyházmegye',
  diocese: 'Erdélyi Református Egyházkerület',
  dioceseUrl: 'https://reformatus.ro',
  directoryUrl: 'https://reformatus.ro/cimtar/egyhazkozsegek/buzasbocsard',
} as const;

export const contact = {
  minister: 'Szabó László Lóránd',
  ministerTitle: 'parókus lelkipásztor',
  parishEmail: 'buzasbocsardi.refgyul@gmail.com',
  ministerEmail: 'szabo.laszlo.lorand@gmail.com',
  street: 'str. Petőfi Sándor nr. 4',
  city: 'Bucerdea Grânoasă',
  county: 'jud. Alba',
  postalCode: '517261',
  country: 'Románia',
  churchAddress: 'Bucerdea Grânoasă nr. 410/A, jud. Alba',
  coordinates: { lat: 46.1917, lon: 23.8403 },
  mapUrl: 'https://www.openstreetmap.org/?mlat=46.1917&mlon=23.8403#map=16/46.1917/23.8403',
  monumentCode: 'AB-II-m-B-00194',
} as const;

/**
 * Istentiszteleti rend.
 * TODO(gyülekezet): a pontos időpontokat a lelkipásztorral egyeztetve kell véglegesíteni,
 * a szerkesztéshez csak ezt a listát kell módosítani.
 */
export const services = [
  {
    day: 'Vasárnap',
    time: '11:00',
    title: 'Istentisztelet',
    place: 'Búzásbocsárd, református templom',
    note: 'Úrvacsorás istentisztelet a nagy egyházi ünnepeken.',
  },
  {
    day: 'Vasárnap',
    time: '9:30',
    title: 'Istentisztelet',
    place: 'Alsókarácsonyfalva, leányegyház temploma',
    note: 'A leányegyház gyülekezetének istentisztelete.',
  },
  {
    day: 'Vasárnap',
    time: '10:00',
    title: 'Vasárnapi iskola',
    place: 'Búzásbocsárd, parókia',
    note: 'Gyermekfoglalkozás az istentisztelet előtt.',
  },
  {
    day: 'Csütörtök',
    time: '17:00',
    title: 'Bibliaóra',
    place: 'Búzásbocsárd, parókia',
    note: 'Közös bibliaolvasás és beszélgetés.',
  },
] as const;

export const facts = [
  { value: '1303', label: 'Az első írásos említés', detail: 'Bochard néven' },
  { value: 'XIV. sz.', label: 'A templom szentélye', detail: 'gótikus eredet' },
  { value: '25 m', label: 'Zsindelyes fatorony', detail: 'tipikus erdélyi fatorony' },
] as const;

export const timeline = [
  {
    year: '1303',
    title: 'Első írásos említés',
    body: 'A templomos település Bochard néven jelenik meg a forrásokban. Későbbi névváltozatai: Buzásbuchard (1332), Bochard, aliter Gyanad (1410), Buzás–Boczyard (1587).',
  },
  {
    year: '1332',
    title: 'Plébániatemplom',
    body: 'A falunak plébániatemploma van; katolikus lelkészei Mihály, majd Mátyás. A középkorban a bocsárok a király pohárnokai és vincellérei voltak – innen a település neve.',
  },
  {
    year: 'XIV. század',
    title: 'A gótikus templom',
    body: 'A falu közepén, magaslaton felépül a templom, amelynek gótikus jegyei – résablakok, diadalív, támpillérek, bevakolt bordázatok – ma már csak a szentélyben látszanak.',
  },
  {
    year: '1450 körül',
    title: 'A középkori harang',
    body: 'Nagyszebenben készül a 800–900 kg-os harang „O rex glorie veni nobis cum pace” felirattal – a gyülekezet legtöbbet megénekelt kincse.',
  },
  {
    year: 'XVI. század 2. fele',
    title: 'A reformáció',
    body: 'A gyülekezet áttér a református hitre. Erre emlékeztet a templomban befalazott, faragott sekrestyebejárat és az 1657-es évszámmal ellátott míves kőszószék.',
  },
  {
    year: '1615',
    title: 'A Macskási család birtoka',
    body: 'Bocsárdot Bethlen Gábor adományaként a Macskási család birtokolja. Korábban a neves Gyógyi (Diódi) családé volt.',
  },
  {
    year: '1710',
    title: 'Kapi Anna kelyhe',
    body: 'Kapi Anna – Macskási Boldizsár diplomata, ispán, erdélyi hadparancsnok felesége – kelyhet adományoz a bocsárdiaknak.',
  },
  {
    year: '1866',
    title: 'Alapos átépítés',
    body: 'A templomhajó mai formája ebből az átépítésből, illetve későbbi korok építéséből származik; a szentélyt diadalív választja el tőle.',
  },
  {
    year: '1878–79',
    title: 'Orgona',
    body: 'A templom orgonáját Kollonics István készíti.',
  },
  {
    year: '1900',
    title: 'Új parókia',
    body: 'Elkészül a fatornácos parókia, amely ma is a gyülekezeti élet otthona.',
  },
  {
    year: '1926',
    title: 'Alsókarácsonyfalva temploma',
    body: 'Felépül a leányegyház temploma, ahol ma mintegy 52 református él egy nagyszámú román lakosságú településen.',
  },
  {
    year: 'napjaink',
    title: 'Restaurálás',
    body: 'A templom felújítása során előkerült a XVIII. században boltozott kripta és az osszárium.',
  },
] as const;

export const ministers = [
  { period: '1773–1818', name: 'K. Benedek Sámuel' },
  { period: '1815–1828', name: 'Hunyadi Sándor' },
  { period: '1828–1852', name: 'Koronkai Kocsis Sándor' },
  { period: '1854–1877', name: 'Cseresznyés György' },
  { period: '1878–1889', name: 'Cseresznyés Ödön' },
  { period: '1889–1898', name: 'Teleki Zsigmond' },
  { period: '1899–1907', name: 'Kovács Károly' },
  { period: '1908–1956', name: 'Pataky Gyula' },
  { period: '1956–1966', name: 'Pataky Pál' },
  { period: '1966–1969', name: 'Sógor Sándor' },
  { period: '1970–1995', name: 'Gudor András' },
  { period: '1997–2000', name: 'Albert András' },
  { period: '2000–2001', name: 'Koszta Endre' },
  { period: '2001–2007', name: 'Váncza Lajos' },
  { period: '2008–2015', name: 'Boros László' },
  { period: '2016–2024', name: 'Kötő Ferencz Barna' },
  { period: '2024–', name: 'Szabó László', current: true },
] as const;

export const supporters = [
  {
    name: 'Consiliul Județean Alba',
    logo: '/tamogatok/consiliul-judetean-alba.jpg',
  },
  {
    name: 'RMDSZ – Communitas Alapítvány',
    logo: '/tamogatok/communitas-rmdsz.png',
  },
  {
    name: 'Magyarország Kormánya – Miniszterelnökség Nemzetpolitikai Államtitkárság, Bethlen Gábor Alap',
    logo: '/tamogatok/magyar-kormany-tamogatas.jpg',
  },
] as const;

export const nav = [
  { href: '/', label: 'Kezdőlap' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/templom', label: 'A templom' },
  { href: '/lelkeszek', label: 'Lelkészek' },
  { href: '/alsokaracsonyfalva', label: 'Alsókarácsonyfalva' },
  { href: '/istentiszteletek', label: 'Gyülekezeti élet' },
  { href: '/esemenyek', label: 'Események' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
] as const;
