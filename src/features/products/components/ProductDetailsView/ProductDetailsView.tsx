"use client";

import classes from "./ProductDetailsView.module.css";
import { useState } from "react";
import { Product } from "../../types/product.types";
import { useDispatch } from "react-redux";
import { pause } from "@/src/utils/pause";
import { addToCart } from "@/src/store/slices/cartSlice";
import Image from "next/image";
import { Price } from "@/src/components/ui/Price/Price";
import { Button } from "@/src/components/ui/Button/Button";
import { LoadingSpinner } from "@/src/components/ui/LoadingSpinner/LoadingSpinner";

export function ProductDetailsView({ product }: { product: Product }) {
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
    <div className={classes.container}>
      <Image
        height="500"
        width="400"
        alt={image.altText}
        src={image.url}
        loading="eager"
      />
      <div className={classes.details}>
        <h2>{title}</h2>
        <Price price={price} promotion={promotion?.percentage} />

        <Button
          type="button"
          onClick={handlerAddToCart}
          ariaLabel={`Add ${title} to cart`}
          className={classes.button}
        >
          {isLoading ? <LoadingSpinner /> : "Buy"}
        </Button>
        <Image
          src={categoryLogo}
          alt={`brand name ${categoryName}`}
          width="70"
          height="25"
        />
        <p>{description}</p>
      </div>
    </div>
  );
}
