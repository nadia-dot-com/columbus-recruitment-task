import styles from "./page.module.css";
import { getProducts } from "@/features/data/api/getProducts";
import { ProductList } from "@/components/products/ProductList/ProductList";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ProductList products={products} />
      </main>
    </div>
  );
}