import { caseStudy } from '@/content/caseStudy';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const Credits = () => {
  const { credits } = caseStudy;

  return (
    <footer id="credits" className="container-content py-24 border-t border-black-rich/10">
      <SectionLabel>Credits</SectionLabel>

      <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-3xl">
        <div className="space-y-2">
          <p className="text-sm text-black-rich/85">{credits.team}</p>
          <p className="text-sm text-black-rich/85">{credits.client}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-black-rich/50 mb-2">Stack</p>
          <ul className="flex flex-wrap gap-2">
            {credits.stack.map((tech) => (
              <li
                key={tech}
                className="text-xs px-2 py-1 bg-grey-warm text-black-rich/70 rounded-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-12 text-xs text-black-rich/50">{credits.copyright}</p>
    </footer>
  );
};
