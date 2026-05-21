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

        {/* Stock galerie — co najdete na shutterstocku */}
        <div className="mt-20 md:mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            Stock · co najdete na shutterstocku
          </p>
          <Gallery items={imageCrisis.stockGallery} columns={4} aspect="square" grayscale />
        </div>

        {/* AI galerie — co děláme */}
        <div className="mt-16 md:mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-alovy-dark mb-6">
            Naše AI · co děláme pro PEGAS
          </p>
          <Gallery items={imageCrisis.gallery} columns={4} aspect="square" />
        </div>
      </div>
    </section>
  );
};
