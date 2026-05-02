import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { getStoreData } from "@/features/data/api/getStoreData";

export async function generateMetadata(): Promise<Metadata> {
  const { title } = await getStoreData();

  return {
    title: title,
    description: "Recruitment Task Product Listing",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
