import { caseStudy } from '@/content/caseStudy';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const SectionResult = () => {
  const { result } = caseStudy;

  return (
    <section id="vysledek" className="container-content py-32">
      <FadeIn>
        <SectionLabel number="01">Výsledek</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-4xl">Co umíme s AI dělat</h2>
        <p className="mt-6 max-w-2xl text-lg text-black-rich/70">{result.intro}</p>
      </FadeIn>

      <FadeIn delay={150}>
        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {result.areas.map((area) => (
            <li key={area.number} className="space-y-3">
              <p className="text-xs uppercase tracking-wider text-primary">{area.number}</p>
              <h3 className="text-xl">{area.title}</h3>
              <p className="text-sm text-black-rich/70 leading-relaxed">{area.description}</p>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
};
