import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is a Celebration of Life Service, Gently Explained",
  description:
    "A caring look at how a celebration of life gently compares to a traditional funeral, what it can include, and how it fits with burial or cremation.",
  openGraph: { title: "What Is a Celebration of Life Service, Gently Explained", description: "A caring look at how a celebration of life gently compares to a traditional funeral, what it can include, and how it fits with burial or cremation." },

  twitter: { title: "What Is a Celebration of Life Service, Gently Explained", description: "A caring look at how a celebration of life gently compares to a traditional funeral, what it can include, and how it fits with burial or cremation." },
};

export default function CelebrationOfLifePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a &quot;celebration of life&quot; service, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Families planning how to honor someone they&apos;ve lost have real flexibility with a
          celebration of life — it&apos;s less a fixed format and more a gentle approach. Here&apos;s
          what tends to set it apart, and how it can fit alongside more traditional choices.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it gently differs from a traditional funeral
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A traditional funeral tends to follow a familiar shape — often religious, generally
          formal, and usually scheduled close to burial itself. A celebration of life moves much
          more freely by design. It leans personal, often more relaxed, and built entirely around
          the specific person&apos;s life and personality rather than any set order of service.
          There&apos;s no single blueprint for what it looks like, which is part of the appeal for
          families hoping for something that genuinely feels like the person being remembered.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where it gently fits alongside burial or cremation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Families often hold a celebration of life separately from — and sometime after — the
          actual disposition of remains, meaning burial or cremation happens quietly on its own,
          often soon after death, while the larger gathering waits for a later date. This pairs
          especially well with cremation, since it lifts the time pressure that traditional burial
          can carry, giving your family breathing room to plan a gathering for whatever date and
          place genuinely works. Still, a celebration of life isn&apos;t reserved for cremation
          alone — it pairs just as naturally with burial, either replacing or sitting alongside a
          more traditional service.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What it can gently include
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          With no fixed script to follow, the shape of it is truly up to your family. Common
          touches include sharing photos or video, playing music the person loved, and open time
          for family and friends to speak or share memories — sometimes somewhere tied closely to
          the person&apos;s life, like a home, a park, or a favorite restaurant, rather than a
          funeral home or place of worship. Some families weave in traditional elements, like a
          religious reading or a eulogy; others skip that entirely in favor of something closer to
          a warm gathering or reception.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why this gently matters for planning ahead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because a celebration of life bends to whatever a family chooses, its cost and shape
          depend heavily on those choices — a rented venue, catering, travel for guests, and other
          personal touches can add up quite differently than a standard service would. Having
          funds already set aside, through a life insurance or final expense policy, gives your
          family the room to plan the kind of gathering that genuinely fits, rather than settling
          for whatever feels most affordable in the moment.
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
