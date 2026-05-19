import { caseStudy } from '@/content/caseStudy';

export const SectionResearch = () => {
  const { research } = caseStudy;

  return (
    <section id="reserse" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            02 · Rešerše
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
            Než jsme cokoliv navrhli.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">{research.intro}</p>
          <ul className="space-y-4">
            {research.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-muted">
                <span className="text-alovy font-serif text-2xl leading-none shrink-0">·</span>
                <p className="leading-relaxed">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
