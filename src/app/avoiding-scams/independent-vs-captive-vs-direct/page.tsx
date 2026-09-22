import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Who's Actually Helping You: Captive, Independent, or Direct",
  description:
    "A gentle explanation of the three ways families buy final expense insurance — captive agent, independent agent, or direct from a carrier — and what each one means for you.",
  openGraph: { title: "Who's Actually Helping You: Captive, Independent, or Direct", description: "A gentle explanation of the three ways families buy final expense insurance — captive agent, independent agent, or direct from a carrier — and what each one means for you." },

  twitter: { title: "Who's Actually Helping You: Captive, Independent, or Direct", description: "A gentle explanation of the three ways families buy final expense insurance — captive agent, independent agent, or direct from a carrier — and what each one means for you." },
};

export default function IndependentVsCaptiveVsDirectPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Independent vs. Captive vs. Direct
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Who&apos;s actually helping you: captive, independent, or direct
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          It helps your family to understand exactly who you&apos;re talking to, not just what
          they&apos;re selling. There are really only three ways to buy final expense insurance,
          and each one puts you in a different relationship with the person on the phone and the
          company behind them. None of the three is a trick — they&apos;re just different, and
          worth understanding gently before you decide who to trust with this.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A captive agent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A captive agent represents one insurance company, and only that company — everything
          they offer your family comes from that single source. The upside is that they tend to
          know that one company&apos;s rules, paperwork, and products inside and out. The downside
          is that if your family&apos;s health history or budget doesn&apos;t fit neatly into that
          company&apos;s box, a captive agent simply has nothing else to offer, even when a better
          fit exists somewhere else.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          An independent agent or agency
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An independent agent — which is exactly what you&apos;ll find here — can offer policies
          from several different insurance companies rather than being tied to just one. That
          matters more than it might sound like, because carriers genuinely see your family
          differently: a health condition that gets turned away at one company might be welcomed
          warmly at another. The tradeoff is that an independent agent&apos;s knowledge of any one
          single carrier tends to run a little less deep than a captive agent&apos;s does.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Buying direct from a carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Buying direct means going straight to the insurance company&apos;s own website or call
          line, with no agent standing between you and them at all. This suits someone who already
          knows precisely what they want and would rather move quickly. What you give up is
          someone on your side of the conversation, comparing your family&apos;s situation against
          other carriers if the first answer you get isn&apos;t the best one available.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">How you buy</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Who they represent</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">Carriers compared for you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Captive agent</td>
                <td className="px-5 py-4 text-sm text-charcoal">One insurance company</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Just that company&apos;s own options</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Independent agent</td>
                <td className="px-5 py-4 text-sm text-charcoal">You — across multiple companies</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Several companies, matched to your situation</td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Direct from a carrier</td>
                <td className="px-5 py-4 text-sm text-charcoal">The carrier itself</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">Just that one company, no agent involved</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          There&apos;s no single right choice for every family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A captive agent can be a lovely fit for a family that already knows and trusts one
          particular company. Buying direct can suit a healthy applicant who just wants the
          fastest path forward. An independent agent tends to matter most when your family&apos;s
          health, age, or budget make it genuinely unclear which carrier will treat you kindly —
          which describes many families, though certainly not all. The gentle truth is simply to
          know which of the three you&apos;re actually speaking with, and choose the one that
          fits your family, rather than assume.
        </p>

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
