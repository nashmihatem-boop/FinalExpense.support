import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$5,000 Final Expense Insurance: A Gentle Look at Cost",
  description:
    "A caring look at who typically chooses $5,000 in final expense coverage, what it tends to cover for your family, and what actually shapes your price.",
  openGraph: { title: "$5,000 Final Expense Insurance: A Gentle Look at Cost", description: "A caring look at who typically chooses $5,000 in final expense coverage, what it tends to cover for your family, and what actually shapes your price." },

  twitter: { title: "$5,000 Final Expense Insurance: A Gentle Look at Cost", description: "A caring look at who typically chooses $5,000 in final expense coverage, what it tends to cover for your family, and what actually shapes your price." },
};

export default function FiveThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $5,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $5,000 final expense insurance: a gentle look at cost
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Among carriers that offer final expense coverage, $5,000 is usually about as small as
          the face amount gets. There&apos;s no single rate we can hand you here — every applicant
          is priced individually — but the gentle role this amount plays for most families is
          fairly consistent: it fills a gap, rather than standing in for an entire funeral budget.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Your age, health, gender, tobacco use, and state all shape a $5,000 premium, so
            publishing one number here wouldn&apos;t be responsible. What we can say gently is
            that this tier usually supplements a plan already in place, rather than carrying the
            whole thing alone.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $5,000 tends to cover for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A full traditional funeral is rarely something $5,000 covers on its own in most parts of
          the country. Where it does help: a portion of a simple cremation, or sitting quietly
          alongside money your family has already set aside — savings, a pre-need arrangement
          with a funeral home, or an existing life insurance policy that just falls a little
          short by itself. Some families choose this amount on purpose as a &quot;just in
          case&quot; layer stacked on top of other plans, not as the whole plan.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who tends to feel drawn to this amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Three kinds of families gravitate here, gently, for different reasons. Some are simply
          getting their very first coverage in place and want to keep the monthly cost as light
          as possible. Others have already handled most of their funeral planning through a
          different route and just need something small to close the remaining gap. And some are
          living on a fixed income and would rather have real protection in force today than wait
          around while they weigh a bigger number. None of this locks your family out of adding
          more coverage later, though it&apos;s worth knowing that any future policy means going
          through underwriting again at whatever age and health you&apos;ll be at that point.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If $5,000 feels like it might not stretch far enough for what you have in mind, it&apos;s
          worth placing it side by side with a{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000 policy
          </Link>{" "}
          before settling on either one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually shapes your price at $5,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Even at the gentlest amount typically available, the same handful of factors quietly
          set your price:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote, taking about two minutes and carrying no obligation, is genuinely the only
          way to see what $5,000 in coverage would cost your family.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to cost by coverage amount
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
