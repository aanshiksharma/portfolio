import { getProjects } from "@/lib/queries/projects";
import { getSkills } from "@/lib/queries/skills";
import { getCategories } from "@/lib/queries/categories";
import { getProfile } from "@/lib/queries/profile";

import { HomePage } from "@/features/home";
import {
  ProjectSummary,
  SkillDetail,
  CategoryDetail,
  PublicProfile,
} from "@/types";

export const revalidate = 120;

export default async function Home() {
  const [projects, skills, categories, profile]: [
    ProjectSummary[],
    SkillDetail[],
    CategoryDetail[],
    PublicProfile | null,
  ] = await Promise.all([
    getProjects(),
    getSkills(),
    getCategories(),
    getProfile(),
  ]);

  if (!profile) throw new Error("Public profile could not be loaded.");

  return <HomePage data={{ projects, skills, categories, profile }} />;
}
