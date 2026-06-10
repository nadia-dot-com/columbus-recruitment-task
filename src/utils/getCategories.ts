import { Product } from "@/src/features/products/types/product.types";

export function getCategories(products: Product[]): string[] {
  return [
    ...new Set(
      products.filter((p) => p.categoryName).map((p) => p.categoryName),
    ),
  ];
}
