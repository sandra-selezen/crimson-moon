import Link from "next/link";
import { getCombinedFiction } from "@/lib/nyt-api";
import { Carousel } from "@/components/Carousel/Carousel";
import { SearchForm } from "@/components/Forms/SearchForms/SearchForm";

import style from "../styles/pages/Home.module.scss";

export default async function Home() {
  // const books = await getCombinedFiction();

  return (
    <main>
      <section className={style.hero}>
        <div className={style.overlay}>
          <div className={style.content}>
            <h1 className={style.heroTitle}>Embark on a Journey through Dark Romance & Fantasy</h1>
            <p className={style.subtitle}>
              Discover and review the best fantasy and dark romance books.
            </p>
            <SearchForm className={style.searchForm} />
            <Link href={"/bestsellers"} className={style.ctaButton}>Explore Bestsellers</Link>
          </div>
        </div>
      </section>
      {/* <section className={`container ${style.section}`}>
        <h2 className={style.title}>New York Times bestsellers | Combined Print & E-Book Fiction</h2>
        <Carousel>
          {books.map((book: any) => (
            <div key={book.rank} className={style.bookItem}>
              <div className={style.imageWrapper}>
                <img src={book.book_image} alt={book.title} width={100} />
              </div>
              <div>
                <h3>{book.title}</h3>
                <p>{book.author} | {book.publisher}</p>
              </div>
            </div>
          ))}
        </Carousel>

        <Link
          href="/bestsellers/combined-print-and-e-book-fiction"
          className={style.seeAllLink}
        >
          See all
        </Link>
      </section> */}
    </main>
  );
}
