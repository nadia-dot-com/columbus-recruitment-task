export type Product = {
  articleNumber: string;
  image: {
    url: string;
    altText: string;
  };
  title: string;
  description: string;
  categoryName: string;
  categoryLogo: string;
  price: number;
  promotion?: {
    percentage: number;
  } | null;
};

