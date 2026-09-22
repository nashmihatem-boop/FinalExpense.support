import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Can Your Family Be Denied Final Expense Insurance?",
  description: "A caring look at what actually causes a decline on a final expense application, and what your family's options are if it happens.",
  openGraph: {
    title: "Can Your Family Be Denied Final Expense Insurance?",
    description: "A caring look at what actually causes a decline on a final expense application, and what your family's options are if it happens.",
  },
  twitter: {
    title: "Can Your Family Be Denied Final Expense Insurance?",
    description: "A caring look at what actually causes a decline on a final expense application, and what your family's options are if it happens.",
  },
};

export default function CanYouBeDeniedPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / Can You Be Denied?
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Can your family be denied final expense insurance?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          On a simplified-issue application, yes — a specific insurer can say no. What that
          doesn&apos;t mean, gently, is that your family is out of options entirely. Here&apos;s
          what genuinely causes a decline, and the caring next steps if it happens to you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually leads to a decline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A short list of what the industry calls &quot;knockout&quot; questions is behind most
          declines — health situations an insurer treats as too serious for simplified issue,
          full stop, no matter how well everything else on the application looks. Currently
          needing oxygen for the lungs falls into that group. So does an active round of cancer
          treatment, a hospice or terminal diagnosis, dialysis, a transplant within the last few
          years, and living in a nursing home. There&apos;s a second path to a decline too, one
          that has nothing to do with your actual health: your answers simply not matching what
          your prescription or medical records show. That mismatch is precisely why gentle
          honesty on the application beats a hopeful guess every time.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A decline isn&apos;t the end of your family&apos;s road
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Please hold two things as true together: yes, one insurer really can say no, and no,
          that almost never closes every door for your family. Every company writes its own
          rulebook, so a condition that trips up one insurer&apos;s underwriting frequently
          sails through at another&apos;s. And there&apos;s always a safety net waiting beneath
          all of this — guaranteed acceptance doesn&apos;t ask a single health question, welcomes
          anyone inside the eligible age range no matter their history, and simply asks for a
          two-year wait on natural-cause death in return.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What to do gently if you&apos;ve been declined
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          One thing worth avoiding: firing off applications to a long list of insurers one after
          another. A decline gets logged in a shared industry database, and it can quietly work
          against your family the next time around. Far gentler: let an independent agent, who
          already knows which insurers tend to go easy on your specific situation, guide the next
          application — or if a knockout condition is genuinely part of your history, simply move
          straight to a guaranteed-acceptance policy instead.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
