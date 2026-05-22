import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionSales = () => {
  const { sales } = caseStudy;

  return (
    <section id="obchod" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              12 · Pro obchod
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Tohle umíme
              <br />
              <em className="text-alovy not-italic">prodat dál</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed mb-10">{sales.intro}</p>
            <ul className="grid sm:grid-cols-2 gap-5">
              {sales.packages.map((pkg, index) => (
                <li
                  key={index}
                  className="border border-line p-5 space-y-2 card-hover"
                >
                  <h3 className="font-serif text-lg">{pkg.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{pkg.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-24 max-w-4xl">
          <div
            aria-hidden
            className="font-serif text-alovy text-[8rem] md:text-[10rem] leading-[0.6] mb-0 select-none"
          >
            &ldquo;
          </div>
          <p className="font-serif text-3xl md:text-5xl leading-[1.15] text-ink -mt-4">
            {sales.takeaway}
          </p>
        </div>

        <div className="mt-20 md:mt-28">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            {sales.failedGallery.label}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted max-w-3xl mb-8">
            {sales.failedGallery.intro}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {sales.failedGallery.items.map((item, index) => (
              <figure
                key={index}
                className="relative overflow-hidden border border-line bg-cream aspect-square"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <p className="text-sm uppercase tracking-[0.2em] text-alovy-dark mb-6">
            {sales.epilogue.label}
          </p>
          <div className="max-w-xl border border-line overflow-hidden bg-ink">
            {sales.epilogue.items.map((item, index) => (
              <figure key={index} className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-contain"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
