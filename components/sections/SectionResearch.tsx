import { caseStudy } from '@/content/caseStudy';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const SectionResearch = () => {
  const { research } = caseStudy;

  return (
    <section id="reserse" className="container-content py-32">
      <FadeIn>
        <SectionLabel number="02">Rešerše a porozumění</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-4xl">Než jsme cokoliv navrhli</h2>
        <p className="mt-6 max-w-2xl text-lg text-black-rich/70">{research.intro}</p>
      </FadeIn>

      <FadeIn delay={150}>
        <ul className="mt-12 space-y-6 max-w-2xl">
          {research.points.map((point, index) => (
            <li key={index} className="flex gap-4">
              <span className="text-primary font-medium shrink-0">→</span>
              <p className="text-base text-black-rich/85 leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
};
