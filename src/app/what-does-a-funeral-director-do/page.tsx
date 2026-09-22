import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What a Funeral Director Actually Does for Your Family",
  description:
    "A caring look at the real role a funeral director plays — handling logistics and paperwork, preparing your loved one, and gently guiding a grieving family.",
  openGraph: { title: "What a Funeral Director Actually Does for Your Family", description: "A caring look at the real role a funeral director plays — handling logistics and paperwork, preparing your loved one, and gently guiding a grieving family." },

  twitter: { title: "What a Funeral Director Actually Does for Your Family", description: "A caring look at the real role a funeral director plays — handling logistics and paperwork, preparing your loved one, and gently guiding a grieving family." },
};

export default function WhatDoesAFuneralDirectorDoPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What a funeral director actually does for your family
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          When someone dies, a funeral director quickly becomes one of the first people a grieving,
          exhausted family leans on. The role reaches well past simply running a service —
          it&apos;s logistics, paperwork, technical care, and steady guidance, all at once, exactly
          when a family has the least energy to handle any of it alone.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Quietly handling the logistics
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Behind a service a family sees only a small piece of, a funeral director is managing
          transportation of the deceased, coordinating with the cemetery or crematory, scheduling
          the service and any visitation, and arranging clergy or officiants if asked. Much of it
          comes together on a tight timeline, carried by someone else, so a grieving family
          isn&apos;t the one juggling the moving pieces.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Carrying the permits and paperwork
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Death brings a surprising wall of official paperwork with it, and a funeral director
          typically carries most of that weight — filing for the death certificate, securing
          permits for burial or cremation, and often walking a family through next steps like
          notifying Social Security or starting a life insurance claim. Most families have never
          touched this process before, which is exactly why having someone who handles it every day
          matters so much.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Caring for your loved one directly
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          With real technical skill and genuine dignity, a funeral director cares for the person
          who died in ways most families never think about until it&apos;s needed — embalming and
          preparation ahead of a viewing, or something simpler ahead of a direct cremation or
          burial. The exact steps shift depending on what the family has chosen, but the underlying
          care given stays the same either way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Gently guiding hard decisions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The quietest part of the job may be the most human one. A funeral director walks a family
          through choices most of them have never faced before — what kind of service, if any;
          burial or cremation; what to include and what simply isn&apos;t needed — all while
          staying aware they&apos;re speaking with people who are grieving, not shopping. A good one
          lays out the options honestly and never pushes a family toward more than they actually
          want.
        </p>

        <p className="mt-8 text-base leading-relaxed text-charcoal/80">
          Every one of those decisions carries a cost. Having coverage already in place — with a
          beneficiary ready to pay the funeral home directly, on your family&apos;s own timeline —
          quietly removes one more thing to figure out in the middle of it all.
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
