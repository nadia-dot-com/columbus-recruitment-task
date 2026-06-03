import classes from "./Header.module.css";
import Image from "next/image";
import { CartIcon } from "../CartIcon/CartIcon";
import { getStoreData } from "@/features/data/api/getStoreData";
import Link from "next/link";

export async function Header() {
  const { logo } = await getStoreData();

  return (
    <header className={classes.header}>
      <Link href={`/`}>
      <Image
        src={logo.url}
        alt={`logo ${logo.altText}`}
        width={120}
        height={60}
        priority
      />
      </Link>
      <CartIcon />
    </header>
  );
}
