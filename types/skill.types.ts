import type { Types } from "mongoose";

export type SkillDocument = {
  _id: Types.ObjectId;

  name: string;
  slug: string;
  categoryName: string;
  category: Types.ObjectId;

  createdAt?: Date;
  updatedAt?: Date;
};

export type SkillDetail = {
  id: string;

  name: string;
  slug: string;
  categoryName: string;
  category: string;
};
