import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Prepaid Plans or Final Expense Insurance? A Gentle Comparison",
  description:
    "A caring comparison of how a prepaid funeral plan works next to final expense insurance, and which one might fit your family better.",
  openGraph: { title: "Prepaid Plans or Final Expense Insurance? A Gentle Comparison", description: "A caring comparison of how a prepaid funeral plan works next to final expense insurance, and which one might fit your family better." },

  twitter: { title: "Prepaid Plans or Final Expense Insurance? A Gentle Comparison", description: "A caring comparison of how a prepaid funeral plan works next to final expense insurance, and which one might fit your family better." },
};

export default function PrepaidFuneralPlansPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Prepaid Plans vs. Insurance
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Prepaid plans or final expense insurance? A gentle comparison
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Both exist so your loved ones aren&apos;t left scrambling financially. They work quite
          differently from each other, though, and understanding that difference gently helps you
          choose with confidence rather than guesswork.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How a prepaid plan works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A prepaid, or &quot;preneed,&quot; plan is an agreement with one particular funeral home.
          You sit with that provider, pick out the services and merchandise you&apos;d like, and
          pay in advance — all at once or over time. Depending on your state and provider, that
          money usually sits in a trust or funds a small insurance policy or annuity set aside just
          for this purpose, and how well those funds are protected varies by state. The comfort here
          is real: everything&apos;s decided, it&apos;s on file, and depending on how it&apos;s
          written, the price may stay locked in even years later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How final expense insurance works instead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Final expense insurance is a life insurance policy, plain and simple. When you pass, it
          pays a cash benefit straight to whoever you named — not to any funeral home, and not tied
          to a particular use. Your loved one can take that money to any provider, in any city, for
          whatever mix of services feels right, or even set part of it aside for something else if
          that ends up mattering more in the moment. You choose the amount upfront based on your own
          sense of what you want covered, without being locked into one provider&apos;s specific
          package.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What to weigh about a prepaid plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The gentlest way to put it: a prepaid plan doesn&apos;t travel well. It&apos;s tied to one
          funeral home, so a move to a new city or state can make using those funds elsewhere
          anywhere from simple to genuinely hard, depending on the contract and whether another
          provider agrees to honor it. Funeral homes change hands, merge, or close, too — most
          reputable ones work to transfer existing plans smoothly, but that process can add stress
          right when your family least needs more of it. There&apos;s also less room to adjust:
          choices made at signing, sometimes decades earlier, may not match preferences or
          circumstances by the time they&apos;re used. Refund and cancellation rules differ widely
          by state and contract, so it&apos;s worth reading the actual paperwork, not just what the
          salesperson says.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What to weigh about final expense insurance
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          To be fair, insurance carries its own considerations. Because the payout is cash rather
          than a locked-in package, it relies on your loved one actually carrying out your wishes —
          no provider or contract enforces that step for you. It also means the decisions
          themselves are still ahead of your family; a policy provides the money, but not the
          choices a prepaid plan would have already settled. And it&apos;s an ongoing premium
          rather than a single payment, though a final expense policy is typically built to keep
          that premium level for as long as you keep it.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Which one is right for your family</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            There&apos;s no universally better choice here. Many families like the flexibility
            insurance offers; many others find comfort in having every decision already made
            through a prepaid plan. Some choose to have both. Whichever direction feels right, get
            a current itemized estimate from a local provider first, and size your plan or policy
            to that number with a bit of room to spare.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the funeral cost guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
