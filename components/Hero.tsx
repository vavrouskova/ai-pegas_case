import { caseStudy } from '@/content/caseStudy';

export const Hero = () => {
  const { hero } = caseStudy;

  return (
    <section id="hero" className="relative px-6 md:px-12 pt-20 md:pt-32 pb-24 md:pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
          {hero.subtitle}
        </div>
        <h1 className="font-serif text-[12vw] md:text-[8vw] lg:text-[7rem] leading-[0.95] tracking-tight">
          Pohřebnictví
          <br />
          <span className="text-alovy">v rukou AI.</span>
        </h1>
        <p className="mt-10 md:mt-14 text-xl md:text-2xl max-w-2xl leading-snug text-muted">
          Texty, ilustrace, fotky, hlas, kód. V kreativě používáme AI jako nástroj na klientských
          projektech — a&nbsp;tohle všechno <em>umíme prodat dál</em>.
        </p>
        <div className="mt-12 text-sm uppercase tracking-[0.2em] text-muted">{hero.meta}</div>
        <a
          href="#vysledek"
          className="mt-16 flex items-center gap-3 text-sm text-muted scroll-hint w-fit"
        >
          <span>Skroluj</span>
          <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
            <path d="M1 1l9 9 9-9" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </div>
    </section>
  );
};
