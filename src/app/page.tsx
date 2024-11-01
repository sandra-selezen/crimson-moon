import { getCombinedFiction } from "@/lib/nyt-api";
import { Carousel } from "@/components/Carousel/Carousel";
import { SearchForm } from "@/components/Forms/SearchForms/SearchForm";

import style from "../styles/pages/Home.module.scss";

export default async function Home() {
  const books = await getCombinedFiction();

  return (
    <main className="container">
      <h1 className={style.title}>Hello readers!</h1>

      <section className={style.section}>
        <h2 className={style.title}>New York Times bestsellers | Combined Print & E-Book Fiction</h2>
        <Carousel items={books} />
      </section>
      <section className={style.section}>
        <SearchForm />
      </section>
    </main>
  );
}
