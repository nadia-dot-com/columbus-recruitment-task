import classes from "./Header.module.css";
import Image from "next/image";
import { CartIcon } from "../CartIcon/CartIcon";
import { getLogo } from "@/features/data/api/getLogo";

export async function Header() {
  const { url, altText } = await getLogo();

  return (
    <header className={classes.header}>
      <Image
        src={url}
        alt={`logo ${altText}`}
        width={120}
        height={60}
        priority
      />
      <CartIcon />
    </header>
  );
}
