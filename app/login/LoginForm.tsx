"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    
    <main className="page-enter flex min-h-[70vh] items-center justify-center px-5 py-16">

      <form
        onSubmit={handleSubmit}
        className="glass w-full max-w-md rounded-3xl p-8 sm:p-10"
      >

        <div className="mb-8 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-500">
            Welcome Back
          </p>

          <h1 className="gold-text text-4xl font-black">
            Login
          </h1>

          <p className="mt-3 text-sm text-zinc-500">
            Sign in to continue to your account.
          </p>

        </div>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-300">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              className="w-full rounded-xl px-4 py-3"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-zinc-300">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              className="w-full rounded-xl px-4 py-3"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="gold-button w-full rounded-xl px-4 py-3"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

        </div>

      </form>

    </main>
    
  );

}