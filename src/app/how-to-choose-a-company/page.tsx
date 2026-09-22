import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How to Gently Choose a Final Expense Insurance Company",
  description:
    "A caring, carrier-neutral checklist for evaluating any final expense insurance provider — licensing, track record, claims handling, and reading the actual policy before you buy.",
  openGraph: { title: "How to Gently Choose a Final Expense Insurance Company", description: "A caring, carrier-neutral checklist for evaluating any final expense insurance provider — licensing, track record, claims handling, and reading the actual policy before you buy." },

  twitter: { title: "How to Gently Choose a Final Expense Insurance Company", description: "A caring, carrier-neutral checklist for evaluating any final expense insurance provider — licensing, track record, claims handling, and reading the actual policy before you buy." },
};

export default function HowToChooseACompanyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How to gently choose a final expense insurance company
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Not every final expense provider handles things quite the same way, and the differences
          matter far more once a claim has been filed than they do while you&apos;re still
          shopping. Here&apos;s a caring, carrier-neutral checklist for evaluating any company
          your family is considering — not which specific companies to choose, but genuinely what
          to look for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Gently confirm licensing in your own state
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurance is regulated one state at a time, and any company or agent selling your family
          a policy needs to hold a proper license to do business exactly where you live. This is a
          basic, easy-to-check starting point, and a genuinely legitimate provider will never be
          cagey about sharing it. See our{" "}
          <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
            state-by-state coverage guide
          </Link>{" "}
          for what licensing looks like where you live.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How long they&apos;ve genuinely been operating
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A longer history isn&apos;t everything, but it quietly tells you something a marketing
          page simply can&apos;t: this company has been collecting premiums and paying claims long
          enough to have a real operating track record, to have weathered more than one market
          cycle, and to have built processes that have actually been tested against real claims
          rather than only designed on paper.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          An independent agency vs. a single carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s worth gently understanding who you&apos;re actually speaking with. A
          single-carrier company only offers its own products, so whatever they quote you is the
          only option available from that particular conversation. An independent agency works
          with several carriers at once and can compare plans across them, meaning the
          recommendation your family receives is genuinely built around fitting a policy to your
          health and budget, rather than steering you toward the one product on hand. Neither
          structure is inherently dishonest — it&apos;s simply worth knowing which one you&apos;re
          dealing with before committing to anything.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How claims and customer care are genuinely handled
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A policy is only as good as what happens the day your family actually needs to use it.
          Before buying, it&apos;s entirely reasonable to ask how claims get filed, how long a
          payout typically takes, and how to genuinely reach a real person if something goes
          sideways — not simply how the sales conversation flows. A company that can answer these
          questions clearly, before you&apos;ve purchased anything, is a gentle, good sign for how
          they&apos;ll treat you afterward.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Read the actual policy language, not only the marketing
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Marketing materials show a policy in its kindest light; the policy itself is the one
          document that genuinely governs what your family receives. Before buying, read the
          specific wording around waiting periods, exclusions, and how your coverage tier (level,
          graded, or modified) applies to your own situation, rather than leaning on a general
          impression from an ad or a phone call. If anything in the written policy doesn&apos;t
          match what you were told out loud, that&apos;s worth resolving before signing anything,
          never after. Our guides to{" "}
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            pre-existing conditions
          </Link>{" "}
          and{" "}
          <Link href="/guaranteed-issue-life-insurance" className="font-semibold text-harbor-mid hover:underline">
            guaranteed issue coverage
          </Link>{" "}
          gently cover the terms most worth watching closely.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">The gentle short version</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-charcoal/75">
            <li>• Licensed in your state, with a genuine operating history</li>
            <li>• Upfront about whether it&apos;s one carrier or several</li>
            <li>• Clear about how claims and service actually work</li>
            <li>• A policy whose written terms match what you were told</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why comparing through an independent agency genuinely helps
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is precisely the comparison an independent agency exists to make easy for your
          family. Rather than weighing one company&apos;s policy in isolation, working with an
          independent agency lets you see how several carriers actually price and structure
          coverage for your specific situation, side by side, before deciding anything. It
          doesn&apos;t replace your own homework on any company you&apos;re considering — but it
          does mean choosing from real options, not a single offer.
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
