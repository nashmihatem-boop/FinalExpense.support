import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Life Insurance Riders, Gently Explained",
  description:
    "A caring look at what a rider is, how it attaches to a base policy, and a few common examples like accelerated death benefit and waiver-of-premium riders.",
  openGraph: { title: "Life Insurance Riders, Gently Explained", description: "A caring look at what a rider is, how it attaches to a base policy, and a few common examples like accelerated death benefit and waiver-of-premium riders." },

  twitter: { title: "Life Insurance Riders, Gently Explained", description: "A caring look at what a rider is, how it attaches to a base policy, and a few common examples like accelerated death benefit and waiver-of-premium riders." },
};

export default function LifeInsuranceRidersPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is a life insurance rider, gently explained?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A rider is simply an optional extra layered onto your base policy — something that
          bends or extends your coverage a bit beyond what the standard policy quietly promises
          on its own. Below are a handful of the more common ones, described in general terms.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The gentle idea behind it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Picture your base policy as the core promise: a death benefit, a premium, and the
          standard terms wrapped around them. A rider gets layered on top of that promise,
          adding something extra — a bit more flexibility, an additional benefit, or a tweak to
          how the policy behaves in one particular situation. Some riders carry their own small
          cost; others simply come bundled in, depending on the policy. Either way, nothing about
          a rider is mandatory — you choose whether to include one when you apply, and
          occasionally you can even add one afterward.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Accelerated death benefit (living benefit) riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This one tends to be the most familiar. It lets you, the policyholder, reach a portion
          of your own death benefit while you&apos;re still here, should you be diagnosed with a
          qualifying terminal illness — money meant to gently help with costs during that time,
          rather than waiting to reach a beneficiary only after death. Whatever you draw this way
          typically comes back out of what&apos;s left to pay as the death benefit later on.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Waiver-of-premium riders
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This rider gently solves a different problem entirely: staying covered if you become
          seriously ill or disabled in a way that makes continuing to pay genuinely difficult.
          Qualify for it, and a waiver-of-premium rider quietly pauses your premium requirement
          for a stretch, while your policy stays fully active — coverage simply continues even
          though payment has paused.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Riders that gently cover a child
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some base policies also offer a rider adding a modest bit of coverage for a
          policyholder&apos;s child, sparing you a fully separate policy. Think of it as a
          smaller, simpler cousin of the{" "}
          <Link href="/life-insurance-for-children" className="font-semibold text-harbor-mid hover:underline">
            standalone children&apos;s coverage
          </Link>{" "}
          described elsewhere on this site, just tucked into a parent&apos;s existing policy
          instead.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it&apos;s gently worth asking about
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Riders genuinely differ from policy to policy and insurer to insurer — what comes
          bundled in automatically, what costs extra, and what your family would actually
          qualify for. Asking specifically which riders are available, and what each would mean
          for your premium, is a completely fair question to bring to an agent before applying,
          not something you should have to discover afterward.
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
