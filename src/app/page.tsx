import { Carousel } from "@/components/Carousel/Carousel";
import { fetchNYTimesBestSellers } from "@/lib/nytApi";

export default async function Home() {
  const books = await fetchNYTimesBestSellers();

  return (
    <main className="container">
      <h1>Hello readers!</h1>

      <section>
        <h2>New York Times bestsellers</h2>
        <Carousel items={books} />
      </section>
    </main>
  );
}
