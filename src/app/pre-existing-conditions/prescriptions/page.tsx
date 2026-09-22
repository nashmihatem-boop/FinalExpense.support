import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDICATIONS } from "@/lib/medication-facts";

export const metadata: Metadata = {
  title: "How Your Medications Affect Your Application",
  description: "A caring look at why the medications you take can matter as much as the diagnosis behind them when applying for final expense insurance.",
  openGraph: {
    title: "How Your Medications Affect Your Application",
    description: "A caring look at why the medications you take can matter as much as the diagnosis behind them when applying for final expense insurance.",
  },
  twitter: {
    title: "How Your Medications Affect Your Application",
    description: "A caring look at why the medications you take can matter as much as the diagnosis behind them when applying for final expense insurance.",
  },
};

export default function PrescriptionsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / Prescription History
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          How your medications affect your application
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          On a simplified-issue application, what you take can matter just as much as the
          diagnosis behind it. Insurers quietly run a prescription history check as part of their
          review — here&apos;s why, gently explained, and what it tends to mean for a few of the
          most common medication categories.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why insurers look at your prescriptions
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          No exam gets scheduled under simplified issue, but that doesn&apos;t mean nothing gets
          verified — it just means the verification happens somewhere you won&apos;t see it. A
          quiet lookup at your prescription history is how an insurer confirms your health
          answers are telling the truth, and it&apos;s nowhere near as invasive as pulling your
          entire medical chart. Families who answer carefully and honestly usually find this
          works in their favor: matching records mean a faster yes. It&apos;s when something
          doesn&apos;t line up that trouble starts — a slower decision, a tougher tier, sometimes
          a decline — which is exactly why painting too rosy a picture on the application almost
          never pays off.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s a second, quieter layer to this too: certain medications speak for
          themselves. A particular combination on your prescription list can gently suggest a
          condition to an insurer even if you never wrote it down. So it isn&apos;t only the
          diagnosis on the form that shapes the review — the medicine cabinet tells its own part
          of the story.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Medication categories
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {MEDICATIONS.map((m) => (
            <Link
              key={m.slug}
              href={`/pre-existing-conditions/prescriptions/${m.slug}`}
              className="rounded-2xl border border-mist bg-canvas-raised p-6 transition-colors hover:border-harbor-mid/50"
            >
              <p className="font-display text-lg font-extrabold text-harbor">{m.name}</p>
              <p className="mt-1 text-xs text-charcoal/50">{m.examples}</p>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal/75">{m.summary}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
