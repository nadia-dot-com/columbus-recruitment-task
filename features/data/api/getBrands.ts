import { Brand } from "../types/brand.types";
import { getStoreData } from "./getStoreData";

export async function getBrands(): Promise<Brand[]> {
  const data = await getStoreData();

  const products = data.products;

  const brands = products.map((p) => ({
    brandName: p.brandName,
    brandLogo: p.brandLogo,
  }));

  return brands
}
