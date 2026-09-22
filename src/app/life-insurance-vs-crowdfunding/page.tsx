import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. Crowdfunding a Funeral, Gently Compared",
  description:
    "Online fundraisers depend on your network's generosity and timing. A caring look at how that compares to a life insurance policy's guaranteed payout.",
  openGraph: { title: "Life Insurance vs. Crowdfunding a Funeral, Gently Compared", description: "Online fundraisers depend on your network's generosity and timing. A caring look at how that compares to a life insurance policy's guaranteed payout." },

  twitter: { title: "Life Insurance vs. Crowdfunding a Funeral, Gently Compared", description: "Online fundraisers depend on your network's generosity and timing. A caring look at how that compares to a life insurance policy's guaranteed payout." },
};

export default function LifeInsuranceVsCrowdfundingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. crowdfunding a funeral, gently compared
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Online fundraisers have quietly become a common way families try to cover funeral costs
          after a sudden loss. It&apos;s worth gently understanding how that genuinely compares to
          simply having a life insurance policy already in place beforehand.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How crowdfunding genuinely works, and where it falls short
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A crowdfunding campaign leans entirely on your own network — their willingness to give,
          their ability to give, and simply how many of them happen to see the post in time.
          There&apos;s no promise of reaching any particular amount, and no promise of reaching it
          quickly, even though funeral bills are often due almost immediately. A campaign that
          eventually succeeds can still arrive too late to help with costs that needed covering
          right away.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          It quietly places the burden on a grieving family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Setting up and promoting a fundraiser takes real effort, at precisely the moment a
          family has the least capacity to give it. Rather than something already gently arranged
          and simply waiting to be used, crowdfunding asks someone actively grieving to write the
          appeal, share it publicly, and often keep gently asking if the response is slow — a real
          emotional cost layered on top of the financial one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a life insurance policy promises instead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A life insurance policy replaces all of that uncertainty with a contracted, known
          amount, paid directly to a named beneficiary. It never depends on how many people happen
          to see a post, how generous anyone feels that particular week, or how well the appeal
          happens to be written. It&apos;s already quietly in place long before it&apos;s ever
          needed, meaning nobody has to ask anyone for anything at all.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A fair, gentle way to weigh them
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          None of this means crowdfunding has no place at all — it can genuinely serve as a
          reasonable supplement or fallback when a policy simply wasn&apos;t there in advance. But
          that&apos;s the honest way to frame it: a backup for the absence of planning, never a
          substitute for it. A policy arranged ahead of time is the version of this that
          doesn&apos;t depend on anyone else&apos;s generosity, or their timing.
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
