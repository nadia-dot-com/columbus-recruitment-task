import { Product } from "@/features/data/types/product.types";
import { ProductCard } from "../ProductCard/ProductCard";
import classes from "./ProductList.module.css";

export function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className={classes.productList}>
      {products.map((product) => (
        <li key={product.articleNumber}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
