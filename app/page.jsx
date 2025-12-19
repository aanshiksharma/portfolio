"use client";

import { Suspense } from "react";

import Loading from "./loading";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectsSection";
import SkillsSection from "./_components/SkillsSection";
import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";

function Home() {
  return (
    <main>
      {/* <Loading /> */}
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}

export default Home;
