import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Is Final Expense Insurance Worth It? A Gentle, Honest Answer",
  description:
    "A caring, balanced look at who final expense insurance is genuinely a good fit for, and who might not need it.",
  openGraph: { title: "Is Final Expense Insurance Worth It? A Gentle, Honest Answer", description: "A caring, balanced look at who final expense insurance is genuinely a good fit for, and who might not need it." },

  twitter: { title: "Is Final Expense Insurance Worth It? A Gentle, Honest Answer", description: "A caring, balanced look at who final expense insurance is genuinely a good fit for, and who might not need it." },
};

export default function IsItWorthItPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Is It Worth It?
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Is final expense insurance worth it? A gentle, honest answer
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          There&apos;s genuinely no single right answer here for every family. It comes down to
          what you already have quietly in place, and what you&apos;re truly hoping to protect
          your loved ones from. Here&apos;s a caring, balanced look at both sides, so you can
          decide for yourself with confidence.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          When it&apos;s gently a strong fit
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For many families, the answer becomes fairly clear rather quickly. This tends to make
          the most sense if any of the following feel true for you:
        </p>
        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A gentle fit if</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Your family doesn&apos;t yet have savings specifically set aside for final costs.</li>
            <li>• You want the certainty that your loved ones never cover a funeral, burial, or final medical bill out of pocket or on credit.</li>
            <li>• A short, simplified approval now sounds far gentler than trying to qualify for a much larger traditional policy down the road.</li>
            <li>• You&apos;d rather not see retirement or investment accounts touched at an inconvenient moment — or ever — to cover these costs.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          When your family might not genuinely need it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s just as honest, and just as caring, to say this coverage isn&apos;t meant for
          every family. It may add little if you already hold liquid savings specifically set
          aside and easily reachable for final costs — not retirement funds earmarked for
          something else entirely. The same goes if an existing life insurance policy is already
          large enough, with a current beneficiary, to comfortably absorb these costs alongside
          whatever else it&apos;s meant to cover. Or simply if your family&apos;s finances mean
          this cost genuinely wouldn&apos;t create hardship for anyone. Layering a new policy on
          top of protection you already have is mostly redundant spending, not real added safety —
          and it&apos;s worth saying that plainly rather than being gently sold something your
          family doesn&apos;t need.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Gentle questions worth sitting with
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Right now, today — is there money genuinely set aside for this, separate from
          retirement savings meant for something else? If something happened to you this month,
          would your family suddenly need to find these costs out of nowhere? And if coverage
          already exists, have you actually confirmed it&apos;s enough once you factor in more than
          the funeral alone — outstanding medical bills, other debts, anything lingering?
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          There&apos;s truly no universal right answer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is a personal financial decision, not something meant to frighten you into acting,
          and it&apos;s perfectly fine to land on either side of it. If a second opinion would
          help, a licensed agent can gently walk through your specific situation with you — what
          you already have, what filling any gap would actually cost, and whether it&apos;s worth
          doing — at no charge and no obligation, whichever way you land.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/biggest-mistakes" className="font-semibold text-harbor-mid hover:underline">
              Already decided? Avoid these common mistakes →
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
