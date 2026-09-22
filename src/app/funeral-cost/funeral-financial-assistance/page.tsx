import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Real Help When Money Is Tight for a Funeral",
  description:
    "A caring look at the real, if narrow, categories of help available when a family can't cover a funeral — and why coverage arranged ahead of time spares you from needing any of it.",
  openGraph: { title: "Real Help When Money Is Tight for a Funeral", description: "A caring look at the real, if narrow, categories of help available when a family can't cover a funeral — and why coverage arranged ahead of time spares you from needing any of it." },

  twitter: { title: "Real Help When Money Is Tight for a Funeral", description: "A caring look at the real, if narrow, categories of help available when a family can't cover a funeral — and why coverage arranged ahead of time spares you from needing any of it." },
};

export default function FuneralFinancialAssistancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Financial Assistance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Real help when money is tight for a funeral
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          When a death happens without coverage already in place, families are often left
          scrambling to cover a bill that simply can&apos;t wait. Real help does exist for some
          situations — but it&apos;s narrower and slower than most people hope. Here&apos;s what
          genuinely exists, and why the caring truth of this guide is that coverage arranged ahead
          of time is what spares a family from ever needing any of it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          When a death was accidental or the result of a crime
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state runs its own crime victim compensation program, and most cover funeral
          expenses, up to a set limit, when a death resulted from a violent crime. Some extend
          similar help to certain accidental deaths too. These programs are real, but they come
          with real limits: a police report on file, an application window, and a claims process
          that can take weeks or months. They were built for specific circumstances, not as a
          general safety net.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Crowdfunding
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Online fundraising has become a common, caring way for communities to close the gap
          quickly, and it can genuinely help. It comes with tradeoffs worth knowing first:
          platforms take a processing fee, the amount raised is unpredictable, and campaigns
          usually take days to gain momentum — time a family facing an immediate bill may not
          have. It also means asking loved ones for money during one of the hardest weeks of your
          life.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Payment plans through the funeral home
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many funeral homes let a family pay over time instead of all at once. This can make an
          immediate bill gentler to manage, but it&apos;s worth being clear-eyed: it spreads the
          cost, it doesn&apos;t reduce it, and financing often carries interest. A payment plan
          solves a timing problem, not a cost one — the family still owes the full amount, with
          monthly payments attached during an already difficult stretch.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">A modest federal benefit</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Social Security pays a one-time lump sum to certain eligible survivors, typically a
            spouse who was living with the deceased. It&apos;s real and federal, but intentionally
            modest — it was never meant to cover a funeral on its own. The Social Security
            Administration can confirm current eligibility and amount for your family.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What this gently tells you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Notice the pattern: each option depends on specific circumstances, requires an
          application and a wait, or simply shifts the bill into the future. None of it is
          something a family can count on before it&apos;s needed — it&apos;s what&apos;s left to
          reach for when there wasn&apos;t a plan. A final expense policy works differently. It&apos;s
          arranged in advance, pays directly to whoever your family names as beneficiary, usually
          within days of an approved claim, and doesn&apos;t depend on how the death happened.
          That&apos;s the caring value of having it — the one source of help your family can count
          on no matter what.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
