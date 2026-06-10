import { Product } from "@/src/features/products/types/product.types";

export type CartItem = Product & {
  quantity: number;
};
