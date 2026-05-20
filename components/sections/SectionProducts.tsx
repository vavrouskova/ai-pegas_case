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

        {/* Pipeline mobil → studio → list → binder */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 relative">
            {products.adhoc.flow.map((step, index) => (
              <figure key={index} className="space-y-3 relative">
                <div className="relative aspect-[3/4] overflow-hidden border border-line bg-cream">
                  <Image
                    src={step.src}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                  {index < products.adhoc.flow.length - 1 ? (
                    <span
                      aria-hidden
                      className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-cream border border-line rounded-full text-alovy-dark text-lg"
                    >
                      →
                    </span>
                  ) : null}
                </div>
                <figcaption className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                    {step.label}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{step.caption}</p>
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
