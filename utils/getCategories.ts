import { Product } from "@/features/data/types/product.types";

export function getCategories(products: Product[]): string[] {
  return [...new Set(products.filter((p) => p.categoryName).map((p) =>p.categoryName))];
}
