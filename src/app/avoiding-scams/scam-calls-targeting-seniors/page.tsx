import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Keeping Your Parents Safe From Scam Calls",
  description:
    "A caring guide to telling a real final expense insurance call from a scam call, and exactly what to do if a loved one is on a suspicious call right now.",
  openGraph: { title: "Keeping Your Parents Safe From Scam Calls", description: "A caring guide to telling a real final expense insurance call from a scam call, and exactly what to do if a loved one is on a suspicious call right now." },

  twitter: { title: "Keeping Your Parents Safe From Scam Calls", description: "A caring guide to telling a real final expense insurance call from a scam call, and exactly what to do if a loved one is on a suspicious call right now." },
};

export default function ScamCallsTargetingSeniorsPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Scam Calls Targeting Seniors
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Keeping your family safe from scam calls
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          A phone call is still one of the most common ways this kind of coverage gets sold — and,
          unfortunately, one of the most common ways someone gets taken advantage of. In the first
          ten seconds, the two can sound almost identical, which is exactly why it&apos;s worth
          knowing the difference in advance, before your parent or spouse is actually on the line.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What a genuine, caring call sounds like
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A licensed agent reaching out — whether because you requested information or
          they&apos;re following up on an existing policy — will tell you their name, name the
          company they represent, and share a license number the moment you ask for one.
          They&apos;ll walk through the coverage in plain language, they won&apos;t push for a
          decision on that first call, and whatever you agree to will show up afterward in
          writing — real application and policy paperwork you can read over, keep, and revisit
          before a single payment is ever due.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Signs the call isn&apos;t what it claims to be
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A handful of behaviors are reliable warning signs, no matter how kind or confident the
          caller sounds.
        </p>
        <div className="mt-6 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">Watch for</p>
          <ul className="mt-3 space-y-2 text-base leading-relaxed text-charcoal/80">
            <li>• Asking for payment right away over the phone — especially by gift card, wire transfer, or cryptocurrency.</li>
            <li>• Pushing for a decision before you hang up, often with urgency like &quot;this rate expires today.&quot;</li>
            <li>• Refusing to put anything in writing, or staying vague about which company they actually represent.</li>
            <li>• Asking for a bank account, Social Security, or Medicare number early, before there&apos;s any real reason to need it.</li>
            <li>• Already knowing details about finances or health from a source they won&apos;t explain.</li>
          </ul>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If a loved one is on a suspicious call right now
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Hang up. There&apos;s no explanation owed, no need for a polite exit — a real company
          loses nothing if you call back later using a number you looked up yourself. Don&apos;t
          confirm or share any personal or financial details, even just to &quot;verify&quot;
          identity, since a scammer can use small confirmed details to make the next call sound
          more convincing. If you want to see whether the company is even real, look it up
          separately through your state&apos;s insurance department — never a number or link the
          caller provided.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Reporting it once the call ends
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s worth reporting, even after the fact. The Federal Trade Commission takes
          reports of exactly this kind of call at{" "}
          <a
            href="https://reportfraud.ftc.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-harbor-mid underline"
          >
            reportfraud.ftc.gov
          </a>
          , and every report helps regulators spot patterns, even when one report alone
          doesn&apos;t lead to an investigation. If any money changed hands, contact your bank or
          card issuer right away too — the sooner it&apos;s reported, the better the odds of
          getting it back.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/avoiding-scams" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Avoiding Scams
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
