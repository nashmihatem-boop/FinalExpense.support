import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MEDICATIONS, findMedication } from "@/lib/medication-facts";

export function generateStaticParams() {
  return MEDICATIONS.map((m) => ({ medication: m.slug }));
}

export async function generateMetadata(props: PageProps<"/pre-existing-conditions/prescriptions/[medication]">): Promise<Metadata> {
  const { medication: slug } = await props.params;
  const medication = findMedication(slug);
  if (!medication) return {};
  const title = `${medication.name} and Final Expense Insurance`;
  const description = `A caring look at how a ${medication.name.toLowerCase()} prescription is typically viewed when your family applies for final expense insurance.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function MedicationPage(props: PageProps<"/pre-existing-conditions/prescriptions/[medication]">) {
  const { medication: slug } = await props.params;
  const medication = findMedication(slug);
  if (!medication) notFound();

  const others = MEDICATIONS.filter((m) => m.slug !== medication.slug);

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions/prescriptions" className="hover:text-harbor">Prescription History</Link> / {medication.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          {medication.name} and final expense insurance
        </h1>
        <p className="mt-2 text-sm text-charcoal/50">{medication.examples}</p>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">{medication.summary}</p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">{medication.detail}</p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Please keep in mind</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            No two insurers necessarily see this medication the exact same way — each one writes
            its own internal guidelines. What stays true everywhere, though, is that your answers
            need to be honest ones. The insurer will check your prescription history quietly in
            the background regardless of what you write down, and finding a gap between the two
            later is what actually puts your family&apos;s claim in danger.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other medication categories
        </h2>
        <ul className="mt-4 space-y-2">
          {others.map((m) => (
            <li key={m.slug}>
              <Link href={`/pre-existing-conditions/prescriptions/${m.slug}`} className="text-sm text-harbor-mid hover:underline">
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-charcoal/60">
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            ← Back to the full guide
          </Link>
        </p>
      </div>
    </div>
  );
}
