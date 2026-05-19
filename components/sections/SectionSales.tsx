import { caseStudy } from '@/content/caseStudy';

export const SectionSales = () => {
  const { sales } = caseStudy;

  return (
    <section id="obchod" className="relative px-6 md:px-12 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
              07 · Pro obchod
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Tohle umíme
              <br />
              <em className="text-alovy not-italic">prodat dál</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-relaxed mb-10">{sales.intro}</p>
            <ul className="grid sm:grid-cols-2 gap-5">
              {sales.packages.map((pkg, index) => (
                <li
                  key={index}
                  className="border border-line p-5 space-y-2 card-hover"
                >
                  <h3 className="font-serif text-lg">{pkg.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{pkg.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 md:mt-24 max-w-4xl">
          <p className="font-serif text-3xl md:text-4xl leading-tight">
            <span className="text-alovy">„</span>
            {sales.takeaway}
            <span className="text-alovy">"</span>
          </p>
        </div>
      </div>
    </section>
  );
};
