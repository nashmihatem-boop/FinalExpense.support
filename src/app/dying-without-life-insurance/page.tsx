import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Happens If Your Family Has No Life Insurance in Place",
  description:
    "A gentle, plain-language look at who ends up covering funeral and final expenses when there's no life insurance policy already in place.",
  openGraph: { title: "What Happens If Your Family Has No Life Insurance in Place", description: "A gentle, plain-language look at who ends up covering funeral and final expenses when there's no life insurance policy already in place." },

  twitter: { title: "What Happens If Your Family Has No Life Insurance in Place", description: "A gentle, plain-language look at who ends up covering funeral and final expenses when there's no life insurance policy already in place." },
};

export default function DyingWithoutLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What happens if your family has no life insurance in place
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          We&apos;re not sharing this to alarm you — only to help. Understanding, gently, what
          actually happens financially when someone passes without coverage in place is genuinely
          the clearest way to see what life insurance is truly meant to do.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A funeral bill doesn&apos;t wait for anything to get sorted
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral homes typically expect payment at or near the time of service, long before an
          estate has been settled or other financial matters worked through. Without a policy or
          prepaid arrangement already quietly in place, that bill usually lands on whoever&apos;s
          willing and able to pay it — most often immediate family, sometimes putting the cost on
          a credit card or taking out a personal loan simply to keep things moving on a tight
          timeline.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The estate helps eventually, but rarely quickly
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A person&apos;s own estate is generally the first place used to pay outstanding debts
          and final costs, before anything reaches heirs. In practice, though, that process —
          probate — takes real time, and many estates simply don&apos;t hold enough easily
          accessible cash to cover a funeral bill due right away. Even once the estate proves more
          than sufficient, &quot;eventually&quot; offers little comfort on the day a funeral home
          needs to be paid.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          It rarely shows up as a single, simple bill
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and burial costs tend to arrive alongside everything else that doesn&apos;t
          pause for a loss — final medical bills, existing credit card balances, and ongoing
          household costs like rent, a mortgage, or utilities. On their own, none of these may
          feel unmanageable. All arriving at once, layered onto a new funeral bill, and often
          alongside the loss of household income, is genuinely what puts families in a difficult
          financial spot.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What having coverage gently changes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A life insurance or final expense policy exists for exactly this reason — to close this
          gap before it ever opens. Rather than family members quietly covering costs out of
          pocket and sorting out reimbursement later, a named beneficiary can typically receive
          the death benefit in cash within days of filing a claim — money that&apos;s simply
          theirs to use right away, with no probate process required first. It doesn&apos;t
          soften the loss itself. It just means the people left behind aren&apos;t also left
          holding the bill.
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
