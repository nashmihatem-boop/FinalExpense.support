import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for Your Spouse, Gently Explained",
  description:
    "A caring look at why couples so often cover each other, who applies, how beneficiaries typically work, and how to get started together.",
  openGraph: { title: "Final Expense Insurance for Your Spouse, Gently Explained", description: "A caring look at why couples so often cover each other, who applies, how beneficiaries typically work, and how to get started together." },

  twitter: { title: "Final Expense Insurance for Your Spouse, Gently Explained", description: "A caring look at why couples so often cover each other, who applies, how beneficiaries typically work, and how to get started together." },
};

export default function SpousePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Spouse
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for your spouse, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Of every relationship covered on this site, a spouse is genuinely the simplest. You
          share a home, you likely share bills, and you almost certainly share whatever
          consequences follow if either of you passes without coverage in place. Here&apos;s how
          couples tend to approach it together.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why couples care for each other this way
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          After building a life together, a passing isn&apos;t only a loss — it&apos;s also a
          bill, and often one that arrives during an already painful stretch. Covering each other
          has less to do with expecting tragedy and more to do with a simple promise: neither of
          you will ever have to sort out money while also grieving. It&apos;s also just gently
          practical — most couples already review their finances side by side, so final expense
          coverage tends to slot naturally into that same conversation rather than becoming its
          own separate project.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who applies, and who owns each policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A spouse is about the clearest picture of &quot;insurable interest&quot; that exists —
          the shared financial and emotional stake is simply automatic, so there&apos;s rarely any
          question about one spouse buying coverage on the other. The more genuinely practical
          question is how you&apos;d like to structure it. Most couples simply take out two
          separate policies, one on each life, with each spouse serving as their own applicant and
          insured. Some couples instead have one spouse own a policy insuring the other — helpful
          when one of you naturally handles the household&apos;s paperwork and would rather keep
          that responsibility in one place. Both approaches are common; it comes down to
          preference, not any hard rule.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Gently setting up your beneficiary
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most spouses simply name each other as primary beneficiary, which keeps things wonderfully
          simple: the surviving spouse receives the death benefit directly and can use it for the
          funeral, or for anything else that comes up in that difficult season. It&apos;s worth
          also naming a contingent beneficiary — often an adult child — in case the primary
          beneficiary passes first or the two of you were to pass together. Life shifts over time,
          whether through divorce, a new marriage, or simply wanting to add someone, so
          beneficiaries can typically be updated whenever needed — it&apos;s worth gently
          revisiting the designation after any major life change rather than assuming it stays
          fixed forever.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Applying together, but underwritten separately
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Even when a couple decides together to get covered, the underwriting still happens one
          person at a time — your health, age, and habits are each evaluated on their own, so
          it&apos;s completely normal for one spouse to land a different rate or outcome than the
          other. Please don&apos;t let mismatched results discourage you; it reflects nothing more
          than two separate health histories. If one of you is navigating a health condition that
          complicates things, our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          gently covers how that&apos;s typically handled.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
