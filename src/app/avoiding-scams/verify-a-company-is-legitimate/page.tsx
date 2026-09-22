import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Making Sure a Company Is Who They Say They Are",
  description:
    "A gentle, step-by-step way to check a carrier's and agent's state license, confirm an NPN, and recognize payment requests no caring insurance company would ever make.",
  openGraph: { title: "Making Sure a Company Is Who They Say They Are", description: "A gentle, step-by-step way to check a carrier's and agent's state license, confirm an NPN, and recognize payment requests no caring insurance company would ever make." },

  twitter: { title: "Making Sure a Company Is Who They Say They Are", description: "A gentle, step-by-step way to check a carrier's and agent's state license, confirm an NPN, and recognize payment requests no caring insurance company would ever make." },
};

export default function VerifyCompanyIsLegitimatePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Making sure a company is who they say they are
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Before your family shares any health history, personal details, or payment information,
          a few gentle checks are all it takes to confirm you&apos;re really talking to who you
          think you are. None take more than a few minutes, and every single one is free.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Check the state license — for both the company and the agent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every state runs an insurance department (sometimes called a Department of Insurance,
          sometimes a Division of Insurance) that licenses every company and every individual
          agent allowed to sell there. That license is public record, and every state offers a
          free lookup where you can search a company or agent by name to see whether their
          license is active and in good standing. If you&apos;re not sure where to find your
          state&apos;s regulator, the National Association of Insurance Commissioners keeps a
          helpful directory at{" "}
          <a
            href="https://www.naic.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-harbor-mid underline"
          >
            naic.org
          </a>
          . This isn&apos;t a specialized skill reserved for experts — it&apos;s the same tool
          regulators want ordinary families to use.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Ask for the agent&apos;s license number
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A licensed agent is issued a National Producer Number, or NPN, the moment they become
          licensed — a personal ID that stays with them no matter which company they represent at
          the time. A genuinely caring agent will hand you this number without any hesitation, and
          you can look it up through the same state tools mentioned above. If someone hesitates,
          deflects, or simply can&apos;t produce a license number, take that as your family&apos;s
          cue to slow down and verify before going any further.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Notice how you&apos;re being asked to pay
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Legitimate carriers collect premium in ordinary, traceable ways — a bank draft, a check
          made out to the company itself, or a card charged directly by the carrier. None of that
          requires anything unusual. If anyone asks your family to pay by wire transfer, gift
          cards, cryptocurrency, or cash through the mail, stop right there — real insurance
          companies simply never ask for payment that way. Those methods all share one thing that
          has nothing to do with insurance: once the money is sent, it&apos;s nearly impossible to
          trace or bring back.
        </p>
        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A gentle rule of thumb</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            If a payment method would work just as well for a stranger pretending to be a
            grandchild in trouble, it&apos;s not a payment method a real insurance company would
            ever ask your family for either.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          We&apos;re genuinely fine with you checking us too
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This site exists to connect families with licensed insurance agents, so it would feel a
          little hollow to write a guide about staying safe without saying plainly: please run
          these same checks on us. Ask for a license number. Look up any carrier we mention. A
          caring, legitimate agency has nothing to lose from a five-minute check — and honestly,
          your family shouldn&apos;t have to take anyone&apos;s word for it, ours included.
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
