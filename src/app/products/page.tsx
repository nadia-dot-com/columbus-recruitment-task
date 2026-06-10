import { ProductList } from "@/src/features/products/components/ProductList/ProductList";
import { getStoreData } from "@/src/features/products/api/getStoreData";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const { products } = await getStoreData();

  const params = await searchParams;
  const selectedCategory = params.category;

  const filteredProducts = selectedCategory
    ? (products || []).filter((p) => p.categoryName === selectedCategory)
    : products;

  return <div>{products && <ProductList products={filteredProducts} />}</div>;
}
