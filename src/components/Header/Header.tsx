import Image from "next/image";

import { auth } from "../../../auth";
import { UserBar } from "../UserBar/UserBar";
import { ActiveLink } from "../ActiveLink/ActiveLink";

import style from "./Header.module.scss";

export const Header = async () => {
  const session = await auth();

  return (
    <header className={style.header}>
      <nav className="container">
        <div className={style.navWrapper}>
          <ul className={style.list}>
            <li className={style.item}>
              <ActiveLink href={"/"}>Home</ActiveLink>
            </li>
            <li className={style.item}>
              <ActiveLink href={"/bestsellers"}>Bestsellers</ActiveLink>
            </li>
          </ul>

          <div className={style.logoWrapper}>
            <Image src="/logo.png" alt="logo" width={105} height={60} />
          </div>

          {/* {session && session.user ? (
            <UserBar id={session.user.id} name={session.user.name} image={session.user.image} />
          ) : ( */}
            <ul className={style.list}>
              <li className={style.item}>
                <ActiveLink href={"/login"}>Login</ActiveLink>
              </li>
              <li className={style.item}>
                <ActiveLink href={"/signup"}>Signup</ActiveLink>
              </li>
            </ul>
          {/* )} */}
        </div>
      </nav>
    </header>
  )
}
