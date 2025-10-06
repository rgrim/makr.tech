
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import About from "@/components/About";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
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
