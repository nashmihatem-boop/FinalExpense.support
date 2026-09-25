import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SafeLink } from "@/components/safe-link";

export const metadata: Metadata = {
  title: "Protecting Your Family From Final Expense Scams",
  description:
    "A caring, practical guide to keeping your family safe while shopping for final expense insurance — how to verify a company, spot a scam call, and avoid getting talked into the wrong policy.",
  openGraph: { title: "Protecting Your Family From Final Expense Scams", description: "A caring, practical guide to keeping your family safe while shopping for final expense insurance — how to verify a company, spot a scam call, and avoid getting talked into the wrong policy." },

  twitter: { title: "Protecting Your Family From Final Expense Scams", description: "A caring, practical guide to keeping your family safe while shopping for final expense insurance — how to verify a company, spot a scam call, and avoid getting talked into the wrong policy." },
};

const TOPICS = [
  {
    title: "Making sure a company is who they say they are",
    description:
      "A simple, free way to check a carrier's and agent's state license before you share anything personal.",
    href: "/avoiding-scams/verify-a-company-is-legitimate",
  },
  {
    title: "Reading between the lines of insurance ads",
    description:
      "What phrases like “as low as” and “no medical exam” really promise, and what they leave out.",
    href: "/avoiding-scams/truth-about-insurance-ads",
  },
  {
    title: "Telling a real call from a scam call",
    description:
      "The tell-tale differences between a caring, licensed agent and someone trying to rush you.",
    href: "/avoiding-scams/scam-calls-targeting-seniors",
  },
  {
    title: "Understanding who's actually helping you",
    description:
      "A gentle walkthrough of what a captive agent, an independent agent, and a direct carrier each mean for your family.",
    href: "/avoiding-scams/independent-vs-captive-vs-direct",
  },
  {
    title: "Watching out for policy churning",
    description:
      "Why someone might push your family to replace a policy you already have — and what it could quietly cost you.",
    href: "/avoiding-scams/policy-churning",
  },
  {
    title: "Knowing the signs of agent fraud",
    description:
      "The behaviors that mean an agent isn't looking out for your family, and what to do the moment you notice one.",
    href: "/avoiding-scams/agent-fraud",
  },
];

export default function AvoidingScamsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <SafeLink href="/" className="hover:text-harbor">Home</SafeLink> / Avoiding Scams
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Protecting your family from final expense scams
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Families usually come to this decision at a tender moment — after a health scare, after
          watching a parent's own funeral costs land on someone else, or simply while trying to
          make sure nobody they love is ever caught without a plan. That same tenderness, sadly,
          is what a small number of bad actors count on. This guide isn't meant to make you
          suspicious of everyone — it's meant to help your family move through this decision
          feeling informed and protected, whichever company you eventually choose.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why this particular corner of insurance attracts the wrong kind of attention
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Think about who typically buys this coverage: often someone older, sometimes managing
          a fixed income, and sometimes handling the whole decision without a son, daughter, or
          spouse double-checking things alongside them. A lot of these conversations still happen
          by phone or through the mail instead of in person. To be clear, none of that makes a
          buyer careless, and it certainly doesn't mean most agents are anything less than
          honest, licensed professionals — the overwhelming majority of people in this business
          got into it to genuinely help families like yours. But a market shaped this way will
          always draw a handful of people who lean on urgency and unfamiliarity to rush past the
          questions a decision like this deserves. Recognizing that pattern early is most of the
          protection your family needs.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Here's the reassuring part: real rules protect you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Few consumer products come with as much built-in oversight as insurance does. Every
          company, and every individual agent, has to hold an active license in your state before
          they can sell you a policy — and that license is a matter of public record you're
          welcome to check yourself, at no cost, any time. That's not some workaround you have to
          go looking for; it's exactly how this system is supposed to work, for every family, no
          matter which agency they end up trusting, ours included.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Six things worth a few minutes of your time
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The rest of this guide is broken into six short, practical topics. None of them ask you
          to become an expert — just to know, gently and in advance, what to watch for so your
          family never has to learn the hard way.
        </p>
        {TOPICS.map((topic) => (
          <div key={topic.href} className="mt-8">
            <h3 className="font-display text-lg font-extrabold text-harbor">{topic.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-charcoal/80">{topic.description}</p>
            <Link href={topic.href} className="mt-2 inline-block text-sm font-semibold text-harbor-mid hover:underline">
              Read the full guide →
            </Link>
          </div>
        ))}

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <SafeLink href="/" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Home
            </SafeLink>
          </p>
        </div>
      </div>
    </div>
  );
}
