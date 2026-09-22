import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. Accidental Death Insurance, Gently Compared",
  description:
    "Accidental death insurance only pays for accidents — never illness or natural causes. A caring look at why that distinction matters, especially later in life.",
  openGraph: { title: "Life Insurance vs. Accidental Death Insurance, Gently Compared", description: "Accidental death insurance only pays for accidents — never illness or natural causes. A caring look at why that distinction matters, especially later in life." },

  twitter: { title: "Life Insurance vs. Accidental Death Insurance, Gently Compared", description: "Accidental death insurance only pays for accidents — never illness or natural causes. A caring look at why that distinction matters, especially later in life." },
};

export default function LifeInsuranceVsAccidentalDeathInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. accidental death insurance, gently compared
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Families mix these two up more often than you&apos;d think, and the gap between them
          genuinely matters. One quietly pays for a narrow category of death. The other simply
          doesn&apos;t ask what the cause was.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">The one thing worth remembering</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Accidental death insurance pays out only when a qualifying accident causes death. It
            gently does nothing for illness or natural causes — which is, honestly, how most
            people actually pass.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What accidental death coverage genuinely pays for
          </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Accidental death insurance pays a benefit in exactly one scenario: death caused by a
          qualifying accident. That&apos;s the whole scope of what it covers — it simply
          doesn&apos;t respond to illness or natural causes, no matter how it&apos;s marketed or
          how gentle the price tag looks. This is a genuine, meaningful boundary, not small print
          to skim past.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why that boundary matters more as families age
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Illness and natural causes — things like heart disease, cancer, stroke, and other
          age-related conditions — account for far more deaths among older adults, which happens
          to be precisely the population final expense insurance was built around. A policy that
          only responds to accidents leaves the far more likely scenario completely unaddressed.
          It can feel like real protection right up until the moment your family needs it for a
          cause it was simply never built to cover.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How final expense insurance gently differs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance pays its death benefit no matter the cause — illness, natural
          causes, and accidents are all treated identically. The only real exceptions are the
          standard early waiting period some guaranteed-acceptance policies carry, and the
          standard early suicide exclusion found in most contracts. Outside those specific,
          time-limited situations, the cause of death simply doesn&apos;t factor into whether the
          claim gets paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where accidental death coverage still gently fits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          None of this makes accidental death insurance worthless — it&apos;s usually gentle on
          cost, and some families add it as a supplement, sometimes as a{" "}
          <Link href="/life-insurance-riders" className="font-semibold text-harbor-mid hover:underline">
            rider
          </Link>{" "}
          on a base policy, specifically for the narrow case it does cover. What matters is
          understanding it honestly for what it is: a narrow, supplemental layer, never a
          substitute for coverage that pays regardless of cause.
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
