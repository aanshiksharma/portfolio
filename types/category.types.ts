import type { Types } from "mongoose";

export type CategoryDocument = {
  _id: Types.ObjectId;

  name: string;

  createdAt?: Date;
  updatedAt?: Date;
};

export type CategoryDetail = {
  id: string;
  name: string;
};
