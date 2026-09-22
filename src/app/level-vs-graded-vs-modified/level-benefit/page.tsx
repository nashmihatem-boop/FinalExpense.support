import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Level Benefit Coverage, Gently Explained",
  description:
    "What a level death benefit means for your family, why it's typically the gentlest-cost outcome, and what kind of health profile usually qualifies.",
  openGraph: { title: "Level Benefit Coverage, Gently Explained", description: "What a level death benefit means for your family, why it's typically the gentlest-cost outcome, and what kind of health profile usually qualifies." },

  twitter: { title: "Level Benefit Coverage, Gently Explained", description: "What a level death benefit means for your family, why it's typically the gentlest-cost outcome, and what kind of health profile usually qualifies." },
};

export default function LevelBenefitPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/level-vs-graded-vs-modified" className="hover:text-harbor">Level vs. Graded vs. Modified</Link> / Level Benefit
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Level benefit coverage: your family&apos;s full payout from day one
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Everything else in this comparison gets measured against level, since it&apos;s the
          simplest possible outcome: your policy takes effect, and from that very first day, the
          complete death benefit is already sitting there for your family. No countdown, no
          gradual step-up, nothing that quietly shifts once year one passes. Below, we&apos;ll walk
          through what that promise actually covers, why families usually find it&apos;s the
          gentlest option on the wallet, and which kinds of health histories tend to land here.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What &quot;level&quot; really means for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Picture the version of life insurance most people already carry around in their heads —
          you&apos;re approved, you&apos;re covered, and that&apos;s the whole story. That&apos;s
          level. Your beneficiary receives the entire face amount no matter the covered cause of
          death, from the first day forward, whether that&apos;s a natural passing or an accident.
          There&apos;s nothing to track on a schedule and no partial stretch to sit through
          beforehand. Graded and modified were built for the families whose health history
          needed a gentler on-ramp into coverage — level simply never needed one, because nothing
          in the underwriting called for that extra caution in the first place.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it&apos;s typically the gentlest on cost
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Think of graded and modified as carrying a small built-in cushion — either a partial
          payout stretch or a return-of-premium stretch — there specifically to soften the added
          near-term risk an insurer is taking on with a more complicated health picture. Level
          skips that cushion entirely, and skipping it is exactly why your family isn&apos;t
          quietly paying for protection it doesn&apos;t need. Compare the same age, face amount,
          and health class across all three, and level almost always comes out as the most
          affordable path. Every insurer still runs its own rate table behind the scenes, so
          &quot;level&quot; is really describing a shape, not a fixed number — but that shape is
          the one without a built-in charge for risk nobody is actually carrying.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What kind of health profile typically qualifies
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurers care much less about what&apos;s written on your chart than about how
          well you&apos;re managing it today — stable, treated, and without a recent hospital
          stay or medication switch shaking things up. Take type 2 diabetes: kept in check with
          diet, pills, or insulin, with no complications along for the ride, it routinely still
          earns full coverage starting day one, all on its own. Blood pressure and cholesterol
          tend to follow the same path once medication has them under control, and so does sleep
          apnea once a CPAP machine enters the picture nightly — these show up so often that
          insurers barely blink. None of this asks for a spotless medical history. It asks for
          active, ongoing management instead of something brand-new, shaky, or still unresolved.
          The{" "}
          <Link href="/pre-existing-conditions#a-z" className="text-harbor-mid underline">
            full A–Z of common conditions
          </Link>{" "}
          has many more examples like these.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Level still asks for honest answers</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Don&apos;t mistake a level approval for a lighter review. Behind the scenes, insurers
            are still comparing your answers against your prescription history and a shared
            industry database, exactly as they would for any other tier — and a mismatch that
            surfaces later can threaten a claim no matter which tier originally got approved.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it&apos;s worth hoping for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Set the price aside for a moment, and level still wins on simplicity — there&apos;s no
          schedule for your beneficiary to decode later, no reduced-benefit stretch to fall inside
          of, no confusion about what&apos;s covered right now versus what kicks in eventually.
          And it&apos;s genuinely within reach more often than families assume going in — a single
          manageable condition doesn&apos;t automatically send you down a tier, gently or
          otherwise, which is exactly the reason it&apos;s worth submitting an application and
          finding out rather than deciding the answer for yourself beforehand.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How to find out if your family would qualify
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Applying is really the only way to know for sure, but a little groundwork first can
          tilt the odds your way. Because every insurer writes its own health questions and
          look-back rules, one company&apos;s level approval can be another company&apos;s graded
          decision for the identical condition. That&apos;s where an independent agent earns their
          keep — checking your history against several insurers before anything formal gets
          submitted, so you land with the one most inclined to say level, rather than applying
          once, settling for a lower tier, and never learning that someone else might have said
          yes to the full benefit. And should your history point elsewhere, please know that
          isn&apos;t the end of your options: {" "}
          <Link href="/level-vs-graded-vs-modified/graded-benefit" className="text-harbor-mid underline">
            graded
          </Link>{" "}
          and{" "}
          <Link href="/level-vs-graded-vs-modified/modified-benefit" className="text-harbor-mid underline">
            modified
          </Link>{" "}
          coverage remain real, workable paths too.
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
