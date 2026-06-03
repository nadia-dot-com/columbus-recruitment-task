"use client";

import { Badge } from "@/components/ui/Badge/Badge";
import classes from "./CartIcon.module.css";
import { ShoppingCartIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { getCartQuantity } from "@/utils/getCartQuantity";
import { RootState } from "@/redux-toolkit/store";

export function CartIcon() {
  const cart = useSelector((state: RootState) => state.cart);
  const cartQuantity = getCartQuantity(cart);

  return (
    <button className={classes.icon} >
      <ShoppingCartIcon className={classes.icon} color="#6D6E71" />
      {cartQuantity > 0 && <Badge quantity={cartQuantity} />}
    </button>
  );
}
