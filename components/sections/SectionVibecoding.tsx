import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionVibecoding = () => {
  const { vibecoding } = caseStudy;
  const { spotlight } = vibecoding;

  return (
    <section id="vibecoding" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              11 · Vibecoding
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Features za <em className="text-alovy not-italic">dny</em>
              <br />
              místo týdnů.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{vibecoding.intro}</p>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {vibecoding.features.map((feature, index) => {
            const shot = vibecoding.screenshots[index];
            return (
              <figure key={index} className="space-y-4">
                <div className="relative overflow-hidden border border-line bg-cream aspect-[4/3]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="space-y-2">
                  <h3 className="font-serif text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl leading-tight">
            <span className="text-alovy">„</span>
            {vibecoding.takeaway}
            <span className="text-alovy">"</span>
          </p>
        </div>

        {/* Spotlight — vazbykvetin.cz case-within-case */}
        <div className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-line">
          <p className="text-sm uppercase tracking-[0.2em] text-alovy-dark mb-6">
            {spotlight.label}
          </p>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
            {spotlight.title}
            <br />
            <em className="text-alovy not-italic">{spotlight.titleAccent}</em>
          </h3>
          <p className="mt-8 md:mt-10 text-lg md:text-xl leading-relaxed text-muted max-w-3xl">
            {spotlight.lead}
          </p>

          {/* 3 phases */}
          <div className="mt-14 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
            {spotlight.phases.map((phase) => (
              <article key={phase.number} className="border border-line p-7 md:p-8 card-hover">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-serif text-5xl md:text-6xl text-alovy leading-none">
                    {phase.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {phase.tag}
                  </span>
                </div>
                <h4 className="font-serif text-2xl md:text-3xl leading-tight mb-4">
                  {phase.title}
                </h4>
                <p className="text-sm md:text-base text-muted leading-relaxed">{phase.body}</p>
                <p className="mt-6 pt-6 border-t border-line text-xs uppercase tracking-widest text-muted">
                  {phase.footer}
                </p>
              </article>
            ))}
          </div>

          {/* Stats — 200h → 30h */}
          <div className="mt-20 md:mt-24 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
              {spotlight.stats.traditionalLabel}
            </p>
            <div className="font-serif font-black text-[18vw] md:text-[14vw] lg:text-[12rem] leading-none">
              <span className="line-through decoration-alovy decoration-[3px] md:decoration-[6px]">
                {spotlight.stats.traditional}
              </span>
            </div>
            <p className="font-serif text-2xl md:text-3xl mt-4">
              {spotlight.stats.timeframeLabel}{' '}
              <span className="line-through decoration-alovy">{spotlight.stats.timeframe}</span>.
            </p>

            <div className="my-10 md:my-12 flex justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="text-alovy"
                aria-hidden
              >
                <path
                  d="M20 8v24M10 22l10 10 10-10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <p className="font-serif text-2xl md:text-3xl mb-6 max-w-3xl mx-auto">
              {spotlight.stats.actualLead}
            </p>
            <div className="font-serif font-black text-[22vw] md:text-[18vw] lg:text-[16rem] leading-none text-alovy">
              {spotlight.stats.actual}
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted">
              {spotlight.stats.actualSuffix}
            </p>
          </div>

          {/* Spotlight takeaway */}
          <div className="mt-20 md:mt-24 max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl md:text-3xl leading-tight italic text-ink">
              {spotlight.takeaway}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
