"use client";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  RoleBanner,
  ContactSection,
} from "@/features/home";
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
