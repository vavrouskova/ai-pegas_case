import { caseStudy } from '@/content/caseStudy';

export const SectionResult = () => {
  const { result } = caseStudy;

  return (
    <section id="vysledek" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            01 · Výsledek
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">Co umíme.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">{result.intro}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-muted">
            {result.areas.map((area) => (
              <li key={area.number} className="flex items-start gap-3">
                <span className="text-alovy font-serif text-2xl leading-none">·</span>
                <div>
                  <strong className="text-ink">{area.title}.</strong>{' '}
                  {area.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
