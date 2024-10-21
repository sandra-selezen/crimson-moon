"use client";

import Link from "next/link";

import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className="container">
      <nav className={style.header}>
        <ul className={style.list}>
          <li className={style.item}>
            <Link className={style.link} href={"/"}>Home</Link>
          </li>
          <li className={style.item}><Link className={style.link} href={"/bestsellers"}>Bestsellers</Link></li>
        </ul>
      </nav>
    </header>
  )
}
