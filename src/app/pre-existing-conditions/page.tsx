import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONDITIONS, TIER_INFO, type Tier } from "@/lib/condition-facts";
import { CarrierComparisonGraphic } from "@/components/pre-existing/carrier-comparison-graphic";

export const metadata: Metadata = {
  title: "Final Expense Insurance for Families with a Health Condition",
  description:
    "A caring, plain-language guide to how insurers actually look at common health conditions, what level/graded/modified/guaranteed-acceptance really mean for your family, and how to find your likely path before applying.",
  openGraph: { title: "Final Expense Insurance for Families with a Health Condition", description: "A caring, plain-language guide to how insurers actually look at common health conditions, what level/graded/modified/guaranteed-acceptance really mean for your family, and how to find your likely path before applying." },

  twitter: { title: "Final Expense Insurance for Families with a Health Condition", description: "A caring, plain-language guide to how insurers actually look at common health conditions, what level/graded/modified/guaranteed-acceptance really mean for your family, and how to find your likely path before applying." },
};

const TOC = [
  { id: "the-two-paths-and-how-simplified-issue-works", label: "The two paths, gently explained" },
  { id: "tiers", label: "How insurers place you — level, graded, modified, or decline" },
  { id: "where-conditions-land", label: "Where common conditions usually land" },
  { id: "a-z", label: "Condition-by-condition guide (A–Z)" },
  { id: "why-carriers-differ", label: "Why one company's answer isn't the only answer" },
  { id: "how-to-prepare", label: "Getting ready before you apply" },
  { id: "faq", label: "Questions families ask us often" },
];

const TIER_GROUPS: { tier: Tier; heading: string }[] = [
  { tier: "level", heading: "Conditions that usually still qualify for full, level rates" },
  { tier: "graded-modified", heading: "Conditions that often land in a graded or modified plan" },
  { tier: "guaranteed", heading: "Conditions that often need a guaranteed-acceptance plan" },
];

const FAQS = [
  {
    q: "My mom takes several medications every day. Will that keep her from getting covered?",
    a: "No, not by itself. Taking several medications doesn't automatically disqualify anyone. Insurers mainly use your prescription history to confirm your health answers are accurate — plenty of people on multiple daily medications still qualify for full, day-one coverage.",
  },
  {
    q: "One company said no. Does that mean every company will say no?",
    a: "Almost certainly not. Each insurer sets its own rules and look-back windows, so a no from one is often a yes somewhere else. And guaranteed acceptance is always there as a safety net, since it doesn't ask any health questions at all.",
  },
  {
    q: "What's the real difference between \"no exam\" and \"no health questions\"?",
    a: "\"No exam\" almost always means simplified issue — no nurse visit or bloodwork, but you'll still answer health questions honestly. \"No health questions\" means guaranteed acceptance, which always carries a two-year wait. If anyone promises both no health questions and no waiting period together, that's simply not real — please be cautious.",
  },
  {
    q: "Will my family have to wait two years if I have something common, like diabetes?",
    a: "Not necessarily, and often not at all. Many common, well-managed conditions — a lot of diabetes cases included — still qualify for simplified issue with coverage starting day one. The two-year wait belongs specifically to guaranteed acceptance, a separate and different path.",
  },
  {
    q: "Do I need to mention a condition if I feel completely fine right now?",
    a: "Yes, always answer every health question honestly, regardless of how you feel today. Insurers quietly cross-check your answers against your prescription history and a shared industry database, and any mismatch found during the early contestability period could put your family's claim at risk later.",
  },
];

