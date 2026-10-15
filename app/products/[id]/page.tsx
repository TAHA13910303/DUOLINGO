import Image from "next/image";
import { getProductById } from "@/lib/api";
import { getImageUrl } from "@/lib/image";
import RichText from "@/app/components/RichText";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params
}: PageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return (
      <div className="p-10 text-center text-xl">
        not found
      </div>
    );
  }

  const { data } = product;
const image = data.Image;
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {image && (
          <Image
            src={getImageUrl(image.url)}
            alt={data.taha}
            width={600}
            height={600}
            className="rounded-xl"
          />
        )}

        <div>
          <h1 className="text-4xl font-bold">
            {data.taha}
          </h1>

          <p className="mt-5 text-2xl text-blue-600">
            {data.price}
          </p>

          <div className="mt-8">
            <RichText
              content={data.what}
            />
          </div>

          <button
            className="mt-8 rounded-lg bg-black px-8 py-3 text-white"
          >
            Add To "Did You Know?"
          </button>
        </div>
      </div>
    </main>
  );
}