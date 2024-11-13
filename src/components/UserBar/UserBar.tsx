"use client";

import Link from "next/link";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import { RiLogoutBoxRLine } from "@remixicon/react";

import style from "./UserBar.module.scss";

export const UserBar = ({ id, name, email, image }: User) => {

  const onLogout = async () => {
    await signOut({ redirectTo: "/" });
  };
  return (
    <div className={style.userBarWrapper}>
      <div className={style.avatarWrapper}>
        <Link href="/user/profile"><img src={image || "/moth-03.png"} /></Link>
      </div>
      <button type="button" aria-label="logout" title="logout" onClick={onLogout} className={style.logoutBtn}>
        <RiLogoutBoxRLine size={"1.5rem"} />
      </button>
    </div>
  )
}
