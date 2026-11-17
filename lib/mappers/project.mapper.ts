import type { ProjectDocument, ProjectSummary, ProjectDetail } from "@/types";

export function toProjectSummary(project: ProjectDocument): ProjectSummary {
  return {
    id: project._id.toString(),
    slug: project.slug,
    title: project.title,
    featured: project.featured ?? false,
    coverImage: {
      fileName: project.coverImage.fileName,
      publicId: project.coverImage.publicId,
      url: project.coverImage.url,
    },
  };
}

export function toProjectDetail(project: ProjectDocument): ProjectDetail {
  return {
    id: project._id.toString(),
    title: project.title,
    slug: project.slug,
    skills: project.skills,
    featured: project.featured ?? false,
    description: project.description,
    projectLink: project.projectLink,
    githubLink: project.githubLink,

    coverImage: {
      fileName: project.coverImage.fileName,
      publicId: project.coverImage.publicId,
      url: project.coverImage.url,
    },

    otherImages: (project.otherImages ?? []).map((image) => ({
      fileName: image.fileName,
      publicId: image.publicId,
      url: image.url,
    })),
  };
}
