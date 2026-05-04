"use client"

import { createContext } from "react"
import { CartValue } from "../types/cart.types";

export const CartContext = createContext<CartValue | null>(null);