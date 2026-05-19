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
              04 · Higgsfield
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Z mobilu
              <br />
              <em className="text-alovy not-italic">na e-shop</em>
              <br />
              za hodiny.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            <p className="text-lg md:text-xl leading-relaxed">{higgsfield.intro}</p>
            <ol className="space-y-4">
              {higgsfield.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4 text-muted">
                  <span className="font-serif text-alovy text-lg shrink-0 w-8 pt-0.5">
                    0{index + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20 md:mt-24 space-y-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Před a po · ukázky z Vazárny
          </p>

          {higgsfield.pairs.map((pair, index) => (
            <div key={index} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <figure className="space-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden border border-line bg-cream">
                    <Image
                      src={pair.before.src}
                      alt={pair.before.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs uppercase tracking-[0.2em] text-muted">
                    Mobil
                  </figcaption>
                </figure>

                <figure className="space-y-2">
                  <div className="relative aspect-[3/4] overflow-hidden border border-line bg-cream">
                    <Image
                      src={pair.after.src}
                      alt={pair.after.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                    Higgsfield + brand
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
    </section>
  );
};
