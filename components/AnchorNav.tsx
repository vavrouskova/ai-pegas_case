import { caseStudy } from '@/content/caseStudy';

const TOP_BAR_LABEL = 'Case study · PEGAS';
const TOP_BAR_META = '2025–2026 · antstudio × PEGAS';

export const TopBar = () => {
  return (
    <header className="relative z-10 px-6 md:px-12 pt-8 md:pt-10 flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm tracking-wide uppercase text-muted">
        <span className="inline-block w-2 h-2 rounded-full bg-alovy" />
        <span>{TOP_BAR_LABEL}</span>
      </div>
      <div className="text-sm text-muted hidden md:block">{TOP_BAR_META}</div>
    </header>
  );
};

export const AnchorNav = () => {
  return (
    <nav
      aria-label="Sekce stránky"
      className="relative z-10 px-6 md:px-12 py-8 border-t border-line"
    >
      <div className="max-w-6xl mx-auto">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {caseStudy.anchors.map((anchor) => (
            <li key={anchor.id}>
              <a
                href={`#${anchor.id}`}
                className="text-muted link-underline hover:text-ink"
              >
                {anchor.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
