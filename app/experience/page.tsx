import FooterSection from "../footer/footerPage";
import CompanyDetailsSection from "./companyDetails.tsx/CompanyDetails";
import ContributionsSection from "./contributions/ContributionSection";
import GallerySection from "./gallery/GallerySection";
import HeroSection from "./hero/HeroSection";
import ProjectsSection from "./projects/ProjectsSection";
import StatsSection from "./stats/stats";
import ToolsSection from "./tools/ToolsSection";


export default function Page() {
  return (
    <>
      <main className="section-container">
        <HeroSection />
        <CompanyDetailsSection />
        <ToolsSection />
        <ProjectsSection />
        <ContributionsSection />
        <GallerySection />
        <FooterSection />

      </main>

    </>
  )
}
