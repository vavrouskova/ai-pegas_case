import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionHiggsfield = () => {
  const { higgsfield } = caseStudy;

  return (
    <section id="higgsfield" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              07 · Higgsfield
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Z mobilu
              <br />
              <em className="text-alovy not-italic">do binderu</em>
              <br />
              na každé pobočce.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{higgsfield.intro}</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {higgsfield.flow.map((step, index) => {
            const fillsBox = step.src.includes('flow-02') || step.src.includes('flow-04');
            const isSheet = step.src.includes('flow-03');
            return (
            <figure key={index} className="space-y-3">
              <div className={`relative aspect-[4/3] overflow-hidden border border-line ${isSheet ? 'bg-line' : 'bg-cream'}`}>
                <Image
                  src={step.src}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className={fillsBox ? 'object-cover' : 'object-contain'}
                />
              </div>
              <figcaption className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                  {step.label}
                </p>
                <p className="text-sm text-muted leading-relaxed">{step.caption}</p>
              </figcaption>
            </figure>
            );
          })}
        </div>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl leading-tight">
            <span className="text-alovy">„</span>
            {higgsfield.takeaway}
            <span className="text-alovy">"</span>
          </p>
        </div>
      </div>
    </section>
  );
};
