import { getProjects } from "@/lib/queries/projects";
import { getSkills } from "@/lib/queries/skills";
import { getCategories } from "@/lib/queries/categories";
import { getProfile } from "@/lib/queries/profile";

import HomePageClient from "./HomePageClient";

export const revalidate = 120;

async function Home() {
  const [projects, skills, categories, profile] = await Promise.all([
    getProjects(),
    getSkills(),
    getCategories(),
    getProfile(),
  ]);

  return (
    <HomePageClient
      projects={projects}
      skills={skills}
      categories={categories}
      profile={profile}
    />
  );
}

export default Home;
