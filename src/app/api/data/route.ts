import { NextResponse } from "next/server";
import { slugify } from "@/src/utils/slugify";

export const dynamic = 'force-static';

export async function GET() {
  try {
    const api = process.env.NEXT_PUBLIC_API_URL;

    if (!api) {
      return NextResponse.json(
        { error: "API_URL not defined" },
        { status: 500 },
      );
    }

    const response = await fetch(api);
    const data = await response.json();

    return NextResponse.json({
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
    });
  } catch (error) {
    console.error("Error getting data:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
