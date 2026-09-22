import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Does Final Expense Insurance Gently Cover Cremation?",
  description:
    "A caring explanation of how a final expense policy's cash benefit works if your family chooses cremation, and how it differs from a prepaid cremation plan.",
  openGraph: { title: "Does Final Expense Insurance Gently Cover Cremation?", description: "A caring explanation of how a final expense policy's cash benefit works if your family chooses cremation, and how it differs from a prepaid cremation plan." },

  twitter: { title: "Does Final Expense Insurance Gently Cover Cremation?", description: "A caring explanation of how a final expense policy's cash benefit works if your family chooses cremation, and how it differs from a prepaid cremation plan." },
};

export default function CremationCoveragePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Cremation Coverage
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Does final expense insurance gently cover cremation?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Yes, warmly and simply: the cash your policy pays out can absolutely go toward
          cremation. It just helps to understand exactly how, since this isn&apos;t a
          &quot;cremation-only&quot; product, and it works quite differently from a prepaid
          cremation arrangement.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How the benefit genuinely works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A final expense policy sends its cash death benefit straight to whoever you&apos;ve
          named as beneficiary — never to a funeral home, cremation provider, or any other
          business. Your loved one decides how it&apos;s used: cremation itself, a memorial
          gathering afterward, lingering medical bills, or anything else that comes up. Nothing in
          the policy ties the money to cremation specifically — it&apos;s simply there for your
          family to direct however the moment calls for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How this gently differs from a prepaid cremation plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A prepaid cremation plan, often arranged directly through a funeral home or cremation
          provider, locks in one specific service with one specific provider well ahead of time.
          That can feel comforting for someone who already knows precisely what they want and
          where. But it tends to travel less easily if you move, change your mind, or your family
          ends up needing something a little different when the moment actually arrives. Because a
          final expense policy&apos;s cash isn&apos;t tied to any single business, it simply stays
          flexible no matter what your family ultimately decides.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Choosing an amount if cremation is the gentle plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation is generally the less expensive path compared to a traditional burial, though
          costs still shift quite a bit depending on region, provider, and whether a memorial
          service, urn, or gathering is part of the picture. Rather than guessing at a figure, it
          helps to first think through what your family actually wants — direct cremation on its
          own, or cremation paired with a service — and then let a licensed agent help you land on
          a coverage amount that genuinely fits that plan.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Having both isn&apos;t unusual at all
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some families already hold a prepaid cremation arrangement and still choose final
          expense insurance specifically to cover whatever that prepaid plan doesn&apos;t reach —
          outstanding medical bills, other debts, or a little extra support for the people left
          behind. These two aren&apos;t competing against each other. One locks in a specific
          service; the other offers flexible cash your family can point toward whatever genuinely
          needs it most.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/is-it-worth-it" className="font-semibold text-harbor-mid hover:underline">
              Still deciding? An honest look at whether it&apos;s worth it →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
