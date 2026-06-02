import { Logo } from "./logo.types";
import { Product } from "./product.types";

export type ApiResponse = {
  title: string;
  description: string;
  logo: Logo;
  products: Product[];
};
