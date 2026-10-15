import Container from "@/app/components/Container";
import { getAbout } from "@/lib/api";

export default async function AboutPage() {
  const { data } = await getAbout();

  return (
    <Container>
      <main className="py-10">

        <h1 className="mb-10 text-4xl font-bold">
          {data.title}
        </h1>

        <div className="space-y-8">
          {data.blocks?.map((block) => {

            if (block.__component === "shared.rich-text") {
              return (
                <p
                  key={block.id}
                  className="text-xl leading-9"
                >
                  {block.body}
                </p>
              );
            }

            if (block.__component === "shared.quote") {
              return (
                <blockquote
                  key={block.id}
                  className="border-r-4 border-blue-600 pr-5 text-xl italic"
                >
                  {block.body}
                </blockquote>
              );
            }

            return null;
          })}
        </div>

      </main>
    </Container>
  );
}