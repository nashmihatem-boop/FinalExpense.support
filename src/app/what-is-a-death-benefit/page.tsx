import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is a Death Benefit? A Gentle Explanation",
  description:
    "What a death benefit actually is, how it reaches your family, whether it's taxed, and what it can genuinely be used for.",
  openGraph: { title: "What Is a Death Benefit? A Gentle Explanation", description: "What a death benefit actually is, how it reaches your family, whether it's taxed, and what it can genuinely be used for." },

  twitter: { title: "What Is a Death Benefit? A Gentle Explanation", description: "What a death benefit actually is, how it reaches your family, whether it's taxed, and what it can genuinely be used for." },
};

export default function WhatIsADeathBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a death benefit?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A death benefit is simply the amount your life insurance company pays to your named
          beneficiary once you&apos;ve passed away. It&apos;s really the whole reason a policy
          exists — every other detail in the contract is just defining when, how much, and under
          what conditions this one payment happens.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the payment actually reaches your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most of the time, a death benefit arrives as one single lump sum, sent straight to the
          beneficiary once a claim has been filed and approved. A handful of policies offer other
          structures too — spreading payments out as installments over time, for instance — but a
          lump sum stays the simplest, most common choice, and it&apos;s what most final expense
          policies are quietly built around.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Is any of it taxed?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Generally, no — a beneficiary typically receives a life insurance death benefit
          completely free of income tax. It&apos;s genuinely one of the more dependable features of
          the product. That said, ownership structure and specific circumstances can occasionally
          complicate things, so it&apos;s worth double-checking your own situation with a tax
          professional instead of assuming every case plays out the same way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What the money is actually allowed to cover
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no restriction tied to a death benefit at all. Unlike a prepaid funeral plan,
          which usually locks you into services from one specific provider, this money reaches your
          beneficiary as plain cash, free to use however it&apos;s needed. Plenty of families do
          put it toward a funeral, but it works just as well for medical bills, everyday costs,
          debt, or anything else that comes up in that moment.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the amount itself gets decided
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The insurance company doesn&apos;t set your death benefit — you do, when you first apply,
          based on what you&apos;re actually trying to cover. A policy meant purely for end-of-life
          costs usually calls for a far more modest amount than one meant to replace years of
          missing income. Take a look at{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          to think through your own coverage amount, and{" "}
          <Link href="/what-is-a-beneficiary" className="font-semibold text-harbor-mid hover:underline">
            what is a beneficiary
          </Link>{" "}
          for who&apos;s actually able to receive this payment.
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
