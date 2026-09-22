import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Gentle Ways to Reduce Funeral Costs",
  description:
    "A caring, practical guide to lowering funeral costs — your rights under the FTC Funeral Rule, simpler service options, and veteran benefits worth checking.",
  openGraph: { title: "Gentle Ways to Reduce Funeral Costs", description: "A caring, practical guide to lowering funeral costs — your rights under the FTC Funeral Rule, simpler service options, and veteran benefits worth checking." },

  twitter: { title: "Gentle Ways to Reduce Funeral Costs", description: "A caring, practical guide to lowering funeral costs — your rights under the FTC Funeral Rule, simpler service options, and veteran benefits worth checking." },
};

export default function ReduceFuneralCostsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Gentle ways to reduce funeral costs
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A meaningful goodbye doesn&apos;t have to come with an overwhelming bill. A few
          practical choices, made calmly and with the right information in hand, can quietly bring
          the total down without asking anyone to compromise on saying a proper farewell.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          You have real rights here, protected by federal law
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The FTC&apos;s Funeral Rule quietly protects you at every funeral home in the country.
          You&apos;re entitled to an itemized General Price List before agreeing to anything, and
          you&apos;re free to select only the specific items and services you actually want —
          nothing bundles you into paying for things you didn&apos;t ask for. If you bring your own
          casket or urn from an outside source, the home isn&apos;t allowed to charge you a
          handling fee for it either.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The single biggest lever: choosing a simpler kind of service
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nothing moves the total more than the choice between a traditional funeral and something
          simpler like{" "}
          <Link href="/traditional-funeral-vs-direct-burial" className="font-semibold text-harbor-mid hover:underline">
            direct cremation or direct burial
          </Link>
          . Skipping embalming, a viewing, and an elaborate service removes a large share of the
          cost on its own, while still leaving plenty of room for a heartfelt memorial afterward, on
          your own terms and timeline.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A few more gentle ways to bring the number down
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A casket bought from a third-party retailer, rather than through the funeral home
          itself, is often meaningfully cheaper for the exact same product. Many families also opt
          for a simple, smaller gathering now, then hold a fuller celebration of life later on —
          separating the practical, time-sensitive tasks from the emotional gathering everyone
          actually wants to be part of. If your loved one served in the military, it&apos;s worth
          checking the veteran burial benefits available in{" "}
          <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
            your state
          </Link>
          , which can quietly cover a meaningful share of the cost.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why coverage still matters, even with a simpler plan
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Even the leanest, most carefully planned service comes with{" "}
          <Link href="/hidden-costs-of-dying" className="font-semibold text-harbor-mid hover:underline">
            costs that show up quietly
          </Link>{" "}
          beyond the funeral home&apos;s own bill. A modest final expense policy is there to gently
          absorb whatever remains, so your family is never left figuring out how to pay for a
          goodbye on short notice.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
