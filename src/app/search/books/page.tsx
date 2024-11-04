import { fetchBooks } from "@/lib/google-api";
import { SearchForm } from "@/components/Forms/SearchForms/SearchForm";
import { BookList } from "@/components/BookList/BookList";

import style from "../../../styles/pages/SearchBooks.module.scss";

export default async function SearchBooks({ searchParams }: {
  searchParams: Promise<{ query: string }>
}) {
  const query = (await searchParams).query;
  const books = await fetchBooks(query);

  return (
    <main className="container">
      <section className={style.section}>
        <div className={style.searchHeader}>
          <h1 className={style.mainTitle}>What Will You Read Next?</h1>
          <p className={style.subtitle}>Search through thousands of titles and find the next book that will capture your heart and imagination.</p>
        </div>
        <SearchForm />
      </section>
      <section className={style.section}>
        {query && books && (
          <div>
            <h2>Results for: "{query}"</h2>
            <p>{books.length} books found</p>
          </div>
        )}
        <BookList books={books} />
      </section>
    </main>
  )
}
