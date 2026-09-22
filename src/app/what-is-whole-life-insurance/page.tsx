import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is Whole Life Insurance? A Gentle Explainer",
  description:
    "A caring explainer: coverage built to last your whole life, premiums that never rise, a guaranteed death benefit, and cash value along the way.",
  openGraph: { title: "What Is Whole Life Insurance? A Gentle Explainer", description: "A caring explainer: coverage built to last your whole life, premiums that never rise, a guaranteed death benefit, and cash value along the way." },

  twitter: { title: "What Is Whole Life Insurance? A Gentle Explainer", description: "A caring explainer: coverage built to last your whole life, premiums that never rise, a guaranteed death benefit, and cash value along the way." },
};

export default function WhatIsWholeLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is whole life insurance?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whole life insurance belongs to the &quot;permanent&quot; family of coverage — built to
          last for the rest of your life, rather than expiring after a fixed number of years the
          way term insurance does. In return for a level premium, it guarantees a death benefit for
          as long as the policy stays active, and it quietly builds cash value as you go.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coverage that stays with you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The name says it plainly. As long as premiums keep getting paid, a whole life policy
          simply doesn&apos;t run out at the end of a term, and it never asks you to renew or
          requalify later on. It stays in force for your entire life — which is exactly why
          it&apos;s the structure behind coverage meant to be there whenever it&apos;s eventually
          needed, rather than coverage built to protect one specific stretch of years, like a
          mortgage or a child&apos;s upbringing.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A premium that never climbs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Whatever premium you&apos;re quoted when the policy is issued is the premium you keep for
          as long as you own it — it doesn&apos;t rise as you get older, even though your risk
          naturally does. That&apos;s only possible because the insurer prices things around your
          age at issue and spreads the true cost evenly across the years, rather than charging more
          with each birthday the way some other products do. What you&apos;re left with is a
          payment you can actually plan around.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cash value, quietly building underneath
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A portion of every premium you pay flows into a cash value component, growing on a
          guaranteed schedule spelled out right in the policy. Think of it as a built-in,
          savings-like feature — depending on your specific policy, you may be able to access it
          while you&apos;re still living, though pulling from it can reduce the eventual death
          benefit if it isn&apos;t paid back. It&apos;s a real feature worth knowing about, but for
          most people carrying a smaller policy, it stays secondary — the guaranteed death benefit
          remains the main event.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A death benefit you can actually count on
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For as long as the policy is active, that death benefit is guaranteed — a fixed amount,
          locked in when you bought the policy, that doesn&apos;t move based on markets or
          investment performance. That guarantee is really the whole reason people choose whole
          life over other permanent options: it isn&apos;t the amount you might eventually get,
          it&apos;s the amount you will get.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Final expense insurance: whole life, sized for one specific job
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance isn&apos;t some separate category sitting apart from whole life —
          it is whole life insurance, just built and underwritten for a narrower purpose: covering
          end-of-life costs instead of replacing decades of missing income. It typically comes in
          smaller amounts, leans on simpler underwriting, and is easier to qualify for than a large
          whole life policy, all while keeping the same core guarantees intact — a level premium and
          a guaranteed payout. See{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance works
          </Link>{" "}
          for the details specific to this version of it.
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
