"use client";

import Link from "next/link";
import classes from "./ProductNav.module.css";
import { useSearchParams } from "next/navigation";

export function ProductNav({ categories }: { categories: string[] }) {
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category");

  return (
    <nav className={classes.productNav} aria-label="brands">
      <ul className={classes.brands}>
        {categories &&
          categories.map((category) => {
            return (
              <li
                key={category}
                className={activeCategory === category ? classes.active : ""}
              >
               <Link href={`?category=${encodeURIComponent(category)}`}>{category.toUpperCase()}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
