import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PolicyTypesTable, CostFactorsGrid } from "@/components/final-expense/policy-types-table";
import { US_STATES } from "@/lib/us-states";
import { STATE_FACTS, formatMetros } from "@/lib/state-facts";
import { STATE_COUNTIES, countyTermFor } from "@/lib/state-counties";
import { siteConfig } from "@/lib/site-config";

function findState(slug: string) {
  return US_STATES.find((s) => s.code.toLowerCase() === slug.toLowerCase());
}

export function generateStaticParams() {
  return US_STATES.map((s) => ({ state: s.code.toLowerCase() }));
}

export async function generateMetadata(props: PageProps<"/coverage-by-state/[state]">): Promise<Metadata> {
  const { state: slug } = await props.params;
  const state = findState(slug);
  if (!state) return {};
  const title = `Final Expense Insurance in ${state.name} | A Family's Guide to Costs & Coverage`;
  const description = `A caring, no-pressure guide to final expense insurance in ${state.name}: how coverage works, what shapes your rate, state rules, veteran burial benefits, and how to talk to a licensed local agent.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

const TOC = [
  { id: "costs", label: (s: string) => `What Funerals and Cremation Cost in ${s}` },
  { id: "how-it-works", label: () => "How Final Expense Coverage Actually Works" },
  { id: "policy-types", label: () => "The Two Kinds of Policy" },
  { id: "regulations", label: (s: string) => `How ${s} Regulates This Coverage` },
  { id: "burial-laws", label: (s: string) => `Funeral and Burial Rules in ${s}` },
  { id: "regions", label: (s: string) => `Where We Help Families in ${s}` },
  { id: "counties", label: (s: string) => `Every County We Serve in ${s}` },
  { id: "veterans", label: () => "Burial Benefits for Veterans" },
  { id: "faq", label: () => "Questions Families Ask Us" },
];

function faqsFor(stateName: string, isDC: boolean) {
  const locality = isDC ? "the District" : stateName;
  return [
    {
      q: `Is final expense insurance available to families in ${stateName}?`,
      a: `Yes. Several carriers are licensed to sell final expense insurance to ${locality} residents. Exactly which carriers and plans fit you depends on your age, health, and the coverage amount you want — a licensed agent can tell you precisely what you qualify for.`,
    },
    {
      q: `Does coverage cost more in ${stateName} than elsewhere?`,
      a: `Insurance is regulated state by state, so pricing and availability aren't identical everywhere. Within ${locality}, though, your premium still comes down mainly to your age, gender, tobacco use, health, and coverage amount — not your specific address.`,
    },
    {
      q: `If we move out of ${stateName} later, does the policy still work?`,
      a: `Yes. Once your policy is issued, it belongs to you, not your state of residence — your coverage and premium stay the same wherever you move.`,
    },
    {
      q: "Will a medical exam be required?",
      a: "Most final expense policies skip it entirely. Simplified-issue plans ask a short set of health questions instead, and guaranteed-issue plans skip health questions too (in exchange for a waiting period before the full benefit applies).",
    },
    {
      q: "How much coverage does our family actually need?",
      a: "Most families choose an amount that covers a funeral or burial plus any bills they'd rather not leave behind. There's no single right number — a licensed agent can talk through your specific situation and suggest an amount, at no cost.",
    },
    {
      q: "Can we name more than one beneficiary?",
      a: "Yes. You can typically name multiple beneficiaries and decide what share of the payout each one receives, and update that list later if your situation changes.",
    },
    {
      q: `Are there special burial benefits for veterans in ${stateName}?`,
      a: "Many veterans and their spouses qualify for federal burial benefits through the VA, including a burial allowance and, in some cases, a plot in a VA national cemetery, regardless of which state they call home. Final expense insurance sits alongside these benefits and can cover costs the VA benefit doesn't, like a service, viewing, or headstone beyond what's provided.",
    },
  ];
}