export default function PreExistingConditionsPage() {
  const grouped = TIER_GROUPS.map((g) => ({
    ...g,
    conditions: CONDITIONS.filter((c) => c.tier === g.tier).slice(0, 7),
  }));

  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Pre-Existing Conditions
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          A health condition doesn&apos;t close the door on coverage
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          If you or someone you love has a health condition, please know you likely still have
          real options. Most people in this situation still qualify for final expense insurance —
          sometimes at the best rate available, sometimes through a plan built specifically for a
          harder health history. This guide gently walks through how insurers actually evaluate
          health, where common conditions tend to land, and how to figure out your likely path
          before you ever apply.
        </p>

        <nav aria-label="Guide contents" className="mt-8 rounded-2xl border border-mist p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">What&apos;s covered here</p>
          <ol className="mt-3 space-y-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-harbor-mid hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <h2 id="the-two-paths-and-how-simplified-issue-works" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          The two paths, gently explained
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Nearly every application involving a health condition comes down to one of two roads:
          simplified issue or guaranteed acceptance. Most families start on simplified issue,
          which is the focus here — guaranteed acceptance follows its own simpler rules and has
          its own dedicated space in this guide.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Simplified issue means no medical exam of any kind — no nurse coming by, no bloodwork.
          Instead, you&apos;ll answer a short set of yes-or-no health questions, usually fewer
          than a dozen. Behind the scenes, the insurer runs a couple of gentle background checks
          to confirm those answers — a look at your prescription history, and a check against the
          MIB, an industry-wide database of past applications. Most families hear back the same
          day or within a few business days.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s the outcome worth hoping for: when your answers clear, you get
          &quot;level&quot; coverage — the full death benefit in place from day one — and
          simplified issue usually costs less than guaranteed acceptance for the same coverage
          amount.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">A gentle word of caution</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            &quot;No exam&quot; and &quot;no health questions&quot; sound similar but mean very
            different things. &quot;No exam&quot; usually means simplified issue, where health
            questions still apply. &quot;No health questions&quot; means guaranteed acceptance,
            which always comes with a two-year wait. Please be cautious of anyone promising both
            at once — that combination simply doesn&apos;t exist in this market.
          </p>
        </div>

        <h2 id="tiers" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          How insurers place you — level, graded, modified, or decline
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Reviewing your health answers isn&apos;t simply a yes-or-no decision — insurers sort
          each applicant into one of a few outcomes, and that outcome decides when your family
          would actually receive the full death benefit.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3.5 text-sm font-semibold text-charcoal/60">Outcome</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-harbor">Years 1–2, natural death</th>
                <th className="px-5 py-3.5 font-display text-sm font-extrabold text-charcoal/60">After the wait</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Level</td>
                <td className="px-5 py-4 text-sm text-charcoal">100% of the death benefit, from day one</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Graded</td>
                <td className="px-5 py-4 text-sm text-charcoal">A partial payout that grows each year</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr className="border-b border-mist">
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Modified</td>
                <td className="px-5 py-4 text-sm text-charcoal">Your premiums returned, plus interest — not the full amount</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">100%</td>
              </tr>
              <tr>
                <td className="px-5 py-4 text-sm font-semibold text-charcoal/70">Decline</td>
                <td className="px-5 py-4 text-sm text-charcoal">That particular insurer won&apos;t offer a simplified policy</td>
                <td className="px-5 py-4 text-sm text-charcoal/70">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Accidental death is generally paid in full right away even under graded or modified
          plans — the waiting period is specifically for natural-cause death. And a decline from
          one insurer usually just means guaranteed acceptance, or simply a different company, is
          the next gentle step — not that coverage is out of reach.
        </p>

        <h2 id="where-conditions-land" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Where common conditions usually land
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These reflect typical, general patterns — never a guarantee for any one person. Each
          insurer draws its own lines, which is exactly why the very same condition can get a
          different answer from a different company.
        </p>
        {grouped.map((g) => (
          <div key={g.tier} className="mt-8">
            <h3 className="font-display text-lg font-extrabold text-harbor">{g.heading}</h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-mist">
              <table className="w-full min-w-[480px] border-collapse text-left">
                <tbody>
                  {g.conditions.map((c, i) => (
                    <tr key={c.slug} className={i < g.conditions.length - 1 ? "border-b border-mist" : ""}>
                      <td className="px-5 py-3.5 text-sm font-semibold text-charcoal/70 align-top">
                        <Link href={`/pre-existing-conditions/${c.slug}`} className="text-harbor-mid hover:underline">
                          {c.name}
                        </Link>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-charcoal align-top">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h2 id="a-z" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Condition-by-condition guide (A–Z)
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A quick-reference list of every condition covered here — tap any one for a closer,
          gentler look. As always, these are typical outcomes, never a promise for your specific
          situation.
        </p>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-mist">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist bg-canvas-alt">
                <th className="px-5 py-3 text-sm font-semibold text-charcoal/60">Condition</th>
                <th className="px-5 py-3 font-display text-sm font-extrabold text-harbor">Typical tier</th>
              </tr>
            </thead>
            <tbody>
              {CONDITIONS.map((c, i) => (
                <tr key={c.slug} className={i < CONDITIONS.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-5 py-3 text-sm font-semibold text-charcoal/70">
                    <Link href={`/pre-existing-conditions/${c.slug}`} className="text-harbor-mid hover:underline">
                      {c.name}
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-sm text-charcoal/80">{TIER_INFO[c.tier].label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/60">
          Don&apos;t see your exact situation here, or been turned down before? That doesn&apos;t
          mean the door is closed — a different insurer&apos;s rules, or the guaranteed-acceptance
          path, very often still has a place for your family.
        </p>

        <h2 id="why-carriers-differ" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Why one company&apos;s answer isn&apos;t the only answer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Two insurers can look at the exact same person and reach two different conclusions — one
          says level, another says graded. That&apos;s not a mistake anywhere in the system; it&apos;s
          simply how this market works, and knowing that can genuinely work in your family&apos;s
          favor.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no single shared rulebook. Every insurer sets its own health questions, its
          own look-back windows (how far back it asks about a diagnosis or treatment), and its own
          list of medications it will or won&apos;t accept. A treatment from three years ago might
          fall outside one insurer&apos;s two-year look-back window but comfortably inside
          another&apos;s four-year window — and that one difference alone can decide your tier.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because of this, applying to just one company and accepting whatever it says can quietly
          leave real money, or a better tier, on the table. This is precisely where an independent
          agency can help — matching your specific health history to the insurer whose rules treat
          it most kindly, before any application is ever submitted.
        </p>

        <CarrierComparisonGraphic />

        <h2 id="how-to-prepare" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Getting ready before you apply
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A little preparation goes a long way for your peace of mind. Before applying, it helps
          to have a clear picture ready: each condition and when it was diagnosed, when you were
          last treated or hospitalized for it, and a complete, current medication list. Insurers
          check your prescription history against your answers, so an accurate list helps avoid
          any surprises later.
        </p>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Please answer every question honestly. A mismatch between your answers and your records
          — discovered during the early contestability period — could put your family&apos;s
          claim at risk down the road. And if a knockout condition like current oxygen use,
          dialysis, or active cancer treatment applies to you, guaranteed acceptance is likely the
          more direct, kinder path forward — not a last resort to feel discouraged about.
        </p>

        <h2 id="faq" className="mt-14 scroll-mt-24 font-display text-2xl font-extrabold text-harbor">
          Questions families ask us often
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((item) => (
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
          <h2 className="font-display text-xl font-extrabold text-harbor">A few more gentle reads</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/pre-existing-conditions/can-you-be-denied" className="font-semibold text-harbor-mid hover:underline">
                Can you actually be turned down? What causes a decline →
              </Link>
            </li>
            <li>
              <Link href="/pre-existing-conditions/no-waiting-period" className="font-semibold text-harbor-mid hover:underline">
                How to qualify for day-one coverage with no waiting period →
              </Link>
            </li>
            <li>
              <Link href="/pre-existing-conditions/prescriptions" className="font-semibold text-harbor-mid hover:underline">
                How your prescription history factors into your application →
              </Link>
            </li>
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
