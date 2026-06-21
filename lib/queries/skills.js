import Skill from "@/models/Skill";
import { connectDB } from "../mongodb";
import { serialize } from "../serialize";

export const getSkills = async () => {
  await connectDB();

  const skill = await Skill.find().lean();

  return serialize(skill);
};
