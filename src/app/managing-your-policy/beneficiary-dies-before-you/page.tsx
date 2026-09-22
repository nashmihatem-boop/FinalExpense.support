import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "When a Beneficiary Passes Away Before You Do",
  description:
    "A gentle explanation of what happens to your family's policy if a named beneficiary dies first, and why naming a backup matters more than most people realize.",
  openGraph: { title: "When a Beneficiary Passes Away Before You Do", description: "A gentle explanation of what happens to your family's policy if a named beneficiary dies first, and why naming a backup matters more than most people realize." },

  twitter: { title: "When a Beneficiary Passes Away Before You Do", description: "A gentle explanation of what happens to your family's policy if a named beneficiary dies first, and why naming a backup matters more than most people realize." },
};

export default function BeneficiaryDiesBeforeYouPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / If Your Beneficiary Dies Before You
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          When a beneficiary passes away before you do
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This comes up more than families expect, especially on a policy that&apos;s been in
          place for many years — a spouse, sibling, or close friend named as beneficiary passes
          on first, and nobody ever goes back to update the paperwork. Here&apos;s what that
          gently means for your policy, and the simple step that fixes it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A policy won&apos;t update itself
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your carrier won&apos;t automatically remove or swap out a beneficiary who has passed
          away. The policy keeps legally listing that person until someone actively changes it, no
          matter how many years go by. Nothing about your family&apos;s coverage is affected in
          the meantime — the issue only comes up later, once a claim is actually filed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What tends to happen if it&apos;s left as is
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If a contingent (backup) beneficiary was named at the time of application, the death
          benefit usually passes along to them instead, without much fuss. If no contingent
          beneficiary was named, and the primary beneficiary has already passed, the benefit often
          ends up going to the estate rather than to a specific loved one. That typically means
          probate — a court process that can take longer, becomes part of the public record, and
          in some cases can be reached by the estate&apos;s creditors before family ever sees it.
          The exact outcome depends on the policy and state, so it&apos;s worth a quick,
          reassuring call to the carrier rather than assuming.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why naming a backup is such a kindness
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Naming a contingent beneficiary costs nothing and takes only a few minutes, but it gives
          the policy a clear second choice if the first one is no longer living. It&apos;s one of
          the simplest, most caring things a family can do to keep the payout headed toward an
          actual chosen person, instead of defaulting to the estate.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A gentle way to check</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Call the carrier and simply ask who&apos;s currently listed as primary and contingent
            beneficiary. There&apos;s no cost and no downside to asking, even if everything is
            probably already fine. If it isn&apos;t, updating it is a short, simple form — see{" "}
            <Link href="/managing-your-policy/change-beneficiary" className="text-harbor-mid underline">
              how to change your beneficiary
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other moments worth a gentle check
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A beneficiary&apos;s passing is only one reason things can fall out of date. A divorce,
          a new marriage, a new grandchild, or simply growing apart from the person originally
          named are all common, human reasons families revisit who&apos;s listed. If it&apos;s
          been a few years since anyone looked, it&apos;s a lovely, low-effort thing to confirm.
        </p>

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
