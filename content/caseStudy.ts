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
    meta: '2025–2026 · antstudio × Pegas',
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
      'Pět oblastí, ve kterých AI v antu reálně pracuje na klientských projektech. Tohle umíme dělat — a umíme to prodat dál.',
    areas: [
      {
        number: '01',
        title: 'Texty',
        description:
          'AI asistent na míru značce píše copy, brand statementy, web texty. Pomáhá brainstormovat a držet konzistentní tón.',
      },
      {
        number: '02',
        title: 'Ilustrace',
        description:
          'AI generuje ilustrace, které obejdou stockovou tíseň pohřebního oboru a vyvolávají klid místo hrůzy.',
      },
      {
        number: '03',
        title: 'Foto (Higgsfield)',
        description:
          'Mobilní snímek → AI cleanup → produktová fotka připravená na e-shop. Hodiny místo dnů.',
      },
      {
        number: '04',
        title: 'Rešerše',
        description:
          'Zahraniční benchmarks, konkurenční analýzy, pochopení citlivých témat.',
      },
      {
        number: '05',
        title: 'Produkty',
        description:
          'Regenerace produktových fotek (rakve před/po), sezónní materiály, tištěné produktové listy. Z katalogu do jednotné vizuální linie za týden.',
      },
      {
        number: '06',
        title: 'Hlas',
        description:
          '30minutová prezentace značky s AI voiceoverem. Interní prezentace pro firmu. Pilotní brand podcast.',
      },
      {
        number: '07',
        title: 'Code',
        description:
          'Vibecoding s Claude Code — kalendář obřadů, parte editor, wizard pro objednání květin za dny místo týdnů.',
      },
    ] satisfies ServiceArea[],
  },

  // 02 — Rešerše
  research: {
    intro:
      'Než jsme cokoliv navrhli, museli jsme téma pohřebnictví pochopit. AI nám zkrátila zorientování v cizí krajině na zlomek času.',
    points: [
      'Konkurenční analýza českého trhu — co kdo nabízí, co chybí, kde je prostor.',
      'Zahraniční benchmarks — Skandinávie (designově otevřenější), UK (citlivost komunikace), US (digitální nabídka).',
      'Pochopení citlivého tématu — jak mluvit s pozůstalými bez floskulí, jak nezraňovat.',
    ],
  },

  // 03 — Krize obrazu
  imageCrisis: {
    problem:
      'Otevřete stockovou banku. Hledáte fotky pohřebnictví. Najdete americké hřbitovy, hromady věnců, slzy. Středoevropská vizualita oboru chybí, a co je, jsou symboly hrůzy — deprese, kříže, černo.',
    traditionalSolution:
      'Klasická cesta: vlastní focení. Drahé, časově náročné, a stejně narazíte na to, že fotka konkrétního smutku nemusí být to, co web chce sdělit.',
    aiSolution:
      'AI ilustrace obcházejí konkrétnost. Vyvolávají klid. Mohou pracovat se symbolikou bez doslovnosti — strom místo hřbitova, vlna místo věnce.',
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
      'Higgsfield AI cleanup + brand-aligned úprava.',
      'Nahozeno na e-shop. Hodiny místo dnů.',
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
      'Klient má katalog produktů — různá kvalita fotek, různá doba focení, různé stylizace. My to s AI proženeme do jednotné vizuální linie. Plus generujeme ad-hoc materiály: sezónní propagaci, produktové listy do tisku.',
    regeneration: {
      title: 'Regenerace produktů',
      description:
        'Zrovna teď regenerujeme všechny rakve. Klient pošle původní fotku, my dodáme čistou produktovou v brandové linii Pegasu. Ukázky před a po:',
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
      'AI nám vyrobila 30minutovou prezentaci značky Pegas s voiceoverem. Klienti si ji teď přehrávají sami — my nemusíme pořád dokola vysvětlovat základy a máme pod kontrolou obsah. K tomu pilotní ukázka brand podcastu.',
    // src/poster nechány nevyplněné — vendy doplní reálné soubory do public/media/
    items: [
      {
        kind: 'video',
        title: 'Prezentace značky Pegas',
        duration: '30 min',
        description:
          'Kompletní intro do brandu — manifest, vizuální systém, claim. AI voiceover, AI generované pasáže obrazu. Klient si pustí, my nemluvíme do prázdna.',
      },
      {
        kind: 'video',
        title: 'Interní prezentace pro firmu',
        duration: '~ 15 min',
        description:
          'Direkce do Pegas týmu: kam jdeme, proč to děláme, jak to měříme. AI voiceover držený v tónu značky.',
      },
      {
        kind: 'audio',
        title: 'Pilotní brand podcast',
        duration: '~ 5 min',
        description:
          'Ukázka, jak by mohl vypadat dlouhodobý audio kanál Pegas. Hlas, hudba, tonalita — všechno AI.',
      },
    ] satisfies MediaItem[],
    takeaway:
      'Klient si materiály pustí. Tým antu nemusí každému kreslit značku od nuly znovu. Obsah pod kontrolou, čas zpátky.',
  },

  // 07 — Brand asistent
  assistant: {
    intro:
      'Custom ChatGPT asistent, nastavený od první chvíle vývoje brandu Pegas. Krmený brand systémem, manifestem, claim systémem. Postupně se naučil značku — i přes její náročný minimalismus.',
    capabilities: [
      'Píše brand copy a web texty v drženém tónu.',
      'Brainstormuje další postupy a nápady k projektům.',
      'Generuje první ilustrace (vstup do sekce 03).',
      'Kreslí vize budoucnosti — speculative vizualizace pro klientské pitche.',
      'Není senior. Trefuje se ale dobře — a šetří nám každodenní rutinu.',
    ],
    screenshots: [
      { src: '/assistant/01.png', alt: 'Ukázka konverzace 1' },
      { src: '/assistant/02.png', alt: 'Ukázka konverzace 2' },
      { src: '/assistant/03.png', alt: 'Ukázka konverzace 3' },
    ] satisfies ConversationSample[],
    futureVision: {
      title: 'Vize budoucnosti',
      description:
        'Ukázka, kam asistent dokáže značku posunout: speculative vizualizace prostorů, kampaní, produktových konceptů. Pro klientské pitche a interní směr.',
      gallery: [
        { src: '/assistant/vize-01.png', alt: 'Vize budoucnosti 1' },
        { src: '/assistant/vize-02.png', alt: 'Vize budoucnosti 2' },
        { src: '/assistant/vize-03.png', alt: 'Vize budoucnosti 3' },
      ] satisfies GalleryItem[],
    },
  },

  // 06 — Vibecoding
  vibecoding: {
    intro:
      'Druhá kapitola: AI nepíše jen texty, AI píše i kód. S Claude Code workflow jsme postavili features, které by tradičně trvaly týdny.',
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
      { src: '/screenshots/kalendar.png', alt: 'Kalendář obřadů na Pegas webu' },
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
          'Nastavený, krmený značkou, k denní práci. Pro klienty, kteří chtějí konzistenci napříč týmem.',
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
      'Bez AI by středoevropská vizualita pohřebnictví neexistovala. S AI je antstudio připravené posunout tu hranici i u dalších klientů.',
  },

  credits: {
    team: 'Tým antstudia',
    client: 'Klient: Pegas',
    stack: ['ChatGPT custom', 'Higgsfield', 'Claude Code', 'Next.js 16', 'Vercel', 'WordPress'],
    copyright: '© 2026 · studAIant case study · antstudio × Pegas',
  },
};

export type CaseStudy = typeof caseStudy;
