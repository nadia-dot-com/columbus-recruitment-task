import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header/Header";
import { CartProvider } from "@/features/cart/context/CartProvider";
import { roboto } from "./fonts/fonts";
import { ErrorTracker } from "./errorTracker";
import { getStoreData } from "@/features/data/api/getStoreData";

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
        <CartProvider>
          <ErrorTracker />
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
