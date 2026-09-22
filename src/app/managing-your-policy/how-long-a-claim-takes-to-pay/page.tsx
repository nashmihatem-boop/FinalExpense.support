import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How Long Your Family's Claim Usually Takes",
  description:
    "A caring look at the main factors that speed up or slow down a death benefit claim, and how your family can gently help it move along.",
  openGraph: { title: "How Long Your Family's Claim Usually Takes", description: "A caring look at the main factors that speed up or slow down a death benefit claim, and how your family can gently help it move along." },

  twitter: { title: "How Long Your Family's Claim Usually Takes", description: "A caring look at the main factors that speed up or slow down a death benefit claim, and how your family can gently help it move along." },
};

export default function HowLongAClaimTakesToPayPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / How Long a Claim Takes to Pay
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How long your family&apos;s claim usually takes
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          There&apos;s no single honest number here — timelines vary by carrier and by the
          specifics of the claim itself. What&apos;s more helpful is understanding the handful of
          things that genuinely move the timeline, so your family knows what&apos;s normal and
          what might be worth a gentle follow-up call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why there isn&apos;t one fixed answer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every carrier sets and shares its own claims-processing timeline, and a straightforward
          claim naturally moves faster than one with a complication. Rather than relying on a
          general figure, it&apos;s worth asking your specific carrier what their typical timeline
          looks like once they&apos;ve received a complete claim — that answer will always be more
          accurate than any industry average.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Complete paperwork makes the biggest difference
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The single most common reason an otherwise simple claim takes longer than it should is
          incomplete paperwork — a missing signature, an uncertified death certificate, or a form
          left partly blank. Gently double-checking everything before submitting is the one part
          of this process a beneficiary can fully control.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The contestability period can add a little time
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If a death happens within a policy&apos;s first two years, carriers typically give the
          claim a closer look to confirm the original application was accurate — this is standard
          practice, not a sign anything is wrong. See our{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            guide to the contestability period
          </Link>{" "}
          for more on how that review gently works.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Questions about cause of death
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An unclear or unusual cause of death — one still pending an autopsy or official
          investigation, for instance — can extend the timeline while the carrier waits on
          official records from a coroner or medical examiner. This is outside anyone&apos;s
          control and simply takes the time it takes.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">What helps it move along</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Order a few extra certified copies of the death certificate up front, respond promptly
            to anything the carrier asks for, keep copies of everything submitted, and follow up
            gently now and then rather than assuming silence means a problem.
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
