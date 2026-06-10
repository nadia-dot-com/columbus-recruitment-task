"use client";

import classes from "./Menu.module.css";
import Link from "next/link";
import { CartIcon } from "../../CartIcon/CartIcon";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/src/constants/routes";

const menu = [
  {
    href: ROUTES.home,
    name: "HOME",
  },
  {
    href: ROUTES.products,
    name: "PRODUCTS",
  },
  {
    href: ROUTES.chat,
    name: "CHAT",
  }
];

export function Menu() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className={classes.menu}>
      {menu.map((m) => (
        <li key={m.name} className={pathname === m.href ? classes.active : ""}>
          <Link href={m.href}>{m.name}</Link>
        </li>
      ))}
      <li key="cart">
        <CartIcon />
      </li>
    </ul>
  );
}
