import { Product } from "@/src/features/products/types/product.types";
import { ProductCard } from "../ProductCard/ProductCard";
import classes from "./ProductList.module.css";
import Link from "next/link";
import { ROUTES } from "@/src/constants/routes";

export function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className={classes.productList}>
      {products.map((product) => (
        <li key={product.articleNumber}>
          <Link href={`${ROUTES.products}/${product.slug}`}>
            <ProductCard product={product} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
