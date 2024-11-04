import { IGoogleBook } from "@/lib/types";
import { truncateText } from "@/lib/utils";
import style from "./BookList.module.scss";

interface IBookList {
  books: IGoogleBook[];
}

export const BookList = ({ books }: IBookList) => {
  return (
    <ul className={style.list}>
      {books.map((book) => (
        <li key={book.id} className={style.item}>
          <div className={`${style.imageWrapper} ${!book.volumeInfo.imageLinks?.thumbnail ? style.placeholder : ""}`}>
            {book.volumeInfo.imageLinks?.thumbnail 
              ? <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} /> 
              : <span>No Image Available</span>
            }
          </div>
          <h3 className={style.title}>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.authors?.join(", ")} | {book.volumeInfo.publisher}</p>
          <span>{book.volumeInfo.publishedDate}</span>
          {book.volumeInfo?.description && <p>{truncateText(book.volumeInfo?.description, 150)}</p>}
          {book.volumeInfo.pageCount > 0 && <span>{book.volumeInfo.pageCount}</span>}
        </li>
      ))}
    </ul>
  )
}
