import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import HeroSection from "./HeroSection";
import SkillSection from "./SkillSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;
