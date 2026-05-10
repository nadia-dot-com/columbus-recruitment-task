import { Product } from "../types/product.types";
import { getStoreData } from "./getStoreData";

export async function getProducts(): Promise<Product[]> {
  const data = await getStoreData();
  return data.products;
}
