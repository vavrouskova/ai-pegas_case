import { caseStudy } from '@/content/caseStudy';

export const AnchorNav = () => {
  return (
    <nav
      aria-label="Sekce stránky"
      className="container-content py-8 border-y border-black-rich/10"
    >
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {caseStudy.anchors.map((anchor) => (
          <li key={anchor.id}>
            <a
              href={`#${anchor.id}`}
              className="text-black-rich/60 hover:text-primary transition-colors"
            >
              {anchor.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
