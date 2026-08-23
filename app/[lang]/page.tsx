import { notFound } from 'next/navigation';
import { getDictionary, getRenderVals, isLang } from '@/lib/i18n';
import { MenuProvider } from '@/components/MenuProvider';
import RevealObserver from '@/components/RevealObserver';
import BgArcs from '@/components/BgArcs';
import Nav from '@/components/Nav';
import MobileMenu from '@/components/MobileMenu';
import BackToTop from '@/components/BackToTop';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Initiator from '@/components/sections/Initiator';
import Quotes from '@/components/sections/Quotes';
import Opportunity from '@/components/sections/Opportunity';
import Cooperation from '@/components/sections/Cooperation';
import Transit from '@/components/sections/Transit';
import Timeline from '@/components/sections/Timeline';
import Benefits from '@/components/sections/Benefits';
import PartnerLogos from '@/components/sections/PartnerLogos';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const t = getDictionary(lang);
  const v = getRenderVals(lang);
  const props = { t, v };

  /*
   * Structure mirrors the original document exactly, including two quirks:
   * the wrapper div closes after Cooperation (later sections are siblings of
   * it, not children), and Opportunity is nested inside Quotes.
   */
  return (
    <MenuProvider>
      <RevealObserver />
      {/*
        Single wrapper around the whole page, matching the original's host
        element. Without it the sections that overflow horizontally (they are
        clipped by `overflow-x: clip`) widen the body's scroll area.
      */}
      <div>
      <div
        dir={v.dir}
        lang={lang}
        style={{
          width: '100%',
          maxWidth: 'none',
          backgroundColor: '#FAF9F6',
          color: '#062055',
          boxSizing: 'border-box',
          position: 'relative',
          fontFamily: "'Narkiss Hadash','Assistant',sans-serif",
        }}
      >
        <BgArcs v={v} />
        <Nav {...props} lang={lang} />
        <Hero {...props} />
        <About {...props} />
        <Initiator {...props} />
        <Quotes {...props}>
          <Opportunity {...props} />
        </Quotes>
        <Cooperation {...props} />
      </div>
      <Transit {...props} />
      <Timeline {...props} />
      <Benefits {...props} />
      <PartnerLogos {...props} />
      <Team {...props} />
      <Contact {...props} />
      <Footer {...props} />
      <MobileMenu {...props} />
      <BackToTop t={t} />
      </div>
    </MenuProvider>
  );
}
