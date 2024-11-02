"use client";

import Link from "next/link";

import style from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <nav className="container">
        <div className={style.navWrapper}>
          <ul className={style.list}>
            <li className={style.item}>
              <Link className={style.link} href={"/"}>Home</Link>
            </li>
            <li className={style.item}><Link className={style.link} href={"/bestsellers"}>Bestsellers</Link></li>
          </ul>

          <ul className={style.list}>
            <li className={style.item}>
              <Link className={style.link} href={"/login"}>Login</Link>
            </li>
            <li className={style.item}>
            <Link className={style.link} href={"/signup"}>Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
