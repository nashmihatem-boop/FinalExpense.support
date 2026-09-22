import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Burial vs. Cremation: A Gentle, Balanced Look",
  description:
    "A caring, balanced comparison of cost, faith, and environmental considerations between burial and cremation — and why final expense coverage works the same either way.",
  openGraph: { title: "Burial vs. Cremation: A Gentle, Balanced Look", description: "A caring, balanced comparison of cost, faith, and environmental considerations between burial and cremation — and why final expense coverage works the same either way." },

  twitter: { title: "Burial vs. Cremation: A Gentle, Balanced Look", description: "A caring, balanced comparison of cost, faith, and environmental considerations between burial and cremation — and why final expense coverage works the same either way." },
};

export default function BurialVsCremationPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Burial vs. Cremation
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Burial vs. cremation: a gentle, balanced look
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          There&apos;s no single right answer here — the choice between burial and cremation
          depends on cost, faith, family tradition, and personal preference, and loving families
          land in genuinely different places. Here&apos;s a caring comparison of how the two
          actually differ, and one thing that stays the same no matter which your family chooses:
          how your coverage works.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A gentle look at cost
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Generally speaking, cremation tends to cost less than burial, mostly because it simply
          removes several line items rather than because any one piece is dramatically cheaper.
          Burial typically involves a plot, opening and closing the grave, and often a vault the
          cemetery requires, on top of a casket — none of which apply to cremation. That said,
          &quot;cremation is cheaper&quot; isn&apos;t a rule without exceptions: a{" "}
          <Link href="/funeral-cost/cremation-cost" className="font-semibold text-harbor-mid hover:underline">
            cremation paired with an elaborate service
          </Link>{" "}
          and a beautiful urn can cost more than a simple, humble burial. The path you choose
          matters less than the specific choices within it, which is exactly why a real, itemized
          quote from a local provider matters far more than any general comparison — this one
          included.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Faith and family tradition
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          For many families, this decision isn&apos;t primarily about money at all. Faith and
          cultural background often carry deep expectations: some traditions call for burial
          specifically, some have historically discouraged cremation while increasingly making
          peace with it, and others hold particular timing or ritual requirements around either
          path. This is genuinely personal ground, and general information can only go so far. If
          faith or family tradition weighs heavily here, your clergy or faith community is the
          right first conversation, alongside a local provider experienced in caring for that
          tradition respectfully.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          For families who weigh environmental impact
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Some families gently factor environmental impact in alongside cost and tradition. Burial
          involves land use and, depending on choices made, materials like metal, hardwood, and
          concrete. Cremation avoids land use but uses energy in the process itself. Neither is
          impact-free, and there&apos;s growing interest in simpler approaches on both sides,
          including more minimal burial where cemeteries allow it, for families who want to weigh
          this more heavily.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">One reassuring thing that never changes</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Final expense insurance pays a cash death benefit to whoever your family names as
            beneficiary — it isn&apos;t tied to a specific funeral package or method. That means
            the choice between burial and cremation never requires a different kind of policy, and
            it never locks your family into a decision made years earlier. Whoever manages the
            arrangements simply decides how to use the funds when the time comes.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Making the choice, gently, and covering it either way
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If your family is still weighing burial against cremation, that&apos;s a decision worth
          taking real time with, ideally talking it through together and, if it applies, with
          clergy or a faith community. What doesn&apos;t need to wait is putting coverage in place.
          Since the benefit pays out as cash rather than a fixed package, you don&apos;t need a
          final answer today to make sure your family has what it needs when the moment comes.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
