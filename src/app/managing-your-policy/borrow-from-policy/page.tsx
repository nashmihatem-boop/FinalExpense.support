import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Borrowing Against Your Family's Policy",
  description:
    "A gentle explanation of how a policy loan against cash value works for a whole life policy, and what an unpaid loan can mean for your family's death benefit.",
  openGraph: { title: "Borrowing Against Your Family's Policy", description: "A gentle explanation of how a policy loan against cash value works for a whole life policy, and what an unpaid loan can mean for your family's death benefit." },

  twitter: { title: "Borrowing Against Your Family's Policy", description: "A gentle explanation of how a policy loan against cash value works for a whole life policy, and what an unpaid loan can mean for your family's death benefit." },
};

export default function BorrowFromPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Borrowing Against Your Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Borrowing against your family&apos;s policy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Because final expense policies are typically whole life insurance, they quietly build
          cash value alongside the death benefit over time. If your policy&apos;s been active for
          a while, borrowing against that value is usually possible — though it works quite
          differently from a bank loan, and it&apos;s worth understanding gently before you lean
          on it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What that cash value actually is
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cash value is a separate pool of money that grows slowly inside a whole life policy —
          it&apos;s not the death benefit, and it doesn&apos;t exist on day one. It builds a
          little at a time as premiums are paid, usually picking up pace the longer a policy has
          been in force. You can only borrow what&apos;s actually accumulated, not the full
          coverage amount, so a newer policy may not have much — or anything — ready to borrow
          against yet.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the loan itself tends to work
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since you&apos;re borrowing against money that&apos;s already your family&apos;s own,
          there&apos;s usually no credit check or approval process the way a bank loan requires.
          Interest builds on whatever you borrow, at a rate your carrier sets, and there&apos;s
          typically no fixed monthly repayment schedule — you can often pay it back on your own
          timeline, or not at all. That flexibility is a real comfort, though it comes with one
          gentle tradeoff worth knowing about.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What an unpaid loan means for the family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Any loan balance, along with the interest it&apos;s gathered, is generally subtracted
          from the death benefit whenever a claim is finally paid — so an unpaid loan quietly
          lowers what your family ultimately receives. If the balance is ever allowed to grow
          large enough to catch up with the policy&apos;s total cash value, the policy can lapse
          entirely, ending coverage. That&apos;s the main reason to treat a policy loan seriously,
          not as money with no strings attached.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Before you borrow</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Ask your carrier for your current cash value, the loan&apos;s interest rate, how that
            interest builds over time, and exactly what an unpaid balance would do to your death
            benefit if it were never repaid. Your policy&apos;s most recent in-force illustration
            or annual statement usually has the real numbers for your specific policy.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
