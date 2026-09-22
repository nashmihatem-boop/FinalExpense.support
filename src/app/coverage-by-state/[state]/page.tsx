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
  const title = `Final Expense Insurance in ${state.name}, Gently Explained`;
  const description = `A caring look at final expense insurance in ${state.name}: how coverage works, what shapes your rate, state regulations, veteran burial benefits, and how to get a free quote from a licensed local agent.`;
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

const TOC = [
  { id: "costs", label: (s: string) => `Funeral and Cremation Costs in ${s}` },
  { id: "how-it-works", label: () => "How Final Expense Insurance Gently Works" },
  { id: "policy-types", label: () => "Policy Types Available to You" },
  { id: "regulations", label: (s: string) => `Final Expense Insurance Regulations in ${s}` },
  { id: "burial-laws", label: (s: string) => `Funeral and Burial Laws in ${s}` },
  { id: "regions", label: (s: string) => `Regions and Major Metros in ${s}` },
  { id: "counties", label: (s: string) => `Counties We Gently Serve in ${s}` },
  { id: "veterans", label: () => "Veterans' Burial Benefits" },
  { id: "faq", label: () => "Questions Families Ask Us Often" },
];

function faqsFor(stateName: string, isDC: boolean) {
  const locality = isDC ? "the District" : stateName;
  return [
    {
      q: `Can my family genuinely get final expense insurance in ${stateName}?`,
      a: `Yes. Several carriers are licensed to serve ${locality} residents with final expense coverage. Which specific carriers and plans fit you depends on your age, health, and desired coverage amount — a licensed agent can gently tell you exactly what you qualify for.`,
    },
    {
      q: `Is coverage gently more expensive in ${stateName} than elsewhere?`,
      a: `Insurance is regulated one state at a time, so pricing and product availability aren't identical everywhere. Within ${locality}, though, your premium still comes down mainly to your age, gender, tobacco use, health, and coverage amount — not your specific address.`,
    },
    {
      q: `If my family moves away from ${stateName}, does coverage still hold?`,
      a: `Yes. Once your policy is issued, it belongs to you, not your state of residence — coverage and premium stay exactly the same wherever you move afterward.`,
    },
    {
      q: "Will a medical exam be needed to qualify?",
      a: "Most final expense policies skip this entirely. Simplified-issue policies simply ask a short set of health questions, and guaranteed-issue policies skip health questions altogether (in gentle exchange for a waiting period before the full benefit applies).",
    },
    {
      q: "How much coverage should my family choose?",
      a: "Most families size their policy around a funeral or burial, plus any bills they&apos;d rather not leave behind. There&apos;s no single right number — a licensed agent can walk through your specific situation and recommend an amount, at no cost to you.",
    },
    {
      q: "Can more than one person be named as beneficiary?",
      a: "Yes. You can typically name several beneficiaries and set what share of the payout each receives, and gently update that list later if your situation changes.",
    },
    {
      q: `Do veterans in ${stateName} receive extra burial support?`,
      a: "Many veterans and their spouses qualify for federal burial benefits through the VA, including a burial allowance and, in some cases, a plot in a VA national cemetery, no matter which state they call home. Final expense insurance sits alongside these benefits and can gently cover what the VA benefit doesn't reach, like a service, a viewing, or a headstone beyond what's provided.",
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
          Final expense insurance in {state.name}, gently explained
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          {isDC ? (
            <>
              If your family calls Washington, D.C. home, know that caring final expense coverage
              is already within reach, offered by carriers licensed right here in the District.
            </>
          ) : (
            <>
              Wherever your family calls home in {state.name} — near {facts.capital}, the state
              capital, or closer to {formatMetros(facts.metros)} — caring final expense coverage
              is available through carriers licensed to serve you locally.
            </>
          )}{" "}
          As with all insurance, the rules live one state at a time: {possessive} Department of
          Insurance quietly decides which carriers and policies are welcome here, part of why the
          best fit can look a little different depending on where you live. Below, we&apos;ll
          gently walk {displayName} families through the costs, the regulations, and how to
          connect with a licensed local agent.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">
            A few gentle things to know if you live in {displayName}
          </p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Every agent you speak with holds a license specific to {isDC ? "the District" : state.name}.</li>
            <li>• Age, health, and coverage amount still drive your premium above all else.</li>
            <li>• A medical exam simply isn&apos;t part of the process for most families.</li>
            <li>• Your coverage travels with you if life takes you to a different state later.</li>
          </ul>
        </div>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">What&apos;s covered here</p>
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
          Funeral and cremation costs in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          What a family actually spends on a funeral or cremation depends heavily on which
          services get chosen and exactly where in {displayName} that family lives — rather than
          inventing region-specific figures we can&apos;t stand behind, we&apos;ll simply say that
          a direct cremation with no frills typically runs a small fraction of what a full
          traditional funeral costs once you add a viewing, casket, vault, and burial plot. For a
          gentle starting point, the{" "}
          <a href="https://nfda.org" className="text-harbor-mid underline">National Funeral Directors Association</a>{" "}
          releases national median cost figures every year, though your own local funeral home
          will always have the truest current pricing for your area. Let the kind of service your
          family actually envisions — not a generic number — guide the coverage amount you choose,
          and lean on a licensed agent to help you work that out.
        </p>

        <h2 id="how-it-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How final expense insurance gently works
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Getting started means picking a coverage amount that matches your family&apos;s
          situation, then working through a short set of health questions (guaranteed-issue plans
          skip this step altogether). Once approved, one fixed monthly premium is all that&apos;s
          asked of you for the rest of the policy&apos;s life. Should you pass away, your named
          beneficiary receives the entire death benefit in cash, without taxes taken out, usually
          within a matter of days after the claim is filed — and they&apos;re free to spend it on
          the funeral, on medical bills, or on whatever else truly matters in that moment, since
          nothing here locks the money to one particular funeral home or package the way a prepaid
          plan often does.
        </p>

        <h2 id="policy-types" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Policy types available to you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Almost every policy sold to {displayName} families fits into one of the two gentle
          paths below. Neither one wins outright — what fits best comes down to your own health,
          and how urgently your family needs the full benefit locked in.
        </p>
        <PolicyTypesTable />
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Which carriers and prices are actually available where you live will vary — ask a
          licensed agent for your real numbers, at absolutely no cost.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Clear your health questions under simplified issue, and your family typically has the
          entire benefit protected starting on day one. Guaranteed issue trades away those health
          questions for a two-year waiting period instead — pass away from natural causes inside
          that window, and the policy generally hands back your paid premiums rather than the full
          benefit (an accidental death is still usually paid immediately regardless of which path
          you&apos;re on). Once those two years pass, full lifelong coverage takes over.
        </p>

        <h2 id="regulations" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Final expense insurance regulations in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          {isDC ? "D.C." : state.name}, like every other state, decides for itself which carriers
          and policies its own Department of Insurance will allow to be sold to residents here.
          Any agent helping you must be licensed specifically for this state, and any carrier
          offering a policy here must first get its rates and forms approved locally. You&apos;ll
          also find a free-look period built into your policy — usually somewhere between 10 and
          30 days depending on where you live — giving you room to cancel for a complete refund if
          you have a change of heart; check your own paperwork for the exact number that applies
          to you. Since these particular rules are set state by state, a plan sold freely
          elsewhere in the country isn&apos;t automatically approved here — a licensed agent will
          only ever bring you options genuinely cleared for {displayName}.
        </p>

        <h2 id="burial-laws" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Funeral and burial laws in {state.name}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          States also set their own gentle rules around funerals and burials themselves. Broadly
          speaking, state law spells out whose decision a funeral and burial actually is (usually
          a spouse or next of kin, unless somebody else has been named), requires that funeral
          homes carry a proper license, and lays out consumer protections around how pricing gets
          shared with families. Because the details differ from state to state, a conversation
          with a local funeral home or an elder law attorney is the best way to learn exactly
          what applies where you live — final expense insurance simply exists to make sure the
          money is there, whatever those decisions ultimately look like.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What gently shapes your rate
        </h2>
        <CostFactorsGrid />

        <h2 id="regions" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Regions and major metros in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            Rather than counties or regions, Washington, D.C. stands as one single jurisdiction —
            families anywhere in the District experience coverage the exact same way.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              From the state capital out to its major metro areas, licensed agents and carriers
              are ready to gently serve {state.name} families wherever they live:
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
          Counties we gently serve in {state.name}
        </h2>
        {isDC ? (
          <p className="mt-4 text-base leading-relaxed text-charcoal/80">
            There&apos;s no county-level breakdown in Washington, D.C. — it&apos;s a single
            federal district, and coverage reaches families the same way everywhere within it.
          </p>
        ) : (
          <>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Big-city families aren&apos;t the only ones we reach — every single{" "}
              {countyTermFor(state.code).singular} across {state.name} has access to this
              coverage, all {STATE_COUNTIES[state.code]?.length ?? 0} of them:
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
          Veterans&apos; burial benefits
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Regardless of which state they call home, veterans — and frequently their spouses too —
          may be entitled to federal burial support through the VA, which can include a burial
          allowance and, for some, a resting place in a VA national cemetery. Final expense
          insurance works alongside these benefits rather than replacing them, often stepping in
          to gently cover whatever the VA benefit leaves out, like a formal service, a viewing, or
          a headstone beyond what the VA already provides. A licensed agent can help your family
          see exactly how the two pieces fit together.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Questions families ask us often
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
            Why we compare several carriers in {displayName}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">
            {siteConfig.name} exists for one caring reason: helping families make sure a funeral
            never quietly becomes a financial burden on the people left behind. Rather than
            representing one single carrier, we partner with several, so {displayName} families
            can see real plans compared side by side instead of being pointed toward whatever one
            company happens to be selling.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href={`/get-quote?state=${state.code}`} size="lg">
            See what you qualify for in {state.name}
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
