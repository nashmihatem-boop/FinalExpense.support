import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Employer Life Insurance vs. Owning Your Own Policy",
  description:
    "Group life insurance through work is often free, but it's usually small and tied to your job. A gentle look at how it compares to a policy you own yourself.",
  openGraph: { title: "Employer Life Insurance vs. Owning Your Own Policy", description: "Group life insurance through work is often free, but it's usually small and tied to your job. A gentle look at how it compares to a policy you own yourself." },

  twitter: { title: "Employer Life Insurance vs. Owning Your Own Policy", description: "Group life insurance through work is often free, but it's usually small and tied to your job. A gentle look at how it compares to a policy you own yourself." },
};

export default function EmployerVsIndividualLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Employer life insurance vs. owning your own policy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          So many people&apos;s only life insurance is whatever their employer quietly enrolled
          them in, without ever realizing how different that coverage genuinely is from a policy
          they&apos;d choose on their own. Both have a real place — but understanding what group
          coverage actually promises, and when it gently disappears, changes how you should think
          about it.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What employer coverage genuinely gives you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Group life insurance through work is a real, meaningful benefit, and it&apos;s usually
          gentle on cost — often provided at no charge to you, or available to add for a modest
          payroll deduction. Since it&apos;s underwritten as a whole group rather than person by
          person, most employees are simply accepted without any individual health questions,
          which genuinely matters if your own health would otherwise make an individual policy
          harder to obtain. The tradeoff is size: employer coverage is typically a flat amount or
          a multiple of your salary, set by your employer&apos;s plan rather than by what your
          family would genuinely need.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          It quietly belongs to your job, not to you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The single most important thing to understand about group life insurance is that it
          belongs to your employer&apos;s plan, not to you personally. In most cases, it ends the
          moment your employment does — whether you leave on your own, get laid off, or retire —
          regardless of your health at that exact moment. Some employer plans gently offer a
          portability or conversion option letting you keep some form of coverage after you leave.
          Where that exists, it&apos;s worth knowing about, though it typically comes at a higher,
          individually rated premium than what you paid as part of the group, and there&apos;s
          usually only a narrow window after coverage ends to make that choice.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What owning your own policy looks like instead
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          An individual final expense or life insurance policy is underwritten specifically around
          you, at the moment you apply. Once it&apos;s in place, it&apos;s genuinely yours — the
          coverage and premium stay exactly where they are no matter what happens with your job
          afterward. You can change employers, retire, or stop working entirely, and the policy
          simply doesn&apos;t know the difference. That&apos;s the core tradeoff here: group
          coverage is often gentler on cost or free but conditional on employment, while an
          individual policy usually costs more out of pocket but carries no strings tied to your
          career.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Using both, without leaning on either one alone
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These two genuinely aren&apos;t competitors — plenty of families carry both at once.
          Group coverage through work can be a reasonable bonus layer while you&apos;re employed,
          especially when it costs you nothing. The real mistake is treating it as your entire
          plan. Because it can quietly vanish at the exact moment your life changes — a layoff, a
          career switch, retirement — the coverage meant to stay with your family no matter what
          is the kind you hold in your own name.
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
