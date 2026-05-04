"use client";

import { Badge } from "@/components/ui/Badge/Badge";
import classes from "./CartIcon.module.css";
import { ShoppingCartIcon } from "lucide-react";
import { useCart } from "@/features/cart/hooks/useCart";

export function CartIcon() {
  const { cartQuantity } = useCart();

  return (
    <div className={classes.icon}>
      <ShoppingCartIcon className={classes.icon} color="#6D6E71" />
      {cartQuantity > 0 && <Badge quantity={cartQuantity} />}
    </div>
  );
}
