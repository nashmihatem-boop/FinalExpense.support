import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Finding a Policy When the Paperwork Has Gone Missing",
  description:
    "Warm, practical steps for tracking down a family policy when you believe one exists but can't find the paperwork, including free lookup resources.",
  openGraph: { title: "Finding a Policy When the Paperwork Has Gone Missing", description: "Warm, practical steps for tracking down a family policy when you believe one exists but can't find the paperwork, including free lookup resources." },

  twitter: { title: "Finding a Policy When the Paperwork Has Gone Missing", description: "Warm, practical steps for tracking down a family policy when you believe one exists but can't find the paperwork, including free lookup resources." },
};

export default function FindALostPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Find a Lost Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Finding a policy when the paperwork has gone missing
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whether you&apos;ve misplaced your own documents or you believe a parent or loved one
          had coverage but you can&apos;t find proof, there are real, gentle places to look before
          assuming a policy simply doesn&apos;t exist.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Start close to home, with financial records
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Bank and checking statements are often the fastest lead — look for a recurring
          withdrawal to an insurance carrier, especially one that comes monthly, quarterly, or
          yearly. Canceled checks, credit card statements, a filing cabinet, or a safe deposit box
          are all common, gentle places families keep this kind of paperwork.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check email and mail carefully
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Carriers typically send annual statements, premium notices, or anniversary letters.
          Search email for the carrier&apos;s name if you have any sense of who it might be, or
          gentle general terms like &quot;premium,&quot; &quot;policy,&quot; or
          &quot;statement.&quot; A pile of physical mail or an old filing folder is worth a look
          too.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Reach out to their agent, if you know who it was
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you know which agent or agency originally helped with the policy, reach out —
          agencies often keep records long after the sale, and may be able to confirm a policy
          exists even without your own copy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Don&apos;t forget employer coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If your loved one worked full-time, it&apos;s worth checking whether their employer
          offered group or supplemental life insurance. That&apos;s a different kind of coverage
          from an individually owned final expense policy, but it&apos;s a source families
          commonly forget to check.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check your state&apos;s unclaimed property office
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state keeps an unclaimed property database, and life insurance proceeds can end up
          there if a carrier was ever unable to locate a beneficiary. Search &quot;[your state]
          unclaimed property&quot; to find the official lookup — it&apos;s free, and worth
          checking under every name and past address your loved one used.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Try the NAIC&apos;s free policy locator
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The National Association of Insurance Commissioners runs a free life insurance policy
          locator service. You submit some basic information about your loved one, and it&apos;s
          forwarded to participating carriers to check for a matching policy — a legitimate,
          no-cost resource built exactly for families in this situation.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A gentle word on patience</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Finding a lost policy often takes checking a few of these sources together rather than
            one lookup solving it right away. It&apos;s frustrating, but it&apos;s rarely a true
            dead end — keep gently working down the list.
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
