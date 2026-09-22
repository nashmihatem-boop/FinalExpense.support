import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance Riders, Explained",
  description:
    "A caring look at what a rider adds to a base policy, with the two most common family-focused examples: accelerated death benefit and waiver-of-premium riders.",
  openGraph: { title: "Life Insurance Riders, Explained", description: "A caring look at what a rider adds to a base policy, with the two most common family-focused examples: accelerated death benefit and waiver-of-premium riders." },

  twitter: { title: "Life Insurance Riders, Explained", description: "A caring look at what a rider adds to a base policy, with the two most common family-focused examples: accelerated death benefit and waiver-of-premium riders." },
};

export default function LifeInsuranceRidersPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a life insurance rider?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A rider is an optional add-on to a base life insurance policy —
          something that extends what your coverage does for your family
          beyond the standard policy on its own. Here are a few of the
          more common ones, described gently and generally.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The basic idea
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Think of your base policy as the core promise: a death benefit,
          a premium, and the standard terms behind it. A rider attaches to
          that promise and adds something to it — a little more
          flexibility, an added benefit, or a change in how the policy
          responds to a specific situation your family might face. Some
          riders come at a small additional cost, while others are
          already built in depending on the policy. Either way,
          they&apos;re yours to choose: you decide whether to include one
          when you apply, and in some cases you can add one later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Accelerated death benefit (living benefit) riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is one of the more comforting riders to know about. It lets
          you access a portion of your own death benefit while
          you&apos;re still with your family, if you&apos;re diagnosed
          with a qualifying terminal illness — money meant to help ease
          costs during that time, rather than only reaching a loved one
          afterward. Whatever amount is used this way is generally
          subtracted from what&apos;s left to pay out as the death
          benefit later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Waiver-of-premium riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This rider looks after a different worry: staying covered if
          you become seriously ill or disabled in a way that makes it
          hard to keep up with payments. If you qualify, a
          waiver-of-premium rider pauses the requirement to pay premiums
          for a period, while keeping your policy fully in force — your
          family&apos;s coverage continues even while payment is on hold.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Riders for a child
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some base policies also offer a rider that adds a modest amount
          of coverage for your child, without needing a completely
          separate policy. It&apos;s a smaller, simpler version of the
          kind of{" "}
          <Link href="/life-insurance-for-children" className="font-semibold text-harbor-mid hover:underline">
            standalone children&apos;s coverage
          </Link>{" "}
          described elsewhere on this site, folded into your own existing
          policy instead.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it&apos;s worth asking about
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Riders vary a good deal from policy to policy and carrier to
          carrier — what&apos;s automatically included, what costs extra,
          and what you actually qualify for. Asking specifically what
          riders are available, and what each one would mean for your
          premium, is a caring question to bring to an agent before you
          apply, not something your family should have to discover after
          the fact.
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
