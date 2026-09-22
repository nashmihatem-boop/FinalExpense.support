import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "The Quiet Costs of Dying Families Rarely Plan For",
  description:
    "Beyond the funeral itself — probate, medical bills, debt, final utility payments, family travel, and lost income are costs many families never see coming.",
  openGraph: { title: "The Quiet Costs of Dying Families Rarely Plan For", description: "Beyond the funeral itself — probate, medical bills, debt, final utility payments, family travel, and lost income are costs many families never see coming." },

  twitter: { title: "The Quiet Costs of Dying Families Rarely Plan For", description: "Beyond the funeral itself — probate, medical bills, debt, final utility payments, family travel, and lost income are costs many families never see coming." },
};

export default function HiddenCostsOfDyingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          The quiet costs of dying that families rarely plan for
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          When someone starts thinking about the cost of a death in the family, the funeral is
          almost always the first thing that comes to mind — often the only thing. A funeral is
          rarely the last bill to arrive, though. Several other costs tend to quietly surface in
          the weeks and months that follow, and precisely because they&apos;re so easy to overlook
          ahead of time, they&apos;re also the ones most likely to catch a family off guard.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Probate and settling the estate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          When someone owned property solely in their own name — a house, a car, a bank account
          with no beneficiary named — that property generally has to pass through probate first,
          the court process that validates a will (or applies state law when there isn&apos;t
          one) and formally hands over ownership. Probate can carry court filing fees, and often
          needs an attorney or executor to manage paperwork, notify creditors, and see everything
          through. It also takes real time, sometimes months, during which certain assets may
          simply not be available to the family yet.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Medical bills still quietly arriving
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A final illness often brings a final wave of medical bills — hospital stays,
          specialists, equipment, home health care — some of which may keep arriving after death
          itself. Depending on how they&apos;re structured, certain bills become a claim against
          the estate rather than a debt any one family member personally owes, but they still have
          to be settled before an estate can close, and they&apos;re rarely small.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Credit cards and other personal debt
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Credit card balances, personal loans, and similar unsecured debt generally don&apos;t
          quietly vanish at death — they&apos;re typically settled from the estate before anything
          reaches heirs. Families are often caught off guard by how much of an estate&apos;s value
          ends up going toward debts most people never thought to file under &quot;final
          expenses&quot; at all.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Utility and everyday household bills that keep coming
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Life doesn&apos;t pause for grief. Rent or a mortgage payment, utilities, insurance
          premiums, and other recurring household bills keep quietly coming due, often while the
          family&apos;s attention is on far more pressing matters. Somebody still has to keep the
          lights on and the payments current until the household&apos;s affairs are settled, which
          can mean genuine out-of-pocket cost in the meantime.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Travel so family can gather for a service
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          When a family is scattered across different cities or states, getting everyone to a
          funeral or memorial service on short notice can add up fast — flights, lodging, rental
          cars, and time away from work, usually booked at the last minute rather than planned
          ahead. This cost rarely factors into funeral planning at all, even though it&apos;s
          genuinely real, and several family members often end up absorbing it individually.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Income that quietly stops arriving
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The financial weight of a death isn&apos;t only about bills showing up — it also
          includes income that no longer does. A surviving spouse may need to take unpaid time
          away from work to handle arrangements and simply grieve, and if the person who died
          contributed to the household&apos;s income, that gap doesn&apos;t close on its own. This
          is often the largest, least visible cost of all, precisely because it&apos;s an absence
          rather than a bill.
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/80">
          None of this is meant to discourage you — it&apos;s meant to gently help. Most of these
          costs are exactly what a modest life insurance policy is built to absorb: cash paid
          directly to your beneficiary, usable for whatever genuinely comes up, rather than
          restricted to a single funeral home&apos;s invoice.
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
