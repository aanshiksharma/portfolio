import Category from "@/models/Category";
import { connectDB } from "../mongodb";
import { CategoryDetail, CategoryDocument } from "@/types";
import { toCategoryDetail } from "../mappers/category.mapper";

export const getCategories = async (): Promise<CategoryDetail[]> => {
  await connectDB();

  const categories = await Category.find().lean<CategoryDocument[]>();

  return categories.map(toCategoryDetail);
};
