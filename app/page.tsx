import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import GraphicDesignPreview from "@/components/graphic-design-preview"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen grid-pattern noise-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <GraphicDesignPreview />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
