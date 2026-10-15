import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },

            async authorize(credentials) {
                if (
                    typeof credentials?.email !== "string" ||
                    typeof credentials?.password !== "string"
                ) {
                    return null
                }

                try {
                    const response = await fetch(
                        `${process.env.STRAPI_URL}/api/auth/local`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                identifier: credentials.email,
                                password: credentials.password,
                            }),
                        }
                    )

                    if (!response.ok) {
                        console.log(
                            "STRAPI LOGIN FAILED:",
                            response.status,
                            await response.text()
                        )

                        return null
                    }

                    const data = await response.json()

                    console.log("STRAPI LOGIN SUCCESS:", data.user)

                    return {
                        id: String(data.user.id),
                        name: data.user.username,
                        email: data.user.email,
                        strapiToken: data.jwt,
                    }
                } catch (error) {
                    console.error("STRAPI LOGIN ERROR:", error)
                    return null
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            console.log("========== JWT ==========")
            console.log("TOKEN BEFORE:", token)
            console.log("USER:", user)

            if (user) {
                token.id = user.id
                token.strapiToken = user.strapiToken
            }

            console.log("TOKEN AFTER:", token)
            console.log("=========================")

            return token
        },

        async session({ session, token }) {
            console.log("========== SESSION ==========")
            console.log("SESSION BEFORE:", session)
            console.log("TOKEN:", token)

            if (session.user) {
                session.user.id = token.id as string
                session.user.strapiToken = token.strapiToken as string
            }

            console.log("SESSION AFTER:", session)
            console.log("============================")

            return session
        },
    },
})