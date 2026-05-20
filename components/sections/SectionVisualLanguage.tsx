import { caseStudy } from '@/content/caseStudy';
import { Gallery } from '@/components/ui/Gallery';

export const SectionVisualLanguage = () => {
  const { visualLanguage } = caseStudy;

  return (
    <section id="jazyk" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              03 · Vizuální jazyk
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Tichý symbol
              <br />
              <em className="text-alovy not-italic">místo klišé</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{visualLanguage.intro}</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <Gallery items={visualLanguage.gallery} columns={3} aspect="landscape" />
        </div>
      </div>
    </section>
  );
};
