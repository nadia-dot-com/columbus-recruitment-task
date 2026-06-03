import { ProductCard } from "@/components/products/ProductCard/ProductCard";
import { CartItem } from "@/features/cart/types/cart.types";
import { Product } from "@/features/data/types/product.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { keyBy } from "lodash";

type CartState = CartItem[];

const initialCart: CartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{ product: Product; quantity?: number }>,
    ) => {
      console.log("Data send to API");

      const { product, quantity } = action.payload;

      const index = state.findIndex(
        (item) => item.articleNumber === product.articleNumber,
      );

      if (index !== -1) {
        const updated = [...state];

        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + (quantity ?? 1),
        };
        return updated;
      }

      return [...state, { ...product, quantity: quantity ?? 1 }];
    },

    deleteFromCart: (
      state: CartState,
      action: PayloadAction<{ articleNumber: string }>,
    ) => {
      const { [action.payload.articleNumber]: deletedCartItem, ...restState } =
        keyBy(state, "articleNumber");

      return Object.values(restState);
    },
  },
});

export const {addToCart, deleteFromCart} = cartSlice.actions;