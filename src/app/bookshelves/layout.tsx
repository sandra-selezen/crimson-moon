import type { Metadata } from "next";

import { LibrarySideBar } from "@/components/LibrarySideBar/LibrarySideBar";
import style from "../../styles/pages/Bookshelves.module.scss";

export const metadata: Metadata = {
  title: "Your Library",
  description: "Your dark little secret",
};

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={style.layout}>
      <LibrarySideBar />
      {children}
    </main>
  );
}
