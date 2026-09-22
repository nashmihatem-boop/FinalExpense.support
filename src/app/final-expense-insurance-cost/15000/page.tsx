import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$15,000 Final Expense Insurance, Gently Explained",
  description:
    "A caring look at why $15,000 sits between the two amounts families search for most, what it covers, and what shapes the price.",
  openGraph: { title: "$15,000 Final Expense Insurance, Gently Explained", description: "A caring look at why $15,000 sits between the two amounts families search for most, what it covers, and what shapes the price." },

  twitter: { title: "$15,000 Final Expense Insurance, Gently Explained", description: "A caring look at why $15,000 sits between the two amounts families search for most, what it covers, and what shapes the price." },
};

export default function FifteenThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $15,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $15,000 final expense insurance, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Right between the two amounts families ask about most — $10,000 and $20,000 — sits
          $15,000, and it tends to draw in the families who&apos;ve weighed both and wanted
          something gentler in the middle. As with every amount here, the actual premium is worked
          out around you specifically, not printed on a page.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $15,000 policy doesn&apos;t come with a fixed price — it&apos;s underwritten around
            your own situation. What we can share gently is how families tend to use it: a step
            beyond the bare minimum, without reaching all the way to a full traditional funeral
            budget.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $15,000 tends to cover for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Compared to a bare-bones cremation policy, $15,000 usually buys your family real
          breathing room — often enough for a fuller service that includes a viewing, or a modest
          burial somewhere with lower costs, with a little left for smaller bills afterward. Many
          families choose this amount because they want more than the minimum, without paying for
          coverage sized around a full traditional funeral they may not actually need.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why some families settle right in the middle
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Plenty of families simply don&apos;t picture their loved one&apos;s send-off as purely
          one thing or the other. Maybe there&apos;s a heartfelt viewing planned before cremation
          rather than after, or maybe your family just wants a softer landing than the smallest
          tiers allow, without paying for a service you have no intention of holding. Once
          families sit{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000
          </Link>{" "}
          and{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          next to each other and compare, $15,000 is frequently where they gently land.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually shapes your price at $15,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Landing in between two other tiers doesn&apos;t change how your price gets built —
          it&apos;s the same underlying factors at work here as anywhere else:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Comparing your own quote at $10,000, $15,000, and $20,000 side by side is often the
          gentlest way to see exactly what the extra coverage costs your family each month.
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
