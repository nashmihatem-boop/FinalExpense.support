import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Graded Benefit Coverage, Gently Explained",
  description:
    "How the graded step-up payout works in the first couple of years, what health profile typically lands here, and why it's real, meaningful coverage for your family.",
  openGraph: { title: "Graded Benefit Coverage, Gently Explained", description: "How the graded step-up payout works in the first couple of years, what health profile typically lands here, and why it's real, meaningful coverage for your family." },

  twitter: { title: "Graded Benefit Coverage, Gently Explained", description: "How the graded step-up payout works in the first couple of years, what health profile typically lands here, and why it's real, meaningful coverage for your family." },
};

export default function GradedBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/level-vs-graded-vs-modified" className="hover:text-harbor">Level vs. Graded vs. Modified</Link> / Graded Benefit
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Graded benefit coverage: how the gentle step-up payout works
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Please don&apos;t mistake graded for some kind of trial coverage — it&apos;s a fully
          active policy from the moment it&apos;s issued, the only twist being that the payout
          climbs on a schedule rather than arriving whole right away. Here&apos;s the honest
          mechanics behind that climb, the reasoning insurers have for offering it, and the kinds
          of health histories that tend to end up here.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What &quot;graded&quot; really means for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          From the moment it&apos;s issued, a graded policy works like any other: approved,
          active, premiums due right on schedule. The one place it diverges is a natural-cause
          death occurring during an initial window the carrier sets, typically the first two
          years of the contract. Rather than the entire face amount, your beneficiary would
          receive a partial sum during that stretch — smaller in year one, then climbing a bit
          further with every year that passes inside the window. Step outside that window,
          though, and the policy quietly becomes indistinguishable from a level one: the full
          face amount, for any covered cause of death, no exceptions.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">A gentle exception worth remembering</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            An accident is treated completely differently — the full benefit is typically paid
            right away, window or no window. The waiting period built into a graded policy speaks
            only to natural-cause death; it was never meant to touch the policy as a whole.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why insurers gently structure coverage this way
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Think of graded as the caring middle ground. Some health histories carry real but
          moderate near-term risk — too much for a level policy priced with zero cushion, yet
          nowhere near severe enough to require the longer, question-free path of guaranteed
          acceptance. Graded gives an insurer room to say yes anyway, backed by a genuine and
          growing death benefit from the very first day, instead of turning the application away.
          It&apos;s simply how coverage gets extended to a health history that a level policy
          isn&apos;t quite priced to take on yet.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What kind of health profile typically lands here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Picture a health history that&apos;s asking a bit more of an insurer than the routine,
          well-controlled cases that sail through at level, while still staying well within
          manageable territory. Someone roughly a year removed from a cardiac event — a heart
          attack, a stroke, a stent — who has remained stable since is a familiar example: many
          insurers would rather wait a little longer before offering level, yet are perfectly
          willing to offer a growing payout in the meantime instead of nothing at all. Moderate,
          well-managed COPD without home oxygen tells a similar story. And whether any particular
          case ends up graded or modified instead usually says more about which insurer is doing
          the reviewing than about the condition itself — the identical history can receive two
          entirely different answers from two different companies.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Real coverage — never a consolation prize
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          &quot;Partial payout&quot; can sound like a lesser product, but that framing genuinely
          misses what&apos;s happening here. The premium stays fixed for the policy&apos;s entire
          life, same as any other final expense plan. The moment you&apos;re approved, the death
          benefit itself is locked — it never gets renegotiated downward, and the only direction
          it moves is up, right on schedule, toward the full amount. Coverage for your beneficiary
          starts the day the policy does, not once the window ends; the only thing in flux is how
          much applies to a natural-cause death during that early stretch, and even that partial,
          rising amount frequently makes a genuine difference for a family. None of this touches
          an accidental death at all — that pays in full, immediately, regardless of the window.
          For a family that would otherwise have heard no, graded is often the very thing standing
          between them and a yes, which makes it one of the more quietly valuable tools in this
          entire market, not something lesser than the rest.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to know if your family would land here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every insurer draws its own boundary between level, graded, and modified, so a formal
          application is really the only way to know for certain — ideally after learning, ahead
          of time, which companies tend to be gentler toward your particular history. That&apos;s
          exactly the kind of check an independent agent can run before anything gets submitted.
          And if the signs point toward modified instead, it&apos;s worth reading{" "}
          <Link href="/level-vs-graded-vs-modified/modified-benefit" className="text-harbor-mid underline">
            how that outcome actually differs
          </Link>{" "}
          before settling on an assumption either way.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/level-vs-graded-vs-modified" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the comparison guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
