import { caseStudy } from '@/content/caseStudy';
import { FadeIn } from '@/components/ui/FadeIn';
import { Gallery } from '@/components/ui/Gallery';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const SectionAssistant = () => {
  const { assistant } = caseStudy;

  return (
    <section id="asistent" className="bg-grey-warm py-32">
      <div className="container-content">
        <FadeIn>
          <SectionLabel number="05">Brand asistent</SectionLabel>
          <h2 className="mt-4 text-3xl md:text-4xl">Custom ChatGPT, který zná značku</h2>
          <p className="mt-6 max-w-2xl text-lg text-black-rich/70">{assistant.intro}</p>
        </FadeIn>

        <FadeIn delay={150}>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 max-w-3xl">
            {assistant.capabilities.map((capability, index) => (
              <li
                key={index}
                className="bg-white-smoke p-6 rounded-sm border border-black-rich/5"
              >
                <p className="text-base text-black-rich/85 leading-relaxed">{capability}</p>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-20">
            <p className="text-sm uppercase tracking-wider text-black-rich/50 mb-6">
              Ukázky konverzace
            </p>
            <Gallery items={assistant.screenshots} columns={3} aspect="portrait" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
