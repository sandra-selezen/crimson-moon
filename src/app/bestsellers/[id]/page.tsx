import { getBestSellersByName } from "@/lib/nytApi";

import { BestsellersList } from "@/components/BestsellersList/BestsellersList";

import style from "../../../styles/pages/BestsellersPage.module.scss";

export default async function Bestsellers({ params }: { params: { id: string } }) {
  const data = await getBestSellersByName(params.id);
  const books = data.books;

  return (
    <main className="container">
      <section className={style.section}>
        <h1 className={style.title}>{data.display_name}</h1>
        <BestsellersList books={books} />
      </section>
    </main>
  )
}
