import type { Types } from "mongoose";
import type { ImageDocument, Image } from "@/types";

export type ProjectDocument = {
  _id: Types.ObjectId;

  title: string;
  slug: string;
  skills: string[];

  featured?: boolean;
  description?: string;

  projectLink?: string;
  githubLink?: string;

  coverImage: ImageDocument;
  otherImages?: ImageDocument[];

  meta?: {
    status?: "draft" | "published";
  };

  createdAt?: Date;
  updatedAt?: Date;
};

// Homepage project card
export type ProjectSummary = {
  id: string;
  title: string;
  slug: string;
  featured: boolean;
  coverImage: Image;
};

// Full project information
export type ProjectDetail = {
  id: string;
  title: string;
  slug: string;
  skills: string[];

  featured: boolean;
  description?: string;

  projectLink?: string;
  githubLink?: string;

  coverImage: Image;
  otherImages: Image[];
};
