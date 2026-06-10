import { CartItem } from "@/src/store/types";
import { Product } from "@/src/features/products/types/product.types";
import { keyBy } from "lodash";
import { create } from "zustand";

type CartState = CartItem[];

const initialCart: CartState = [];

type CartStore = {
  cart: CartState;
  addToCart: (product: Product, quantity?: number) => void;
  deleteFromCart: (articleNumber: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: initialCart,
  addToCart: (product: Product, quantity?: number) => {
    set((state) => {
      console.log("Data send to API");

      const index = state.cart.findIndex(
        (item) => item.articleNumber === product.articleNumber,
      );

      if (index !== -1) {
        const updated = [...state.cart];

        updated[index] = {
          ...updated[index],
          quantity: updated[index].quantity + (quantity ?? 1),
        };
        return { cart: updated };
      }

      return { cart: [...state.cart, { ...product, quantity: quantity ?? 1 }] };
    });
  },

  deleteFromCart: (articleNumber: string) => {
    set((state) => {
      const { [articleNumber]: deletedCartItem, ...restState } = keyBy(
        state.cart,
        "articleNumber",
      );

      return { cart: Object.values(restState) };
    });
  },
}));
