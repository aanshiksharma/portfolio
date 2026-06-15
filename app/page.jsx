"use client";

import { Suspense } from "react";

import Loading from "./loading";
import HeroSection from "./_components/HeroSection";
import RoleBanner from "./_components/RoleBanner";
import ProjectsSection from "./_components/ProjectsSection";
import SkillsSection from "./_components/SkillsSection";
import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";
import Cursor from "./_components/Cursor";

function Home() {
  return (
    <main>
      {/* <Loading /> */}
      <Suspense fallback={<Loading />}>
        <Cursor />
        <HeroSection />
        <RoleBanner />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}

export default Home;
