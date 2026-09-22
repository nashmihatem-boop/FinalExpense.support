import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable, CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance, Gently Explained",
  description:
    "A caring, plain-language walkthrough of how final expense (burial) insurance works, the two main policy types, what shapes your premium, and how to apply.",
  openGraph: { title: "Final Expense Insurance, Gently Explained", description: "A caring, plain-language walkthrough of how final expense (burial) insurance works, the two main policy types, what shapes your premium, and how to apply." },

  twitter: { title: "Final Expense Insurance, Gently Explained", description: "A caring, plain-language walkthrough of how final expense (burial) insurance works, the two main policy types, what shapes your premium, and how to apply." },
};

export default function FinalExpenseInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Final Expense Insurance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Sometimes called burial insurance or funeral insurance, this is a small whole life
          policy built around one caring purpose: keeping your family from ever having to cover
          your funeral, burial, or final medical bills out of their own pocket.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Key takeaways</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• The cash benefit goes straight to whoever you name — never to a funeral home directly.</li>
            <li>• It&apos;s whole life coverage, so once you&apos;re approved, your rate is locked in and coverage stays as long as you keep paying.</li>
            <li>• Most families qualify without any medical exam, and many health conditions won&apos;t stand in the way.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          How it gently works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You choose a coverage amount that fits your family&apos;s needs — typically enough for a
          funeral, burial or cremation, plus whatever medical or credit card debt might linger.
          Once approved, a fixed monthly premium is all you owe for the rest of the policy&apos;s
          life. When you pass, the insurer sends your named beneficiary the full death benefit in
          cash, tax-free, usually within days of the claim. Your family decides how to use it —
          funeral costs, other bills, anything at all. Unlike a prepayment plan with a funeral
          home, this money was never tied to one specific provider or package.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Two main paths to choose between
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every policy falls into one of two categories below. Neither is gently
          &quot;better&quot; on its own — the right fit depends on your health, and how quickly
          your family needs full coverage in place.
        </p>

        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Real numbers shift by insurer, state, and your own details — a licensed agent can tell
          you exactly what you&apos;d qualify for and what it would cost, at no charge to you.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Day-one coverage, or a gentle waiting period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is genuinely the biggest difference between the two paths above. Simplified-issue
          coverage, once your health answers clear, typically starts &quot;day one&quot; — pass
          away from any covered cause after your first payment goes through, and your family
          receives the full benefit. Guaranteed issue, since it skips health questions altogether,
          usually carries a two-year waiting period: a natural-cause passing during those first
          two years typically means your premiums are refunded rather than the full benefit paid
          (an accidental death is usually still covered right away either way). Once that window
          passes, your family has full coverage from then on.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What gently shapes your premium
        </h2>
        <CostFactorsGrid />

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          How to apply
        </h2>
        <ol className="mt-6 space-y-5">
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">1</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Share the basics with us.</strong> Your age, general
              health, coverage amount, and how to reach you — that&apos;s the short quiz on this
              site, and it takes about two gentle minutes.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">2</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">A licensed agent reaches out warmly.</strong>{" "}
              They&apos;ll compare options across our carrier partners and walk you through
              exactly what you qualify for — price, coverage amount, and whether a waiting period
              would apply.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-harbor font-display text-sm font-extrabold text-canvas">3</span>
            <p className="text-base leading-relaxed text-charcoal/80">
              <strong className="text-harbor">Apply, only if it feels right.</strong> If a policy
              fits your family, you can complete everything on that same call — most
              simplified-issue applications need only your health answers and beneficiary
              details. There&apos;s never any obligation to move forward.
            </p>
          </li>
        </ol>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">
            Why we compare several insurers instead of pushing one
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            FinalExpense.support focuses specifically on life insurance and final expense
            coverage for families who want the peace of knowing funeral costs will never fall on
            the people they love. We partner with multiple insurers so we can gently compare
            dozens of plans side by side and find the right value for each family, rather than
            steering everyone toward a single company&apos;s policy regardless of fit.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            How we&apos;re paid: when your family enrolls in a policy through one of our licensed
            agent partners, that insurer compensates the agency directly. That&apos;s standard
            across this industry, and it never changes your premium or costs you anything extra —
            a quote and a conversation with an agent are always free.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Have questions first? See our{" "}
            <Link href="/#faq" className="font-semibold text-harbor-mid hover:underline">
              FAQ
            </Link>{" "}
            or the plain-language{" "}
            <Link href="/tcpa-consent" className="font-semibold text-harbor-mid hover:underline">
              details on how we contact you
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
