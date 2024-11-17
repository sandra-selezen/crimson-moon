import { auth } from "../../../../auth";

import style from "../../../styles/pages/User.module.scss";

const Profile = async () => {
  const session = await auth();
  return (
    <main className="container">
      <section className={style.section}>
        <div className={style.avatarWrapper}>
          <img src={session?.user?.image || "/moth-03.png"} alt="avatar" />
        </div>
        <h1 className={style.title}>{session?.user?.name}</h1>
      </section>
    </main>
  )
}

export default Profile;
