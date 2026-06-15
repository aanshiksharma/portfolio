import Category from "@/models/Category";
import { connectDB } from "../mongodb";
import { serialize } from "../serialize";

export const getCategories = async () => {
  await connectDB();

  const category = await Category.find().sort({ createdAt: -1 }).lean();

  return serialize(category);
};
