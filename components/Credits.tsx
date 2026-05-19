import { caseStudy } from '@/content/caseStudy';

export const Credits = () => {
  const { credits } = caseStudy;

  return (
    <footer id="credits" className="relative px-6 md:px-12 py-20 md:py-24 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="text-sm uppercase tracking-[0.2em] text-muted mb-8">Credits</div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-3">
            <p className="text-base">{credits.team}</p>
            <p className="text-base text-muted">{credits.client}</p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-sm uppercase tracking-[0.2em] text-muted mb-3">Stack</p>
            <ul className="flex flex-wrap gap-2">
              {credits.stack.map((tech) => (
                <li
                  key={tech}
                  className="text-xs px-3 py-1 border border-line text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 text-xs text-muted tracking-wide">{credits.copyright}</p>
      </div>
    </footer>
  );
};
