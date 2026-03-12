import About from "./components/about/About";
import ExperienceSection from "./components/experience/ExperienceSection";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";


export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <ExperienceSection/>
    </>
  );
}