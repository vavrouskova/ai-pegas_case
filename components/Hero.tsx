import { caseStudy } from '@/content/caseStudy';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const Hero = () => {
  const { hero } = caseStudy;

  return (
    <section className="container-content min-h-[80vh] flex flex-col justify-center py-24">
      <SectionLabel>{hero.label}</SectionLabel>

      <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
        {hero.title}
      </h1>

      <p className="mt-8 text-lg sm:text-xl text-black-rich/70 max-w-xl">
        {hero.subtitle}
      </p>

      <p className="mt-16 text-sm uppercase tracking-wider text-black-rich/50">
        {hero.meta}
      </p>

      <a
        href="#vysledek"
        className="mt-12 text-sm uppercase tracking-wider text-primary hover:opacity-70 transition-opacity inline-flex items-center gap-2 w-fit"
      >
        ↓ {hero.cta}
      </a>
    </section>
  );
};
