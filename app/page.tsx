import { getProducts } from "@/features/data/api/getProducts";
import { ProductList } from "@/components/products/ProductList/ProductList";
import Loading from "./loading";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}
