import { CartItem } from "@/features/cart/types/cart.types";
import { Product } from "@/features/data/types/product.types";
import { keyBy } from "lodash";
import { combineReducers } from "redux";

export const CartAction = {
  ADD_TO_CART: "ADD_TO_CART",
  DELETE_FROM_CART: "DELETE_FROM_CART",
} as const;

type CartState = CartItem[]

export const cartHandlers = {
  [CartAction.ADD_TO_CART]: (
    state: CartState,
    payload: { product: Product; quantity?: number },
  ) => {
    console.log("Data send to API");

    const { product, quantity } = payload;

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

    return [...state, { ...product, quantity: (quantity ?? 1)}];
  },
  [CartAction.DELETE_FROM_CART]: (
    state: CartState,
    payload: { articleNumber: string },
  ) => {
    const { [payload.articleNumber]: deletedCartItem, ...restState } = keyBy(
      state,
      "articleNumber",
    );

    return Object.values(restState);
  },
};

export const initialCart: CartState = [];

export const cartReducer = (
  state = initialCart,
  action: { type: keyof typeof CartAction; payload?: any },
) => {
  const handler = cartHandlers[action.type];

  return handler ? handler(state, action.payload) : state;
};

export const rootReducer = combineReducers({
  cart: cartReducer,
})