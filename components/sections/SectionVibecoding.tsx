import { caseStudy } from '@/content/caseStudy';
import { FadeIn } from '@/components/ui/FadeIn';
import { Gallery } from '@/components/ui/Gallery';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const SectionVibecoding = () => {
  const { vibecoding } = caseStudy;

  return (
    <section id="vibecoding" className="container-content py-32">
      <FadeIn>
        <SectionLabel number="06">Vibecoding</SectionLabel>
        <h2 className="mt-4 text-3xl md:text-4xl">Features za dny místo týdnů</h2>
        <p className="mt-6 max-w-2xl text-lg text-black-rich/70">{vibecoding.intro}</p>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-5xl">
          {vibecoding.features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl">{feature.title}</h3>
              <p className="text-sm text-black-rich/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="mt-16">
          <Gallery items={vibecoding.screenshots} columns={3} aspect="landscape" />
        </div>
      </FadeIn>
    </section>
  );
};
