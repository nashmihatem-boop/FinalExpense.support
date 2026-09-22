import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "$40,000 Final Expense Insurance, Gently Explained",
  description:
    "A caring look at what $40,000-plus final expense coverage is meant to do for your family, and where it starts blending into whole life insurance.",
  openGraph: { title: "$40,000 Final Expense Insurance, Gently Explained", description: "A caring look at what $40,000-plus final expense coverage is meant to do for your family, and where it starts blending into whole life insurance." },

  twitter: { title: "$40,000 Final Expense Insurance, Gently Explained", description: "A caring look at what $40,000-plus final expense coverage is meant to do for your family, and where it starts blending into whole life insurance." },
};

export default function FortyThousandCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-cost" className="hover:text-harbor">Cost by Coverage Amount</Link> / $40,000
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          $40,000 final expense insurance, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          $40,000 sits near the top edge of what&apos;s usually marketed under the &quot;final
          expense&quot; label. Go beyond it, and coverage starts feeling less like a
          funeral-specific policy and more like a small whole life plan that simply happens to
          cover one too.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            The honest short answer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A $40,000 premium is set per applicant, same as every other amount. What&apos;s worth
            knowing gently upfront: at this level, it&apos;s worth pausing to confirm whether a
            final-expense product or a standard whole life policy actually fits your family&apos;s
            goal better.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What $40,000 tends to cover for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At this amount, a traditional funeral and burial is usually funded with plenty of room
          to spare, and there&apos;s typically something real left over on top — enough to
          gently ease a surviving spouse&apos;s monthly budget, chip away at a remaining mortgage
          balance, or set a little something aside for grandchildren. At this tier, the death
          benefit is quietly doing two jobs at once: covering final expenses, and leaving a small
          legacy gift for the people you love.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          $40,000 and up: where final expense gently blends into whole life
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no strict line the industry draws here, but coverage amounts above roughly
          this range increasingly start to look like ordinary whole life insurance — often still
          issued through the same simplified underwriting, but sized more for leaving money behind
          than specifically for funeral costs. If $50,000 or more is what you&apos;re considering,
          it&apos;s worth an honest, unhurried conversation with a licensed agent about whether a
          product labeled &quot;final expense&quot; or a standard whole life policy actually fits
          what your family is trying to do. The label matters far less than landing on the right
          policy — and if $40,000 feels like more than your family needs, it&apos;s worth comparing
          against{" "}
          <Link href="/final-expense-insurance-cost/30000" className="text-harbor-mid underline">
            $30,000
          </Link>{" "}
          too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually shapes your price at $40,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Even at the upper edge of final expense coverage, price still comes down to the same
          factors as every smaller amount:
        </p>
        <CostFactorsGrid />
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A free quote is the most direct way to find out what $40,000 in coverage — or a larger
          whole life policy, if that turns out to be the gentler fit — would actually cost your
          family.
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
