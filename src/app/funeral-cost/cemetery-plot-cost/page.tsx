import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Affects Cemetery Plot Cost, Gently Explained",
  description:
    "A caring look at what drives cemetery plot pricing for your family — location, cemetery type, and fees like perpetual care — and how to get a real number.",
  openGraph: { title: "What Affects Cemetery Plot Cost, Gently Explained", description: "A caring look at what drives cemetery plot pricing for your family — location, cemetery type, and fees like perpetual care — and how to get a real number." },

  twitter: { title: "What Affects Cemetery Plot Cost, Gently Explained", description: "A caring look at what drives cemetery plot pricing for your family — location, cemetery type, and fees like perpetual care — and how to get a real number." },
};

export default function CemeteryPlotCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Cemetery Plot Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What affects cemetery plot cost, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A cemetery plot is priced separately from anything a funeral home charges, by an
          entirely different business with its own rules. Here&apos;s what genuinely moves that
          price, so your family knows what to ask when you call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Location matters most
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cemetery pricing follows real estate logic more than anything else. Land near a busy
          metro area is scarcer and pricier than land in a small town or rural county, and that
          difference shows up directly in plot prices. Even within the same city, an older,
          well-established cemetery with limited remaining space can price quite differently than
          a newer one with more room to sell.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Public, religious, and private cemeteries each price differently
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A municipal or county-owned cemetery sometimes offers gentler rates for residents. A
          religious or fraternal cemetery may reserve space for members of that community, often
          at its own rate. Privately owned cemeteries set their own market pricing and often tier
          it within the property — a section with mature trees or a spot along the main path can
          carry a premium, the same way a nicer lot commands more in any real estate market.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What your family is actually buying
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Buying a plot buys the right to use that specific space for burial — an interment
          right — not land ownership the way a home works. Separate from the plot price, nearly
          every cemetery charges an opening-and-closing fee: the physical work of digging and
          later closing the grave. It&apos;s easy to budget for the plot and forget this second
          cost, so ask about it specifically.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Perpetual care — worth a gentle, direct question
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many cemeteries charge, or build into the plot price, a perpetual — or endowment — care
          fee that funds ongoing maintenance of the grounds for as long as the cemetery operates.
          Several states actually require this. What varies is whether it&apos;s already folded
          into your quote or billed separately, which is a common, easy source of confusion when
          comparing two cemeteries.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Getting an accurate, complete number</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Since none of this is standardized, the only reliable way to know actual cost is to
            gently contact cemeteries directly and ask whether the quote includes opening,
            closing, and perpetual care, or whether those come separately. That full total is the
            number worth building into your family&apos;s coverage.
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
