import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Getting a Quote Online Gently Means",
  description:
    "A caring look at what getting a quote online actually involves for final expense insurance, and why a warm phone call with an agent is still part of it.",
  openGraph: { title: "What Getting a Quote Online Gently Means", description: "A caring look at what getting a quote online actually involves for final expense insurance, and why a warm phone call with an agent is still part of it." },

  twitter: { title: "What Getting a Quote Online Gently Means", description: "A caring look at what getting a quote online actually involves for final expense insurance, and why a warm phone call with an agent is still part of it." },
};

export default function BuyOnlinePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Buying Online
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What getting a quote online gently means
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A site like ours lets your family start this from home, on your own schedule — genuinely
          convenient. It just helps to understand, warmly and clearly, what that first step
          actually does, and what still happens the more personal way afterward.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What an online quote genuinely does
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A short form like ours gathers the essentials — your age, a general sense of your
          health, your state, roughly how much coverage you have in mind, and the best way to
          reach you. That information is quietly matched against insurer eligibility, so what
          you&apos;re shown afterward reflects real options rather than a generic list. It&apos;s a
          genuine head start compared to calling company after company yourself — but it&apos;s
          the opening step, not the finish line.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why a warm phone call still matters
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified-issue underwriting genuinely requires answering a specific set of health
          questions, and how those get answered matters more than people expect. A licensed agent
          asking them live, gently, can catch nuance a static web form simply can&apos;t — the
          exact date something was diagnosed, whether a medication was for a passing issue, or a
          natural follow-up a form would never think to ask — which protects your family from an
          answer being recorded in a way that could complicate a claim down the road. In most
          states, a licensed agent is also legally required to actually bind and issue the policy.
          For coverage like this, no online tool fully replaces that conversation.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What online tools are genuinely wonderful for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Quickly comparing what different insurers might offer, gently narrowing down which ones
          are even worth pursuing before you pick up the phone, and starting whenever it suits
          you rather than waiting on business hours — that&apos;s exactly where an online start
          shines. Think of it as doing the early legwork so the call that follows is shorter, and
          far more useful for your family.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens gently after you submit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A licensed agent follows up warmly to review what you shared, confirm the details, and
          walk you through real, personalized options rather than a generic estimate. There&apos;s
          never a cost for this, and never any obligation to move forward on that call — you&apos;re
          free to simply hear the numbers, sit with them, and decide later, or not at all.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/biggest-mistakes" className="font-semibold text-harbor-mid hover:underline">
              Before you apply: common mistakes to avoid →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
