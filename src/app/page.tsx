
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import Contact from "@/components/Contact";
import PeppolCampaign from "@/components/PeppolCampaign";
export default function Home() {
  return (
    <>
    <PeppolCampaign />
    <Hero />
    <div className="mosaic-divider"></div> 
    <Approach />
    <div className="mosaic-divider"></div> 
    <Services />
    <div className="mosaic-divider"></div> 
    <CaseStudy />
    <div className="mosaic-divider"></div> 
    <About />
    <div className="mosaic-divider"></div> 
    <Contact />
    </>
  );
}
