import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Is Life Insurance Taxable? A Gentle, Honest Answer",
  description:
    "A gentle explanation of the general federal tax rule for life insurance death benefits, a few well-established nuances, and why your situation deserves a tax professional.",
  openGraph: { title: "Is Life Insurance Taxable? A Gentle, Honest Answer", description: "A gentle explanation of the general federal tax rule for life insurance death benefits, a few well-established nuances, and why your situation deserves a tax professional." },

  twitter: { title: "Is Life Insurance Taxable? A Gentle, Honest Answer", description: "A gentle explanation of the general federal tax rule for life insurance death benefits, a few well-established nuances, and why your situation deserves a tax professional." },
};

export default function IsLifeInsuranceTaxablePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Is life insurance taxable? A gentle, honest answer
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Families ask us this constantly, and thankfully, there&apos;s comfort in the answer.
          Below, we&apos;ll walk through what federal law says in the ordinary case, two smaller
          wrinkles worth being aware of, and why a real tax professional should still weigh in on
          your family&apos;s own picture.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Ordinarily, the payout itself owes nothing to the IRS
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Federal law simply doesn&apos;t treat a death benefit as taxable income for whoever
          receives it. Few things about life insurance in America are as settled and dependable as
          this rule, which is exactly why families lean on it so heavily for planning — the full
          amount your loved ones are promised is the full amount that actually reaches them,
          untouched by federal income tax on either end.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A gentle wrinkle: interest during a delay
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Timing is where this gets slightly more nuanced. Should an insurer sit on a payout for a
          stretch before releasing it to your family, whatever interest accumulates during that
          wait can become taxable — even while the underlying benefit stays completely untouched.
          Picture it as two separate pots: the original death benefit, forever tax-free, and any
          interest layered on top during a holding period, which isn&apos;t.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A different question entirely for larger estates
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A second, narrower wrinkle involves estates on the larger side — here, a policy&apos;s
          value can occasionally weigh into estate tax math, a completely separate conversation
          from the income tax rule above. This rarely touches the average family, and where it
          does apply, it hinges on federal (sometimes state) thresholds that shift with time — too
          specific and too changeable for us to responsibly print numbers here that might already
          be stale by the time you&apos;re reading this.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">
            Please bring your specific picture to a tax professional
          </p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Everything above holds up well as a starting point, but tax questions are never
            one-size-fits-all — where you live, how large an estate is, who technically owns a
            policy, and other small details can all shift the answer. Before leaning on any
            assumption about how a policy will be taxed, please sit down with a qualified tax
            professional who can look at your family&apos;s actual circumstances.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
