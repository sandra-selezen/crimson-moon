import Link from "next/link";
import { User } from "next-auth";

import style from "./UserBar.module.scss";

export const UserBar = async ({ id, name, email, image }: User) => {
  return (
    <div className={style.avatarWrapper}>
      <Link href="/user/profile"><img src={image ?? ""} /></Link>
    </div>
  )
}
