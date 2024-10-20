"use client";

import Link from "next/link";

export const Header = () => {
  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li><Link href={"/bestsellers"}>Bestsellers</Link></li>
        </ul>
      </nav>
    </header>
  )
}
