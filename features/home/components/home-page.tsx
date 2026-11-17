"use client";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  RoleBanner,
  ContactSection,
} from "@/features/home";
import {
  PublicProfile,
  SkillDetail,
  CategoryDetail,
  ProjectSummary,
} from "@/types";

type Props = {
  data: {
    projects: ProjectSummary[];
    skills: SkillDetail[];
    categories: CategoryDetail[];
    profile: PublicProfile;
  };
};

export function HomePage({ data }: Props) {
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
