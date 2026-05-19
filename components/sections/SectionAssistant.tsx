import { caseStudy } from '@/content/caseStudy';
import { Gallery } from '@/components/ui/Gallery';

export const SectionAssistant = () => {
  const { assistant } = caseStudy;

  return (
    <section id="asistent" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              05 · Asistent
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Custom ChatGPT,
              <br />
              který <em className="text-alovy not-italic">zná značku</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">{assistant.intro}</p>
            <ul className="space-y-3">
              {assistant.capabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3 text-muted">
                  <span className="text-alovy font-serif text-2xl leading-none shrink-0">·</span>
                  <p className="leading-relaxed">{capability}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            Ukázky konverzace
          </p>
          <Gallery items={assistant.screenshots} columns={3} aspect="portrait" />
        </div>
      </div>
    </section>
  );
};
