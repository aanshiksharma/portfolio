import Project from "@/models/Project";
import { connectDB } from "../mongodb";
import { serialize } from "../serialize";

export const getProjects = async () => {
  await connectDB();

  const project = await Project.find().lean();

  return serialize(project);
};
