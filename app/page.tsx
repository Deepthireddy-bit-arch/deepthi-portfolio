// import About from "./components/about/About";
// import ContactSection from "./components/contact/contactSection";
// import ExperienceSection from "./components/experience/ExperienceSection";
// import Hero from "./components/Hero";
// import MarueeSection from "./components/marquee/MarueeSection";
// import Navbar from "./components/nav/Navbar";
// import Projects from "./components/projects/Projects";
// import Skills from "./components/skills/Skills";


// export default function Home() {
//   return (
    
//     <div className="container-custom">
//        <Navbar/>
//       <Hero />
//       {/* <MarueeSection/> */}
//       <About/>
       
//       <Projects/>
      
//       <Skills/>
//         <MarueeSection/>
//       <ExperienceSection/>
       
//       <ContactSection/>

//     </div>
   
     
    
//   );
// }
import About from "./components/about/About";
import ContactSection from "./components/contact/contactSection";
import ExperienceSection from "./components/experience/ExperienceSection";
import Hero from "./components/hero/hero";

import MarueeSection from "./components/marquee/MarueeSection";
import Navbar from "./components/nav/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

export default function Home() {
  return (
    <>
     <Navbar/>
        <main className="section-container">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <MarueeSection />
        <ExperienceSection />
        <ContactSection />
      </main>
     
    </>
  );
}