import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Direct Cremation Means for Your Family",
  description:
    "A gentle explanation of how direct cremation works, why it's typically the least expensive option, and how families build a separate memorial around it.",
  openGraph: { title: "What Direct Cremation Means for Your Family", description: "A gentle explanation of how direct cremation works, why it's typically the least expensive option, and how families build a separate memorial around it." },

  twitter: { title: "What Direct Cremation Means for Your Family", description: "A gentle explanation of how direct cremation works, why it's typically the least expensive option, and how families build a separate memorial around it." },
};

export default function DirectCremationPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Direct Cremation
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What direct cremation means for your family
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Direct cremation is a specific, well-understood choice: cremation without a viewing,
          visitation, or funeral service beforehand. It&apos;s usually the simplest and gentlest
          on the budget, largely because of what it leaves out rather than because anything feels
          rushed. Here&apos;s what&apos;s actually included, why it costs less, and how families
          often build a loving memorial around it on their own time.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What&apos;s included, and what isn&apos;t
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          With direct cremation, a provider transports your loved one, files the required permits,
          performs the cremation, and returns the remains to your family, typically in a simple
          container unless you choose a separate urn. What it leaves out is everything tied to a
          service beforehand: no embalming, no viewing, and no formal casket, since a simple
          alternative container is used instead.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it tends to cost less
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cost in this industry largely comes down to how many pieces are involved, and direct
          cremation simply has fewer of them — no embalming, no casket to buy, no staffed viewing
          time. That said, it still varies by provider and region, which is exactly why it&apos;s
          worth a gentle, itemized quote from someone local rather than assuming a number.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Pairing it with a memorial, on your own time
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Choosing direct cremation doesn&apos;t mean skipping a gathering — it simply separates
          the practical step from the service. Many families hold a memorial or celebration of
          life afterward, somewhere that truly means something to them: a backyard, a place of
          worship, a favorite restaurant. That flexibility also gives out-of-town loved ones more
          time to travel in, and lets the family shape the day around remembrance rather than a
          fixed format.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Not the only option — just the simplest one</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Direct cremation isn&apos;t right for every family. Some traditions call for a viewing
            beforehand, which is a different arrangement with its own gentle cost factors — see
            how{" "}
            <Link href="/funeral-cost/cremation-cost" className="font-semibold text-harbor-mid hover:underline">
              cremation pricing shifts once a service is added
            </Link>
            .
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Is it the right fit for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The honest answer depends on what matters most: simplicity and gentleness on the budget,
          or having your loved one present for a traditional service first. Neither is more right
          than the other. What matters most is making sure whichever path feels right is reflected
          in your family&apos;s coverage and shared with whoever will handle arrangements.
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
