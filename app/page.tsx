import Container from "./components/Container";
import ProductCard from "./components/ProductCard";
import { getProducts, getSiteSettings } from "@/lib/api";

export default async function Home() {
  const { data } = await getProducts();

  const settings = await getSiteSettings();

  return (
    <Container>
      <main className="page-enter py-16">

        <section className="mb-16 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
            {settings.data.SiteName}
          </p>

          <h1 className="gold-text text-5xl font-black sm:text-6xl">
            Did You Know?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Discover interesting products and explore
            everything our collection has to offer.
          </p>

        </section>

        <section className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {data.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </section>

      </main>
    </Container>
  );
}