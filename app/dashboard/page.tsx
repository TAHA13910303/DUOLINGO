import { auth } from "@/auth"
import { getProducts } from "@/lib/products"

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user?.strapiToken) {
        return (
            <main className="p-8">
                <h1 className="text-2xl font-bold">
                    لطفاً ابتدا وارد شوید
                </h1>
            </main>
        )
    }

    const products = await getProducts(
        session.user.strapiToken,
    )

    return (
        <main className="p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>

                    <p className="mt-2">
                        Welcome, {session.user.name}
                    </p>
                </div>
            </div>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold">
                    Products
                </h2>

                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <article
                            key={product.id}
                            className="rounded-lg border p-5"
                        >
                            <h3 className="text-xl font-semibold">
                                {product.title}
                            </h3>

                            <p className="mt-2 text-gray-600">
                                {product.description}
                            </p>

                            <p className="mt-4 font-bold">
                                ${product.price}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}