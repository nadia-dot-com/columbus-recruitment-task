import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { getStoreData } from "@/features/data/api/getStoreData";
import { CartProvider } from "@/features/cart/context/CartProvider";

export async function generateMetadata(): Promise<Metadata> {
  const { title } = await getStoreData();

  return {
    title: title,
    description: "Recruitment Task Product Listing",
    icons: {
      icon: "/favicon.ico",
    },
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
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
