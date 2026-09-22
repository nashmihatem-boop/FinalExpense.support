import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Whole Life vs. Universal Life, Explained with Care",
  description:
    "A gentle comparison of whole life and universal life insurance — fixed guarantees versus flexible premiums — and where final expense coverage fits.",
  openGraph: { title: "Whole Life vs. Universal Life, Explained with Care", description: "A gentle comparison of whole life and universal life insurance — fixed guarantees versus flexible premiums — and where final expense coverage fits." },

  twitter: { title: "Whole Life vs. Universal Life, Explained with Care", description: "A gentle comparison of whole life and universal life insurance — fixed guarantees versus flexible premiums — and where final expense coverage fits." },
};

export default function WholeLifeVsUniversalLifePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Whole life vs. universal life insurance
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Whole life and universal life both belong to the permanent side of life insurance —
          coverage meant to last your entire life rather than a fixed stretch of years, unlike term
          insurance. Underneath that similarity, though, they handle premiums, cash value, and risk
          in genuinely different ways, and that difference matters once you&apos;re deciding what
          actually fits your family.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Whole life: built around certainty
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Whole life insurance leans entirely on certainty. The premium you&apos;re quoted at issue
          stays exactly the same for as long as you own the policy. The death benefit is guaranteed
          at a fixed amount, and cash value grows on a defined, guaranteed schedule rather than
          rising and falling with markets or investment performance. Nothing here is designed to
          surprise you down the road — what you&apos;re quoted at the start is, by contract, what
          you keep.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Universal life: more flexible, more to watch
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Universal life trades away some of that certainty in exchange for flexibility. Many
          policies let you adjust premium payments within set limits, and sometimes adjust the death
          benefit too, as your needs shift over the years. Cash value growth typically depends on
          interest crediting that can vary — tied, depending on the policy, to a guaranteed minimum
          rate, current interest rates, or the performance of an underlying index. That flexibility
          can genuinely help, but it also asks more of you: reduce payments too far, or let cash
          value performance lag, and the policy can lose value or even lapse — something a properly
          funded whole life policy simply isn&apos;t exposed to.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The real tradeoff underneath it all
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At its core, this choice comes down to certainty versus flexibility. Whole life fits
          people who want a fixed premium and a guaranteed outcome they never have to keep checking
          on. Universal life fits people who want room to adjust payments as life changes, and who
          don&apos;t mind keeping an eye on how the policy is actually performing — since
          flexibility going in tends to mean more responsibility along the way. Neither one is
          better in the abstract; they&apos;re simply built for different priorities.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where final expense insurance quietly fits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance is built as a type of whole life insurance, not universal life —
          and that&apos;s a deliberate choice, not an afterthought. Coverage meant for end-of-life
          costs is built around a fixed premium that never climbs as you age, and a guaranteed death
          benefit your family can lean on, without any of the ongoing management a universal life
          policy can demand. For more on how permanent coverage works in general, see{" "}
          <Link href="/what-is-whole-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            what is whole life insurance
          </Link>
          , or read about{" "}
          <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
            how final expense insurance specifically works
          </Link>
          .
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
