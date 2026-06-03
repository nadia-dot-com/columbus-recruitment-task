import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { roboto } from "./fonts/fonts";
import { getStoreData } from "@/features/data/api/getStoreData";
import { Providers } from "@/components/layout/Providers/Providers";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getStoreData();

  return {
    title: data?.title,
    description: "Task Product Listing",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
