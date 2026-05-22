import { caseStudy } from '@/content/caseStudy';

export const Credits = () => {
  const { credits } = caseStudy;

  return (
    <footer
      id="credits"
      className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line bg-ink text-cream"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-sm uppercase tracking-[0.2em] text-cream/60 mb-4">
              Credits
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Velký <em className="text-alovy not-italic">dík</em>.
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7 space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed">
              {credits.team}
              <br />
              <span className="text-cream/70">{credits.client}</span>
            </p>

            <div className="pt-8 border-t border-cream/20">
              <p className="text-xs uppercase tracking-[0.2em] text-cream/60 mb-4">Stack</p>
              <ul className="flex flex-wrap gap-2">
                {credits.stack.map((tech) => (
                  <li
                    key={tech}
                    className="text-xs px-3 py-1 border border-cream/30 text-cream/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-24 pt-8 border-t border-cream/20 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-widest text-cream/50">
          <div>{credits.copyright}</div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-alovy" />
            antstudio × PEGAS
          </div>
        </div>
      </div>
    </footer>
  );
};