export default async function StateCoveragePage(props: PageProps<"/coverage-by-state/[state]">) {
  const { state: slug } = await props.params;
  const state = findState(slug);
  if (!state) notFound();

  const isDC = state.code === "DC";
  const facts = STATE_FACTS[state.code];
  const displayName = isDC ? "D.C." : state.name;
  const possessive = isDC ? "the District of Columbia's" : `${state.name}'s`;
  const faqs = faqsFor(state.name, isDC);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="bg-canvas">
      {/* Static, locally-authored JSON-LD — no user input reaches this. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          {state.name}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Caring for a family in {state.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          {isDC ? (
            <>
              Final expense insurance is available to families in Washington,
              D.C. through carriers licensed to do business in the District.
            </>
          ) : (
            <>
              We help families throughout {state.name} — from{" "}
              {facts.capital}, the state capital, to {formatMetros(facts.metros)} —
              get matched with carriers licensed to do business in the state.
            </>
          )}{" "}
          Like all insurance, it&apos;s regulated at the state level:{" "}
          {possessive} Department of Insurance decides which carriers and
          policies can be sold locally, which is part of why the right fit can
          look a little different depending on where you live. This guide
          walks through what coverage means for {displayName} residents
          specifically — costs, rules, and how to reach a licensed local
          agent.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            What this means for your family in {displayName}
          </p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Every agent you talk to is licensed specifically to sell insurance in {isDC ? "the District" : state.name}.</li>
            <li>• Your premium is still based mainly on your age, health, and coverage amount.</li>
            <li>• Most families qualify without a medical exam.</li>
            <li>• Coverage stays in force if you later move to another state.</li>
          </ul>
        </div>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">What&apos;s in this guide</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-harbor-mid hover:underline">
                  {i + 1}. {item.label(state.name)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="costs" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          What funerals and cremation cost in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and cremation costs vary quite a bit depending on the
          service chosen and where you live — we won&apos;t guess at
          region-specific numbers we can&apos;t verify, but broadly, a simple
          direct cremation costs a fraction of a traditional funeral with a
          viewing, casket, vault, and burial plot. The{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">National Funeral Directors Association</a>{" "}
          publishes national median cost data each year as a starting point;
          your local funeral home is the best source for current pricing in{" "}
          {displayName}. The coverage amount you choose should reflect the
          kind of service your family actually wants, not a generic figure —
          that&apos;s exactly what a licensed agent can help you work through.
        </p>

        <h2 id="how-it-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How final expense coverage actually works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You apply for a coverage amount that fits your family&apos;s needs,
          answer a short set of health questions (or skip them entirely with a
          guaranteed-issue plan), and — once approved — pay a fixed monthly
          premium for the life of the policy. When you pass away, your named
          beneficiary receives the full death benefit in cash, tax-free,
          usually within days of the claim being filed. They can use it for
          funeral costs, medical bills, or anything else — the payout
          isn&apos;t tied to a specific funeral home or package the way a
          prepaid funeral plan often is.
        </p>

        <h2 id="policy-types" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          The two kinds of policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every final expense policy sold in {displayName} falls into
          one of two categories. Neither is objectively better — the right one
          depends on your health and how soon you need full coverage in
          place.
        </p>
        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Exact carriers and pricing available in {displayName} vary — a
          licensed agent can tell you precisely what you qualify for, at no
          cost.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A simplified-issue policy that accepts your health answers typically
          provides full coverage from day one. Guaranteed-issue policies,
          since they skip health questions entirely, usually include a
          two-year waiting period — if you pass away from natural causes
          during those first two years, the policy typically refunds the
          premiums you paid rather than the full benefit (accidental death is
          often covered immediately either way). After the waiting period
          ends, your family has full coverage for life.
        </p>

        <h2 id="regulations" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How {state.name} regulates this coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Like every state, {isDC ? "D.C." : state.name} decides which
          insurance carriers and policies can be sold to its residents through
          its Department of Insurance. Agents must hold a state-specific
          license to sell you a policy, and carriers have to get their policy
          forms and rates approved before offering them locally. Your policy
          will also include a free-look period — commonly between 10 and 30
          days, depending on the state — during which you can cancel for a
          full refund if you change your mind; your policy documents will show
          the exact number that applies to yours. Because these rules are set
          at the state level, not every plan available nationally is
          necessarily approved for sale in {displayName} — a licensed agent
          will only show you options that are.
        </p>

        <h2 id="burial-laws" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Funeral and burial rules in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Funeral and burial practices are also regulated at the state level.
          In general, state law decides who has the legal right to make
          funeral and burial decisions (usually a spouse or next of kin,
          unless you&apos;ve named someone else), requires funeral homes to be
          licensed, and sets consumer-protection rules for how prices are
          disclosed. The specifics vary by state, so it&apos;s worth a
          conversation with a local funeral home or an elder law attorney if
          you want the details that apply to your situation — final expense
          insurance is simply there to make sure the money is available,
          regardless of how those decisions get made.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What affects your rate
        </h2>
        <CostFactorsGrid />

        <h2 id="regions" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Where we help families in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Washington, D.C. is a single jurisdiction rather than a state made
            up of counties or regions — coverage works the same way across the
            whole District.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Licensed agents and carriers serve families throughout{" "}
              {state.name}, including around its state capital and major
              metro areas:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-mist bg-canvas-alt">
                    <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Area</th>
                    <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">City</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-mist">
                    <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">State capital</td>
                    <td className="px-5 py-4 text-sm text-charcoal">{facts.capital}</td>
                  </tr>
                  {facts.metros.map((metro, i) => (
                    <tr key={metro} className={i < facts.metros.length - 1 ? "border-b border-mist" : ""}>
                      <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Major metro</td>
                      <td className="px-5 py-4 text-sm text-charcoal">{metro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        <h2 id="counties" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Every county we serve in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Washington, D.C. is a single federal district with no
            county-level subdivisions — coverage works the same way across
            the whole District.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Coverage reaches families throughout every{" "}
              {countyTermFor(state.code).singular} in {state.name} — final
              expense insurance isn&apos;t limited to the big metro areas. We
              currently serve all {STATE_COUNTIES[state.code]?.length ?? 0} of
              them:
            </p>
            <div className="mt-6 columns-2 gap-x-6 sm:columns-3 lg:columns-4">
              {(STATE_COUNTIES[state.code] ?? []).map((county) => (
                <p key={county} className="break-inside-avoid py-1 text-sm text-charcoal/75">
                  {county}
                </p>
              ))}
            </div>
          </>
        )}

        <h2 id="veterans" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Burial benefits for veterans
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Veterans and, in many cases, their spouses may qualify for federal
          burial benefits through the VA, including a burial allowance and
          eligibility for a plot in a VA national cemetery — a benefit that
          applies no matter which state you call home. Final expense
          insurance sits alongside these benefits and is often used to cover
          costs the VA benefit doesn&apos;t, such as a service, viewing, or a
          headstone beyond what&apos;s provided. A licensed agent can help you
          understand how the two fit together.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Questions families ask us
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-xl border border-mist bg-canvas-raised px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-harbor marker:content-none">
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-harbor-mid transition-transform duration-200 group-open:-rotate-180">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-canvas-alt p-7">
          <h2 className="font-display text-xl font-extrabold text-harbor">
            Why we show {displayName} families more than one option
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            {siteConfig.name} specializes in final expense insurance for
            families who want peace of mind knowing funeral costs won&apos;t
            fall on their loved ones. We work alongside multiple carriers so
            we can lay out plans side by side for {displayName} residents,
            instead of steering everyone toward a single company&apos;s
            policy regardless of fit.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={`/get-quote?state=${state.code}`} size="lg">
            See what your family qualifies for in {state.name}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/coverage-by-state" className="font-semibold text-harbor-mid hover:underline">
              ← See all states
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
