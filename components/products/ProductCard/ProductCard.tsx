"use client";

import Image from "next/image";
import classes from "./ProductCard.module.css";
import { Product } from "@/features/data/types/product.types";
import { Price } from "../../ui/Price/Price";
import { Button } from "../../ui/Button/Button";

export function ProductCard({ product }: { product: Product }) {
  const { image, title, description, brandName, brandLogo, price, promotion } =
    product;

  const handleClick = () => console.log("click");

  return (
    <div className={classes.productCard}>
      <Image
        src={image.url}
        alt={image.altText}
        width="298"
        height="370"
        className={classes.img}
      />
      <div className={classes.productInformation}>
        <h3 className={classes.title}>{title}</h3>

        <div className={classes.brandName}>
          {/* {brandName} */}
          <Image src={brandLogo} alt="brandName" width="80" height="25" />
        </div>

        <p>{description}</p>
        <Price price={price} promotion={promotion?.percentage} />

        <Button type="button" text="BUY" onClick={handleClick} />
      </div>
    </div>
  );
}
