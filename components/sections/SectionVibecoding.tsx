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

        {/* Spotlight — vazbykvetin.cz (kompaktni odkaz na samostatny case) */}
        <a
          href={spotlight.caseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mt-12 md:mt-16 border border-line p-6 md:p-7 card-hover"
        >
          <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-center">
            <div className="md:col-span-7 space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                {spotlight.label}
              </p>
              <p className="font-serif text-xl md:text-2xl leading-tight">
                {spotlight.title} <em className="text-alovy not-italic">{spotlight.titleAccent}</em>
              </p>
            </div>
            <div className="md:col-span-3 flex items-baseline md:justify-center gap-2">
              <span className="text-xs uppercase tracking-widest text-muted line-through decoration-alovy">
                {spotlight.stats.traditional}
              </span>
              <span className="text-muted">→</span>
              <span className="font-serif text-2xl md:text-3xl text-alovy">
                {spotlight.stats.actual}
              </span>
            </div>
            <div className="md:col-span-2 flex md:justify-end">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-ink group-hover:text-alovy-dark transition-colors">
                Otevřít case
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
