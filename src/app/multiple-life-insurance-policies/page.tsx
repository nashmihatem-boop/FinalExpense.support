import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Can You Have More Than One Life Insurance Policy?",
  description:
    "Yes — and many families do, for good reason. A gentle look at why people carry more than one policy and how to know if adding another makes sense.",
  openGraph: { title: "Can You Have More Than One Life Insurance Policy?", description: "Yes — and many families do, for good reason. A gentle look at why people carry more than one policy and how to know if adding another makes sense." },

  twitter: { title: "Can You Have More Than One Life Insurance Policy?", description: "Yes — and many families do, for good reason. A gentle look at why people carry more than one policy and how to know if adding another makes sense." },
};

export default function MultipleLifeInsurancePoliciesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Can you have more than one life insurance policy?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          You genuinely can, and a lot of families quietly do — often without even thinking of it
          as &quot;doubling up.&quot; It usually comes from two different needs showing up at
          different points in life, each one asking for its own kind of coverage.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why two policies so often make more sense than one
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Picture someone who bought a large term policy years ago to replace their income for a
          young family — that was never really meant to cover funeral costs specifically, it was
          protecting a paycheck. Later in life, a smaller final expense policy gets added
          alongside it, aimed squarely at burial costs and other end-of-life bills. Neither policy
          is doing the other&apos;s job; together they quietly cover both.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurers are genuinely fine with this
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Each policy you hold is its own separate contract, with its own insurer, its own premium,
          and its own beneficiary designation — nothing about holding one limits your ability to
          hold another. Insurance companies don&apos;t typically restrict how many policies a
          person carries. What they do watch closely is the total amount of coverage in force
          across everything you hold, and extra scrutiny there tends to only kick in at very large
          combined totals — well above what a typical final expense policy involves.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Gently deciding whether another policy makes sense for you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The honest question worth sitting with is simple: does anything you already have
          actually cover final expenses, or is it earmarked for something else entirely? A term
          policy nearing its end date, for instance, was likely never intended for burial costs in
          the first place — and once it lapses, that gap in coverage doesn&apos;t close itself. A{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            dedicated final expense policy
          </Link>{" "}
          fills that specific gap, quietly and directly, without asking you to touch or restructure
          whatever else you&apos;re already holding.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
