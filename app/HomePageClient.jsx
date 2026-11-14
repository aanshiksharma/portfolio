"use client";

import HeroSection from "./_components/HeroSection";
import RoleBanner from "./_components/RoleBanner";
import { ProjectsSection, AboutSection } from "@/features/home";
import SkillsSection from "./_components/SkillsSection";
import ContactSection from "./_components/ContactSection";
import Cursor from "./_components/Cursor";

function HomePageClient({ categories, projects, skills, profile }) {
  return (
    <main>
      <Cursor />
      <HeroSection />
      <RoleBanner />
      <AboutSection profile={profile} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} categories={categories} />
      <ContactSection profile={profile} />
    </main>
  );
}

export default HomePageClient;
