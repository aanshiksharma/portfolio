import Skill from "@/models/Skill";
import { connectDB } from "../mongodb";
import type { SkillDetail, SkillDocument } from "@/types";
import { toSkillDetail } from "../mappers/skill.mapper";

export const getSkills = async (): Promise<SkillDetail[]> => {
  await connectDB();

  const skills = await Skill.find().lean<SkillDocument[]>();

  return skills.map(toSkillDetail);
};
