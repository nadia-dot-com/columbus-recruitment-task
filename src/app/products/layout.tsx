import { ProductNav } from "@/src/components/nav/products/ProductNav";
import { categories } from "@/src/constants/categories";
import classes from './layout.module.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
   <div className={classes.layout}>
      <ProductNav categories={categories} />
      {children}
    </div>
  );
}
