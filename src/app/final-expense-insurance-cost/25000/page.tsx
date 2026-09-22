import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$25,000 Final Expense Insurance, Gently Explained",
  description:
    "A caring look at what $25,000 in final expense coverage leaves for your family beyond the funeral itself, and what shapes the price.",
  openGraph: { title: "$25,000 Final Expense Insurance, Gently Explained", description: "A caring look at what $25,000 in final expense coverage leaves for your family beyond the funeral itself, and what shapes the price." },

  twitter: { title: "$25,000 Final Expense Insurance, Gently Explained", description: "A caring look at what $25,000 in final expense coverage leaves for your family beyond the funeral itself, and what shapes the price." },
};

export default function TwentyFiveThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $25,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $25,000 final expense insurance, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Once families move past covering the funeral itself, $25,000 tends to be the amount
          where they start thinking gently about what else they&apos;d rather not leave for loved
          ones to sort through afterward. As always, the real price is worked out around you
          specifically.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $25,000 premium is set individually, the same as any other amount here. Worth
            knowing upfront: families at this tier are usually planning for more than the service
            alone.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $25,000 tends to cover for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In most areas, $25,000 covers a traditional funeral and burial comfortably with real
          room left over — which is exactly why families at this tier are so often planning
          beyond just the service: a lingering medical bill, a credit card balance, a car payment,
          or simply a cushion so no family member ends up quietly absorbing whatever&apos;s left
          once the funeral home has been paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Moving from covering the funeral to covering what comes after
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At{" "}
          <Link href="/final-expense-insurance-cost/10000" className="text-harbor-mid underline">
            $10,000
          </Link>{" "}
          and{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>
          , the service itself is usually the main focus. By $25,000, the conversation gently
          shifts toward the weeks that follow — bills that keep arriving, a lease or mortgage
          payment due before an estate settles, and things of that nature. Nobody draws a hard
          line here on purpose; it&apos;s simply a pattern in how families describe landing on
          this particular number.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually shapes your price at $25,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The same factors that set your price at every other amount apply here too:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the only way to see what $25,000 in coverage would genuinely cost based
          on your own age, health, and state.
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
