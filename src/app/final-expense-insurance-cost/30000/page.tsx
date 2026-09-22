import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$30,000 Final Expense Insurance, Gently Explained",
  description:
    "A caring look at who tends to choose $30,000 in final expense coverage, what it covers, and what shapes the price.",
  openGraph: { title: "$30,000 Final Expense Insurance, Gently Explained", description: "A caring look at who tends to choose $30,000 in final expense coverage, what it covers, and what shapes the price." },

  twitter: { title: "$30,000 Final Expense Insurance, Gently Explained", description: "A caring look at who tends to choose $30,000 in final expense coverage, what it covers, and what shapes the price." },
};

export default function ThirtyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $30,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $30,000 final expense insurance, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Think of $30,000 as a comfortable cushion tier — generally enough to fund a full
          traditional funeral without any tight tradeoffs, plus a real, meaningful amount left
          behind for your family. As with every amount here, the actual premium comes down to you
          individually, not a figure we could print.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            There&apos;s no standard rate for $30,000 in coverage — it&apos;s worked out around
            you. What stays consistent is the role it plays: the full funeral comfortably
            handled, with a genuine amount left over besides.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $30,000 tends to cover for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At this amount, a full traditional funeral and burial is generally funded without
          needing to economize on the service, casket, or plot — and there&apos;s still a real
          cushion afterward, often enough to make a genuine dent in outstanding debt, whether
          that&apos;s medical bills, credit cards, or a car loan, rather than only covering the
          small costs clustered around the service itself.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who tends to feel drawn to this amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Families carrying more significant debt they specifically don&apos;t want passed along
          informally to a spouse or adult child often land here. So do families who looked
          carefully at{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          and wanted less pressure around which casket, service, or plot to choose. And some
          simply want to fold what would otherwise be two smaller policies into one, rather than
          juggling both.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually shapes your price at $30,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A bigger number doesn&apos;t mean a different pricing method — $30,000 is priced on the
          same factors as any other tier:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the only way to see what $30,000 in coverage would genuinely cost your
          family, with no obligation attached.
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
