import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Grandparent, Gently Explained",
  description:
    "A caring look at how grandchildren and extended family typically arrange coverage for a grandparent, and how to coordinate with the rest of the family.",
  openGraph: { title: "Final Expense Insurance for a Grandparent, Gently Explained", description: "A caring look at how grandchildren and extended family typically arrange coverage for a grandparent, and how to coordinate with the rest of the family." },

  twitter: { title: "Final Expense Insurance for a Grandparent, Gently Explained", description: "A caring look at how grandchildren and extended family typically arrange coverage for a grandparent, and how to coordinate with the rest of the family." },
};

export default function GrandparentsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Grandparents
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a grandparent, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          More grandchildren and extended family arrange this than you might guess — especially
          when a grandparent&apos;s own children aren&apos;t able to, or when one grandchild has
          simply grown closest to them over the years. Here&apos;s what&apos;s gently worth
          knowing if that&apos;s your family.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why grandchildren and extended family step in
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Family life rarely follows the tidy version. A grandparent&apos;s own children might
          live far away, be quietly managing their own health or money worries, or simply not be
          the ones with the closest day-to-day bond. A grandchild — often an adult with more
          financial footing and a warm relationship with their grandparent — sometimes ends up the
          natural person to notice the gap and gently do something about it. It can also surface
          after a scare: a fall, a diagnosis, a hospital stay that suddenly makes the absence of
          coverage feel real instead of hypothetical.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurable interest across a generation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The same gentle rule woven through every relationship on this site applies here too: you
          need insurable interest — a genuine financial or emotional stake in your
          grandparent&apos;s life — to buy a policy on them, and your grandparent still has to
          consent and answer the health questions personally. A grandchild-grandparent bond is
          recognized much the way a sibling relationship is: entirely real, but one step further
          from the most obvious cases like a spouse or a parent and child, so an insurer may ask a
          few gentle clarifying questions about the relationship and why you&apos;re the one
          applying. Our{" "}
          <Link href="/final-expense-insurance-for/sibling" className="text-harbor-mid underline">
            guide to buying coverage for a sibling
          </Link>{" "}
          goes deeper into how insurable interest plays out in practice, and it carries over here
          in much the same way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Coordinating gently with the rest of the family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since a grandparent typically has several children and grandchildren who could
          reasonably be involved, it&apos;s worth having a brief family conversation before you
          apply — mainly so two relatives don&apos;t independently arrange overlapping coverage,
          or disagree later over who the beneficiary should be. Gently clarify upfront whether
          you&apos;re doing this to lift the burden from your grandparent&apos;s own children
          specifically, to be reimbursed by the family afterward, or simply because you want to be
          the one who handles it. None of those reasons need anyone&apos;s permission, but saying
          the reason out loud tends to prevent quiet confusion later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What your grandparent still needs to do
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          As with any adult being insured, your grandparent has to be part of the process —
          giving their own consent, answering health questions honestly and in their own words,
          and signing the application themselves. You can absolutely lead on research, comparing
          options, and handling the logistics, but please plan for your grandparent to be present,
          even briefly, when the actual application takes place.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
