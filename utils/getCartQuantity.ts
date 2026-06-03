import { CartItem } from "@/features/cart/types/cart.types";

export function getCartQuantity(cart: CartItem[] | []): number {
  if(cart.length === 0) return 0;
  return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
}
