import type { GalleryItem } from '@/components/ui/Gallery';

export interface ServiceArea {
  number: string;
  title: string;
  description: string;
}

export interface ConversationSample {
  src: string;
  alt: string;
  caption?: string;
}

export interface AssistantContrast {
  heading: string;
  yes: string;
  no: string;
}

export type AssistantConversation =
  | {
      tag: string;
      prompt: string;
      responseLead: string;
      contrasts: AssistantContrast[];
    }
  | {
      tag: string;
      prompt: string;
      responseTitle: string;
      responseBody: string[];
      responseTail?: string;
    }
  | {
      tag: string;
      prompt: string;
      responseTitle: string;
      responsePoem: string[];
      responseClose: string;
      responseSignature: string;
      responseTagline: string;
    };

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
    subtitle: 'Texty · Ilustrace · Foto · Hlas · Rešerše · Code',
    meta: '2025–2026 · antstudio × PEGAS',
    cta: 'Skroluj',
  },

  anchors: [
    { id: 'vysledek', label: '01 Výsledek' },
    { id: 'reserse', label: '02 Rešerše' },
    { id: 'jazyk', label: '03 Vizuální jazyk' },
    { id: 'obraz', label: '04 Krize obrazu' },
    { id: 'produkty', label: '05 Produkty' },
    { id: 'tym', label: '06 Tým' },
    { id: 'higgsfield', label: '07 Higgsfield' },
    { id: 'hlas', label: '08 Hlas' },
    { id: 'asistent', label: '09 Asistent' },
    { id: 'vibecoding', label: '10 Vibecoding' },
    { id: 'obchod', label: '11 Pro obchod' },
  ],

  // 01 — Výsledek
  result: {
    intro:
      'Šest oblastí, ve kterých v antu používáme AI jako nástroj na klientských projektech. Tohle umíme dělat — a umíme to prodat dál.',
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
          'Z mobilního snímku přes cleanup v Higgsfieldu uděláme produktovou fotku, list a binder na pobočce. Hodiny místo dnů.',
      },
      {
        number: '04',
        title: 'Rešerše',
        description:
          'Děláme zahraniční benchmarks, konkurenční analýzy, prohlubujeme pochopení citlivých témat.',
      },
      {
        number: '05',
        title: 'Hlas',
        description:
          'Postavili jsme 30minutovou prezentaci značky s AI voiceoverem, interní prezentaci pro firmu a pilotní brand podcast.',
      },
      {
        number: '06',
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
    stockGallery: [
      { src: '/illustrations/stock-01.jpg', alt: 'Stockový americký pohřeb' },
      { src: '/illustrations/stock-02.jpg', alt: 'Stockový hřbitov, slzy' },
      { src: '/illustrations/stock-03.jpg', alt: 'Stockové symboly smutku' },
      { src: '/illustrations/stock-04.jpg', alt: 'Černé koně, pohřební kočár' },
      { src: '/illustrations/stock-05.jpg', alt: 'Bílé chryzantémy, černá stuha, parte' },
      { src: '/illustrations/stock-06.jpg', alt: 'Oblek s kravatou a rudou růží' },
      { src: '/illustrations/stock-07.jpg', alt: 'Květinová dekorace na pohřeb' },
      { src: '/illustrations/stock-08.jpg', alt: 'Rakev v kostele s kyticí' },
    ] satisfies GalleryItem[],
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

  // 03 — Vizuální jazyk PEGAS
  visualLanguage: {
    intro:
      "S asistentem jsme značce PEGAS postavili vlastní vizuální jazyk. Nezaměnitelný, čitelný, signifikantní. Křídlo místo celého koně. Příroda místo symbolů oboru. Otevřený motiv napříč věkem, vírou i kontextem.",
    wing: {
      src: '/assistant/vize-kridlo.png',
      alt: 'Křídlo — tichý symbol přítomnosti',
      title: 'Křídlo',
      body: 'Tichý symbol přítomnosti — vždy blízko, nikdy vtíravě. Nikdy neukazujeme celého okřídleného koně, jen část křídla. S prostorem pro vlastní představivost.',
    },
    nature: {
      src: '/assistant/vize-priroda.png',
      alt: 'Příroda místo symbolů oboru — křídlo, mušle, vlny, květy, listy, písek',
      title: 'Příroda',
      body: 'Příroda místo symbolů oboru. Otevřený vizuální jazyk, který funguje napříč věkem, vírou i kontextem.',
    },
  },

  // 05 — Produkty (čistíme nekvalitní podklady od dodavatelů)
  productRework: {
    intro:
      'Produktové materiály od dodavatelů jsou často nepoužitelné — modré gradienty, dílenské pozadí, špatné nasvícení, snímek na vozíku před garáží. Z toho, co dorazí, uděláme čisté studiové fotky pro produktový list. Začínáme rakvemi — tam, kde se nekvalita podkladů od dodavatelů ukazuje nejvýrazněji.',
    pairs: [
      {
        before: {
          src: '/products/rakev-01-before.png',
          alt: 'Rakev — původní podklad s modrým gradientem a oranžovou plachtou',
        },
        after: {
          src: '/products/rakev-01-after.png',
          alt: 'Rakev — čistá studiovka na neutrálním pozadí',
        },
        caption: 'Modrý gradient a barevné odlesky podlahy → čisté studio na neutrálním pozadí.',
      },
      {
        before: {
          src: '/products/rakev-02-before.png',
          alt: 'Rakev na vozíku před garážovými vraty',
        },
        after: {
          src: '/products/rakev-02-after.png',
          alt: 'Rakev izolovaná na bílém pozadí',
        },
        caption: 'Snímek z dílny na vozíku před vraty → produktovka izolovaná do listu. Bez studia, bez retušéra.',
      },
    ] satisfies {
      before: GalleryItem;
      after: GalleryItem;
      caption: string;
    }[],
    views: {
      intro:
        'Z každé rakve vyrobíme všechny pohledy a detaily, které produktový list potřebuje — celkový snímek, otevřený interiér, detail polštáře, kování, profil ozdoby. Jeden mobilní zdroj, kompletní fotosada.',
      items: [
        {
          src: '/products/rakev-02-pohledy.png',
          alt: 'Tmavší ořechová rakev s bílým saténovým interiérem — celkový pohled s otevřeným víkem, detail interiéru s polštářem, detail mosazného madla na nosné tyči, celkový boční profil',
        },
        {
          src: '/products/rakev-04-pohledy.png',
          alt: 'Medová dřevěná rakev se šeříkovým saténovým interiérem — celkový pohled s otevřeným víkem, detail interiéru se zřaseným saténem, detail mosazného madla, celkový boční profil zavřené rakve',
        },
      ] satisfies GalleryItem[],
    },
    catalog: {
      src: '/products/rakev-katalog.png',
      alt: 'Katalog rakví PEGAS — desítky vyčištěných produktovek sjednocených do jedné vizuální linie',
    } satisfies GalleryItem,
    catalogCaption:
      'Výsledek: desítky rakví v jedné vizuální linii. Sjednocené pozadí, světlo, kompozice. Bez focení.',
    takeaway:
      'Dodavatel pošle, co má. Vrátíme produktovku, která vypadá jako z katalogu.',
  },

  // 06 — Tým (portréty zaměstnanců — komplikované focení, AI cleanup)
  teamPortraits: {
    intro:
      'Týmové focení v pohřebnictví drhne dvakrát — produkčně a náladou. Studio a fotograf na pobočku jen kvůli portrétům jsou drahá produkce. A i když je seženete, lidi se stydí, nechtějí být na webu. S AI postavíme portrét z fotky, kterou už máme — z mobilu na chodbě, ze záběru z akce. Probíhalo společné ladění, každý člověk dostal několik variant na výběr a sám si vybral tu, ve které se vidí. Tak vznikl celý tým na webu. A některé portréty si zaměstnanci dokonce nasadili jako profilovku na osobních sítích.',
    pairs: [
      {
        before: {
          src: '/team/portret-01-zdroj.png',
          alt: 'Mobilní snímek zaměstnance v péřové bundě na chodbě pobočky',
        },
        after: {
          src: '/team/portret-01-vystup.png',
          alt: 'Studiový portrét — oblek, kravata, neutrální pozadí',
        },
        caption: 'Mobil na chodbě, péřovka, neonové světlo → studiový portrét v obleku.',
      },
      {
        before: {
          src: '/team/portret-02-zdroj.png',
          alt: 'Snímek zaměstnankyně u kancelářského stolu',
        },
        after: {
          src: '/team/portret-02-vystup.png',
          alt: 'Studiový portrét se značkovým fialovým šátkem na neutrálním pozadí',
        },
        caption: 'Záběr od stolu, žlutavé světlo, nepořádek v pozadí → portrét se značkovým šátkem.',
      },
      {
        before: {
          src: '/team/portret-03-zdroj.png',
          alt: 'Zaměstnankyně na firemní akci s modrým a červeným osvětlením',
        },
        after: {
          src: '/team/portret-03-vystup.png',
          alt: 'Studiový portrét s úsměvem na neutrálním pozadí',
        },
        caption: 'Záběr z firemní akce, barevné světlo, někdo v rameni → klidný portrét na nešumlovém pozadí.',
      },
      {
        before: {
          src: '/team/portret-04-zdroj.png',
          alt: 'Zaměstnanec v oranžovo-modrém osvětlení z akce',
        },
        after: {
          src: '/team/portret-04-vystup.png',
          alt: 'Studiový portrét s vousy a brýlemi na hlavě',
        },
        caption: 'Akce, oranžová záře v pozadí, dramatické nasvícení → konzistentní studiový portrét.',
      },
    ] satisfies {
      before: GalleryItem;
      after: GalleryItem;
      caption: string;
    }[],
    catalog: {
      src: '/team/team-galerie.png',
      alt: 'Galerie týmu PEGAS — osm portrétů zaměstnanců ve sjednocené brand-aligned vizualitě',
    } satisfies GalleryItem,
    catalogCaption:
      'Výsledek: celý tým ve sjednocené vizuální linii. Stejné pozadí, světlo, gesto. Bez studia, bez focení.',
    takeaway:
      'Lidi, co nechtěli na fotku, jsou teď na webu. Protože se na výsledku poprvé líbí sami sobě.',
  },

  // 07 — Higgsfield (mobile → studio → list → binder pipeline)
  higgsfield: {
    intro:
      'Naše vlajková ukázka pro klienta PEGAS — a kterou umíme nabídnout dalším klientům. Z mobilního snímku za pobočkou do binderu s aktuální sezónou. Hodiny místo dnů, bez focení a bez retušérů.',
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
    takeaway:
      'Klient přijde s katalogem ve smíšené kvalitě. Za týden má všechno v jedné vizuální linii.',
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
    conversations: [
      {
        tag: 'Tón značky · 3 ano/ne',
        prompt: 'Napiš mi krátké ukázky jak PEGAS komunikuje a jak ne, tři příklady.',
        responseLead:
          'Tady jsou tři krátké kontrasty, v duchu manuálu PEGAS: klidně, osobně, bez tlaku a bez prázdných frází.',
        contrasts: [
          {
            heading: '1. První kontakt',
            yes: '„Jsme tu pro Vás. Tiše, s respektem a krok za krokem."',
            no: '„Zajistíme kompletní pohřební servis rychle a profesionálně."',
          },
          {
            heading: '2. Nabídka rozloučení',
            yes: '„Rozloučení může nést to, co pro Vás bylo důležité. Místo, hudbu, květiny i ticho."',
            no: '„Vyberte si z našich balíčků pohřebních služeb za výhodné ceny."',
          },
          {
            heading: '3. Ujištění klienta',
            yes: '„Nemusíte vědět všechno hned. Společně najdeme podobu, která bude dávat smysl."',
            no: '„Poradíme Vám nejlepší řešení a postaráme se o vše bez starostí."',
          },
        ],
      },
      {
        tag: 'Delší text · klientka',
        prompt:
          'Napiš mi článek o tom jak jsem si zařídíla rozloučení předem – jsem klientka PEGAS, nechci zatěžovat rodinu a chci si to naplánovat po svém, mám speciální požadavky a celé to otvírá téma pro širší veřejnost.',
        responseTitle: 'Zařídila jsem si rozloučení předem. Ne ze strachu, ale z klidu.',
        responseBody: [
          'Dlouho jsem si myslela, že o vlastním rozloučení se nemluví. Že je to téma, které má přijít až někdy později. A možná ani tehdy ne nahlas. Jenže postupně jsem pochopila, že právě mlčení kolem odchodu může být pro rodinu těžší než samotný rozhovor. Nechtěla jsem, aby jednou moji blízcí museli v nejcitlivější chvíli hádat, co bych si přála. Nechtěla jsem, aby rozhodovali pod tlakem, mezi telefonáty, dokumenty a smutkem. Chtěla jsem jim nechat něco jiného než starost. Klid.',
          'Proto jsem se obrátila na PEGAS a začala plánovat své rozloučení předem.',
          'Nebyl to smutný rozhovor. Byl tichý, věcný a překvapivě osvobozující. Mohla jsem říct, co je pro mě důležité. Jakou hudbu bych si přála. Jaké květiny ke mně patří. Kdo má promluvit, a kdo nemusí. Jak má celý okamžik působit. Ne jako povinnost, ale jako chvíle, ve které se lidé mohou zastavit, nadechnout a být spolu.',
          'Mám i několik zvláštních přání. Nejsou velká, ale jsou moje. Nechci, aby rozloučení bylo příliš formální. Přeji si určité barvy, konkrétní píseň a místo pro osobní vzpomínky. Nechci, aby se o mně mluvilo jen daty a životopisem. Přála bych si, aby zaznělo něco opravdového. Něco, co mě vystihuje víc než dokonalá řeč.',
          'Plánování rozloučení předem není rezignace. Není to chladné ani morbidní. Je to tiché gesto odpovědnosti vůči těm, které máme rádi. A také vůči sobě.',
        ],
        responseTail:
          'Já jsem si ten tvar vybrala. A věřím, že tím jednou svým blízkým nedám další tíhu, ale oporu.',
      },
      {
        tag: 'Krátký útvar · PF 2027',
        prompt: 'Napiš mi PF27 pro PEGAS.',
        responseTitle: 'PF 2027',
        responsePoem: [
          'Ať nový rok přinese klid,',
          'pevnost v důležitých chvílích',
          'a prostor pro vše, co má smysl.',
        ],
        responseClose: 'Děkujeme za důvěru.',
        responseSignature: 'PEGAS',
        responseTagline: 'V tichu jsme.',
      },
    ] satisfies AssistantConversation[],
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
      {
        src: '/screenshots/kalendar.png',
        alt: 'Kalendář obřadů na PEGAS webu',
        liveUrl: 'https://pegas-upravy.vercel.app/kalendar-obradu/',
        liveLabel: 'Otevřít kalendář naživo',
      },
      {
        src: '/screenshots/parte.png',
        alt: 'Parte editor wizard',
        liveUrl: 'https://pegas-upravy.vercel.app/parte/',
        liveLabel: 'Otevřít parte editor naživo',
      },
      {
        src: '/screenshots/wizard.png',
        alt: 'Wizard pro objednání květiny',
        liveUrl: 'https://vazbyant2026.vercel.app',
        liveLabel: 'Otevřít wizard naživo',
      },
    ] satisfies (GalleryItem & { liveUrl?: string; liveLabel?: string })[],
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
