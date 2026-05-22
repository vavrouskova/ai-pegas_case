import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';
import { LightboxGallery } from '@/components/ui/LightboxGallery';

export const SectionFloralCatalog = () => {
  const { floralCatalog } = caseStudy;

  return (
    <section
      id="katalog-kvetin"
      className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              06 · Katalog květin
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Stejný produkt,
              <br />
              <em className="text-alovy not-italic">jiná energie</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{floralCatalog.intro}</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            {floralCatalog.sourceGallery.label}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {floralCatalog.sourceGallery.items.map((item, index) => (
              <figure
                key={index}
                className="relative overflow-hidden border border-line bg-cream aspect-[3/4]"
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

        <div className="mt-16 md:mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-alovy-dark mb-4">
            {floralCatalog.outputGallery.label}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted max-w-3xl mb-8">
            {floralCatalog.outputGallery.intro}
          </p>
          <LightboxGallery items={floralCatalog.outputGallery.items} />
        </div>

        <div className="mt-16 md:mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-alovy-dark mb-4">
            {floralCatalog.visualGallery.label}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted max-w-3xl mb-8">
            {floralCatalog.visualGallery.intro}
          </p>
          <LightboxGallery
            items={floralCatalog.visualGallery.items}
            gridClassName="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
            figureAspect="aspect-[3/4]"
          />
        </div>

        <div className="mt-16 md:mt-20 max-w-3xl">
          <p className="font-serif text-2xl md:text-3xl leading-tight">
            <span className="text-alovy">„</span>
            {floralCatalog.takeaway}
            <span className="text-alovy">"</span>
          </p>
        </div>
      </div>
    </section>
  );
};
