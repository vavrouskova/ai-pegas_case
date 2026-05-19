import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const SectionHiggsfield = () => {
  const { higgsfield } = caseStudy;

  return (
    <section id="higgsfield" className="container-content py-32">
      <FadeIn>
        <SectionLabel number="04">Higgsfield workflow</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-4xl">Z mobilu na e-shop za hodiny</h2>
        <p className="mt-6 max-w-2xl text-lg text-black-rich/70">{higgsfield.intro}</p>
      </FadeIn>

      <FadeIn delay={150}>
        <ol className="mt-12 space-y-4 max-w-3xl">
          {higgsfield.steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="text-xs uppercase tracking-wider text-primary font-medium shrink-0 w-8 pt-1">
                0{index + 1}
              </span>
              <p className="text-base text-black-rich/85 leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="mt-20 space-y-12">
          <p className="text-sm uppercase tracking-wider text-black-rich/50">
            Před a po · ukázky z Vazárny
          </p>

          {higgsfield.pairs.map((pair, index) => (
            <div key={index} className="grid gap-4 sm:grid-cols-2">
              <figure className="space-y-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-grey-warm">
                  <Image
                    src={pair.before.src}
                    alt={pair.before.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-xs uppercase tracking-wider text-black-rich/50">
                  Mobil
                </figcaption>
              </figure>

              <figure className="space-y-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-grey-warm">
                  <Image
                    src={pair.after.src}
                    alt={pair.after.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-xs uppercase tracking-wider text-primary">
                  Higgsfield + brand
                </figcaption>
              </figure>

              {pair.note ? (
                <p className="sm:col-span-2 text-sm text-black-rich/70 italic">{pair.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};
