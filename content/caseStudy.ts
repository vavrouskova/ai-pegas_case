import type { GalleryItem } from '@/components/ui/Gallery';

export interface ServiceArea {
  number: string;
  title: string;
  description: string;
}

export interface BeforeAfterPair {
  before: GalleryItem;
  after: GalleryItem;
  note?: string;
}

export interface ConversationSample {
  src: string;
  alt: string;
  caption?: string;
}

export interface MediaItem {
  kind: 'video' | 'audio';
  title: string;
  duration: string;
  description: string;
  src?: string;
  poster?: string;
}

export interface PrintMaterial {
  src: string;
  alt: string;
  label: string;
}

export const caseStudy = {
  hero: {
    label: 'studAIant · case study',
    title: 'Brand PEGAS jsme postavili s AI.',
    subtitle: 'Texty · Ilustrace · Foto · Produkty · Hlas · Rešerše · Code',
    meta: '2025–2026 · antstudio × PEGAS',
    cta: 'Skroluj',
  },

  anchors: [
    { id: 'vysledek', label: '01 Výsledek' },
    { id: 'reserse', label: '02 Rešerše' },
    { id: 'obraz', label: '03 Krize obrazu' },
    { id: 'higgsfield', label: '04 Higgsfield' },
    { id: 'produkty', label: '05 Produkty' },
    { id: 'hlas', label: '06 Hlas' },
    { id: 'asistent', label: '07 Asistent' },
    { id: 'vibecoding', label: '08 Vibecoding' },
    { id: 'obchod', label: '09 Pro obchod' },
  ],

  // 01 — Výsledek
  result: {
    intro:
      'Sedm oblastí, ve kterých v antu používáme AI jako nástroj na klientských projektech. Tohle umíme dělat — a umíme to prodat dál.',
    areas: [
      {
        number: '01',
        title: 'Texty',
        description:
          'Píšeme copy, brand statementy a web texty s AI asistentem trénovaným na klientovu značku. Brainstormujeme s ním a držíme konzistentní tón.',
      },
      {
        number: '02',
        title: 'Ilustrace',
        description:
          'Generujeme ilustrace, které obcházejí stockovou tíseň pohřebního oboru. Vyvoláváme klid místo hrůzy.',
      },
      {
        number: '03',
        title: 'Foto (Higgsfield)',
        description:
          'Z mobilního snímku přes cleanup v Higgsfieldu uděláme produktovou fotku připravenou na e-shop. Hodiny místo dnů.',
      },
      {
        number: '04',
        title: 'Rešerše',
        description:
          'Děláme zahraniční benchmarks, konkurenční analýzy, prohlubujeme pochopení citlivých témat.',
      },
      {
        number: '05',
        title: 'Produkty',
        description:
          'Regenerujeme produktové fotky (rakve před/po), vyrábíme sezónní materiály a tištěné produktové listy. Z katalogu do jednotné vizuální linie za týden.',
      },
      {
        number: '06',
        title: 'Hlas',
        description:
          'Postavili jsme 30minutovou prezentaci značky s AI voiceoverem, interní prezentaci pro firmu a pilotní brand podcast.',
      },
      {
        number: '07',
        title: 'Code',
        description:
          'S Claude Code stavíme features — kalendář obřadů, parte editor, wizard pro objednání květin za dny místo týdnů.',
      },
    ] satisfies ServiceArea[],
  },

  // 02 — Rešerše
  research: {
    intro:
      'Než jsme cokoliv navrhli, museli jsme téma pohřebnictví pochopit. S AI jsme zorientování v cizí krajině zkrátili na zlomek času.',
    points: [
      'Konkurenční analýza českého trhu — co kdo nabízí, co chybí, kde je prostor.',
      'Zahraniční benchmarks — Skandinávie (designově otevřenější), UK (citlivost komunikace), US (digitální nabídka).',
      'Pochopení citlivého tématu — jak mluvit s pozůstalými bez floskulí, jak nezraňovat.',
    ],
  },

  // 03 — Krize obrazu
  imageCrisis: {
    comparison: [
      {
        stock: { src: '/illustrations/stock-01.jpg', alt: 'Stockový americký pohřeb' },
        ai: { src: '/illustrations/ai-01.png', alt: 'Naše AI ilustrace 1' },
      },
      {
        stock: { src: '/illustrations/stock-02.jpg', alt: 'Stockový hřbitov, slzy' },
        ai: { src: '/illustrations/ai-02.png', alt: 'Naše AI ilustrace 2' },
      },
      {
        stock: { src: '/illustrations/stock-03.jpg', alt: 'Stockové symboly smutku' },
        ai: { src: '/illustrations/ai-03.png', alt: 'Naše AI ilustrace 3' },
      },
    ] satisfies { stock: GalleryItem; ai: GalleryItem }[],
    problem:
      'Otevřete stockovou banku. Hledáte fotky pohřebnictví. Najdete americké hřbitovy, hromady věnců, slzy. Středoevropská vizualita oboru chybí, a co je, jsou symboly hrůzy — deprese, kříže, černo.',
    traditionalSolution:
      'Klasická cesta: vlastní focení. Drahé, časově náročné, a stejně narazíte na to, že fotka konkrétního smutku nemusí být to, co web chce sdělit.',
    aiSolution:
      'S našimi AI ilustracemi obcházíme konkrétnost. Vyvoláváme klid. Pracujeme se symbolikou bez doslovnosti — strom místo hřbitova, vlna místo věnce.',
    gallery: [
      { src: '/illustrations/01.png', alt: 'AI ilustrace 1' },
      { src: '/illustrations/02.png', alt: 'AI ilustrace 2' },
      { src: '/illustrations/03.png', alt: 'AI ilustrace 3' },
      { src: '/illustrations/04.png', alt: 'AI ilustrace 4' },
      { src: '/illustrations/05.png', alt: 'AI ilustrace 5' },
      { src: '/illustrations/06.png', alt: 'AI ilustrace 6' },
      { src: '/illustrations/07.png', alt: 'AI ilustrace 7' },
      { src: '/illustrations/08.png', alt: 'AI ilustrace 8' },
    ] satisfies GalleryItem[],
  },

  // 04 — Higgsfield
  higgsfield: {
    intro:
      'Naše vlajková ukázka, kterou umíme nabídnout dalším klientům. Pipeline z Vazárny:',
    steps: [
      'Florista uváže nový produkt v Vazárně.',
      'Vyfotí ho mobilem. Žádné světla, žádný studio setup.',
      'Pošle nám fotku.',
      'Uděláme cleanup v Higgsfieldu a brand-aligned úpravu.',
      'Nahodíme na e-shop. Hodiny místo dnů.',
    ],
    pairs: [
      {
        before: { src: '/higgsfield/01-before.jpg', alt: 'Mobilní snímek 1' },
        after: { src: '/higgsfield/01-after.jpg', alt: 'AI cleanup 1' },
        note: 'Vazba č. 1 — z mobilu do e-shopu',
      },
      {
        before: { src: '/higgsfield/02-before.jpg', alt: 'Mobilní snímek 2' },
        after: { src: '/higgsfield/02-after.jpg', alt: 'AI cleanup 2' },
        note: 'Vazba č. 2',
      },
      {
        before: { src: '/higgsfield/03-before.jpg', alt: 'Mobilní snímek 3' },
        after: { src: '/higgsfield/03-after.jpg', alt: 'AI cleanup 3' },
        note: 'Vazba č. 3',
      },
    ] satisfies BeforeAfterPair[],
  },

  // 05 — Produkty (regenerace + ad-hoc materiály)
  products: {
    intro:
      'Klient má katalog produktů — různá kvalita fotek, různá doba focení, různé stylizace. S AI to proženeme do jednotné vizuální linie. Plus vyrábíme ad-hoc materiály: sezónní propagaci, produktové listy do tisku.',
    regeneration: {
      title: 'Regenerace produktů',
      description:
        'Zrovna teď regenerujeme všechny rakve. Klient pošle původní fotku, my dodáme čistou produktovou v brandové linii PEGAS. Ukázky před a po:',
      pairs: [
        {
          before: { src: '/products/rakev-01-before.jpg', alt: 'Rakev — původní snímek 1' },
          after: { src: '/products/rakev-01-after.jpg', alt: 'Rakev — AI regenerace 1' },
          note: 'Klasická rakev — čištění pozadí, sjednocení nasvícení',
        },
        {
          before: { src: '/products/rakev-02-before.jpg', alt: 'Rakev — původní snímek 2' },
          after: { src: '/products/rakev-02-after.jpg', alt: 'Rakev — AI regenerace 2' },
          note: 'Designová rakev — důraz na detail materiálu',
        },
        {
          before: { src: '/products/rakev-03-before.jpg', alt: 'Rakev — původní snímek 3' },
          after: { src: '/products/rakev-03-after.jpg', alt: 'Rakev — AI regenerace 3' },
          note: 'Dětská rakev — citlivá vizuální úprava',
        },
      ] satisfies BeforeAfterPair[],
    },
    adhoc: {
      title: 'Ad-hoc materiály',
      description:
        'Sezónní propagace, produktové listy do tisku, dárkové sety. Bez čekání na fotografa, bez studia, bez týdenního cyklu.',
      items: [
        { src: '/products/adhoc-01.png', alt: 'Sezónní materiál 1', label: 'Sezónní · vánoce' },
        { src: '/products/adhoc-02.png', alt: 'Produktový list', label: 'Produktový list · tisk' },
        { src: '/products/adhoc-03.png', alt: 'Dárkový set', label: 'Dárkový set' },
        { src: '/products/adhoc-04.png', alt: 'Pamětní karta', label: 'Pamětní karta' },
      ] satisfies PrintMaterial[],
    },
    takeaway:
      'Klient přijde s katalogem ve smíšené kvalitě. Za týden má všechno v jedné vizuální linii. Bez focení, bez retušérů.',
  },

  // 06 — Hlas (prezentace + podcast)
  voice: {
    intro:
      'Vyrobili jsme 30minutovou prezentaci značky PEGAS s AI voiceoverem. Klienti si ji teď přehrávají sami — nemusíme pořád dokola vysvětlovat základy a máme obsah pod kontrolou. K tomu pilotní ukázka brand podcastu.',
    // src/poster nechány nevyplněné — vendy doplní reálné soubory do public/media/
    items: [
      {
        kind: 'video',
        title: 'Prezentace značky PEGAS',
        duration: '30 min',
        description:
          'Kompletní intro do brandu — manifest, vizuální systém, claim. AI voiceover a generované pasáže obrazu, my dramaturgie a střih. Klient si pustí a my nemluvíme do prázdna.',
      },
      {
        kind: 'video',
        title: 'Interní prezentace pro firmu',
        duration: '~ 15 min',
        description:
          'Direkce do PEGAS týmu: kam jdeme, proč to děláme, jak to měříme. AI voiceover držený v tónu značky.',
      },
      {
        kind: 'audio',
        title: 'Pilotní brand podcast',
        duration: '~ 5 min',
        description:
          'Ukázka, jak by mohl vypadat dlouhodobý audio kanál PEGAS. Hlas, hudbu a tonalitu jsme vygenerovali AI nástroji, scénář držíme my.',
      },
    ] satisfies MediaItem[],
    takeaway:
      'Klient si materiály pustí. Tým antu nemusí každému kreslit značku od nuly znovu. Obsah pod kontrolou, čas zpátky.',
  },

  // 07 — Brand asistent
  assistant: {
    intro:
      'Postavili jsme custom ChatGPT asistenta hned na začátku vývoje brandu PEGAS. Krmíme ho brand systémem, manifestem, claim systémem. Postupně jsme ho doladili na značku — i přes její náročný minimalismus.',
    capabilities: [
      'Píšeme s ním brand copy a web texty v drženém tónu.',
      'Brainstormujeme s ním postupy a nápady k projektům.',
      'Generujeme s ním první ilustrace (vstup do sekce 03).',
      'Kreslíme s ním vize budoucnosti — speculative vizualizace pro klientské pitche.',
      'Není to senior nástroj. Trefuje se ale dobře — a šetří nám každodenní rutinu.',
    ],
    screenshots: [
      { src: '/assistant/01.png', alt: 'Ukázka konverzace 1' },
      { src: '/assistant/02.png', alt: 'Ukázka konverzace 2' },
      { src: '/assistant/03.png', alt: 'Ukázka konverzace 3' },
    ] satisfies ConversationSample[],
    futureVision: {
      title: 'Vize budoucnosti',
      description:
        'Ukázka, kam s asistentem značku dokážeme posunout: speculative vizualizace prostorů, kampaní, produktových konceptů. Pro klientské pitche a interní směr.',
      gallery: [
        { src: '/assistant/vize-01.png', alt: 'Vize budoucnosti 1' },
        { src: '/assistant/vize-02.png', alt: 'Vize budoucnosti 2' },
        { src: '/assistant/vize-03.png', alt: 'Vize budoucnosti 3' },
      ] satisfies GalleryItem[],
    },
  },

  // 08 — Vibecoding
  vibecoding: {
    intro:
      'Druhá kapitola: s AI nepíšeme jen texty, píšeme i kód. S Claude Code workflow jsme postavili features, které by tradičně trvaly týdny.',
    features: [
      {
        title: 'Kalendář obřadů',
        description:
          'List + grid view, filtry podle pobočky a typu, sort, neveřejná rozloučení, smooth scroll. Tři dny od první myšlenky po produkci.',
      },
      {
        title: 'Parte editor',
        description:
          'Wizard se šablonami, výběrem gendera, veršem, fotkou. Pozůstalý vyplní za minuty.',
      },
      {
        title: 'Wizard pro objednání květiny',
        description:
          'Od kategorií přes formulář po rekapitulaci. Integrace s Vazárna e-shopem.',
      },
    ],
    screenshots: [
      { src: '/screenshots/kalendar.png', alt: 'Kalendář obřadů na PEGAS webu' },
      { src: '/screenshots/parte.png', alt: 'Parte editor wizard' },
      { src: '/screenshots/wizard.png', alt: 'Wizard pro objednání květiny' },
    ] satisfies GalleryItem[],
  },

  // 07 — Pointa pro obchod
  sales: {
    intro:
      'Co z toho? Tohle všechno umíme dělat. Tohle všechno umíme prodat klientům. Konkrétní balíčky:',
    packages: [
      {
        title: 'AI brand asistent na míru',
        description:
          'Nastavíme ho, krmíme klientovou značkou, dáme tým k denní práci. Pro klienty, kteří chtějí konzistenci napříč týmem.',
      },
      {
        title: 'AI ilustrace pro citlivá témata',
        description:
          'Pro obory, kde stocková banka selhává. Konkrétní výstupy, ne mood.',
      },
      {
        title: 'Higgsfield foto workflow',
        description:
          'Mobilní snímky proměníme v produktové fotky. Pro e-shopy s rychlým produktovým cyklem.',
      },
      {
        title: 'Vibecoding features',
        description:
          'Kalendáře, wizards, editory — postavené za dny. Pro klienty, kteří potřebují digitální produkt rychle.',
      },
    ],
    takeaway:
      'Bez AI bychom středoevropskou vizualitu pohřebnictví nedokázali postavit. S AI je antstudio připravené posunout tu hranici i u dalších klientů.',
  },

  credits: {
    team: 'Tým antstudia',
    client: 'Klient: PEGAS',
    stack: ['ChatGPT custom', 'Higgsfield', 'Claude Code', 'Next.js 16', 'Vercel', 'WordPress'],
    copyright: '© 2026 · studAIant case study · antstudio × PEGAS',
  },
};

export type CaseStudy = typeof caseStudy;
