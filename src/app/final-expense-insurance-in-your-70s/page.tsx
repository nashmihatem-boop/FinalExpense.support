import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 70s, Gently Explained",
  description:
    "A caring look at why your 70s are one of the most common ages to buy final expense insurance, and how to handle health questions with confidence.",
  openGraph: { title: "Final Expense Insurance in Your 70s, Gently Explained", description: "A caring look at why your 70s are one of the most common ages to buy final expense insurance, and how to handle health questions with confidence." },

  twitter: { title: "Final Expense Insurance in Your 70s, Gently Explained", description: "A caring look at why your 70s are one of the most common ages to buy final expense insurance, and how to handle health questions with confidence." },
};

export default function FinalExpenseInsuranceInYour70sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 70s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 70s, gently explained
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-reading-porch.jpg"
            alt="A woman in her 70s reading on a porch"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          Whenever we look at who&apos;s actually calling us about this coverage, the 70s come out
          ahead of every other decade, by a wide margin. That single fact matters more than it
          might seem — it means insurers have spent years quietly refining exactly how they treat
          applicants at this stage of life.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          You&apos;re arriving right on time, not late
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          More families settle on final expense coverage in their 70s than in any other decade of
          life. Both simplified issue and guaranteed acceptance see genuine, everyday use here, and
          the health questions on most simplified-issue applications were quietly built with
          exactly this age group in mind. If you&apos;re just now starting to look into this in
          your 70s, please don&apos;t feel behind — you&apos;ve simply arrived at the moment this
          coverage was designed around.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Having something to disclose is genuinely the norm here
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          By this decade, most families we talk with are managing at least one condition worth
          mentioning — something with the heart, diabetes, an earlier cancer, COPD, arthritis.
          That&apos;s simply the ordinary shape of health in your 70s, never a disqualifying one,
          and it&apos;s precisely the ground our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          is built to gently cover — how each condition tends to be viewed, and roughly where it
          typically lands.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Please don&apos;t assume guaranteed issue is your only path
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s a common, understandable assumption that having a condition to mention
          means skipping straight to guaranteed acceptance — and gently, that assumption is often
          simply wrong. Level and graded coverage through simplified issue stay well within reach
          in your 70s, largely depending on how stable and well cared for your condition already
          is. Before deciding which category fits your family, take a look at{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            how insurers actually sort applicants into level, graded, modified, or guaranteed
          </Link>
          .
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          This is exactly when shopping around pays off most
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because each insurer writes its own health questions and sets its own look-back
          timeline, and because so many more 70-year-olds than 50- or 60-year-olds have something
          to disclose, picking the right insurer versus simply picking the first one matters more
          than ever at this age. It&apos;s worth reading{" "}
          <Link href="/pre-existing-conditions#why-carriers-differ" className="text-harbor-mid underline">
            why the exact same condition can lead two insurers to two different answers
          </Link>{" "}
          before settling on where your family applies.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-80s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 80s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-60s" className="font-semibold text-harbor-mid hover:underline">
              ← What was different in your 60s
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
