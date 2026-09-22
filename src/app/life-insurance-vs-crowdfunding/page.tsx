import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance vs. Crowdfunding a Funeral",
  description:
    "A caring look at how an online fundraiser, which depends on your network's generosity and timing, compares to the certainty of a life insurance policy already in place.",
  openGraph: { title: "Life Insurance vs. Crowdfunding a Funeral", description: "A caring look at how an online fundraiser, which depends on your network's generosity and timing, compares to the certainty of a life insurance policy already in place." },

  twitter: { title: "Life Insurance vs. Crowdfunding a Funeral", description: "A caring look at how an online fundraiser, which depends on your network's generosity and timing, compares to the certainty of a life insurance policy already in place." },
};

export default function LifeInsuranceVsCrowdfundingPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Life insurance vs. crowdfunding a funeral
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Online fundraisers have become a common way families try to
          cover funeral costs after an unexpected loss. It&apos;s worth
          sitting with how that actually compares to having a life
          insurance policy already in place, quietly waiting to help.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How crowdfunding works, and where it falls short
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A crowdfunding campaign depends entirely on your network —
          their willingness to give, their ability to give, and how many
          of them actually see the post in time. There&apos;s no
          guarantee of reaching a particular amount, and no guarantee of
          reaching it quickly, even though funeral costs are often due
          almost immediately. A campaign that eventually succeeds can
          still arrive too late to help with the bills that needed to be
          paid up front.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          It puts the burden on a grieving family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Setting up and promoting a fundraiser takes effort at exactly
          the moment a family has the least capacity for it. Instead of
          something already arranged and waiting to be used, crowdfunding
          asks someone who&apos;s actively grieving to write the appeal,
          share it publicly, and often keep asking if the initial
          response is slow — a real emotional weight on top of the
          financial one, at the worst possible time to carry it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a life insurance policy offers your family instead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A life insurance policy replaces all of that uncertainty with a
          contracted, known amount, payable directly to the person you
          choose. It doesn&apos;t depend on how many people see a post,
          how generous anyone is feeling that particular week, or how
          compelling the appeal is written. It&apos;s already in place
          before it&apos;s ever needed, which means no one you love has
          to ask anyone for anything.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A fair way to think about both
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This isn&apos;t to say crowdfunding has no place — it can be a
          reasonable fallback when there genuinely wasn&apos;t a policy
          in place. But that&apos;s the honest framing: it&apos;s a
          backup for the absence of planning, not a substitute for it. A
          policy arranged in advance is the version of this that
          doesn&apos;t depend on anyone else&apos;s generosity, or their
          timing — just on the plans you made because you cared enough
          to make them.
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
