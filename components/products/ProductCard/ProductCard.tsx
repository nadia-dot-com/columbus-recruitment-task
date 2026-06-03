"use client";

import Image from "next/image";
import classes from "./ProductCard.module.css";
import { Product } from "@/features/data/types/product.types";
import { Price } from "../../ui/Price/Price";
import { Button } from "../../ui/Button/Button";
import { useState } from "react";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner/LoadingSpinner";
import { pause } from "@/utils/pause";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux-toolkit/slices/cartSlice";

export function ProductCard({ product }: { product: Product }) {
  const {
    image,
    title,
    description,
    categoryLogo,
    categoryName,
    price,
    promotion,
  } = product;

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handlerAddToCart = async () => {
    try {
      setIsLoading(true);
      await pause(500);
      dispatch(addToCart({ product }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.productCard}>
      <Image
        src={image.url}
        alt={image.altText}
        width="298"
        height="360"
        className={classes.img}
      />
      <h3 className={classes.title}>{title}</h3>

      <div className={classes.productInformation}>
        <div className={classes.brandName}>
          <Image
            src={categoryLogo}
            alt={`brand name ${categoryName}`}
            width="70"
            height="25"
          />
        </div>
        <p>{description}</p>
        <Price price={price} promotion={promotion?.percentage} />
      </div>

      <div className={classes.button}>
        <Button
          type="button"
          onClick={handlerAddToCart}
          ariaLabel={`Add ${title} to cart`}
        >
          {isLoading ? <LoadingSpinner /> : "Buy"}
        </Button>
      </div>
    </div>
  );
}
