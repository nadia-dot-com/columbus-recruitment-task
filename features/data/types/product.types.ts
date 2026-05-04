export type Product = {
  articleNumber: string;
  gtin: string;
  url: string;
  image: {
    url: string;
    altText: string;
  };
  title: string;
  description: string;
  brandName: string;
  brandLogo: string;
  price: number;
  promotion?: {
    name: string;
    percentage: number;
  } | null;
};

