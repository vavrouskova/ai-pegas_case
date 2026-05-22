'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

interface LightboxItem {
  src: string;
  alt: string;
  label?: string;
}

interface LightboxGalleryProps {
  items: LightboxItem[];
  gridClassName?: string;
  figureAspect?: string;
}

export const LightboxGallery = ({
  items,
  gridClassName = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5',
  figureAspect = 'aspect-[4/3]',
}: LightboxGalleryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [openIndex, close, next, prev]);

  const open = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className={gridClassName}>
        {items.map((item, index) => (
          <figure key={index} className="space-y-3">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Otevřít ${item.label ?? item.alt} ve velkém`}
              className={`group relative block w-full overflow-hidden border border-line bg-line ${figureAspect} cursor-zoom-in`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 5V1H5M9 1H13V5M13 9V13H9M5 13H1V9" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {item.label && (
              <figcaption className="text-xs uppercase tracking-[0.2em] text-alovy-dark">
                {item.label}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 md:p-12 animate-[fadeIn_180ms_ease-out]"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Zavřít"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 2L14 14M14 2L2 14" strokeLinecap="round" />
            </svg>
          </button>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Předchozí"
                className="absolute left-2 md:left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11 2L4 9L11 16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Další"
                className="absolute right-2 md:right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 2L14 9L7 16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full max-w-full flex flex-col items-center gap-4"
          >
            <div className="relative max-h-[85vh] max-w-[90vw] md:max-w-[80vw]">
              <Image
                src={open.src}
                alt={open.alt}
                width={1920}
                height={1440}
                sizes="90vw"
                className="max-h-[85vh] w-auto h-auto object-contain"
                priority
              />
            </div>
            {open.label && (
              <figcaption className="text-xs uppercase tracking-[0.2em] text-cream/70">
                {open.label}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
};
