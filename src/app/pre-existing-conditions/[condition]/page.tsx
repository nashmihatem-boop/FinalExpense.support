import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CONDITIONS, TIER_INFO, COMMON_QUESTION_CATEGORIES, findCondition } from "@/lib/condition-facts";

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ condition: c.slug }));
}

export async function generateMetadata(props: PageProps<"/pre-existing-conditions/[condition]">): Promise<Metadata> {
  const { condition: slug } = await props.params;
  const condition = findCondition(slug);
  if (!condition) return {};
  const title = `${condition.name} and Final Expense Insurance`;
  const description = `A caring look at how simplified-issue final expense insurance typically treats ${condition.name}, what your family can expect, and how to get a free quote.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default async function ConditionPage(props: PageProps<"/pre-existing-conditions/[condition]">) {
  const { condition: slug } = await props.params;
  const condition = findCondition(slug);
  if (!condition) notFound();

  const tierInfo = TIER_INFO[condition.tier];
  const others = CONDITIONS.filter((c) => c.slug !== condition.slug).slice(0, 6);

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/pre-existing-conditions" className="hover:text-harbor">Pre-Existing Conditions</Link> / {condition.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          {condition.name} and final expense insurance
        </h1>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-canvas-alt px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-brass" />
          <span className="text-sm font-bold text-harbor">{tierInfo.label}</span>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">{tierInfo.blurb}</p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">{condition.note}</p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Please keep in mind</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            None of this is a promise for your specific family&apos;s situation — just a gentle
            picture of what tends to happen. Because each insurer writes its own health questions
            and sets its own look-back window, the very same condition can be welcomed warmly by
            one company and reviewed more cautiously by the next. And please don&apos;t take a
            single decline personally or as a final answer — it speaks to that one company&apos;s
            rules, nothing more, and rarely anything about what another insurer would decide.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where {condition.name.toLowerCase()} typically lands
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Severity and timing tend to matter far more here than the diagnosis on its own:
        </p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">If things look like…</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">What usually happens</th>
              </tr>
            </thead>
            <tbody>
              {condition.scenarios.map((s, i) => (
                <tr key={s.situation} className={i < condition.scenarios.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3.5 text-sm text-charcoal align-top">{s.situation}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/80 align-top">{s.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A gentle look at how underwriting works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no medical exam waiting at the end of a simplified-issue application —
          nobody visits your home, nobody draws blood. You&apos;ll simply work through a short
          list of health questions, while the insurer quietly cross-references your prescription
          history and a shared industry database called the MIB to make sure everything lines up.
          Four gentle outcomes can follow from there. <strong className="text-harbor">Level</strong>{" "}
          means your family is covered in full starting day one.{" "}
          <strong className="text-harbor">Graded</strong> means a partial benefit that climbs
          steadily across the first couple of years. <strong className="text-harbor">Modified</strong>{" "}
          means your premiums come back to you with interest if something happens during that same
          window. And a <strong className="text-harbor">decline</strong> simply means this
          particular insurer isn&apos;t the right fit — guaranteed acceptance becomes the next
          gentle step. Our{" "}
          <Link href="/pre-existing-conditions#tiers" className="text-harbor-mid underline">
            full guide to how this works
          </Link>{" "}
          walks through each one in more depth.
        </p>

        <h3 className="mt-8 font-display text-lg font-extrabold text-harbor">
          What insurers commonly ask about {condition.name.toLowerCase()}
        </h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">What they&apos;ll ask</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {COMMON_QUESTION_CATEGORIES.map((q, i) => (
                <tr key={q.question} className={i < COMMON_QUESTION_CATEGORIES.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/70 align-top">{q.question}</td>
                  <td className="px-5 py-3.5 text-sm text-charcoal/80 align-top">{q.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
          Think of these as gentle themes rather than any single company&apos;s actual
          questionnaire — the precise wording and how far back each one looks will vary from
          insurer to insurer.
        </p>

        {condition.medications && condition.medications.length > 0 && (
          <>
            <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
              Medications worth knowing about
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Insurers check prescription history, so what your loved one takes can matter just as
              much as the diagnosis itself:
            </p>
            <div className="mt-5 space-y-3">
              {condition.medications.map((m) => (
                <div key={m.name} className="rounded-xl border border-mist bg-canvas-raised p-5">
                  <p className="font-display text-base font-extrabold text-harbor">{m.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75">{m.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
              See the full{" "}
              <Link href="/pre-existing-conditions/prescriptions" className="text-harbor-mid underline">
                prescription history guide
              </Link>{" "}
              for how medications factor into the review more broadly.
            </p>
          </>
        )}

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A gentle next step
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Rather than sending in one application to one company and simply hoping for the best,
          it&apos;s worth having a licensed agent look at your specific history first and point
          you toward the insurers whose rules are actually kind to it. That conversation never
          costs anything.
        </p>

        <div className="mt-10 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Other conditions
        </h2>
        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {others.map((c) => (
            <li key={c.slug}>
              <Link href={`/pre-existing-conditions/${c.slug}`} className="text-sm text-harbor-mid hover:underline">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-charcoal/60">
          <Link href="/pre-existing-conditions" className="font-semibold text-harbor-mid hover:underline">
            ← See the full A–Z guide
          </Link>
        </p>
      </div>
    </div>
  );
}
