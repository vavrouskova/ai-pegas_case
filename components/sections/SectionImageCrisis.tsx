import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';
import { Gallery } from '@/components/ui/Gallery';

export const SectionImageCrisis = () => {
  const { imageCrisis } = caseStudy;

  return (
    <section id="obraz" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              04 · Krize obrazu
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Stockové banky
              <br />
              <em className="text-alovy not-italic">tu vizualitu</em>
              <br />
              nemají.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted mb-3">Problém</h3>
              <p className="text-base md:text-lg leading-relaxed">{imageCrisis.problem}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted mb-3">
                Tradiční řešení
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {imageCrisis.traditionalSolution}
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-alovy-dark mb-3">
                AI řešení
              </h3>
              <p className="text-base md:text-lg leading-relaxed">{imageCrisis.aiSolution}</p>
            </div>
          </div>
        </div>

        {/* Side-by-side comparison: stock vs. naše AI */}
        <div className="mt-20 md:mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-8">
            Stock vs. naše AI · co najdete a co děláme
          </p>
          <div className="space-y-10 md:space-y-12">
            {imageCrisis.comparison.map((pair, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <figure className="space-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden border border-line bg-cream">
                    <Image
                      src={pair.stock.src}
                      alt={pair.stock.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover grayscale opacity-80"
                    />
                  </div>
                  <figcaption className="text-xs uppercase tracking-[0.2em] text-muted">
                    Stock · co je k dispozici
                  </figcaption>
                </figure>

                <figure className="space-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden border border-line bg-cream">
                    <Image
                      src={pair.ai.src}
                      alt={pair.ai.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                    Naše AI · co jsme vyrobili
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Plná galerie AI ilustrací pro PEGAS */}
        <div className="mt-20 md:mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            Galerie · AI ilustrace pro PEGAS
          </p>
          <Gallery items={imageCrisis.gallery} columns={4} aspect="square" />
        </div>
      </div>
    </section>
  );
};
