import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Policy Churning: Protecting a Policy Your Family Already Has",
  description:
    "A caring explanation of policy churning — being talked into replacing coverage your family already has — and the hidden cost of starting over.",
  openGraph: { title: "Policy Churning: Protecting a Policy Your Family Already Has", description: "A caring explanation of policy churning — being talked into replacing coverage your family already has — and the hidden cost of starting over." },

  twitter: { title: "Policy Churning: Protecting a Policy Your Family Already Has", description: "A caring explanation of policy churning — being talked into replacing coverage your family already has — and the hidden cost of starting over." },
};

export default function PolicyChurningPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Policy Churning
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Policy churning: protecting a policy your family already has
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          There&apos;s a name in this industry for something families run into more than
          you&apos;d expect: &quot;churning,&quot; when an agent encourages you to swap out a
          policy you already own for a new one — not because the new one truly serves your family
          better, but because writing it earns them a fresh commission. It&apos;s worth
          understanding on its own before anyone brings up replacing coverage you already have in
          place.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What it tends to look like
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It rarely announces itself. Usually it arrives dressed up as a friendly upgrade — a
          lower premium, a bit more coverage, a newer-sounding company. What that conversation
          quietly skips over is everything your family gives up by starting fresh: the time
          already invested in your current policy&apos;s contestability period, and, if it&apos;s
          a permanent policy that&apos;s built any cash value, that value right along with it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What starting over can quietly cost your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two costs are easy to overlook in the moment. First, nearly every life insurance policy
          carries a contestability period — usually the first two years — during which the
          insurer can look closely at a claim if the original application had a misstated or
          missing answer. Replacing your policy resets that clock entirely, even if your existing
          one was long past its own window. Second, if your current policy is whole life and has
          built cash value, giving it up to buy something new can mean losing that value, or
          paying a fee to exit early. A new policy also means being underwritten all over again at
          your age and health today, which can land your family with a higher premium than the one
          you already have locked in.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why this happens at all
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The incentive is simple: a new policy typically earns the agent who writes it a fresh
          commission, while your existing, untouched policy earns nothing more. Most agents never
          act on that incentive at your expense — the vast majority of replacement conversations
          happen because a family&apos;s needs genuinely changed. But that same incentive is
          exactly what makes churning possible on the rare occasions someone does lean on it,
          which is why it&apos;s worth knowing about even though it describes a small minority of
          conversations, not the typical one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to keep your family protected
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Sometimes there really is a good reason to replace a policy — your family&apos;s needs
          shifted, or something genuinely better came along. A recommendation like that should
          hold up to a few gentle checks, not just a warm conversation.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Before you replace a policy</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Ask specifically why this is better for your family — not just what&apos;s different, but why the reset is worth it.</li>
            <li>• Ask for the comparison in writing: the new contestability clock, any cash value given up, and the real premium difference, side by side.</li>
            <li>• For a decision this size, bring in a second set of eyes — a family member or another licensed agent — before you sign anything.</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
