import { Product } from "./product.types";

export type ApiResponse = {
  title: string;
  logo: {
    url: string;
    altText: string;
  };
  products: Product[];
};
