"use client";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  RoleBanner,
  ContactSection,
} from "@/features/home";
import { Admin, Skill, Category, Project } from "@/types";

type Props = {
  data: {
    projects: Project[];
    skills: Skill[];
    categories: Category[];
    profile: Admin;
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
