import Project from "@/models/Project";
import { connectDB } from "../mongodb";
import { serialize } from "../serialize";

export const getProjects = async () => {
  await connectDB();

  const project = await Project.find().sort({ createdAt: -1 }).lean();

  return serialize(project);
};
