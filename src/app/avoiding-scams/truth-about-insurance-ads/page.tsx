import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Reading Insurance Ads With a Careful Eye",
  description:
    "A caring look at what \"as low as\" pricing and \"no medical exam\" claims really mean for your family, so ads don't set expectations that aren't quite true.",
  openGraph: { title: "Reading Insurance Ads With a Careful Eye", description: "A caring look at what \"as low as\" pricing and \"no medical exam\" claims really mean for your family, so ads don't set expectations that aren't quite true." },

  twitter: { title: "Reading Insurance Ads With a Careful Eye", description: "A caring look at what \"as low as\" pricing and \"no medical exam\" claims really mean for your family, so ads don't set expectations that aren't quite true." },
};

export default function TruthAboutInsuranceAdsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Reading insurance ads with a careful eye
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Insurance advertising is ordinary and legal, and like most advertising, it&apos;s built
          to show its best side first. That&apos;s not dishonest by itself, but it does mean a few
          familiar phrases show up again and again, meaning something gentler and narrower than
          they first sound like. Knowing that in advance protects your family from a surprise
          later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          &quot;As low as&quot; describes someone else&apos;s rate, not necessarily yours
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The headline number in most ads reflects the healthiest, youngest applicant the insurer
          will cover at that amount — not a promise for your family specifically. What you&apos;ll
          actually pay depends on your age, gender, coverage amount, tobacco use, and health, so
          think of the advertised number as a starting point, not a guarantee. That&apos;s not
          necessarily misleading on its own — it&apos;s usually disclosed, technically accurate
          math — but treating it as your price before you&apos;ve actually applied is where
          families get caught off guard. The only way to know your real number is to sit down with
          a specific carrier.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          &quot;No medical exam&quot; and &quot;no health questions&quot; aren&apos;t the same
          promise
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These phrases get used almost interchangeably in ads, but they describe two genuinely
          different kinds of coverage. &quot;No medical exam&quot; usually means simplified-issue
          underwriting — no nurse visit, no bloodwork, but you&apos;ll still answer a short set of
          health questions that affect what you qualify for and pay. &quot;No health
          questions&quot; describes guaranteed-acceptance coverage, which skips health questions
          entirely but, in exchange, includes a waiting period — typically two years — before it
          pays the full benefit for a death from natural causes. Our guide to{" "}
          <a href="/pre-existing-conditions#the-two-paths-and-how-simplified-issue-works" className="text-harbor-mid underline">
            buying with a pre-existing condition
          </a>{" "}
          goes deeper on this, but the short version is simple: if an ad promises no health
          questions and no waiting period in the same breath, that combination simply
          doesn&apos;t exist in this market.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A familiar face on TV isn&apos;t a personal recommendation for your family
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Plenty of final expense advertising features a celebrity spokesperson or a familiar TV
          personality. That&apos;s simply a paid arrangement — the person was compensated to
          appear, not to genuinely evaluate the product against everything else out there. It
          says nothing about whether that specific company&apos;s rates or claims experience is
          actually the right fit for your family. Treat it the way you&apos;d treat any paid
          placement: a reason the ad caught your eye, not a reason to skip comparing it with
          anything else.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Reading an ad the way a caring family would
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          None of these questions take long, and a genuinely caring agent will answer every one of
          them plainly.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A few gentle questions worth asking</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Is this price really for someone my age and health, or just the best case they can advertise?</li>
            <li>• Does &quot;no exam&quot; here still mean I&apos;ll answer health questions?</li>
            <li>• If there&apos;s a waiting period, how long, and what exactly does it apply to?</li>
            <li>• Am I comparing this to anything else, or just reacting to the first ad I saw?</li>
          </ul>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>
      </div>
    </div>
  );
}
