import Image from 'next/image';

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
              07 · Asistent
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Custom ChatGPT,
              <br />
              kterého <em className="text-alovy not-italic">jsme naučili</em> značku.
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

        {/* Živá karta asistenta na chatgpt.com */}
        <div className="mt-16 md:mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            Živý asistent · spuštěný na chatgpt.com
          </p>
          <a
            href={assistant.live.url}
            target="_blank"
            rel="noreferrer"
            className="block border border-line p-6 md:p-8 card-hover"
          >
            <div className="flex items-center gap-6 md:gap-8">
              <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 border border-line bg-cream overflow-hidden">
                <Image
                  src={assistant.live.logo}
                  alt={`Logo ${assistant.live.name}`}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl md:text-2xl">{assistant.live.name}</h3>
                <p className="mt-2 text-sm md:text-base text-muted">{assistant.live.tagline}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-alovy-dark">
                  chatgpt.com ↗
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Brand voice excerpts — ukázky výstupu */}
        <div className="mt-20 md:mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-8">
            Brand voice · ukázky výstupu
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {assistant.brandVoice.map((sample, index) => (
              <article
                key={index}
                className="border border-line p-6 md:p-8 space-y-4 card-hover"
              >
                <h3 className="font-serif text-lg md:text-xl">{sample.title}</h3>
                <p className="text-base leading-relaxed text-muted">{sample.body}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-alovy-dark pt-2 border-t border-line">
                  {sample.attribution}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
            Ukázky konverzace
          </p>
          <Gallery items={assistant.screenshots} columns={3} aspect="portrait" />
        </div>

        <div className="mt-24 md:mt-28">
          <div className="grid md:grid-cols-12 gap-10 mb-8">
            <div className="md:col-span-4">
              <h3 className="font-serif text-2xl md:text-3xl">
                <span className="text-alovy">↦</span> {assistant.futureVision.title}
              </h3>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-base md:text-lg leading-relaxed text-muted">
                {assistant.futureVision.description}
              </p>
            </div>
          </div>
          <Gallery items={assistant.futureVision.gallery} columns={3} aspect="landscape" />
        </div>
      </div>
    </section>
  );
};
