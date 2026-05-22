import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionTeamPortraits = () => {
  const { teamPortraits } = caseStudy;

  return (
    <section id="tym" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              08 · Tým
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05]">
              Tým, co
              <br />
              <em className="text-alovy not-italic">nešel před</em>
              <br />
              objektiv.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{teamPortraits.intro}</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {teamPortraits.pairs.map((pair, index) => (
            <figure key={index} className="space-y-4">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-2">
                  <div className="relative overflow-hidden border border-line bg-cream aspect-square">
                    <Image
                      src={pair.before.src}
                      alt={pair.before.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover object-[center_25%]"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    Zdroj
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="relative overflow-hidden border border-line bg-cream aspect-square">
                    <Image
                      src={pair.after.src}
                      alt={pair.after.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover object-[center_25%]"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                    Výstup
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>

        <figure className="mt-16 md:mt-24 space-y-3">
          <div className="relative overflow-hidden border border-line bg-cream aspect-[2/1]">
            <Image
              src={teamPortraits.catalog.src}
              alt={teamPortraits.catalog.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover object-[center_25%]"
            />
          </div>
          <figcaption className="text-sm md:text-base text-muted leading-relaxed max-w-3xl">
            {teamPortraits.catalogCaption}
          </figcaption>
        </figure>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl leading-tight">
            <span className="text-alovy">„</span>
            {teamPortraits.takeaway}
            <span className="text-alovy">"</span>
          </p>
        </div>
      </div>
    </section>
  );
};
