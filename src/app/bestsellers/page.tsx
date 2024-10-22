import { getBestSellersListNames } from "@/lib/nytApi";
import { IListName } from "@/lib/types";

import { BestsellersTags } from "@/components/BestsellersTags/BestsellersTags";
import style from "../../styles/pages/BestsellersPage.module.scss";

export default async function BestsellersPage() {
  const list = await getBestSellersListNames();
  const monthlyLists = list.filter((list: IListName) => (list.updated === 'MONTHLY'));
  const weeklyLists = list.filter((list: IListName) => (list.updated === 'WEEKLY'));

  return (
    <main className="container">
      <section className={style.section}>
        <h2 className={style.title}>Weekly Best Sellers Lists</h2>
        <BestsellersTags items={weeklyLists} />
      </section>

      <section className={style.section}>
        <h2 className={style.title}>Monthly Best Sellers Lists</h2>
        <BestsellersTags items={monthlyLists} />
      </section>
    </main>
  )
}
