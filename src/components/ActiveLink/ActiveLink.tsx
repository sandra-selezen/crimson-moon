"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.scss";

interface IActiveLink {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: IActiveLink) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} className={`${style.link} ${isActive ? style.active : ""}`}>
      {children}
    </Link>
  )
}
