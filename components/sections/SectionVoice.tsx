import { caseStudy, type MediaItem } from '@/content/caseStudy';

const PlayIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M10 6l16 10-16 10V6z" fill="currentColor" />
  </svg>
);

const AudioBars = () => (
  <svg width="120" height="40" viewBox="0 0 120 40" fill="none" aria-hidden>
    {[14, 26, 8, 32, 18, 22, 10, 30, 16, 24, 12, 28, 14, 20, 8, 26, 18].map(
      (h, i) => (
        <rect
          key={i}
          x={i * 7}
          y={(40 - h) / 2}
          width="3"
          height={h}
          rx="1.5"
          fill="currentColor"
        />
      ),
    )}
  </svg>
);

export const SectionVoice = () => {
  const { voice } = caseStudy;

  return (
    <section id="hlas" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              09 · Hlas
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              V tichu jsme,
              <br />
              <em className="text-alovy not-italic">dál už za nás mluví AI</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed">{voice.intro}</p>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid gap-6 md:grid-cols-2">
          {(voice.items as MediaItem[]).map((item, index) => (
            <article
              key={index}
              className="border border-line p-6 md:p-8 space-y-6 card-hover"
            >
              {item.kind === 'video' ? (
                <div className="relative aspect-video bg-ink overflow-hidden flex items-center justify-center text-alovy">
                  {item.embedUrl ? (
                    <iframe
                      src={item.embedUrl}
                      title={item.title}
                      allow="autoplay; encrypted-media; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : item.src ? (
                    <video
                      controls
                      poster={item.poster}
                      preload="none"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <PlayIcon />
                  )}
                </div>
              ) : (
                <div className="relative aspect-video bg-ink overflow-hidden flex items-center justify-center text-alovy">
                  <AudioBars />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl md:text-2xl">{item.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted shrink-0">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>

              {item.kind === 'audio' && item.src ? (
                <audio controls preload="none" className="w-full">
                  <source src={item.src} type="audio/mpeg" />
                </audio>
              ) : null}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
