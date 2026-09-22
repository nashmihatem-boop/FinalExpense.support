import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What to Expect When You're Planning a Funeral",
  description:
    "A gentle, step-by-step walk through the funeral planning process, so your family knows what's coming at each stage.",
  openGraph: { title: "What to Expect When You're Planning a Funeral", description: "A gentle, step-by-step walk through the funeral planning process, so your family knows what's coming at each stage." },

  twitter: { title: "What to Expect When You're Planning a Funeral", description: "A gentle, step-by-step walk through the funeral planning process, so your family knows what's coming at each stage." },
};

export default function WhatToExpectPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / What to Expect
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What to expect when you&apos;re planning a funeral
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          If this is new to you, the number of decisions can feel overwhelming — often arriving
          within a day or two of losing someone. Please know none of it needs to be figured out
          alone, and none of it needs to happen all at once. Here&apos;s the general path most
          families walk, gently laid out step by step.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 1: Finding a provider
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The first practical step is placing your loved one in the care of a funeral home or
          cremation provider. If hospice was involved, their staff will often help make that first
          call for you. If no provider was chosen ahead of time, you&apos;re free to call a few
          before deciding — you don&apos;t owe loyalty to the first or nearest name. Providers are
          required by law to share pricing over the phone if you ask, so a quick round of calls is
          worth the small effort even while you&apos;re grieving.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 2: Sitting down together
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most of the real decisions get made in one sit-down, typically face-to-face at the
          funeral home. Someone will walk your family gently through the big questions —
          burial or cremation, and what the service itself should look like. Some families want
          a full traditional funeral with a viewing. Others prefer a memorial gathering with no
          body present, a simple graveside moment, or nothing formal at all. Alongside those
          questions, you&apos;ll be handed the home&apos;s itemized price list. Take your time
          with it. Bringing a second family member for support, carrying the price list home to
          read later, or simply asking for a day before deciding anything non-urgent are all
          completely normal requests, and any caring provider will expect them.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 3: The choices that shape the final cost
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Only a handful of choices from that meeting end up shaping most of the bill. Every
          provider charges a basic services fee no matter what else you choose — it simply
          covers their overhead and staff time, and there&apos;s no getting around it. From
          there, the bigger cost swings come from three things: embalming versus refrigeration
          (rarely something the law actually requires — a provider has to say so plainly when it
          does, rather than letting you assume), which casket or urn feels right for your
          family, and how the body will ultimately be laid to rest. One gentle reminder if
          burial is chosen: the cemetery is its own separate business with its own separate
          bill. The plot itself, the digging and closing of the grave, and any marker are
          usually invoiced by the cemetery, not folded into what the funeral home charges you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 4: The paperwork happening quietly alongside
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Behind the scenes, a second list of tasks is moving forward at the same time as the
          arrangements themselves. Someone needs to request certified copies of the death
          certificate — and it&apos;s wise to ask for more copies than feels necessary, since
          banks, insurance companies, and government offices will each insist on their own
          original. An obituary usually needs writing, and whatever permits your state requires
          for burial or cremation need filing too. The encouraging part: many funeral homes
          quietly absorb a good portion of this coordination into their basic services fee, so
          it&apos;s always worth asking your provider directly how much of it they&apos;ll
          handle for you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Step 5: Getting a real number before anything is signed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because every funeral home sets its own prices independently, there&apos;s really only
          one reliable way to learn your family&apos;s actual total: ask for it in writing,
          itemized, before you sign anything at all. If circumstances allow even a little
          breathing room, requesting a comparison quote from a second provider is a fair and
          common thing to do. And if you happen to be reading this well before any loss has
          occurred — simply planning ahead with care for the people you love — that&apos;s
          genuinely the best moment for this conversation, since a local provider can give you an
          honest estimate with nothing urgent hanging over either of you.
        </p>

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
