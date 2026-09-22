import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";

export const metadata: Metadata = {
  title: "Buying Final Expense Insurance for Someone You Love",
  description:
    "Final expense insurance is so often bought by one family member for another — a spouse, sibling, parent, grandparent, or child. Here's how it gently works for each.",
  openGraph: { title: "Buying Final Expense Insurance for Someone You Love", description: "Final expense insurance is so often bought by one family member for another — a spouse, sibling, parent, grandparent, or child. Here's how it gently works for each." },

  twitter: { title: "Buying Final Expense Insurance for Someone You Love", description: "Final expense insurance is so often bought by one family member for another — a spouse, sibling, parent, grandparent, or child. Here's how it gently works for each." },
};

const RELATIONSHIPS: { href: string; title: string; description: string; image: string }[] = [
  {
    href: "/final-expense-insurance-for/spouse",
    title: "Your spouse",
    description: "Covering one another gently, so the one left behind never pays final costs alone.",
    image: "/photos/family-caregiving-hands.jpg",
  },
  {
    href: "/final-expense-insurance-for/sibling",
    title: "A sibling",
    description: "What insurable interest gently means when you're arranging coverage for a brother or sister.",
    image: "/photos/family-siblings-together.jpg",
  },
  {
    href: "/final-expense-insurance-for/parents",
    title: "Your parents",
    description: "The most common version of this loving conversation — how to start it, and how it gets set up.",
    image: "/photos/family-parent-adult-child-documents.jpg",
  },
  {
    href: "/final-expense-insurance-for/grandparents",
    title: "A grandparent",
    description: "How grandchildren and extended family typically step in with care, and how to coordinate gently.",
    image: "/photos/family-grandparent-grandchild.jpg",
  },
  {
    href: "/final-expense-insurance-for/child",
    title: "A child",
    description: "A different, much smaller product than senior final expense coverage — explained with honesty.",
    image: "/photos/family-multigenerational-group.jpg",
  },
];

export default function FinalExpenseInsuranceForPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Who It&apos;s For
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Buying final expense insurance for someone you love
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Most of what lives on this site quietly assumes you&apos;re shopping for your own
          coverage. But gently, in real life, a huge share of applications begin a different
          way — one family member picks up the phone, starts the conversation, or fills out that
          very first form for someone else entirely. If that&apos;s where you are, please know
          you&apos;re not doing anything unusual at all. Here&apos;s how it typically unfolds, and
          what shifts depending on who you&apos;re caring for.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why it&apos;s so often one loved one handling it for another
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance exists to protect whoever&apos;s left behind, and that&apos;s
          exactly why the person feeling the most urgency about it often isn&apos;t the person the
          policy actually covers. A parent may mean well and simply never get around to it. A
          spouse already managing the household&apos;s bills is naturally the one to pick this up
          for both of them. An adult child who just helped settle someone else&apos;s funeral
          suddenly can&apos;t bear the thought of leaving that same scramble to their own
          siblings. A sibling without children of their own may realize nobody else is quite
          positioned to think about it. The relationship changes each time, but the gentle reason
          underneath is always the same: nobody wants a death in the family to also become a
          financial emergency nobody saw coming.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          The legal basics: insurable interest and consent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A life insurance policy can&apos;t simply be bought on anyone. Every application rests
          on a concept called &quot;insurable interest&quot; — whoever&apos;s applying for or
          owning the policy has to genuinely, financially or emotionally, need that insured
          person to keep living. This isn&apos;t a rule any single company invented; it&apos;s
          held across the whole insurance industry, and it exists so life insurance can never
          quietly become a way to bet against someone&apos;s life. Close family — a spouse, a
          parent, a child, a sibling, a grandparent — is almost always recognized as carrying
          insurable interest in one another without much question at all.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          What insurable interest doesn&apos;t do, gently, is remove the insured person from the
          process. With very few exceptions, the adult whose life is being covered still has to
          give their own consent, answer the health questions themselves, and sign the
          application personally. Exactly how that unfolds — and how closely an insurer looks at
          the relationship — shifts a little depending on who&apos;s involved, which is precisely
          what each guide below walks through with care.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Find your situation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The heart of the process stays similar across every relationship. What&apos;s worth
          knowing ahead of time is where each one gently differs.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {RELATIONSHIPS.map((r) => (
            <TopicCard key={r.href} href={r.href} title={r.title} description={r.description} image={r.image} />
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          How to get started
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Whoever you&apos;re caring for, the process begins the same gentle way: a genuine,
          honest conversation about wanting to do this and why (the one exception is insuring
          your own young child, where this step naturally doesn&apos;t apply). From there,
          gather the basics — age, general health, and state of residence, since licensing and
          coverage details work state by state. A licensed agent can then walk both of you through
          what you&apos;d actually qualify for, including price and whether coverage would begin
          right away or ease in gradually.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Wondering how coverage works specifically where your family lives?{" "}
          <Link href="/coverage-by-state" className="text-harbor-mid underline">
            See coverage by state
          </Link>
          , or jump straight to a quote below.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Final Expense Insurance
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
