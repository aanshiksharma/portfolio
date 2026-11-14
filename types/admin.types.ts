import { Image } from "@/types";

export type SocialMediaLink = {
  platform: string;
  link: string;
};

export type Admin = {
  name: string;
  email: string;
  mobile?: string;
  portfolioLink: string;

  resumeLink?: string;

  about: string[];

  profileImage?: Image;
  socialMediaLinks: SocialMediaLink[];
};
