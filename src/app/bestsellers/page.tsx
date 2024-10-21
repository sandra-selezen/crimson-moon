import { fetchNYTimesBestSellers } from "@/lib/nytApi";

import { BestsellersList } from "@/components/BestsellersList/BestsellersList";

import style from "../../styles/pages/BestsellersPage.module.scss";

export default async function Bestsellers() {
  const books = await fetchNYTimesBestSellers();

  return (
    <main className="container">
      <section className={style.section}>
        <h1 className={style.title}>New York Times bestsellers</h1>
        <BestsellersList books={books} />
      </section>
    </main>
  )
}
