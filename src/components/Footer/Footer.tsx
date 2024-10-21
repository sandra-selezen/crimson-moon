"use client";

import Link from "next/link";

import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <p>Developed with 💙💛 by <Link className={style.link} href={"https://github.com/sandra-selezen"} target="_blank" rel="noopener">Sandra Selezen</Link></p>
      </div>
    </footer>
  )
}
