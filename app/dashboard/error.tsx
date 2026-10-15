"use client"

import { useEffect } from "react"
import { signOut } from "next-auth/react"

export default function Error({
    error,
    reset,
}: {
    error: Error & {
        digest?: string
    }
    reset: () => void
}) {
    useEffect(() => {
        if (error.message === "STRAPI_TOKEN_EXPIRED") {
            signOut({
                callbackUrl: "/login",
            })
        }
    }, [error])

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">
                خطا در دریافت اطلاعات
            </h1>

            <p className="mt-3 text-gray-600">
                دریافت اطلاعات با مشکل مواجه شد
            </p>

            <button
                onClick={() => reset()}
                className="mt-6 rounded bg-black px-4 py-2 text-white"
            >
                تلاش مجدد
            </button>
        </main>
    )
}