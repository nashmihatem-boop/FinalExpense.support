import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CostFactorsGrid } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "What Does Final Expense Insurance Cost? A Gentle Breakdown",
  description:
    "A caring walk through what actually shapes your final expense premium, and what different coverage amounts from $5,000 to $40,000+ are typically meant to cover.",
  openGraph: { title: "What Does Final Expense Insurance Cost? A Gentle Breakdown", description: "A caring walk through what actually shapes your final expense premium, and what different coverage amounts from $5,000 to $40,000+ are typically meant to cover." },

  twitter: { title: "What Does Final Expense Insurance Cost? A Gentle Breakdown", description: "A caring walk through what actually shapes your final expense premium, and what different coverage amounts from $5,000 to $40,000+ are typically meant to cover." },
};

const COST_TIERS = [
  {
    amount: "$5,000",
    href: "/final-expense-insurance-cost/5000",
    blurb: "The gentlest amount typically offered — more often a supplement sitting alongside other savings than a full funeral budget by itself.",
  },
  {
    amount: "$10,000",
    href: "/final-expense-insurance-cost/10000",
    blurb: "A familiar starting point for many families, often enough for a simple cremation or modest service with a little room to spare.",
  },
  {
    amount: "$15,000",
    href: "/final-expense-insurance-cost/15000",
    blurb: "A caring step up from the basics — space for a fuller service or a modest burial, short of a full traditional funeral budget.",
  },
  {
    amount: "$20,000",
    href: "/final-expense-insurance-cost/20000",
    blurb: "One of the amounts families choose most often — usually enough for a traditional funeral and burial with a gentle cushion left over.",
  },
  {
    amount: "$25,000",
    href: "/final-expense-insurance-cost/25000",
    blurb: "Reaches past the funeral itself, leaving room for medical bills, remaining debts, or other loose ends your family shouldn't have to absorb.",
  },
  {
    amount: "$30,000",
    href: "/final-expense-insurance-cost/30000",
    blurb: "A comfortable cushion tier — a full traditional funeral funded without hard choices, plus something meaningful left behind.",
  },
  {
    amount: "$40,000",
    href: "/final-expense-insurance-cost/40000",
    blurb: "Near the upper edge of what's usually called final expense — often meant to leave your family something more than just a covered funeral.",
  },
];

export default function FinalExpenseInsuranceCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Cost by Coverage Amount
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What does final expense insurance cost, gently explained?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          We won&apos;t pretend there&apos;s a single price we could hand you on this page —
          every final expense policy is underwritten one person at a time, so the only number
          that will ever be truly accurate is the one a carrier offers after a short, gentle
          application. What we can offer honestly instead is a clear picture of what actually
          shapes that premium, and what each coverage amount tends to be used for, so your family
          can settle on a target that feels right before anyone picks up the phone.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            Why you won&apos;t see a dollar figure here
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A believable sample rate would need to assume your age, your gender, your health, and
            your state all at once — and moving even one of those assumptions changes the real
            number. Publishing something that doesn&apos;t genuinely apply to your family would
            do more harm than good. For a starting point on actual funeral and cremation costs,{" "}
            <a href="https://nfda.org" className="text-harbor-mid underline">
              the National Funeral Directors Association
            </a>{" "}
            releases national median figures every year. When it comes to what coverage costs
            you specifically, though, a free quote is the only number worth trusting.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What gently shapes your premium
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every carrier is quietly weighing some version of the same short list of factors.
          There&apos;s nothing hidden about any of them, and none change depending on which
          company your family ends up choosing:
        </p>
        <CostFactorsGrid />

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Coverage amount: the one factor that's actually yours to choose
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your age, health, and gender are simply where they are by the time you sit down to
          apply — there&apos;s no changing those. Coverage amount is different, though: it&apos;s
          a decision you get to make, and it moves your premium in a direct, predictable way —
          more coverage naturally means more cost, everything else being equal. That reframes the
          real question away from &quot;what&apos;s the cheapest policy available&quot; and
          toward something gentler: &quot;what amount will actually do right by my family.&quot;
          The sections ahead walk through that amount by amount.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Explore cost by coverage amount
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every amount below is one our own quote process walks families through. Choose whichever
          feels closest to what you have in mind, and we&apos;ll show you what it&apos;s typically
          used for.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {COST_TIERS.map((tier) => (
            <Link
              key={tier.href}
              href={tier.href}
              className="rounded-xl border border-mist bg-canvas-raised p-5 transition-colors hover:border-harbor-mid/50"
            >
              <p className="font-display text-lg font-extrabold text-harbor">{tier.amount}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">{tier.blurb}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
