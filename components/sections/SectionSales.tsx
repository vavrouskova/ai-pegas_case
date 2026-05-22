import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionSales = () => {
  const { sales } = caseStudy;

  return (
    <section
      id="obchod"
      className="relative px-6 md:px-12 py-32 md:py-40 border-t border-line bg-alovy-soft/40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Full-width hero header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            12 · Pro obchod
          </div>
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.0] tracking-tight">
            Tohle umíme
            <br />
            <em className="text-alovy not-italic">prodat dál</em>.
          </h2>
          <p className="mt-10 md:mt-12 text-xl md:text-2xl leading-relaxed text-muted max-w-3xl">
            {sales.intro}
          </p>
        </div>

        {/* Big package cards */}
        <ul className="grid md:grid-cols-2 gap-6 md:gap-8">
          {(() => {
            const hasExplicitWide = sales.packages.some(
              (p) => 'wide' in p && p.wide,
            );
            return sales.packages.map((pkg, index) => {
              const wide =
                ('wide' in pkg && pkg.wide) ||
                (!hasExplicitWide &&
                  sales.packages.length % 2 === 1 &&
                  index === sales.packages.length - 1);
              return (
            <li
              key={index}
              className={`border border-line p-8 md:p-10 card-hover bg-cream ${
                wide ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-baseline justify-between mb-8 md:mb-10">
                <span className="font-serif text-5xl md:text-6xl text-alovy leading-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted">
                  Balíček
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-4">
                {pkg.title}
              </h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                {pkg.description}
              </p>
            </li>
              );
            });
          })()}
        </ul>

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
