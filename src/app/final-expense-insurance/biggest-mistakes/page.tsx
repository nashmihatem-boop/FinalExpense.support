import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Gentle Mistakes to Avoid When Shopping for Final Expense Insurance",
  description:
    "Common, easily avoided mistakes families make when shopping for final expense insurance, from comparing only one insurer to letting a policy quietly lapse.",
  openGraph: { title: "Gentle Mistakes to Avoid When Shopping for Final Expense Insurance", description: "Common, easily avoided mistakes families make when shopping for final expense insurance, from comparing only one insurer to letting a policy quietly lapse." },

  twitter: { title: "Gentle Mistakes to Avoid When Shopping for Final Expense Insurance", description: "Common, easily avoided mistakes families make when shopping for final expense insurance, from comparing only one insurer to letting a policy quietly lapse." },
};

export default function BiggestMistakesPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Biggest Mistakes
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Gentle mistakes worth avoiding when shopping for final expense insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Every one of these is easy to sidestep once someone points it out. None require any
          special expertise to avoid — just a little awareness ahead of time. Here are the four
          we see come up for families again and again.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Stopping after a single quote
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          By far the most common misstep on this list is settling for the first insurer or agent
          you happen to speak with. Each insurer writes its own health questions, sets its own
          look-back window, and prices things its own way — meaning your family could hear a
          genuinely different answer from a second company than from the first.{" "}
          <Link href="/pre-existing-conditions#why-carriers-differ" className="text-harbor-mid underline">
            Read why the same health history can land two different answers at two different
            insurers
          </Link>{" "}
          before treating the first offer as your only one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Choosing guaranteed issue when simplified issue was quietly available
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed issue skips health questions entirely, but that convenience comes at a real
          cost — a higher price for identical coverage, plus a waiting period. Some families land
          here simply by assumption, or because it&apos;s what got offered first, without ever
          finding out whether simplified issue — usually gentler on price and active from day one
          — was genuinely within reach the whole time.
        </p>
        <PolicyTypesTable />

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Shading the truth on health questions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Leaving out a condition, or softening it, to land a better rate or dodge a decline can
          feel like a small, harmless choice in the moment — but it quietly sets up a real risk
          later. Should a claim arrive during the contestability period — the early stretch when
          an insurer can still compare your original answers against medical and prescription
          records — any mismatch found there can mean a denied claim or a reduced payout, arriving
          at precisely the moment your family needs that money most. Answering honestly from the
          start is what actually protects the coverage you&apos;re paying for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Letting one missed payment quietly end coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Missing a single premium payment doesn&apos;t have to mean losing everything you&apos;ve
          built. Every policy includes a grace period — commonly around 30 days, though the exact
          window shifts by insurer and state — to catch up before anything actually lapses. The
          real mistake here isn&apos;t the missed payment itself; it&apos;s quietly assuming the
          coverage is already gone and never reaching out to the insurer or agent in time to fix
          it. Keeping your payment details current, and calling right away the moment something
          fails, protects coverage your family has already invested in.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/buy-online" className="font-semibold text-harbor-mid hover:underline">
              What actually happens after you get a quote →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
