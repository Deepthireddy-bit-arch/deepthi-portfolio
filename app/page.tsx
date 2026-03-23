
import About from "./components/about/About";
import ContactSection from "./components/contact/contactSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import Hero from "./components/hero/hero";

import MarueeSection from "./components/marquee/MarueeSection";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import FooterSection from "./footer/footerPage";

export default function Home() {
  return (
    <>
    
         <main className="section-container">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <MarueeSection />
        <ExperienceSection />
        <ContactSection /> 
        <FooterSection/>
      </main>
    
    </>
  );
}