const STRAPI_URL = process.env.STRAPI_URL

if (!STRAPI_URL) {
    throw new Error("STRAPI_URL is not defined")
}

export async function strapiFetch<T>(
    path: string,
    token: string,
    options: RequestInit = {},
) {
    const headers = new Headers(options.headers)

    headers.set("Content-Type", "application/json")
    headers.set("Authorization", `Bearer ${token}`)

    const response = await fetch(
        `${STRAPI_URL}${path}`,
        {
            ...options,
            headers,
        },
    )
    if (response.status === 401) {
        throw new Error("STRAPI_TOKEN_EXPIRED")
    }

    if (!response.ok) {
        throw new Error(
            `Strapi request failed: ${response.status}`,
        )
    }

    return response.json() as Promise<T>
}