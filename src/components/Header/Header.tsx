"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import style from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <nav className="container">
        <div className={style.navWrapper}>
          <ul className={style.list}>
            <li className={style.item}>
              <Link className={`${style.link} ${pathname === "/" ? style.active : ""}`} href={"/"}>Home</Link>
            </li>
            <li className={style.item}>
              <Link className={`${style.link} ${pathname === "/bestsellers" ? style.active : ""}`} href={"/bestsellers"}>Bestsellers</Link>
            </li>
          </ul>

          <div className={style.logoWrapper}>
            <Image src="/logo.png" alt="logo" width={105} height={60} />
          </div>

          <ul className={style.list}>
            <li className={style.item}>
              <Link className={`${style.link} ${pathname === "/login" ? style.active : ""}`} href={"/login"}>Login</Link>
            </li>
            <li className={style.item}>
              <Link className={`${style.link} ${pathname === "/signup" ? style.active : ""}`} href={"/signup"}>Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
