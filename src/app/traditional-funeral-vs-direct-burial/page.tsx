import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Traditional Funeral vs. Direct Burial, Chosen with Care",
  description:
    "A gentle comparison of what a traditional funeral involves next to direct burial — what each costs, what each skips, and how to find what fits your family.",
  openGraph: { title: "Traditional Funeral vs. Direct Burial, Chosen with Care", description: "A gentle comparison of what a traditional funeral involves next to direct burial — what each costs, what each skips, and how to find what fits your family." },

  twitter: { title: "Traditional Funeral vs. Direct Burial, Chosen with Care", description: "A gentle comparison of what a traditional funeral involves next to direct burial — what each costs, what each skips, and how to find what fits your family." },
};

export default function TraditionalFuneralVsDirectBurialPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Traditional funeral vs. direct burial, chosen with care
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          One of the very first decisions a family faces is also one of the biggest, since it
          quietly shapes almost everything that comes after — whether there&apos;s a viewing, what
          kind of service takes place, and when.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a traditional service quietly includes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Picture the version most people think of by default: embalming, a viewing or visitation
          where loved ones can gather with the body present, a formal service — often held at a
          funeral home or place of worship — and a procession out to the cemetery afterward. It
          has stayed the cultural standard for so long because it gives a community something
          concrete: a structured, in-person way to show up and say goodbye together.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why direct burial gently costs less
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Direct burial quietly removes several of those steps. There&apos;s usually no embalming,
          no public viewing, and no formal service beforehand — just a simple container and a
          burial that happens fairly soon after death. Because so much of the preparation,
          staffing, and facility time falls away, the cost comes down with it, even though the
          person still rests in exactly the same place in the end.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Leaving room for your own kind of goodbye
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Choosing direct burial doesn&apos;t mean skipping a gathering — it just separates it out.
          Many families choose this path specifically so they can hold a celebration of life
          later, wherever and whenever feels right, shaped entirely around what actually matters to
          them rather than a set format. The practical task of burial and the more personal work of
          remembering someone don&apos;t have to happen on the same day, or in the same way.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Gently finding what&apos;s right for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There isn&apos;t one answer that fits everyone here — faith, culture, what your loved one
          would have wanted, and what actually helps you grieve all play a part. Some families lean
          on the structure and immediacy a traditional funeral offers. Others find more space to
          process loss through a simpler burial, followed by a celebration of life planned without
          the same time pressure. Neither path is more &quot;right&quot; than the other.
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
