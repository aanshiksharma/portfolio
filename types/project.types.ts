import { Image } from "@/types";

export type Project = {
  title: string;
  slug: string;
  skills: string[];
  featured: boolean;
  description?: string;

  projectLink: string;
  githubLink: string;

  coverImage: Image;
  otehrImages: Image[];

  meta: {
    status: "draft" | "published";
  };
};
