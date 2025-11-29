import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";
import SkillsSection from "./_components/SkillsSection";
import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";

function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

export default Home;
