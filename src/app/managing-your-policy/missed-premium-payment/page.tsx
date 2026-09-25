import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/safe-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Missed a Payment? Here's the Gentle Truth",
  description:
    "A caring explanation of how grace periods work, what happens if a policy lapses, and what to do if your family has missed a payment.",
  openGraph: { title: "Missed a Payment? Here's the Gentle Truth", description: "A caring explanation of how grace periods work, what happens if a policy lapses, and what to do if your family has missed a payment." },

  twitter: { title: "Missed a Payment? Here's the Gentle Truth", description: "A caring explanation of how grace periods work, what happens if a policy lapses, and what to do if your family has missed a payment." },
};

export default function MissedPremiumPaymentPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Missed Premium Payment
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Missed a payment? Here&apos;s the gentle truth
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A missed payment happens to good families more often than you&apos;d think, and
          it&apos;s usually not an emergency the moment it occurs. Policies build in a cushion for
          exactly this — here&apos;s how it gently works, and what to do if it&apos;s happened to
          your family.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The grace period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most policies include a grace period that starts right after a missed due date — a
          window during which coverage generally stays fully in force even though payment
          hasn&apos;t come through yet. The exact length depends on your policy and state, so
          check your documents or gently ask your carrier for your specific window rather than
          guessing.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If a death happens during the grace period
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Coverage is generally still considered active during this window, so a claim typically
          still gets paid. In most cases the outstanding premium is simply deducted from the death
          benefit rather than causing a denial. Confirm this detail with your specific carrier,
          since it&apos;s written into your family&apos;s actual policy terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If the grace period passes without payment
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Once that window closes without payment, the policy generally lapses — coverage ends
          and premiums stop being collected. This is the outcome worth gently avoiding, since a
          lapse can mean starting over with new coverage later, often at a higher cost simply
          because of age.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If your policy has already lapsed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many carriers offer reinstatement within a certain window after a lapse, though it can
          require paying back premiums, answering new health questions, or proving insurability —
          ask your carrier directly what reinstatement would mean for your family&apos;s policy.
          If reinstatement isn&apos;t possible, or health has changed enough that it no longer
          makes sense, a new policy may be the gentler path forward.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">To help it never happen again</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Setting up autopay, keeping your payment method current after a card expires or an
            account changes, and making sure your carrier has your family&apos;s up-to-date
            mailing address and phone number all quietly reduce the odds of a payment slipping
            through unnoticed.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            If your policy lapsed and reinstatement isn&apos;t the right fit,{" "}
            <SafeLink href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              see what you qualify for →
            </SafeLink>
          </p>
          <p className="mt-3 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
