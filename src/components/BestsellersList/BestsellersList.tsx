import React from 'react';
import style from './BestsellersList.module.scss';

interface IBestsellers {
  books: {
    rank: number;
    book_image: string;
    title: string;
    description: string;
    author: string;
    publisher: string;
    weeks_on_list: number;
  }[];
}

export const BestsellersList = ({ books }: IBestsellers) => {
  return (
    <ul className={style.list}>
      {books.map((book) => (
        <li key={book.rank} className={style.item}>
          <div className={style.imageWrapper}>
            <img src={book.book_image} alt={book.title} width={100} />
          </div>
          <h3>{book.title}</h3>
          <p>{book.weeks_on_list > 1 ? `${book.weeks_on_list} weeks on the list` : 'new this week'}</p>
          <p>{book.description}</p>
          <p>{book.author} | {book.publisher}</p>
        </li>
      ))}
    </ul>
  )
}
