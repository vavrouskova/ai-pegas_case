import { caseStudy } from '@/content/caseStudy';
import { Gallery } from '@/components/ui/Gallery';

export const SectionVibecoding = () => {
  const { vibecoding } = caseStudy;

  return (
    <section id="vibecoding" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              06 · Vibecoding
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Features za <em className="text-alovy not-italic">dny</em>
              <br />
              místo týdnů.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed mb-8">{vibecoding.intro}</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {vibecoding.features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-line p-5 space-y-2 card-hover"
                >
                  <h3 className="font-serif text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Gallery items={vibecoding.screenshots} columns={3} aspect="landscape" />
        </div>
      </div>
    </section>
  );
};
