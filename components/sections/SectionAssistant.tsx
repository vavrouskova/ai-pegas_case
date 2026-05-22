import Image from 'next/image';

import { caseStudy } from '@/content/caseStudy';

export const SectionAssistant = () => {
  const { assistant } = caseStudy;

  return (
    <section id="asistent" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              10 · Asistent
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Vymazlenej asistent, <em className="text-alovy not-italic">značkově vychovanej</em>.
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
          <div className="border border-line p-6 md:p-8">
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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <p className="text-sm uppercase tracking-[0.2em] text-muted mb-8">
            Ukázky odpovědí asistenta
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {assistant.brandVoice.map((sample, index) => (
              <article
                key={index}
                className="border border-line p-6 md:p-10 space-y-6 md:space-y-8 bg-cream/40"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {sample.tag}
                </p>

                <div className="flex justify-end">
                  <p className="max-w-[80%] md:max-w-[70%] rounded-2xl rounded-tr-sm bg-ink text-cream px-5 py-3 md:px-6 md:py-4 text-sm md:text-base leading-relaxed">
                    {sample.title}
                  </p>
                </div>

                <div className="pl-0 md:pl-2 space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed">
                  <p>{sample.body}</p>
                  <p className="font-serif text-lg md:text-xl">{sample.attribution}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-24 space-y-10 md:space-y-14">
          {assistant.conversations.map((conv, index) => (
            <article
              key={index}
              className="border border-line p-6 md:p-10 space-y-6 md:space-y-8 bg-cream/40"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                {conv.tag}
              </p>

              <div className="flex justify-end">
                <p className="max-w-[80%] md:max-w-[70%] rounded-2xl rounded-tr-sm bg-ink text-cream px-5 py-3 md:px-6 md:py-4 text-sm md:text-base leading-relaxed">
                  {conv.prompt}
                </p>
              </div>

              <div className="pl-0 md:pl-2 space-y-5 md:space-y-6 text-base md:text-lg leading-relaxed">
                {'contrasts' in conv ? (
                  <>
                    <p>{conv.responseLead}</p>
                    <ol className="space-y-6">
                      {conv.contrasts.map((c, i) => (
                        <li key={i} className="space-y-3">
                          <p className="font-serif text-xl md:text-2xl">{c.heading}</p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="border-l-2 border-alovy pl-4 space-y-2">
                              <p className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                                Komunikuje
                              </p>
                              <p>{c.yes}</p>
                            </div>
                            <div className="border-l-2 border-line pl-4 space-y-2">
                              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                                Nekomunikuje
                              </p>
                              <p className="text-muted">{c.no}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </>
                ) : 'responseBody' in conv ? (
                  <>
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                      {conv.responseTitle}
                    </h3>
                    {conv.responseBody.slice(0, 1).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                    {conv.responseBody.length > 1 || conv.responseTail ? (
                      <details className="group">
                        <summary className="cursor-pointer list-none inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-alovy-dark hover:text-alovy transition-colors select-none">
                          <span className="group-open:hidden">Rozbalit celý text</span>
                          <span className="hidden group-open:inline">Sbalit text</span>
                          <span
                            aria-hidden
                            className="inline-block transition-transform duration-300 group-open:rotate-180"
                          >
                            ↓
                          </span>
                        </summary>
                        <div className="mt-5 md:mt-6 space-y-5 md:space-y-6">
                          {conv.responseBody.slice(1).map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                          {conv.responseTail ? (
                            <p className="font-serif text-lg md:text-xl">{conv.responseTail}</p>
                          ) : null}
                        </div>
                      </details>
                    ) : null}
                  </>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                      {conv.responseTitle}
                    </h3>
                    <div className="font-serif text-xl md:text-2xl leading-relaxed">
                      {conv.responsePoem.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <p>{conv.responseClose}</p>
                    <div>
                      <p className="font-serif text-lg md:text-xl">{conv.responseSignature}</p>
                      <p className="text-muted">{conv.responseTagline}</p>
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
