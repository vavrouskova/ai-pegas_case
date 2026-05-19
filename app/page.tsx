import { AnchorNav } from '@/components/AnchorNav';
import { Credits } from '@/components/Credits';
import { Hero } from '@/components/Hero';
import { SectionAssistant } from '@/components/sections/SectionAssistant';
import { SectionHiggsfield } from '@/components/sections/SectionHiggsfield';
import { SectionImageCrisis } from '@/components/sections/SectionImageCrisis';
import { SectionResearch } from '@/components/sections/SectionResearch';
import { SectionResult } from '@/components/sections/SectionResult';
import { SectionSales } from '@/components/sections/SectionSales';
import { SectionVibecoding } from '@/components/sections/SectionVibecoding';

const Page = () => {
  return (
    <main>
      <Hero />
      <AnchorNav />
      <SectionResult />
      <SectionResearch />
      <SectionImageCrisis />
      <SectionHiggsfield />
      <SectionAssistant />
      <SectionVibecoding />
      <SectionSales />
      <Credits />
    </main>
  );
};

export default Page;
