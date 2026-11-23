"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.error || "Unable to sign in.");
        return;
      }
      window.location.assign("/admin/dashboard");
    } catch {
      setError("A connection error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#14271e] px-5 py-12 text-[#f7f3ea]">
      <div className="w-full max-w-md rounded-[28px] border border-white/15 bg-white/[0.07] p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
        <a href="/" className="block text-center font-serif text-3xl italic text-[#e4c995]">
          Seasonal Finds
        </a>
        <p className="mt-2 text-center text-[10px] tracking-[0.28em] text-white/55">
          PRIVATE ADMINISTRATION
        </p>

        <div className="my-8 h-px bg-white/15" />

        <h1 className="font-serif text-3xl">Welcome back</h1>
        <p className="mt-2 text-sm leading-6 text-white/65">
          Sign in to manage your articles, collections and product recommendations.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label htmlFor="password" className="block text-[10px] tracking-[0.18em] text-[#e4c995]">
            ADMIN PASSWORD
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            maxLength={256}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#e4c995]"
            placeholder="Enter your password"
          />
          {error && (
            <p role="alert" className="rounded-xl border border-red-300/25 bg-red-400/10 px-4 py-3 text-sm text-red-100">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#e4c995] px-6 py-4 text-[10px] font-medium tracking-[0.18em] text-[#14271e] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>
        <a href="/" className="mt-8 block text-center text-xs text-white/50 transition hover:text-[#e4c995]">
          Return to Seasonal Finds
        </a>
      </div>
    </main>
  );
}
