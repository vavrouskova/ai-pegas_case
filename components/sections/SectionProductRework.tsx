import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionProductRework = () => {
  const { productRework } = caseStudy;

  return (
    <section id="produkty" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              05 · Produkty
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Špatná fotka
              <br />
              <em className="text-alovy not-italic">kazí dobrou službu</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{productRework.intro}</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            {productRework.sourceGallery.label}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {productRework.sourceGallery.items.map((item, index) => (
              <figure
                key={index}
                className="relative overflow-hidden border border-line bg-cream aspect-[4/3]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20 space-y-12 md:space-y-16">
          {productRework.pairs.map((pair, index) => (
            <figure key={index} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="space-y-2">
                  <div className="relative overflow-hidden border border-line bg-cream aspect-[4/3]">
                    <Image
                      src={pair.before.src}
                      alt={pair.before.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    Zdroj
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="relative overflow-hidden border border-line bg-cream aspect-[4/3]">
                    <Image
                      src={pair.after.src}
                      alt={pair.after.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-contain"
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

        <div className="mt-20 md:mt-28">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
            Pohledy a detaily
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            {productRework.views.intro}
          </p>
          <div className="mt-10 md:mt-12 space-y-4 md:space-y-5">
            {productRework.views.items.map((item, index) => (
              <figure
                key={index}
                className="relative overflow-hidden border border-line bg-cream aspect-[16/9]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl leading-tight">
            <span className="text-alovy">„</span>
            {productRework.takeaway}
            <span className="text-alovy">"</span>
          </p>
        </div>
      </div>
    </section>
  );
};
