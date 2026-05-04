import { Product } from "@/features/data/types/product.types";

export type CartItem = Product & {quantity: number};

export type CartValue = {
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    cartQuantity: number
}