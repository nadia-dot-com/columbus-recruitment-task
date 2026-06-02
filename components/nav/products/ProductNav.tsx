"use client";

import classes from "./ProductNav.module.css";
import { Brand } from "@/features/data/types/brand.types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function ProductNav({ brands }: { brands: Brand[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeBrand = searchParams.get("brand");

  const handleBrandClick = (brandName: string) => {
    router.push(`/?brand=${brandName.replace(/\s/g, '')}`);
  };

  return (
    <nav className={classes.productNav} aria-label="brands">
      <ul className={classes.brands}>
        {brands &&
          Array.from(brands).map((b) => {
            return (
              <li key={b.brandName} onClick={() => handleBrandClick(b.brandName)}>
                  <Image
                    src={b.brandLogo}
                    alt={`brand name ${b.brandName}`}
                    aria-label={b.brandName}
                    width="110"
                    height="45"
                    className={
                      activeBrand === b.brandName.replace(/\s/g, '') ? classes.active : ""
                    }
                  />
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
