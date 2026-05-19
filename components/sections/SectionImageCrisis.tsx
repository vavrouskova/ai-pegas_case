import { caseStudy } from '@/content/caseStudy';
import { FadeIn } from '@/components/ui/FadeIn';
import { Gallery } from '@/components/ui/Gallery';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const SectionImageCrisis = () => {
  const { imageCrisis } = caseStudy;

  return (
    <section id="obraz" className="bg-grey-warm py-32">
      <div className="container-content">
        <FadeIn>
          <SectionLabel number="03">Krize obrazu</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-4xl">Stockové banky tu vizualitu nemají</h2>
        </FadeIn>

        <div className="mt-12 grid gap-12 md:grid-cols-3 max-w-5xl">
          <FadeIn delay={100}>
            <h3 className="text-sm uppercase tracking-wider text-primary mb-3">Problém</h3>
            <p className="text-base text-black-rich/85 leading-relaxed">{imageCrisis.problem}</p>
          </FadeIn>

          <FadeIn delay={200}>
            <h3 className="text-sm uppercase tracking-wider text-black-rich/60 mb-3">
              Tradiční řešení
            </h3>
            <p className="text-base text-black-rich/85 leading-relaxed">
              {imageCrisis.traditionalSolution}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <h3 className="text-sm uppercase tracking-wider text-primary mb-3">AI řešení</h3>
            <p className="text-base text-black-rich/85 leading-relaxed">{imageCrisis.aiSolution}</p>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="mt-20">
            <p className="text-sm uppercase tracking-wider text-black-rich/50 mb-6">
              Galerie · AI ilustrace pro Pegas
            </p>
            <Gallery items={imageCrisis.gallery} columns={3} aspect="square" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
