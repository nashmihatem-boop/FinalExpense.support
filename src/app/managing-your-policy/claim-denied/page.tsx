import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "If Your Family's Claim Comes Back Denied",
  description:
    "A caring look at why a death benefit claim sometimes gets denied, and every gentle option your family has from there, from appeal to a state complaint.",
  openGraph: { title: "If Your Family's Claim Comes Back Denied", description: "A caring look at why a death benefit claim sometimes gets denied, and every gentle option your family has from there, from appeal to a state complaint." },

  twitter: { title: "If Your Family's Claim Comes Back Denied", description: "A caring look at why a death benefit claim sometimes gets denied, and every gentle option your family has from there, from appeal to a state complaint." },
};

export default function ClaimDeniedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / If a Claim Is Denied
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          If your family&apos;s claim comes back denied
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A denial is genuinely stressful, especially layered on top of everything else your
          family is carrying — but it isn&apos;t necessarily the end of the road. Here&apos;s why
          this tends to happen, and the caring, concrete options still available to you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why denials tend to happen
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A handful of patterns explain most denials. Misrepresentation on the original
          application — a health detail that wasn&apos;t disclosed accurately — is one, and
          it&apos;s usually only raised during the policy&apos;s{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period
          </Link>
          . A lapsed policy is another — if payments stopped and the{" "}
          <Link href="/managing-your-policy/missed-premium-payment" className="text-harbor-mid underline">
            grace period
          </Link>{" "}
          passed without a payment or reinstatement, coverage may not have been active at the time
          of death. A death from natural causes during a guaranteed-acceptance waiting period is a
          third — though this usually means a reduced, modified payout rather than a full denial,
          since that&apos;s simply how those policies are built. Less often, a denial comes from a
          specific excluded cause of death.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Start by asking for the reason in writing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers are generally expected to give a specific written reason for a denial. If your
          family only received a phone call or a vague explanation, gently ask for it in
          writing — the exact stated reason shapes what to do next.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Your family can appeal
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most carriers have an internal appeals process. If you have documentation that speaks
          directly to their stated reason — medical records clarifying a diagnosis timeline, or
          proof a payment actually went through — submitting it as part of a formal appeal is the
          first, most direct step.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Bring in your state insurance department
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state has an insurance regulator whose job is to handle exactly this kind of
          complaint. They can look into whether the denial followed proper process and, in some
          cases, help push toward a resolution. Filing a complaint is free.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          For larger disputes, consider an attorney
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For a significant benefit, or a denial that seems to contradict what the policy actually
          says, an attorney who handles insurance disputes can review the language and denial
          letter and advise on whether it&apos;s worth contesting further. Many offer a free
          first consultation, so it costs nothing to ask.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Keep everything together</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The original application, the policy, the denial letter, and every note from every
            conversation with the carrier all strengthen an appeal. Hold on to dated copies of
            everything, including notes from phone calls.
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
