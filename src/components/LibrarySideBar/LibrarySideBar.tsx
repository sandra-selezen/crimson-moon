"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { sideBarLinks } from "@/lib/constants";

import style from "../../styles/pages/Bookshelves.module.scss";

export const LibrarySideBar = () => {
  const pathname = usePathname();

  return (
    <aside className={style.sideBar}>
      <h2 className={style.sideBarTitle}>My Library</h2>
      <nav>
        <ul>
          {sideBarLinks.map(({ id, title, url, icon: Icon }) => {
            const isActive = pathname === url;
            return (
              <li key={id} className={style.navItem}>
                <Link href={url} className={style.sideBarLink}>
                  {Icon && <Icon size="1.5rem" />}
                  <span>{title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
