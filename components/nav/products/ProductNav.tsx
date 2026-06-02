"use client";

import classes from "./ProductNav.module.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function ProductNav({ categories }: { categories: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");

  const handleBrandClick = (categoryName: string) => {
    router.push(`/?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <nav className={classes.productNav} aria-label="brands">
      <ul className={classes.brands}>
        {categories &&
          categories.map((category) => {
            return (
              <li
                key={category}
                onClick={() => handleBrandClick(category)}
                className={activeCategory === category ? classes.active : ""}
              >
                {category.toUpperCase()}
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
