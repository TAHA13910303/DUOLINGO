"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setError("")
    setLoading(true)
    try {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    setError(
      data.message || "ثبت‌نام انجام نشد"
    )
    return
  }
}