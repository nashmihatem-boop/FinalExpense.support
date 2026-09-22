import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Guaranteed Issue Life Insurance, Gently Explained",
  description:
    "A caring look at how guaranteed-issue (guaranteed-acceptance) life insurance works, why it carries a waiting period, why it costs more, and who it's genuinely built for.",
  openGraph: { title: "Guaranteed Issue Life Insurance, Gently Explained", description: "A caring look at how guaranteed-issue (guaranteed-acceptance) life insurance works, why it carries a waiting period, why it costs more, and who it's genuinely built for." },

  twitter: { title: "Guaranteed Issue Life Insurance, Gently Explained", description: "A caring look at how guaranteed-issue (guaranteed-acceptance) life insurance works, why it carries a waiting period, why it costs more, and who it's genuinely built for." },
};

export default function GuaranteedIssueLifeInsurancePage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Guaranteed issue life insurance, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Guaranteed issue life insurance — sometimes called guaranteed acceptance — rests on a
          simple, caring promise: fall within the eligible age range, and you&apos;re approved,
          full stop. No health questions, no medical records pulled, no chance of a decline. That
          promise makes it one of the most accessible products in the entire life insurance
          market, and also one of the most gently misunderstood.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How guaranteed issue genuinely works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no application in the usual sense here. Nobody asks about health
          conditions, medications, or hospital visits, and nothing you might share can lead to a
          decline as long as you fall inside the carrier&apos;s eligible age window. That&apos;s
          the entire process — age, and nothing more. It stands in sharp contrast to simplified
          issue, which still asks a short list of health questions, and to fully underwritten
          policies, which involve an actual medical exam. Our guide to{" "}
          <Link href="/how-underwriting-works" className="font-semibold text-harbor-mid hover:underline">
            how underwriting works
          </Link>{" "}
          walks through that full spectrum gently, in more detail.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The waiting period, and why it&apos;s always quietly there
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Every guaranteed issue policy pairs that guaranteed approval with a waiting period —
          commonly two years — that applies specifically to death from natural causes. Should the
          insured pass away from natural causes during that window, the policy typically
          doesn&apos;t pay the full death benefit; instead, it generally returns the premiums
          paid, sometimes with interest. Death by accident is usually covered in full from day
          one, since that&apos;s never the risk the waiting period exists to manage. Once that
          window has passed, the policy pays the full benefit for any covered cause of death, and
          stays that way for the rest of the policy&apos;s life.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it&apos;s generally the priciest tier for the same coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because the carrier is welcoming every eligible applicant regardless of health, it&apos;s
          effectively pricing the policy for the entire pool at once — including people who would
          otherwise be declined or rated up under any other kind of underwriting. That unknown
          risk has to be priced in somewhere, which is exactly why guaranteed issue policies tend
          to be the most expensive option for a given amount of coverage, compared with a
          simplified-issue policy the same applicant might otherwise qualify for. The waiting
          period is really the other side of that same coin — it&apos;s what allows a carrier to
          offer guaranteed approval at all, without pricing every applicant as if they carried the
          highest possible risk forever.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Not quite &quot;no strings attached&quot;</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Guaranteed approval doesn&apos;t gently mean guaranteed full coverage on day one. The
            tradeoff for skipping health questions entirely is the waiting period — treat the two
            as a single package, not two separate features you might somehow get without the
            other.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Who this product is genuinely built for
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Guaranteed issue was never meant to be everyone&apos;s first choice — it was built to be
          available to everyone. It exists specifically for people without a simplified-issue
          option: someone previously declined by a carrier, or someone living with a serious
          health condition — currently on oxygen, on dialysis, in active cancer treatment, or
          facing another one of the &quot;knockout&quot; conditions that rule out simplified issue
          entirely. For that person, guaranteed issue isn&apos;t some lesser version of a better
          product; it&apos;s often the only genuine path to coverage at all, which is exactly the
          gap it was built to fill. If you haven&apos;t been declined and don&apos;t carry a
          serious health condition, simplified issue is usually worth ruling out first, since it
          tends to cost less for the same coverage and typically skips the waiting period
          entirely. See our{" "}
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            pre-existing conditions guide
          </Link>{" "}
          for how specific conditions are typically treated, or read about{" "}
          <Link href="/pre-existing-conditions/can-you-be-denied" className="font-semibold text-harbor-mid hover:underline">
            what actually causes a decline
          </Link>{" "}
          in the first place.
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
