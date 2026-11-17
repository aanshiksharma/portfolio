import Project from "@/models/Project";
import { connectDB } from "../mongodb";
import { toProjectSummary } from "../mappers/project.mapper";
import type { ProjectDocument, ProjectSummary } from "@/types";

export const getProjects = async (): Promise<ProjectSummary[]> => {
  await connectDB();

  const projects = await Project.find().lean<ProjectDocument[]>();

  return projects.map(toProjectSummary);
};
