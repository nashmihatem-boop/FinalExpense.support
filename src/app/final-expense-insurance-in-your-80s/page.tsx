import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable } from "@/components/final-expense/policy-types-table";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 80s, Gently Explained",
  description:
    "You likely haven't aged out. A caring look at applying for final expense insurance in your 80s, including when guaranteed issue is the gentle right fit.",
  openGraph: { title: "Final Expense Insurance in Your 80s, Gently Explained", description: "You likely haven't aged out. A caring look at applying for final expense insurance in your 80s, including when guaranteed issue is the gentle right fit." },

  twitter: { title: "Final Expense Insurance in Your 80s, Gently Explained", description: "You likely haven't aged out. A caring look at applying for final expense insurance in your 80s, including when guaranteed issue is the gentle right fit." },
};

export default function FinalExpenseInsuranceInYour80sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 80s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 80s, gently explained
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-candid-smile-outdoors.jpg"
            alt="A woman in her 80s smiling outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          We hear a version of the same worry constantly from families reaching out in their 80s:
          &quot;isn&apos;t it too late for this?&quot; Almost always, gently, no. There&apos;s
          real coverage still waiting for you here — just a small handful of things that look and
          feel a little different at this stage of life.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          That closed-door feeling is usually wrong
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Plenty of insurers keep their doors open for final expense applicants well past 80.
          Where that door actually closes is entirely up to each individual company — there&apos;s
          no shared industry cutoff, only each insurer&apos;s own maximum issue age, and those
          numbers differ more than people expect. Please don&apos;t quietly assume you&apos;ve
          aged past eligibility without checking first; that assumption turns out to be mistaken
          far more often than it&apos;s confirmed.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Guaranteed acceptance shows up more often at this age
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Health histories naturally grow longer with each passing decade, and that shift alone
          nudges more 80-something applicants toward the guaranteed-acceptance side of things.
          There, health questions disappear entirely, and anyone inside the eligible age window is
          welcomed regardless of history — the tradeoff is a two-year wait attached to natural-
          cause death. It&apos;s far from the only door open to you at this age, simply one that
          more families are walking through than they were ten or twenty years earlier.
        </p>
        <PolicyTypesTable />

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Please rule out simplified issue before settling
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Age by itself never automatically points a family toward guaranteed acceptance. A good
          number of people in their 80s are healthy enough to still clear simplified issue
          instead — coming in at a gentler price for identical coverage, and with no waiting
          period standing between your family and the full benefit. Before quietly settling for
          guaranteed acceptance because it feels like the obvious fit for your age, let your actual
          health answers be reviewed first. Our{" "}
          <Link href="/final-expense-insurance/biggest-mistakes" className="text-harbor-mid underline">
            rundown of common shopping mistakes
          </Link>{" "}
          walks through this exact, easy-to-fall-into trap in more depth.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Thinking through the right coverage amount now
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          At this stage, most families gently narrow their focus down to what genuinely matters —
          funeral, burial, or cremation costs, and simply making certain no adult child quietly
          inherits the leftover balance. If cremation is part of what your family has in mind, our{" "}
          <Link href="/final-expense-insurance/cremation-coverage" className="text-harbor-mid underline">
            guide to how final expense insurance works alongside cremation
          </Link>{" "}
          gently explains exactly what the benefit covers, and where its limits sit.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance/is-it-worth-it" className="font-semibold text-harbor-mid hover:underline">
              Still deciding? An honest look at whether it&apos;s worth it →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-70s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 70s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
