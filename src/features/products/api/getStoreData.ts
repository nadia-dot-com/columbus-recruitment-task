import { slugify } from "@/src/utils/slugify";
import { ApiResponse } from "../types/response.types";
import { cacheTag } from "next/cache";
import { TAGS } from "@/src/constants/tags";

export async function getStoreData(): Promise<ApiResponse> {
  "use cache"
  cacheTag(TAGS.data);
  // cacheLife('data');

  const api = process.env.NEXT_PUBLIC_API_URL;

  if (!api) {
    throw new Error("Failed api");
  }

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(`Failed to fetch store data: ${response.status}`);
  }

  const data = await response.json();

  return {
    title: "Sport Shop",
    description: "Task Product Listing",
    logo: {
      url: "/logo.webp",
      altText: "Sport Shop",
    },
    products: data.map((p: any) => ({
      articleNumber: String(p.id),
      image: {
        url: p.image,
        altText: "product",
      },
      title: p.title,
      slug: slugify(p.title),
      description: "Product description",
      categoryName: p.category ?? "Unknown",
      categoryLogo: "/brand.webp",
      price: p.price,
      promotion: p.rating
        ? {
            percentage: p.rating.rate,
          }
        : null,
    })),
  };
}
