import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thinking About Canceling? A Few Gentle Things to Check",
  description:
    "A caring look at how canceling a life insurance policy actually works, what happens to any cash value, and what's worth checking before your family lets coverage go.",
  openGraph: { title: "Thinking About Canceling? A Few Gentle Things to Check", description: "A caring look at how canceling a life insurance policy actually works, what happens to any cash value, and what's worth checking before your family lets coverage go." },

  twitter: { title: "Thinking About Canceling? A Few Gentle Things to Check", description: "A caring look at how canceling a life insurance policy actually works, what happens to any cash value, and what's worth checking before your family lets coverage go." },
};

export default function CancelPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Cancel a Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Thinking about canceling? A few gentle things to check
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Sometimes canceling really is the right call for your family. But because life
          insurance pricing is so closely tied to age, it&apos;s worth pausing on a few things
          first, so canceling doesn&apos;t quietly end up costing more than it saves.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How canceling actually works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Canceling usually just means contacting your carrier and asking for it, whether that&apos;s
          in writing or over the phone. If your policy has cash value, this step is often called
          &quot;surrendering&quot; it instead. Either way, coverage ends on a specific date, and
          you&apos;re not responsible for premiums after that.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens to any cash value your family built up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A whole life policy that&apos;s built cash value typically pays that value out when you
          surrender it, minus anything owed — including an outstanding{" "}
          <Link href="/managing-your-policy/borrow-from-policy" className="text-harbor-mid underline">
            policy loan
          </Link>
          , if there is one. A term policy usually has no cash value to receive. Surrendered cash
          value can sometimes carry tax implications, so it&apos;s worth a quick, reassuring
          confirmation with your carrier or a tax professional before finalizing anything.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A few other things worth a gentle check
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Ask whether any balance or fee applies to canceling itself, and get the cancellation
          confirmed in writing or by email so there&apos;s no confusion later about the effective
          date. If another family member — a spouse, adult child, or loved one — is counting on
          this specific policy as part of their own planning, it&apos;s worth talking it through
          together before letting it go.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">The one question worth asking first</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Since pricing is usually set by your age — and sometimes health — at the time you
            apply, a new policy taken out later almost always costs your family more than this one
            did originally, even if health hasn&apos;t changed a bit. If you&apos;re canceling to
            replace this with something better, it&apos;s gentler on everyone to line up and
            confirm the new policy first, so your family is never left without coverage in
            between.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Have questions first?{" "}
            <a href={siteConfig.supportPhoneHref} className="font-semibold text-harbor-mid hover:underline">
              Call {siteConfig.supportPhoneDisplay}
            </a>
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
