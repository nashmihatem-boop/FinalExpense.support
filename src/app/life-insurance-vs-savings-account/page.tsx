import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. a Savings Account, Gently Compared",
  description:
    "A savings account only holds what you've deposited. A life insurance policy can pay its full amount from day one. A caring look at how to think about both.",
  openGraph: { title: "Life Insurance vs. a Savings Account, Gently Compared", description: "A savings account only holds what you've deposited. A life insurance policy can pay its full amount from day one. A caring look at how to think about both." },

  twitter: { title: "Life Insurance vs. a Savings Account, Gently Compared", description: "A savings account only holds what you've deposited. A life insurance policy can pay its full amount from day one. A caring look at how to think about both." },
};

export default function LifeInsuranceVsSavingsAccountPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. a savings account, gently compared
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Both can gently leave money behind for people you love, yet they work in genuinely
          different ways underneath. The real question isn&apos;t which one is
          &quot;better&quot; — it&apos;s understanding what each was actually built to do.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A savings account only ever holds what you&apos;ve gently added
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Here&apos;s the simplest way to picture it: a savings balance is exactly the sum of
          everything you&apos;ve deposited, plus whatever modest interest it has quietly earned.
          There&apos;s no shortcut around this — a small amount saved so far means a small amount
          sitting there right now. It only grows as quickly as you&apos;re able to keep feeding
          it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A life insurance policy can pay its full amount from day one
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Life insurance runs on entirely different math. Once your coverage is active — and past
          any waiting period that applies — it can pay its complete face amount to your
          beneficiary, even after just one single premium payment. That&apos;s genuinely the core
          trade being made here: a small, steady payment stands in for a much larger, guaranteed
          amount, available right away once the policy is active, in a way a savings balance
          simply can&apos;t match early on.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          But they were gently built for different jobs
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A savings account stays liquid and unrestricted — reachable any time, for any reason at
          all, no questions asked. A life insurance death benefit exists specifically to pay out
          upon death, to whoever you&apos;ve named; it isn&apos;t something to casually dip into
          for a vacation or a surprise repair the way savings can be. Whole life and final expense
          policies do quietly build their own separate{" "}
          <Link href="/cash-value-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            cash value
          </Link>{" "}
          you can access while alive, but that&apos;s a distinct feature from the death benefit
          itself. Neither one is more flexible than the other across the board — they&apos;re
          simply flexible in different ways.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A gentle way to think about having both
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most families are genuinely well served by holding both, rather than picking one over
          the other. A savings account is the right tool for everyday, accessible flexibility — an
          emergency fund, a near-term goal, anything you might need on short notice. Life insurance
          is the right tool for making sure a specific, guaranteed amount reaches your family the
          moment it&apos;s needed, whether that&apos;s one month or twenty years into the policy.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
