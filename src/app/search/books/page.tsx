import { fetchBooks } from "@/lib/google-api";
import { IGoogleBook } from "@/lib/types";
import { SearchForm } from "@/components/Forms/SearchForms/SearchForm";

export default async function SearchBooks({ searchParams }: {
  searchParams: Promise<{ query: string }>
}) {
  const query = (await searchParams).query;
  const books = await fetchBooks(query);

  return (
    <main className="container">
      <section>
        <h1>Search Books page</h1>
        <SearchForm />
      </section>
      <section>
        {books.map((book: IGoogleBook) => (
          <li key={book.id}>
            <div>
              <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            </div>
            <h3>{book.volumeInfo.title}</h3>
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            <span>{book.volumeInfo.publishedDate}</span>
            <p>{book.volumeInfo.description}</p>
            <span>{book.volumeInfo.pageCount}</span>
          </li>
        ))}
      </section>
    </main>
  )
}
