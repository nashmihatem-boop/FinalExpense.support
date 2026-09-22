import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Cash Value, Gently Explained for Your Family",
  description:
    "A caring explanation of how cash value quietly builds inside a whole life or final expense policy, who it belongs to, and how it differs from the death benefit.",
  openGraph: { title: "Cash Value, Gently Explained for Your Family", description: "A caring explanation of how cash value quietly builds inside a whole life or final expense policy, who it belongs to, and how it differs from the death benefit." },

  twitter: { title: "Cash Value, Gently Explained for Your Family", description: "A caring explanation of how cash value quietly builds inside a whole life or final expense policy, who it belongs to, and how it differs from the death benefit." },
};

export default function CashValueLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Cash value, gently explained for your family
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Few parts of a whole life or final expense policy cause as much quiet confusion as cash
          value, since it&apos;s so easily mixed up with the death benefit itself. The two are
          related, but they play genuinely different roles.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Two different things living in one policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Think of the death benefit as the whole reason the policy exists — it&apos;s what your
          family receives after you&apos;re gone. Cash value sits alongside that, as a completely
          separate feature found only in whole life-style coverage, final expense insurance
          included, one that you as the policyholder can potentially tap into while you&apos;re
          still here. Term life insurance simply doesn&apos;t carry this feature at all — it
          protects you for a set window of time, nothing more, with no savings-like piece
          attached.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it quietly grows over time
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cash value begins near zero and builds gradually, year after year, as a small sliver of
          every premium payment gets credited toward it. This is deliberately slow by design,
          never a fast-growing account — the earliest years add up gently, with real momentum
          only showing up over a longer stretch of time. The precise pace depends entirely on your
          specific policy&apos;s own terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What you can gently do with it while you&apos;re living
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since this cash value genuinely belongs to you, it&apos;s generally yours to access
          while the policy remains active — most often through borrowing against it, and
          sometimes even using it to help carry a premium payment if a gap ever comes up. The fine
          print around borrowing against a policy, and what it means for your coverage
          afterward, is worth understanding closely before you lean on it; an agent can walk you
          through exactly how it would play out for your own policy.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens to it once you&apos;re gone
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Here&apos;s the part that quietly surprises people: with most standard cash value
          policies, your beneficiary simply receives the stated death benefit — not that death
          benefit plus whatever cash value happened to build up alongside it. Cash value is meant
          to be a living benefit, something to use or lean on while you&apos;re alive, rather than
          an extra sum tacked onto the payout afterward. It serves its own distinct purpose,
          separate from the death benefit, even though both quietly live inside the same policy.
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
