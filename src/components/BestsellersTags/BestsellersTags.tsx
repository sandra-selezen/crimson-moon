"use client";

import Link from 'next/link';
import { IListName } from '@/lib/types';

import style from "./BestsellersTags.module.scss";

interface IBestsellersTags {
  items: IListName[];
}

export const BestsellersTags = ({ items }: IBestsellersTags) => {

  return (
    <ul className={style.list}>
      {items.map((item) => (
        <li key={item.list_name_encoded} className={style.item}>
          <Link href={`/bestsellers/${item.list_name_encoded}`}>{item.list_name}</Link>
        </li>
      ))}
    </ul>
  )
}
