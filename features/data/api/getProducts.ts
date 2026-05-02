import { getStoreData } from "./getStoreData";

export async function getProducts() {
  const data = await getStoreData();
  return data.products;
}
