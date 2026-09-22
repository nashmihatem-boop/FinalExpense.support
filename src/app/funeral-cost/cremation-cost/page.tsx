import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Affects Cremation Cost, With Care",
  description:
    "A gentle look at the real factors that move cremation pricing up or down for your family — service type, urn choice, and provider.",
  openGraph: { title: "What Affects Cremation Cost, With Care", description: "A gentle look at the real factors that move cremation pricing up or down for your family — service type, urn choice, and provider." },

  twitter: { title: "What Affects Cremation Cost, With Care", description: "A gentle look at the real factors that move cremation pricing up or down for your family — service type, urn choice, and provider." },
};

export default function CremationCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Cremation Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What affects cremation cost, with care
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Cremation pricing varies widely from one provider and region to the next, which makes
          any single published number close to meaningless for your family specifically.
          What&apos;s more helpful is understanding the gentle factors that move a cremation
          toward the simple end or the more involved end — so you know exactly what to ask when
          you call a local provider.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Direct cremation vs. cremation with a viewing first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This is the single biggest factor. Direct cremation, with no viewing or service
          beforehand, sits at the simpler, gentler end, since it skips embalming, a
          viewing-ready casket, and staffed service time. Adding a viewing or full service brings
          several of those costs back. If a simpler starting point sounds right for your family,
          see how{" "}
          <Link href="/funeral-cost/direct-cremation" className="font-semibold text-harbor-mid hover:underline">
            direct cremation
          </Link>{" "}
          works on its own.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Choosing an urn
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A provider typically includes a basic container, but many families choose a separate
          urn, and that choice has its own gentle range. Material and craftsmanship drive it, much
          like{" "}
          <Link href="/funeral-cost/casket-cost" className="font-semibold text-harbor-mid hover:underline">
            casket pricing
          </Link>{" "}
          does. Families aren&apos;t limited to what a provider offers on-site, either — an urn
          purchased elsewhere works just as beautifully.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Funeral home vs. a standalone crematory
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some funeral homes run their own crematory; others work with a separate one. If your
          family wants disposition only, without the services a full-service funeral home
          provides, working directly with a cremation-focused provider is often the gentler,
          more affordable path.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Small costs that can add up
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A few smaller things are easy to overlook: extra certified death certificate copies,
          transportation if death occurred elsewhere, required permits, and optional extras like
          keepsake jewelry or dividing remains among family members.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Ask for it in writing</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            A reputable provider will gladly give you an itemized price list on request, before
            you commit to anything. Comparing that list against what your family actually wants is
            the clearest way to see where money is going.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The number that truly matters is your provider&apos;s own
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every factor above moves differently depending on where you live, which is exactly why
          this guide won&apos;t hand you a figure. The caring move is to call a provider or two
          nearby, ask for an itemized quote, and size your family&apos;s coverage to that real
          number, with a gentle cushion left over.
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
