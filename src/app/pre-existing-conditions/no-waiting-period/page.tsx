import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Getting Day-One Coverage with No Waiting Period",
  description: "A caring guide to qualifying for day-one final expense coverage with no waiting period, even with a health condition.",
  openGraph: {
    title: "Getting Day-One Coverage with No Waiting Period",
    description: "A caring guide to qualifying for day-one final expense coverage with no waiting period, even with a health condition.",
  },
  twitter: {
    title: "Getting Day-One Coverage with No Waiting Period",
    description: "A caring guide to qualifying for day-one final expense coverage with no waiting period, even with a health condition.",
  },
};

export default function NoWaitingPeriodPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / No Waiting Period Coverage
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Getting day-one coverage with no waiting period
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          No waiting period simply means the full amount is there for your family from the moment
          your very first payment clears — whatever the cause of death turns out to be. It&apos;s
          the outcome nearly every family hopes to hear, and gently, it&apos;s a lot more
          reachable for people with a health condition than most expect going in.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who this tends to work out for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurers call this the &quot;level&quot; outcome, and it comes through simplified-issue
          underwriting — health questions, but never a medical exam. The question underwriters
          are really asking isn&apos;t &quot;does a diagnosis exist on paper,&quot; it&apos;s
          &quot;is this being actively, successfully managed right now.&quot; Blood pressure kept
          in check with medication tends to clear easily. So does cholesterol once it&apos;s
          treated, type 2 diabetes once it&apos;s stable, and sleep apnea once a CPAP machine is
          part of the nightly routine — all of these are common enough that they routinely still
          land at the full, day-one benefit.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What tends to shift things
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A more recent or more serious event in your health history is usually what nudges an
          application toward a graded or modified outcome instead — something like a heart attack
          or stroke in the past year or two, ongoing cancer treatment, or a lung condition like
          COPD that now needs supplemental oxygen. Under either of those outcomes, the full
          benefit phases in gradually over the first couple of years rather than being there from
          day one. Please don&apos;t read that as a dead end for your family — it&apos;s simply a
          different, equally real form of coverage, and our{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            gentle guide to how tiering works
          </Link>{" "}
          walks through exactly what that looks like.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          One distinction worth holding onto
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s easy to mix up &quot;no waiting period&quot; with &quot;no health
          questions,&quot; but they&apos;re genuinely different things. Guaranteed-acceptance
          policies are the ones that skip health questions — and in exchange, they always come
          with a two-year wait attached to natural-cause death. If anyone ever offers you a policy
          claiming both no health questions and no waiting period in the same breath, that&apos;s
          worth treating as a gentle red flag, since that particular combination simply isn&apos;t
          sold anywhere in this market.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How your family can find out for sure
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every insurance company draws its own line for what &quot;stable&quot; and
          &quot;controlled&quot; actually mean in practice, so the only dependable way to learn
          your real outcome is to sit down with a licensed agent who can compare your specific
          history across several carriers at once — far better than guessing on your own, or
          applying to a single company and simply hoping for the best.
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
