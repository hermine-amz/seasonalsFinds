import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Seasonal Finds",
  description:
    "Learn about Seasonal Finds, an independent editorial destination for seasonal home inspiration, thoughtful gift ideas and practical everyday finds.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17291f]">
      <header className="border-b border-[#e4ddcf] px-5 py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="font-serif text-2xl italic text-[#244632]">
            Seasonal Finds
          </Link>
          <Link
            href="/"
            className="text-[10px] tracking-[0.16em] text-[#77766d] transition hover:text-[#a7864d]"
          >
            BACK TO HOME
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <p className="text-[10px] tracking-[0.32em] text-[#a7864d]">
          OUR STORY
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
          Thoughtful finds.
          <br />
          <span className="italic text-[#72836b]">Meaningful moments.</span>
        </h1>

        <p className="mt-8 text-lg leading-8 text-[#5f6259]">
          Seasonal Finds is an independent editorial destination for people
          who love making everyday spaces feel welcoming and celebrations feel
          personal.
        </p>

        <div className="my-12 h-px bg-[#ded6c7]" />

        <section className="space-y-5">
          <h2 className="font-serif text-3xl">What you will find here</h2>
          <p className="text-sm leading-8 text-[#68695f]">
            We publish seasonal decorating inspiration, thoughtful gift ideas,
            practical shopping guides and small discoveries for the home.
            Our goal is to make it easier to explore ideas, compare possibilities
            and find details that suit your style, needs and occasion.
          </p>
          <p className="text-sm leading-8 text-[#68695f]">
            Our guides are written to be useful and easy to browse. When we
            discuss a product or product type, we aim to explain what to look
            for, who it may suit and which details are worth considering before
            making a purchase.
          </p>
        </section>

        <section className="mt-12 space-y-5">
          <h2 className="font-serif text-3xl">How we make our selections</h2>
          <p className="text-sm leading-8 text-[#68695f]">
            We focus on relevance, usefulness, design and practical details.
            Product availability, features and prices can change, so readers
            should always check the retailer's listing for the latest
            information before buying.
          </p>
          <p className="text-sm leading-8 text-[#68695f]">
            Seasonal Finds is an independent publication. Our editorial
            recommendations are intended to help readers make their own
            informed decisions; they are not a substitute for checking a
            product's specifications or suitability.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-[#e4ddcf] bg-white/55 p-7 sm:p-9">
          <p className="text-[10px] tracking-[0.25em] text-[#a7864d]">
            OUR PROMISE
          </p>
          <h2 className="mt-4 font-serif text-3xl">
            Inspiration with clarity and care.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#68695f]">
            We believe good recommendations should be transparent. If Seasonal
            Finds uses affiliate links in the future, we will clearly disclose
            that relationship wherever required. An affiliate relationship
            does not change the price a customer pays.
          </p>
        </section>

        <div className="mt-14 border-t border-[#ded6c7] pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full bg-[#14271e] px-6 py-4 text-[10px] tracking-[0.16em] text-[#e4c995] transition hover:bg-[#244632]"
          >
            EXPLORE SEASONAL FINDS <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </article>

      <footer className="border-t border-[#e4ddcf] px-5 py-8 text-center text-[10px] tracking-[0.12em] text-[#99958b]">
        © {new Date().getFullYear()} SEASONAL FINDS
      </footer>
    </main>
  );
}
