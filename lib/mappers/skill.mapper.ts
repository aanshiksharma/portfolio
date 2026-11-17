import type { SkillDocument, SkillDetail } from "@/types";

export function toSkillDetail(skill: SkillDocument): SkillDetail {
  return {
    id: skill._id.toString(),
    name: skill.name,
    slug: skill.slug,
    category: skill.category.toString(),
    categoryName: skill.categoryName,
  };
}
