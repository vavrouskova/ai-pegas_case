import { caseStudy } from '@/content/caseStudy';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const SectionSales = () => {
  const { sales } = caseStudy;

  return (
    <section id="obchod" className="container-content py-32">
      <FadeIn>
        <SectionLabel number="07">Pro obchod</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-4xl">Tohle všechno umíme prodat dál</h2>
        <p className="mt-6 max-w-2xl text-lg text-black-rich/70">{sales.intro}</p>
      </FadeIn>

      <FadeIn delay={150}>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 max-w-4xl">
          {sales.packages.map((pkg, index) => (
            <li
              key={index}
              className="p-6 border border-black-rich/10 rounded-sm space-y-3"
            >
              <h3 className="text-lg text-primary">{pkg.title}</h3>
              <p className="text-sm text-black-rich/70 leading-relaxed">{pkg.description}</p>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="mt-16 p-8 md:p-12 bg-primary text-white-smoke rounded-sm max-w-3xl">
          <p className="text-xl md:text-2xl leading-relaxed">{sales.takeaway}</p>
        </div>
      </FadeIn>
    </section>
  );
};
