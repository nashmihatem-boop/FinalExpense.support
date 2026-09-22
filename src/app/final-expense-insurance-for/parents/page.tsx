import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for Your Parents, Gently Explained",
  description:
    "A caring guide to how adult children typically start this conversation, what your parent needs to be part of, and how payment and ownership usually work.",
  openGraph: { title: "Final Expense Insurance for Your Parents, Gently Explained", description: "A caring guide to how adult children typically start this conversation, what your parent needs to be part of, and how payment and ownership usually work." },

  twitter: { title: "Final Expense Insurance for Your Parents, Gently Explained", description: "A caring guide to how adult children typically start this conversation, what your parent needs to be part of, and how payment and ownership usually work." },
};

export default function ParentsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Parents
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for your parents, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Of everyone who visits this guide, adult children arranging coverage for a parent make
          up the largest group by far. Usually it starts small — noticing mom or dad doesn&apos;t
          have anything in place, or that an old policy quietly lapsed — and deciding gently to do
          something before it becomes urgent. If that&apos;s you, here&apos;s the path most
          families walk.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why adult children take this on
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s rarely a planned project from the start. More often something nudges it into
          motion — a recent health scare, helping settle a relative&apos;s funeral and suddenly
          seeing how fast the decisions and costs pile up, or simply hearing a parent mention they
          &quot;never quite got around to it.&quot; Sometimes a parent genuinely can&apos;t manage
          the process alone anymore, whether that&apos;s researching options or just making the
          call. And sometimes the reason is simpler still: wanting the peace of knowing it&apos;s
          handled, rather than hoping it happens eventually on its own.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Gently starting the conversation with your parent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          This part is usually harder than any paperwork that follows. It helps to frame things
          around peace of mind rather than mortality — you&apos;re not asking your parent to sit
          with thoughts of dying, you&apos;re gently offering to take one lasting worry off their
          plate. It also helps to treat your parent as a full, equal partner in the decision,
          never someone the decision simply happens to. Ask what they&apos;d genuinely want for a
          service, whether they&apos;ve quietly thought about preferences you don&apos;t know yet,
          and whether they&apos;ve looked into coverage before. Some parents have been avoiding it
          out of discomfort and feel quietly relieved someone else finally raised it; others want
          to feel like they&apos;re steering the decision, not just being told about it afterward.
          Either way, walking in ready to listen tends to land far better than walking in with
          everything already decided.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What your parent still needs to be part of
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You can gladly handle most of the legwork — researching options, talking with an agent,
          comparing what&apos;s out there — but your parent is the one being insured, and that
          brings requirements nobody can skip on their behalf. They&apos;ll need to consent to the
          policy themselves, answer the health questions in their own words (since only they truly
          know their medical history and current medications), and sign the application
          personally. This isn&apos;t empty formality — it&apos;s both a legal requirement rooted
          in insurable interest and consent, and a genuine safeguard, since answers filled in on a
          parent&apos;s behalf risk not matching what their medical or prescription records
          actually show. That kind of mismatch is precisely what can put a family&apos;s claim at
          risk later. Please plan for your parent to be present, even briefly, for the real
          application call.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How payment and ownership gently tend to work
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s quite common for the adult child to own the policy and pay the premium, while
          the parent remains simply the insured. Ownership is what gives you control — the ability
          to keep the policy current, manage it, and update details down the road — while your
          parent&apos;s role stays limited to being the person the coverage protects. Who receives
          the money is an entirely separate decision: many families name the adult child
          who&apos;s paying, some split it evenly among siblings, and some leave it to the parent
          to choose regardless of who&apos;s covering the bill. If siblings are involved, it&apos;s
          worth agreeing on this together ahead of time rather than assuming everyone sees it the
          same way — beneficiary and payment responsibility don&apos;t need to match, but quiet
          confusion about who&apos;s doing what is an easy, avoidable source of family friction
          later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If a health condition is part of your parent&apos;s picture
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most parents in the age range where this conversation comes up carry at least one
          diagnosed condition, and please know that&apos;s entirely normal — it doesn&apos;t mean
          the door is closed. Simplified-issue underwriting is built around a short set of health
          questions rather than a medical exam, and plenty of common conditions still qualify for
          full, day-one coverage. Our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          gently walks through how insurers typically evaluate specific conditions, and what to
          expect if your parent has one.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
