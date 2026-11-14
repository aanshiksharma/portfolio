"use client";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  RoleBanner,
  ContactSection,
} from "@/features/home";

export function HomePage({ data }) {
  return (
    <main>
      <HeroSection />
      <RoleBanner />
      <AboutSection profile={data.profile} />
      <ProjectsSection projects={data.projects} />
      <SkillsSection skills={data.skills} categories={data.categories} />
      <ContactSection profile={data.profile} />
    </main>
  );
}
