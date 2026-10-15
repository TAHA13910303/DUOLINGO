import { strapiFetch } from "./strapi"

export type Product = {
    id: number
    documentId: string
    taha: string
    price: number
    what: any
    Image: {
        id: number
        url: string
    } | null
}

type ProductsResponse = {
    data: Product[]
}

export async function getProducts(token: string) {
    const response = await strapiFetch<ProductsResponse>(
        "/api/taha1391nnns?populate=*",
        token,
    )

    return response.data
}