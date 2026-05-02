import { Logo } from "../types/logo.types";
import { getStoreData } from "./getStoreData";

export async function getLogo(): Promise<Logo> {
  const data = await getStoreData();
  return data.logo;
}