import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/src/components/layout/Header/Header";
import { roboto } from "./fonts/fonts";
import { getStoreData } from "@/src/features/products/api/getStoreData";
import { Providers } from "@/src/components/layout/Providers/Providers";

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
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
