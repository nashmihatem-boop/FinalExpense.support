import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$10,000 Final Expense Insurance, Gently Explained",
  description:
    "A caring look at what a $10,000 final expense policy typically covers for your family, cremation versus burial, and what shapes the price.",
  openGraph: { title: "$10,000 Final Expense Insurance, Gently Explained", description: "A caring look at what a $10,000 final expense policy typically covers for your family, cremation versus burial, and what shapes the price." },

  twitter: { title: "$10,000 Final Expense Insurance, Gently Explained", description: "A caring look at what a $10,000 final expense policy typically covers for your family, cremation versus burial, and what shapes the price." },
};

export default function TenThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $10,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $10,000 final expense insurance, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Ask most people what a final expense policy looks like, and $10,000 is often the number
          that comes to mind first — a gentle baseline many families land on. We can&apos;t print
          a fixed rate on this page, since that&apos;s worked out for you individually, but what
          this amount is typically meant to cover stays fairly steady from family to family.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Nobody can price a $10,000 policy off a shared table — it&apos;s worked out person by
            person. The part that stays consistent is the role it plays: a modest cremation or a
            simple service, with a bit of breathing room left over.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $10,000 typically covers for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For a simple, no-frills cremation or a direct service, $10,000 is often genuinely
          enough — and sometimes leaves a little extra for smaller lingering costs, like a final
          credit card statement, a last medical bill, or closing out a utility account. Where it
          tends to feel tight is a full traditional burial with a casket, vault, and cemetery
          plot, since those costs stack up faster than a cremation-centered plan. If your family
          is picturing a full service with a viewing and burial, it&apos;s worth gently comparing
          this against{" "}
          <Link href="/final-expense-insurance-cost/20000" className="text-harbor-mid underline">
            $20,000
          </Link>{" "}
          before deciding.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Cremation and burial, and why the difference matters here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation tends to be the gentler option on cost between the two most common choices,
          which is part of why $10,000 sits more comfortably with a cremation-focused plan than a
          burial-centered one. Real costs shift quite a bit by funeral home, by region, and by the
          specific choices made along the way — a viewing beforehand, an urn, or a gathering
          afterward all add to the total. Rather than guess at a number we can&apos;t verify, we&apos;d
          gently point you to{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">
            the National Funeral Directors Association
          </a>
          , which publishes real national median data each year for families doing their own
          research before choosing a coverage amount.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually shapes your price at $10,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At $10,000 or any other amount, your price ultimately comes down to the same handful of
          things:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is genuinely the only way to see what $10,000 in coverage would cost based
          on your own age, health, and state — with no pressure to move forward afterward.
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
