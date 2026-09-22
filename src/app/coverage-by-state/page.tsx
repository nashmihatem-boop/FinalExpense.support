import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { US_STATES } from "@/lib/us-states";

export const metadata: Metadata = {
  title: "Final Expense Insurance Coverage, State by State",
  description:
    "Final expense insurance is gently regulated one state at a time. Pick your state to see how coverage works where your family lives, and get a free quote.",
  openGraph: { title: "Final Expense Insurance Coverage, State by State", description: "Final expense insurance is gently regulated one state at a time. Pick your state to see how coverage works where your family lives, and get a free quote." },

  twitter: { title: "Final Expense Insurance Coverage, State by State", description: "Final expense insurance is gently regulated one state at a time. Pick your state to see how coverage works where your family lives, and get a free quote." },
};

const FAQS = [
  {
    q: "Does this coverage cost more in some states than others?",
    a: "Insurance is regulated state by state, so the specific carriers and plans available to you do shift a little depending on where you live. Within your own state, though, your premium mostly comes down to your age, gender, tobacco use, health, and the coverage amount you choose — not your ZIP code.",
  },
  {
    q: "What happens to my policy if my family moves?",
    a: "Nothing changes. This is a whole life policy tied to you personally, not your address — once it's active, your coverage and premium stay exactly the same no matter which state you move to afterward.",
  },
  {
    q: "Is there really a difference between final expense and burial insurance?",
    a: "Gently, no — they're simply different names for the same thing. \"Burial insurance,\" \"funeral insurance,\" and \"final expense insurance\" all describe the same small whole life policy built around covering end-of-life costs.",
  },
  {
    q: "Does my agent need to be licensed specifically in my state?",
    a: "Yes — agents must hold a license in the exact state where you live to sell you a policy there. When you request a quote, we gently match you with an agent and carriers genuinely licensed to do business in your state.",
  },
];

export default function CoverageByStatePage() {
  return (
    <div className="bg-canvas">
      <section className="bg-gradient-to-r from-harbor-deep via-harbor to-harbor-deep">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <h1 className="font-display text-3xl font-extrabold text-canvas sm:text-4xl">
            Final expense insurance, wherever your family calls home
          </h1>
          <p className="mt-4 text-lg text-canvas/75">
            Since every state quietly writes its own rules for who can sell what, we&apos;ve
            gently organized things by location. Find your family&apos;s state below.
          </p>
          <div className="mt-8 flex justify-center">
            <Button as="link" href="/get-quote" size="lg">
              See your rate now
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-2xl border border-mist bg-canvas-alt p-7">
          <p className="text-base leading-relaxed text-charcoal/80">
            No matter where your family lives, FinalExpense.support is here to gently walk you
            through final expense and burial coverage from several licensed insurers at once.
            Find your own state below to see what applies to you, and we&apos;ll connect you with
            an agent who genuinely holds a license there.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
            Nobody here works for just one insurer. That independence is exactly what lets your
            family compare genuine options, gently, without ever feeling pushed toward enrolling.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Choose your state
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {US_STATES.map((s) => (
            <Link
              key={s.code}
              href={`/coverage-by-state/${s.code.toLowerCase()}`}
              className="flex items-center gap-3 rounded-xl border border-mist bg-canvas-raised px-4 py-3.5 transition-colors hover:border-harbor-mid/50"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-harbor font-display text-xs font-extrabold text-brass">
                {s.code}
              </span>
              <span className="text-sm font-semibold text-charcoal">{s.name}</span>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl font-extrabold text-harbor">
          Questions families ask us often
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-xl border border-mist bg-canvas-raised px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-harbor marker:content-none">
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-harbor-mid transition-transform duration-200 group-open:-rotate-180">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
