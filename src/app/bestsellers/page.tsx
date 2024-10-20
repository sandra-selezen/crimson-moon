import { fetchNYTimesBestSellers } from "@/lib/nytApi";

export default async function Bestsellers() {
  const books = await fetchNYTimesBestSellers();

  return (
    <main className="container">
      <h1>New York Times bestsellers</h1>
      <ul>
        {books.map((book: any) => (
          <li key={book.rank}>
            <img src={book.book_image} alt={book.title} width={100} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>{book.author} | {book.publisher}</p>
            <p>{book.weeks_on_list > 1 ? `${book.weeks_on_list} weeks on the list` : 'new this week'}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
