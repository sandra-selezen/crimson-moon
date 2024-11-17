import { signIn } from "next-auth/react";
import { fetchBookshelves } from "@/lib/google-api";
import { auth } from "../../../auth";

const Bookshelves = async () => {  
  const session = await auth();

  const bookshelves = await fetchBookshelves(session?.accessToken as string);
  console.log("bookshelves", bookshelves);

  return (
    <div className="container">Bookshelves page</div>
  )
}

export default Bookshelves;
