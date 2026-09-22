import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Does Life Insurance Cover Suicide? A Gentle, Honest Answer",
  description:
    "A gentle, factual explanation of how life insurance policies handle death by suicide, including the standard exclusion period, plus a support resource.",
  openGraph: { title: "Does Life Insurance Cover Suicide? A Gentle, Honest Answer", description: "A gentle, factual explanation of how life insurance policies handle death by suicide, including the standard exclusion period, plus a support resource." },

  twitter: { title: "Does Life Insurance Cover Suicide? A Gentle, Honest Answer", description: "A gentle, factual explanation of how life insurance policies handle death by suicide, including the standard exclusion period, plus a support resource." },
};

export default function DoesLifeInsuranceCoverSuicidePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Does life insurance gently cover death by suicide?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          We know this question comes from a tender place, and it&apos;s one we hear often. Here&apos;s
          a caring, honest answer — along with somewhere to turn if you or someone you love needs
          support right now.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">If you need someone to talk to right now</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            The 988 Suicide &amp; Crisis Lifeline is free, confidential, and there for you 24/7.
            Please feel free to{" "}
            <a href="tel:988" className="font-semibold text-harbor-mid hover:underline">
              call or text 988
            </a>{" "}
            anytime you or someone you care about needs support.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The gentle, short answer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Most life insurance policies, final expense coverage included, do provide coverage for
          death by suicide — just not unconditionally from the very first day. Nearly every
          policy carries a suicide exclusion period, typically the first two years the policy is
          active. Once that window has quietly passed, a death by suicide is generally treated
          like any other covered cause of death, with the full benefit paid to your family.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why this exclusion period exists at all
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Please know this isn&apos;t any kind of judgment about you or anyone else — it&apos;s
          simply a standard safeguard built into how these policies are put together across the
          entire industry. Many final expense policies are simplified issue, meaning approval
          comes quickly based on your answers to a short health questionnaire rather than a full
          medical exam. This exclusion period sits alongside the broader contestability period —
          the stretch during which an insurer can look closely at a claim — as a gentle, standard
          protection for that honor-based approach. It applies identically to every single
          applicant, automatically, as a printed term rather than any decision made about one
          particular person.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What happens if it occurs during that early window
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Should a death by suicide occur inside that initial period, most policies don&apos;t pay
          the full death benefit. Instead, they typically return whatever premiums were paid in,
          sometimes with interest added — gentle, in spirit, to how other early-period limits on
          these policies tend to work. Once that window has passed, this limitation simply no
          longer applies, and the policy covers suicide exactly the way it covers any other cause
          of death.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A standard term, never a special case
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It bears repeating gently: this exclusion period is a standard, printed term found in
          nearly every life insurance contract, simplified issue or otherwise. No carrier decides
          this case by case, and it isn&apos;t unique to any single company or policy type. Once
          it has passed, a suicide exclusion carries no more weight on a claim than any other
          early-period term that has already quietly run its course.
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
