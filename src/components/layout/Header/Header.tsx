import classes from "./Header.module.css";
import Image from "next/image";
import { getStoreData } from "@/src/features/products/api/getStoreData";
import Link from "next/link";
import { Menu } from "./Menu/Menu";

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
      <Menu />
    </header>
  );
}
