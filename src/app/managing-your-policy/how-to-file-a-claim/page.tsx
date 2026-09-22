import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Filing a Death Benefit Claim, With Care",
  description:
    "A gentle, step-by-step walkthrough for a beneficiary filing a death benefit claim, from locating the policy to submitting paperwork.",
  openGraph: { title: "Filing a Death Benefit Claim, With Care", description: "A gentle, step-by-step walkthrough for a beneficiary filing a death benefit claim, from locating the policy to submitting paperwork." },

  twitter: { title: "Filing a Death Benefit Claim, With Care", description: "A gentle, step-by-step walkthrough for a beneficiary filing a death benefit claim, from locating the policy to submitting paperwork." },
};

export default function HowToFileAClaimPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / How to File a Claim
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Filing a death benefit claim, with care
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          If you&apos;re reading this because your family has lost someone, we&apos;re truly
          sorry. This process asks more of your patience than your expertise — here are the
          general steps, laid out gently, so you know what to expect along the way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          1. Locate the policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Look for the actual policy document, a declarations page, or a recent premium
          statement — these usually list the carrier&apos;s name and a policy number, which
          speeds everything along. If you can&apos;t find any of that, our{" "}
          <Link href="/managing-your-policy/find-a-lost-policy" className="text-harbor-mid underline">
            guide to finding a lost policy
          </Link>{" "}
          walks through where else to gently look.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          2. Reach out to the carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Call the insurance carrier&apos;s claims department directly and let them know your
          family needs to file a death benefit claim. Having the policy number ready helps, but
          most carriers can still look things up using your loved one&apos;s name and date of
          birth if you don&apos;t have it handy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          3. Complete the claim form fully
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The carrier sends its specific claim form, by mail or as a download. It typically asks
          about the person who passed, the beneficiary&apos;s contact and identification details,
          and how you&apos;d like the benefit paid out. Fill it out completely — an incomplete
          form is one of the most common reasons this takes longer than it needs to.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          4. Provide a certified death certificate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers generally need a certified copy — one with an official raised seal from the
          issuing office, not a photocopy. Funeral homes typically help order these, and
          it&apos;s worth requesting several certified copies up front, since other institutions
          (banks, other policies, the estate) will often want their own original too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          5. Submit, then let the review happen
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Once everything&apos;s submitted, the carrier reviews the claim before paying it out.
          They may follow up with a few extra questions, especially if the policy is still within
          its{" "}
          <Link href="/managing-your-policy/contestability-period" className="text-harbor-mid underline">
            contestability period
          </Link>{" "}
          or the cause of death needs clarifying. Responding promptly to anything they ask keeps
          things moving.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Can&apos;t find the policy at all?</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            That doesn&apos;t mean it isn&apos;t there. See our{" "}
            <Link href="/managing-your-policy/find-a-lost-policy" className="text-harbor-mid underline">
              guide to finding a lost policy
            </Link>{" "}
            for where else to look.
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
