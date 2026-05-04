import { ApiResponse } from "../types/response.types";

export async function getStoreData(): Promise<ApiResponse> {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const key = process.env.API_KEY;

  if (!url || !key) {
    throw new Error("Missing API_URL or API_KEY in environment variables");
  }

  const res = await fetch(url, {
    headers: {
      "x-api-key": key,
    },
  });

  if (!res.ok) {
    console.error("Response status:", res.status);
    throw new Error("Failed to fetch store data");
  }

  return res.json();
}
