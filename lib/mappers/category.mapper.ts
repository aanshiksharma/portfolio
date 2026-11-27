import type { CategoryDetail, CategoryDocument } from "@/types";

export function toCategoryDetail(category: CategoryDocument): CategoryDetail {
  return {
    id: category._id.toString(),
    name: category.name,
  };
}
