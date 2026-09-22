import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$20,000 Final Expense Insurance, Gently Explained",
  description:
    "A caring look at why $20,000 is one of the amounts families choose most often, what it covers, and what shapes the price.",
  openGraph: { title: "$20,000 Final Expense Insurance, Gently Explained", description: "A caring look at why $20,000 is one of the amounts families choose most often, what it covers, and what shapes the price." },

  twitter: { title: "$20,000 Final Expense Insurance, Gently Explained", description: "A caring look at why $20,000 is one of the amounts families choose most often, what it covers, and what shapes the price." },
};

export default function TwentyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $20,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $20,000 final expense insurance, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Of all the amounts we walk families through, $20,000 comes up again and again — the
          figure a lot of people settle on once they&apos;ve thought carefully about what a full
          funeral genuinely involves. What it costs you is entirely individual; what it&apos;s
          meant to cover stays remarkably steady.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            We genuinely can&apos;t quote a $20,000 rate here, since premiums are worked out per
            applicant rather than off a shared table. What stays consistent is that this is one of
            the amounts families lean toward most, and gently, why.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $20,000 tends to cover for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          In many parts of the country, $20,000 comfortably handles a full traditional funeral and
          burial — the service itself, a casket, a vault, a plot, and a headstone — with a little
          left over for the smaller costs that quietly gather around it: an obituary, flowers, a
          gathering afterward, or travel for family arriving from out of town. Real costs shift a
          fair amount by region and by the specific choices made, so please treat this as a
          gentle, general pattern rather than a promise for your exact area — for current numbers,{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">
            the National Funeral Directors Association
          </a>{" "}
          publishes national medians every year.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why so many families land here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Picture a scale with two ends: on one side, stretching a smaller amount to cover
          services your family didn&apos;t really want to trim; on the other, paying every month
          for coverage sized closer to{" "}
          <Link href="/final-expense-insurance-cost/40000" className="text-harbor-mid underline">
            $40,000
          </Link>{" "}
          when you don&apos;t need quite that much. $20,000 tends to sit gently in the sweet spot
          between those two — the whole traditional service accounted for, without paying extra
          for room you&apos;ll never use. It shows up so often precisely because of that balance,
          not because anyone&apos;s decided it&apos;s the universally correct number. Please let
          your own family&apos;s wishes drive the figure, not simply what&apos;s statistically
          popular.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually shapes your price at $20,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A widely chosen amount still isn&apos;t priced any differently behind the scenes — the
          same handful of factors quietly set the cost here as they do at every other tier:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the only way to see what $20,000 in coverage would genuinely cost based
          on your own details, with no obligation attached.
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
