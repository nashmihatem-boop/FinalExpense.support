import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Sibling, Gently Explained",
  description:
    "A caring guide to buying final expense coverage for a brother or sister, what insurable interest genuinely means, and how the application typically unfolds.",
  openGraph: { title: "Final Expense Insurance for a Sibling, Gently Explained", description: "A caring guide to buying final expense coverage for a brother or sister, what insurable interest genuinely means, and how the application typically unfolds." },

  twitter: { title: "Final Expense Insurance for a Sibling, Gently Explained", description: "A caring guide to buying final expense coverage for a brother or sister, what insurable interest genuinely means, and how the application typically unfolds." },
};

export default function SiblingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Sibling
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a sibling, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          People don&apos;t talk about this one as much as a spouse or parent buying coverage, but
          plenty of loving families arrange final expense insurance for a brother or sister. If
          that&apos;s you, there&apos;s one gentle concept worth understanding before anything
          else: insurable interest.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why siblings care for each other this way
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A sibling often steps in exactly when nobody else is positioned to. Maybe your brother
          or sister never married or had children, so there&apos;s no spouse quietly handling this
          on their behalf. Maybe you&apos;re simply the one who&apos;s always managed family
          logistics — the one who ends up planning things whenever planning is needed. Or maybe
          you&apos;re a caregiver in every way but on paper, already knowing you&apos;d be the one
          covering costs if nothing were in place. Whatever the specific reason, it comes from the
          same gentle place as every relationship on this site: not wanting a loss to also become
          a bill.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Insurable interest: what it gently means for a sibling policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Insurable interest is a foundational idea across all of insurance law, not something any
          single company invented — it requires that whoever applies for or owns a policy on
          someone else&apos;s life has a genuine financial or emotional stake in that person
          continuing to live. It&apos;s the concept that keeps life insurance from ever becoming a
          way to bet on a stranger&apos;s death. Immediate family — spouses, and parents and
          children — are typically the clearest, least-questioned cases. A sibling relationship is
          also warmly recognized as carrying insurable interest, but because it sits one step
          further out, an insurer may gently ask a few more questions to confirm the relationship
          and the reason behind the coverage than it would for a spouse or a parent and child.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          None of that makes things complicated — it simply means being ready to explain, honestly
          and simply, why you&apos;re the one arranging coverage for your sibling. In practice,
          something like &quot;we&apos;re close, I&apos;d be the one handling things, and I
          don&apos;t want that to become a financial burden&quot; is exactly the kind of answer
          insurers are gently looking for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Bringing your sibling gently into the process
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Please know upfront that this can never happen quietly in the background — your sibling
          has to show up as a real participant, not a name on a form. Practically, that means
          sitting with the health questions themselves, since nobody else can speak to their
          medical history the way they can, and putting their own signature on the finished
          application. Feel free to carry everything else: researching carriers, getting the
          agent on the phone, sorting through the paperwork. Just leave room in your plans for a
          brief moment where your sibling is genuinely there with you, even if the rest of the
          effort is yours.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The three roles a policy quietly holds
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every policy has room for three different people, even though families often assume
          it&apos;s just one. Your sibling always holds the insured role — theirs is the life the
          coverage protects. You&apos;ll likely be the owner: the one keeping the premium current
          and able to adjust the policy down the road. Who actually receives the payout, though,
          is its own separate question entirely. Plenty of siblings choose themselves, simply
          because they expect to be the one settling final costs — but a payout can just as
          comfortably be shared among the wider family, or left for your sibling to name however
          they&apos;d prefer. Say the plan out loud together rather than quietly guessing at each
          other&apos;s expectations; it&apos;s the detail families most often realize, too late,
          they never actually agreed on.
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
