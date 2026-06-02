import { ProductList } from "@/components/products/ProductList/ProductList";
import { ProductNav } from "@/components/nav/products/ProductNav";
import { getCategories } from "@/utils/getCategories";
import { getStoreData } from "@/features/data/api/getStoreData";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string;
  }>;
}) {
  const { products } = await getStoreData();

  const params = await searchParams;
  const selectedCategory = params.category;

  const categories = getCategories(products || []);

  const filteredProducts = selectedCategory
    ? (products || []).filter(
        (p) => p.categoryName === selectedCategory,
      )
    : (products);

  return (
    <div>
      <main>
        <ProductNav categories={categories} />
        {products && <ProductList products={filteredProducts} />}
      </main>
    </div>
  );
}
