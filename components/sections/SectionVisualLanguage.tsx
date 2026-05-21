import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionVisualLanguage = () => {
  const { visualLanguage } = caseStudy;
  const { wing, nature } = visualLanguage;

  return (
    <section id="jazyk" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              03 · Vizuální jazyk
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Tichý symbol
              <br />
              <em className="text-alovy not-italic">místo klišé</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{visualLanguage.intro}</p>
          </div>
        </div>

        <figure className="mt-16 md:mt-20">
          <div className="relative overflow-hidden border border-line bg-cream aspect-[16/9]">
            <Image
              src={wing.src}
              alt={wing.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
              priority={false}
            />
          </div>
          <figcaption className="mt-6 md:mt-8 grid md:grid-cols-12 gap-10">
            <h3 className="md:col-span-4 font-serif text-3xl md:text-4xl leading-tight">
              {wing.title}
            </h3>
            <p className="md:col-span-7 md:col-start-6 text-base md:text-lg leading-relaxed">
              {wing.body}
            </p>
          </figcaption>
        </figure>

        <figure className="mt-16 md:mt-24">
          <div className="relative overflow-hidden border border-line bg-cream aspect-[16/9]">
            <Image
              src={nature.src}
              alt={nature.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-contain"
            />
          </div>
          <figcaption className="mt-6 md:mt-8 grid md:grid-cols-12 gap-10">
            <h3 className="md:col-span-4 font-serif text-3xl md:text-4xl leading-tight">
              {nature.title}
            </h3>
            <p className="md:col-span-7 md:col-start-6 text-base md:text-lg leading-relaxed">
              {nature.body}
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
