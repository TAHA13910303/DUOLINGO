import Image from "next/image";
import Link from "next/link";
import RichText from "./RichText";
import { Item } from "@/lib/types";
import { getImageUrl } from "@/lib/image";

interface ProductCardProps {
  product: Item;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="group">

      {product.Image && (
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={getImageUrl(product.Image.url)}
            alt={product.taha}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      )}

      <div className="p-6">

        <h2 className="text-xl font-bold text-white">
          {product.taha}
        </h2>

        <div className="mt-4 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2">
          <span className="font-bold text-yellow-400">
            ${product.price}
          </span>
        </div>

        {product.what && (
          <div className="prose mt-5 max-w-none text-sm">
            <RichText content={product.what} />
          </div>
        )}

        <Link
          href={`/products/${product.documentId}`}
          className="mt-6 block rounded-xl border border-yellow-500/20 bg-white/5 px-4 py-3 text-center font-semibold text-white transition duration-300 hover:border-yellow-400/40 hover:bg-yellow-500/10 hover:text-yellow-300"
        >
          View Details
        </Link>

      </div>
    </article>
  );
}