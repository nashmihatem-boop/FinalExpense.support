import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";

export const metadata: Metadata = {
  title: "A Caring Guide to Funeral Costs",
  description:
    "A gentle guide to why funeral costs vary so much for families, the categories you're actually paying for, and how to get a real, current number before you size coverage.",
  openGraph: { title: "A Caring Guide to Funeral Costs", description: "A gentle guide to why funeral costs vary so much for families, the categories you're actually paying for, and how to get a real, current number before you size coverage." },

  twitter: { title: "A Caring Guide to Funeral Costs", description: "A gentle guide to why funeral costs vary so much for families, the categories you're actually paying for, and how to get a real, current number before you size coverage." },
};

const TOPICS: { href: string; title: string; description: string; image?: string }[] = [
  {
    href: "/funeral-cost/what-to-expect",
    title: "What to expect",
    description: "A gentle, step-by-step walk through the funeral planning process, and the decisions along the way.",
    image: "/photos/reflective-garden-bench.jpg",
  },
  {
    href: "/funeral-cost/prepaid-funeral-plans",
    title: "Prepaid plans vs. final expense insurance",
    description: "How each one actually works for your family, and the real tradeoffs of locking in one provider.",
    image: "/photos/reflective-soft-light.jpg",
  },
  {
    href: "/funeral-cost/cemetery-plot-cost",
    title: "What affects cemetery plot cost",
    description: "Location, cemetery type, and ongoing fees like perpetual care, explained simply.",
    image: "/photos/reflective-golden-hour-landscape.jpg",
  },
  {
    href: "/funeral-cost/headstone-cost",
    title: "What affects headstone cost",
    description: "Material, size, and engraving — the biggest, gentlest factors to understand.",
    image: "/photos/reflective-memorial-garden.jpg",
  },
  {
    href: "/funeral-cost/green-burial",
    title: "What is green burial?",
    description: "A growing, caring option — and why it's often, though not always, less costly.",
    image: "/photos/reflective-hands-flower.jpg",
  },
  {
    href: "/funeral-cost/burial-vs-cremation",
    title: "Burial vs. cremation",
    description: "A gentle comparison of the two paths on cost, timeline, and what each involves.",
  },
  {
    href: "/funeral-cost/cremation-cost",
    title: "What affects cremation cost",
    description: "Direct cremation, cremation with a service, and what genuinely changes the price.",
  },
  {
    href: "/funeral-cost/direct-cremation",
    title: "What is direct cremation?",
    description: "The simplest, most affordable option, explained with care.",
  },
  {
    href: "/funeral-cost/casket-cost",
    title: "What affects casket cost",
    description: "Material and craftsmanship drive most of the range, gently broken down.",
  },
  {
    href: "/funeral-cost/funeral-financial-assistance",
    title: "Financial assistance resources",
    description: "Real programs to lean on if paying for a funeral without coverage is the immediate worry.",
  },
];

export default function FuneralCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Funeral Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          A caring guide to what a funeral actually costs
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Call two funeral homes in the very same town for similar services, and it&apos;s
          entirely normal to hear two genuinely different numbers back. Funeral pricing simply
          isn&apos;t standardized or set nationally — it depends heavily on choices only your
          family gets to make. This guide walks through why costs vary, what you&apos;re actually
          paying for, and where to find a real, current number for your own planning.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Why costs vary so much from family to family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Where you live.</span> Cost of living, local
          land values, and how many providers compete in your area all shift pricing from one zip
          code to the next. Towns just thirty miles apart can sit at meaningfully different price
          levels for the very same kind of service.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">Which provider you choose.</span> Every
          funeral home sets its own prices independently, even the ones that belong to a larger
          corporate family. There&apos;s no national price list, and nothing requires two
          providers to charge the same for the same service.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          <span className="font-semibold text-harbor">What your family chooses.</span> Burial or
          cremation, a full traditional service versus something simpler, the casket or urn
          selected, whether a vault is required — these choices move the total more than almost
          anything else. Two families at the same funeral home can end up with very different
          bills, simply based on what mattered most to them.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">A right worth knowing: the itemized price list</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Funeral homes are required by federal rule to give your family an itemized general
            price list, and to let you choose and pay for only the specific items you actually
            want, rather than being pushed into one bundled package. Asking for this list in
            writing, early, is one of the kindest things you can do for yourself while comparing
            providers.
          </p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What you&apos;re actually paying for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every funeral, no matter the provider or region, breaks down into the same broad
          pieces. What changes is the price of each one, and whether your family needs all of
          them at all.
        </p>
        <ul className="mt-4 space-y-3 text-base leading-relaxed text-charcoal/80">
          <li>
            <span className="font-semibold text-harbor">The basic services fee.</span> This one is
            essentially unavoidable — it covers overhead, staff time, and coordinating the
            arrangements and paperwork, no matter what else you choose.
          </li>
          <li>
            <span className="font-semibold text-harbor">Casket or urn.</span> One of the biggest
            swing categories, since it varies enormously with material and craftsmanship. A
            gentle, simple option exists at every provider, right alongside higher-end choices.
          </li>
          <li>
            <span className="font-semibold text-harbor">The disposition itself.</span> Burial and
            cremation each carry their own cost, apart from any merchandise. Cremation tends to be
            the simpler, gentler-on-the-budget path, since it skips several steps a traditional
            burial requires.
          </li>
          <li>
            <span className="font-semibold text-harbor">Plot and marker, for burial.</span>{" "}
            Choosing burial adds a separate set of costs from a separate business entirely — the
            plot, the opening and closing fee, and a headstone — on top of whatever&apos;s paid to
            the funeral home.
          </li>
        </ul>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Sizing coverage without knowing an exact number yet
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since none of this is standardized, the only way to get a real number is to gently ask a
          local provider directly — a funeral home for service costs, and a cemetery separately if
          burial is part of the plan. Final expense insurance pays a set cash benefit to whoever
          you name as beneficiary, so the caring approach is to get a current, itemized estimate,
          add a cushion for the unexpected, and size coverage to that total rather than a guess.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Go deeper on each cost
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} href={topic.href} title={topic.title} description={topic.description} image={topic.image} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
