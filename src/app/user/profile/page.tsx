import { auth } from "../../../../auth";

const Profile = async () => {
  const session = await auth();
  return (
    <main className="container">
      <h1>Welcome, {session?.user?.name}</h1>
    </main>
  )
}

export default Profile;
