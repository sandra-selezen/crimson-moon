import { getCombinedFiction } from "@/lib/nytApi";
import { Carousel } from "@/components/Carousel/Carousel";

export default async function Home() {
  const books = await getCombinedFiction();

  return (
    <main className="container">
      <h1>Hello readers!</h1>

      <section>
        <h2>New York Times bestsellers | Combined Print & E-Book Fiction</h2>
        <Carousel items={books} />
      </section>
    </main>
  );
}
