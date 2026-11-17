import type { Types } from "mongoose";
import type { ImageDocument, Image } from "@/types";

export type SocialMediaLink = {
  platform: string;
  link: string;
};

// Database representation
export type AdminDocument = {
  _id: Types.ObjectId;

  name: string;
  email: string;
  password: string;

  mobile?: string;
  portfolioLink: string;
  resumeLink?: string;

  about?: string[];

  profileImage?: ImageDocument;
  socialMediaLinks?: SocialMediaLink[];

  createdAt?: Date;
  updatedAt?: Date;
};

// Public representation
export type PublicProfile = {
  name: string;
  email: string;
  portfolioLink: string;

  resumeLink?: string;
  about: string[];

  profileImage?: Image;
  socialMediaLinks: SocialMediaLink[];
};
