import { AnchorNav, TopBar } from '@/components/AnchorNav';
import { Credits } from '@/components/Credits';
import { Hero } from '@/components/Hero';
import { SectionAssistant } from '@/components/sections/SectionAssistant';
import { SectionHiggsfield } from '@/components/sections/SectionHiggsfield';
import { SectionImageCrisis } from '@/components/sections/SectionImageCrisis';
import { SectionProductRework } from '@/components/sections/SectionProductRework';
import { SectionResearch } from '@/components/sections/SectionResearch';
import { SectionTeamPortraits } from '@/components/sections/SectionTeamPortraits';
import { SectionResult } from '@/components/sections/SectionResult';
import { SectionSales } from '@/components/sections/SectionSales';
import { SectionVibecoding } from '@/components/sections/SectionVibecoding';
import { SectionVisualLanguage } from '@/components/sections/SectionVisualLanguage';
import { SectionVoice } from '@/components/sections/SectionVoice';

const Page = () => {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <AnchorNav />
        <SectionResult />
        <SectionResearch />
        <SectionVisualLanguage />
        <SectionImageCrisis />
        <SectionProductRework />
        <SectionTeamPortraits />
        <SectionHiggsfield />
        <SectionVoice />
        <SectionAssistant />
        <SectionVibecoding />
        <SectionSales />
        <Credits />
      </main>
    </>
  );
};

export default Page;
