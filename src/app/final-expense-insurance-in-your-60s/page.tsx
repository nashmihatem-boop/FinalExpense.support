import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 60s, Gently Explained",
  description:
    "A caring look at what changes when your family applies for final expense insurance in your 60s, including how pre-existing conditions start to factor in.",
  openGraph: { title: "Final Expense Insurance in Your 60s, Gently Explained", description: "A caring look at what changes when your family applies for final expense insurance in your 60s, including how pre-existing conditions start to factor in." },

  twitter: { title: "Final Expense Insurance in Your 60s, Gently Explained", description: "A caring look at what changes when your family applies for final expense insurance in your 60s, including how pre-existing conditions start to factor in." },
};

export default function FinalExpenseInsuranceInYour60sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 60s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 60s, gently explained
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-walking-outdoors.jpg"
            alt="A couple in their 60s walking together outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          There&apos;s a reason so many families reach out to us right around this decade —
          retiring, meeting a first grandchild, or gently walking a parent or friend through their
          own final arrangements tends to put the question front and center. If that&apos;s what
          brought you here, please know your 60s remain a genuinely strong window to apply, even
          as a few things start to shift from what your 50s looked like.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A decade insurers know especially well
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Something about retirement seems to make fixed costs and end-of-life planning feel real
          rather than distant. Whatever brings families to this decision at this age, your 60s
          still sit comfortably inside the age range nearly every insurer welcomes, with every
          coverage amount and both major policy types genuinely on the table. Because so many
          people apply at exactly this age, insurers have built up years of experience gently
          underwriting applicants just like you.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Health questions carry a little more weight now
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s simply true that more people in their 60s are living with something ongoing
          than people in their 50s — high blood pressure, cholesterol, a new joint, sleep apnea, an
          early diabetes diagnosis. None of that quietly closes any doors. When a condition is
          stable and being cared for well, it very often still clears simplified issue and lands
          your family at the full, day-one benefit. For specifics on your own situation, our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          gently walks through how particular conditions tend to be treated.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Every year you wait has a real cost attached
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your premium gets fixed at whatever age you happen to be the day you sign, and it stays
          that way for as long as the policy exists. Practically, this means a 60s rate will run a
          bit higher than the identical policy would have cost in your 50s — though it&apos;s
          still gentler than what that same coverage will cost if you wait until your 70s instead.
          However this decade found you, today is quietly the cheapest day left to decide.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A little preparation before you apply
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Before that first conversation, it helps enormously to have a simple list ready: which
          conditions apply and roughly when each began, what you&apos;re currently taking, and the
          broad strokes of your treatment history. Since insurers quietly check prescription
          records against whatever you tell them, getting these details right from the start
          spares your family any unpleasant surprises later. Our{" "}
          <Link href="/pre-existing-conditions#how-to-prepare" className="text-harbor-mid underline">
            guide to preparing before you apply
          </Link>{" "}
          covers this in gentle, full detail.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-70s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 70s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-50s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 50s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
