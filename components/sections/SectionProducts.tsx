import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionProducts = () => {
  const { products } = caseStudy;

  return (
    <section id="produkty" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              05 · Produkty
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Z katalogu
              <br />
              do <em className="text-alovy not-italic">jedné linie</em>
              <br />
              za týden.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{products.intro}</p>
          </div>
        </div>

        {/* Regenerace produktů */}
        <div className="mt-20 md:mt-24">
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-4">
              <h3 className="font-serif text-2xl md:text-3xl">{products.regeneration.title}</h3>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {products.regeneration.description}
              </p>
            </div>
          </div>

          <div className="space-y-12 md:space-y-16">
            {products.regeneration.pairs.map((pair, index) => (
              <div key={index} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <figure className="space-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden border border-line bg-cream">
                      <Image
                        src={pair.before.src}
                        alt={pair.before.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="text-xs uppercase tracking-[0.2em] text-muted">
                      Původní
                    </figcaption>
                  </figure>
                  <figure className="space-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden border border-line bg-cream">
                      <Image
                        src={pair.after.src}
                        alt={pair.after.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                      AI regenerace
                    </figcaption>
                  </figure>
                </div>
                {pair.note ? (
                  <p className="text-sm text-muted italic">{pair.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Ad-hoc materiály */}
        <div className="mt-24 md:mt-28">
          <div className="grid md:grid-cols-12 gap-10 mb-10">
            <div className="md:col-span-4">
              <h3 className="font-serif text-2xl md:text-3xl">{products.adhoc.title}</h3>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {products.adhoc.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {products.adhoc.items.map((item, index) => (
              <figure key={index} className="space-y-2">
                <div className="relative aspect-[3/4] overflow-hidden border border-line bg-cream">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-xs uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl leading-tight">
            <span className="text-alovy">„</span>
            {products.takeaway}
            <span className="text-alovy">"</span>
          </p>
        </div>
      </div>
    </section>
  );
};
