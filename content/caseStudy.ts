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

export interface FlowStep {
  src: string;
  alt: string;
  label: string;
  caption: string;
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
      'Naše AI ilustrace stojí na běžných okamžicích — lidé, dotyk, pohled, ticho. Žádné hřbitovy, žádné slzy, žádné kříže. Středoevropské tváře, brand-aligned tóny, klid. Tam, kde stock nabízí drama, my nabízíme přítomnost.',
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
        'Zrovna teď regenerujeme celý katalog — rakve, kompozice, prostředí. Někdy přefotí pozadí, jindy přesvítí, jindy předěláme kompletně. Cíl je vždy stejný: čistá produktová fotka v brandové linii PEGAS. Ukázky:',
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
      title: 'Z mobilu do binderu na každé pobočce',
      description:
        'Florista uváže věnec, vyfotí mobilem na betonu za pobočkou. My uděláme AI studio shot, zařadíme do produktového listu v brandové linii PEGAS — a binder s aktuální sezónou jede na pobočky dřív, než odkvetou macešky.',
      flow: [
        {
          src: '/products/flow-01-mobile.jpg',
          alt: 'Mobilní snímek věnce na konstrukci za pobočkou',
          label: '01 · Mobil',
          caption: 'Florista uváže, vyfotí na pozadí betonu. Žádné světla, žádný studio setup.',
        },
        {
          src: '/products/flow-02-studio.jpg',
          alt: 'AI studio detail květin v plné kvalitě',
          label: '02 · AI studio',
          caption: 'Cleanup pozadí, sjednocení nasvícení, detail v plné kvalitě.',
        },
        {
          src: '/products/flow-03-sheet.jpg',
          alt: 'PEGAS produktový list — JARO 1',
          label: '03 · Produktový list',
          caption: 'Layout v PEGAS šabloně. Náhledy + detail + popis + parametry.',
        },
        {
          src: '/products/flow-04-binder.jpg',
          alt: 'Fialový kroužkový binder s produktovými listy na pobočce',
          label: '04 · Binder na pobočce',
          caption: 'Sezónní binder do každé pobočky. Aktuální nabídka po ruce.',
        },
      ] satisfies FlowStep[],
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
      'Stavíme s ním vizuální esenci značky — symboly, jazyk, otevřené motivy bez klišé oboru.',
      'Není to senior nástroj. Trefuje se ale dobře — a šetří nám každodenní rutinu.',
    ],
    screenshots: [
      { src: '/assistant/01.png', alt: 'Ukázka konverzace 1' },
      { src: '/assistant/02.png', alt: 'Ukázka konverzace 2' },
      { src: '/assistant/03.png', alt: 'Ukázka konverzace 3' },
    ] satisfies ConversationSample[],
    live: {
      name: 'Asistent značky PEGAS',
      tagline: 'Důstojný průvodce komunikací a koncepcí značky.',
      url: 'https://chatgpt.com/', // TODO: vendy doplní konkrétní URL custom GPT
      logo: '/assistant/pegas-logo.png',
    },
    brandVoice: [
      {
        title: 'Co je cílem každé aplikace značky PEGAS?',
        body: 'Cílem každé aplikace značky PEGAS je měnit pohled na rozloučení. Ne silou. Ne provokací. Ale klidem, krásou a přítomností. Smrt bývá téma, které odsouváme — dokud se nás samo nedotkne. PEGAS pro něj vytváří prostor: bez tlaku, bez hotových odpovědí, s úctou k tomu, že každý prožívá ztrátu jinak.',
        attribution: '„Čím více jsme zapojeni do smrti, tím zdravěji truchlíme." — Caitlin Doughty',
      },
      {
        title: 'Kdo je tedy PEGAS?',
        body: 'PEGAS není učitelka, která ví, co je správně. PEGAS je osoba, která se posadí vedle vás. Vyslechne. Ztiší prostor. A pomůže najít podobu, která dává smysl vám. Neopravuje, nekárá, nepoučuje. Spíš se ptá: „Co bylo pro něj důležité?" „Co by vám pomohlo?"',
        attribution: 'Nejsme ti, kdo mají pravdu. Jsme ti, kdo pomáhají najít klidný tvar tomu, co cítíte.',
      },
    ],
    futureVision: {
      title: 'Vizuální jazyk PEGAS',
      description:
        'S asistentem jsme postavili vizuální esenci značky: tichý symbol křídla místo celého koně, příroda místo symbolů oboru. Otevřený jazyk, který funguje napříč věkem, vírou i kontextem — bez klišé.',
      gallery: [
        { src: '/assistant/vize-01.png', alt: 'Křídlo — tichý symbol přítomnosti' },
        { src: '/assistant/vize-02.png', alt: 'Příroda místo symbolů oboru — květ' },
        { src: '/assistant/vize-03.png', alt: 'Příroda místo symbolů oboru — list' },
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
