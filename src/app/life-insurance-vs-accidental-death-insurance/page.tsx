import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. Accidental Death Insurance",
  description:
    "A caring comparison: accidental death insurance only pays for accidents, not illness or natural causes. Here's why that gap matters for a family relying on it later in life.",
  openGraph: { title: "Life Insurance vs. Accidental Death Insurance", description: "A caring comparison: accidental death insurance only pays for accidents, not illness or natural causes. Here's why that gap matters for a family relying on it later in life." },

  twitter: { title: "Life Insurance vs. Accidental Death Insurance", description: "A caring comparison: accidental death insurance only pays for accidents, not illness or natural causes. Here's why that gap matters for a family relying on it later in life." },
};

export default function LifeInsuranceVsAccidentalDeathInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. accidental death insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          These two get confused more often than families realize, and the
          difference between them matters a great deal to the people
          you&apos;re trying to protect. One pays for a specific category
          of loss. The other stands by your family no matter the cause.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">The one thing to remember</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death insurance pays only for death caused by a
            qualifying accident. It does not pay for death from illness or
            natural causes, which is how most people actually pass away.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What accidental death insurance actually covers
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Accidental death insurance pays a benefit only when death
          results from a qualifying accident. That&apos;s the entire
          scope of the coverage — it doesn&apos;t pay out for death from
          illness or natural causes, no matter how comforting the policy
          sounds or how affordable it looks. This is a real limitation
          families deserve to understand clearly, not fine print to gloss
          over.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why that limitation matters more as you get older
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Illness and natural causes — conditions like heart disease,
          cancer, stroke, and other age-related health issues — are the
          more common cause of death among older adults, which is exactly
          the family final expense insurance is built to protect. A
          policy that only pays for accidents leaves the more likely
          scenario completely unaddressed. It can feel like your family is
          taken care of, right up until the moment it&apos;s needed for a
          cause it was never designed to cover.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How final expense insurance is different
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance pays its death benefit regardless of the
          cause of death — illness, natural causes, or accident are all
          treated the same, caring way. The general exceptions are the
          standard early waiting period on some guaranteed-acceptance
          policies, and the standard early suicide exclusion found in
          most policies. Outside of those specific, time-limited
          situations, your family isn&apos;t left wondering whether the
          cause of death will affect whether the claim is paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where accidental death coverage can still make sense
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          None of this makes accidental death insurance worthless —
          it&apos;s typically inexpensive, and some families add it as a
          supplement, sometimes as a{" "}
          <Link href="/life-insurance-riders" className="font-semibold text-harbor-mid hover:underline">
            rider
          </Link>{" "}
          on a base policy, for the specific case it does cover. The
          caring thing to do is understand it for what it is: a narrow,
          supplemental layer, not something your family should lean on as
          their whole plan.
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
