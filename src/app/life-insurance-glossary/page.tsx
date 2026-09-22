import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "A Gentle Glossary of Life Insurance Terms",
  description:
    "Warm, plain-language definitions for the life insurance terms used across this site, from beneficiary and death benefit to lapse and look-back period.",
  openGraph: { title: "A Gentle Glossary of Life Insurance Terms", description: "Warm, plain-language definitions for the life insurance terms used across this site, from beneficiary and death benefit to lapse and look-back period." },

  twitter: { title: "A Gentle Glossary of Life Insurance Terms", description: "Warm, plain-language definitions for the life insurance terms used across this site, from beneficiary and death benefit to lapse and look-back period." },
};

const TERMS: { term: string; definition: ReactNode }[] = [
  {
    term: "Beneficiary",
    definition: (
      <>
        Simply put, this is whoever you&apos;d like your death benefit to reach — a spouse, a
        child, several people at once, or even an organization close to your heart. Families
        rarely settle on this name once and leave it forever; you&apos;re free to revisit and
        change it whenever life shifts, for as long as your policy stays active.
      </>
    ),
  },
  {
    term: "Death benefit",
    definition: (
      <>
        This is the money your family actually receives once a claim has been reviewed and
        approved after you&apos;ve passed. Everything else about a life insurance policy really
        exists to support this one promise.
      </>
    ),
  },
  {
    term: "Premium",
    definition: (
      <>
        Your regular payment, typically monthly, that keeps a policy quietly alive. Let too many
        of these slip by unpaid, and the coverage itself can eventually come to an end.
      </>
    ),
  },
  {
    term: "Face amount",
    definition: (
      <>
        The dollar figure written into your policy as the coverage amount — this is what
        everything else, including any early-period adjustment like a graded or modified
        schedule, gets calculated from.
      </>
    ),
  },
  {
    term: "Cash value",
    definition: (
      <>
        A gentle, savings-like piece tucked inside whole life and final expense policies, growing
        slowly while you&apos;re alive and living entirely apart from the death benefit itself.
        Our{" "}
        <Link href="/cash-value-life-insurance" className="font-semibold text-harbor-mid hover:underline">
          fuller, caring look at cash value
        </Link>{" "}
        walks through exactly how that works.
      </>
    ),
  },
  {
    term: "Simplified issue",
    definition: (
      <>
        A path to coverage that skips the medical exam entirely. In its place, you&apos;ll answer
        a short set of yes-or-no health questions, and the insurer quietly cross-checks things
        like your prescription history behind the scenes. Curious how this plays out alongside a
        real health condition? See{" "}
        <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
          our gentle guide to pre-existing conditions
        </Link>
        .
      </>
    ),
  },
  {
    term: "Guaranteed issue",
    definition: (
      <>
        Sometimes called guaranteed acceptance instead. Here, there are no health questions and
        no exam whatsoever — simply fall within the eligible age range, and you&apos;re welcomed
        in, generally in exchange for a waiting period tied to natural-cause death.
      </>
    ),
  },
  {
    term: "Level / graded / modified",
    definition: (
      <>
        Three gentle ways a payout can be shaped if death occurs early in a policy&apos;s life.
        With level, your family gets the entire death benefit starting day one. With graded, a
        partial amount grows a little more each year during that early stretch. With modified,
        your paid premiums come back instead, often with interest added, during that same window.
        Once that early stretch has passed, all three quietly convert to paying the full death
        benefit.
      </>
    ),
  },
  {
    term: "Contestability period",
    definition: (
      <>
        A gentle stretch of time, usually the first couple of years a policy exists, during which
        an insurer holds the right to look closely at, and potentially push back on, a claim if
        something on the original application wasn&apos;t answered truthfully.
      </>
    ),
  },
  {
    term: "Underwriting",
    definition: (
      <>
        The behind-the-scenes review an insurer performs on every applicant — weighing health
        answers, checking prescription history, and running similar checks — before deciding
        whether to offer a policy, and exactly what terms to attach to it.
      </>
    ),
  },
  {
    term: "Look-back period",
    definition: (
      <>
        How far into your past an insurer&apos;s health questions actually reach when asking
        about an old diagnosis, treatment, or hospital stay. This stretch of time isn&apos;t
        universal — it shifts depending on both the insurer and the specific condition being
        asked about.
      </>
    ),
  },
  {
    term: "Free-look period",
    definition: (
      <>
        A brief, no-pressure window right after your policy arrives, during which you&apos;re
        free to cancel for absolutely any reason and have every premium you&apos;ve paid quietly
        returned in full.
      </>
    ),
  },
  {
    term: "Grace period",
    definition: (
      <>
        A gentle cushion of extra time following a missed premium due date, during which your
        coverage stays quietly active while you get caught up — right up until the point a policy
        would otherwise lapse.
      </>
    ),
  },
  {
    term: "Lapse",
    definition: (
      <>
        What happens once a policy finally ends because a premium was never paid, even after the
        grace period ran out. From that point forward, coverage is simply gone.
      </>
    ),
  },
];

export default function LifeInsuranceGlossaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          A gentle glossary of life insurance terms
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Insurance has a language all its own, and it&apos;s easy to feel lost in it. We&apos;ve
          gathered warm, everyday definitions for the words and phrases you&apos;ll bump into
          across this site, so you&apos;re never left guessing at a term nobody bothered to
          explain first.
        </p>

        <dl className="mt-10 divide-y divide-mist border-t border-mist">
          {TERMS.map((item) => (
            <div key={item.term} className="py-6">
              <dt className="font-display text-xl font-extrabold text-harbor">{item.term}</dt>
              <dd className="mt-2 text-base leading-relaxed text-charcoal/80">{item.definition}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
