import { User } from "next-auth";
import style from "./UserBar.module.scss";
import Link from "next/link";

export const UserBar = async ({ id, name, email, image }: User) => {
  return (
    <div className={style.avatarWrapper}>
      <Link href={`/user/${id}`}><img src={image ?? ""}  /></Link>
    </div>
  )
}
