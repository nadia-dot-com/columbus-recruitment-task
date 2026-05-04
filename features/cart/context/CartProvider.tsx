"use client";

import { ReactNode, useState } from "react";
import { CartContext } from "./CartContext";
import { CartItem } from "../types/cart.types";
import { Product } from "@/features/data/types/product.types";
import { pause } from "@/utils/pause";

export function CartProvider({ children }: { children: ReactNode }): ReactNode {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = async (product: Product, quantity: number = 1) => {
    await pause(500);
    console.log("Data send to API");

    setCart((prev) => {
      const index = prev.findIndex(
        (item) => item.articleNumber === product.articleNumber,
      );

      if (index !== -1) {
        const updated = [...prev];

        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + quantity,
        };
        return updated;
      }

      return [...prev, { ...product, quantity }];
    });
  };

  const cartQuantity = cart.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0,
  );

  return (
    <CartContext.Provider value={{ cart, addToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
