import { getProjects } from "@/lib/queries/projects";
import { getSkills } from "@/lib/queries/skills";
import { getCategories } from "@/lib/queries/categories";
import { getProfile } from "@/lib/queries/profile";

import { HomePage } from "@/features/home";
import { Category, Project, Skill, Admin } from "@/types";

export const revalidate = 120;

export default async function Home() {
  const [projects, skills, categories, profile]: [
    Project[],
    Skill[],
    Category[],
    Admin,
  ] = await Promise.all([
    getProjects(),
    getSkills(),
    getCategories(),
    getProfile(),
  ]);

  return <HomePage data={{ projects, skills, categories, profile }} />;
}
