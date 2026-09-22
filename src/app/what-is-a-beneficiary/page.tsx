import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is a Beneficiary? A Gentle Explanation",
  description:
    "Who you can name as a life insurance beneficiary, primary vs. contingent, and why keeping it current matters so much for your family.",
  openGraph: { title: "What Is a Beneficiary? A Gentle Explanation", description: "Who you can name as a life insurance beneficiary, primary vs. contingent, and why keeping it current matters so much for your family." },

  twitter: { title: "What Is a Beneficiary? A Gentle Explanation", description: "Who you can name as a life insurance beneficiary, primary vs. contingent, and why keeping it current matters so much for your family." },
};

export default function WhatIsABeneficiaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a beneficiary?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Your beneficiary is simply the person, people, or entity you choose to receive your
          policy&apos;s death benefit. Naming one is one of the easiest steps in applying for
          coverage, yet it&apos;s also one of the most meaningful — it decides, very concretely,
          who your policy is actually there to help.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who you&apos;re allowed to name
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most people choose someone close — a spouse, an adult child, another family member —
          though that&apos;s far from the only path available. You can name more than one person
          and set exactly what share of the benefit each receives, so it doesn&apos;t need to split
          evenly unless you want it to. Naming a trust is also common, especially when there are
          specific wishes for how the money gets managed or distributed over time. Naming your own
          estate is technically possible too, though it usually means the money has to pass through
          probate first — which tends to undercut the whole point of naming someone directly.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Primary and contingent beneficiaries, gently explained
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your primary beneficiary stands first in line for the death benefit. A contingent
          beneficiary — think of them as your backup — only receives anything if every primary
          beneficiary is unable to, most commonly because they&apos;ve passed away too. Naming a
          contingent beneficiary is optional, but skipping it leaves a real gap: with no one left to
          receive it, the benefit typically defaults to your estate, bringing probate delays and
          costs along with it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why revisiting this matters so much
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A beneficiary designation never updates on its own. A marriage, a divorce, a new child,
          or the loss of someone you&apos;d already named can quietly leave your policy pointed at
          the wrong person — or no one at all — if you never go back and check. Insurers pay out
          according to exactly what&apos;s on file, regardless of what a will says or what your
          family assumes you intended, so it&apos;s worth revisiting your designation after any
          major life change, not only when the policy is first issued. Updating it is usually a
          short, simple request to your insurer or agent, with no need to rewrite the policy
          itself.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Choosing a beneficiary for a final expense policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For a final expense policy specifically, the beneficiary is usually whoever will actually
          be handling arrangements and paying costs after a death — often a spouse or adult child,
          though that doesn&apos;t have to match who&apos;s named in a will or serving as executor.
          Naming that person directly, rather than defaulting to &quot;my estate,&quot; is what lets
          the payout reach them quickly, without waiting on the wider estate process to wrap up.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
