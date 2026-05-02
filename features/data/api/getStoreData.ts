import { API_KEY, API_URL } from "@/lib/api";
import { ApiResponse } from "../types/response.types";

export async function getStoreData(): Promise<ApiResponse> {
  const res = await fetch(`${API_URL}`, {
    headers: {
      "x-api-key": `${API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch store data");
  }

  const data = await res.json();

  return data;
}
