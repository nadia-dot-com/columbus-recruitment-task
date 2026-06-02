import { ApiResponse } from "../types/response.types";

export async function getStoreData(): Promise<ApiResponse> {

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/data`;

  const res = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch store data: ${res.status}`);
  }

  return res.json();
}
