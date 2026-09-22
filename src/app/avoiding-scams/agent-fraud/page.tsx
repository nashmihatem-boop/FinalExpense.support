import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Signs an Agent Isn't Looking Out for Your Family",
  description:
    "A caring look at the warning signs that an insurance agent isn't acting in your family's interest — payment requests, blank forms, withheld paperwork — and what to do next.",
  openGraph: { title: "Signs an Agent Isn't Looking Out for Your Family", description: "A caring look at the warning signs that an insurance agent isn't acting in your family's interest — payment requests, blank forms, withheld paperwork — and what to do next." },

  twitter: { title: "Signs an Agent Isn't Looking Out for Your Family", description: "A caring look at the warning signs that an insurance agent isn't acting in your family's interest — payment requests, blank forms, withheld paperwork — and what to do next." },
};

export default function AgentFraudPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/avoiding-scams" className="hover:text-harbor">Avoiding Scams</Link> / Agent Fraud
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Signs an agent isn&apos;t looking out for your family
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Most agents genuinely want to help — matching your family with the right coverage,
          filing your application carefully, and putting your policy documents in your hands
          without you ever having to ask twice. A small number don&apos;t. Below are the specific
          moments that should give you pause, no matter how warm or trustworthy the person on the
          other end of the conversation seems, so you can notice them before you&apos;re deep into
          an application.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Being asked to pay the agent directly, not the carrier
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your premium should go to the insurance company itself, every time — never as a check
          written to an individual agent, and never handed over as cash. If someone suggests
          paying them personally &quot;to make things easier&quot; or &quot;to speed the process
          along,&quot; there&apos;s no honest reason for that request. It&apos;s also, unfortunately,
          one of the simplest ways a bad actor can pocket your family&apos;s money while no real
          policy is ever put in place.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Being rushed to sign something with blanks left on it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          You should never feel pressured to sign a form that isn&apos;t fully filled in, on a
          promise that the rest will &quot;get taken care of later.&quot; Signing something
          incomplete means agreeing, in advance, to whatever someone else decides to write in
          afterward — including the health answers that determine whether your family&apos;s
          future claim actually gets paid. Every section that applies to you should already be
          filled in before your signature ever goes on the page.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Being reluctant to hand you copies of what you signed
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Once you&apos;ve signed an application or a policy, that copy belongs to you — the real
          document, not a summary and not a verbal reassurance. If an agent is slow to provide it,
          vague about the delay, or hints that you don&apos;t really need your own copy, take that
          seriously. Hold on to everything you sign for as long as the policy stays active; it&apos;s
          a small habit that protects your whole family later.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          If you notice any of this, here&apos;s what to do
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Reach out to the insurance carrier directly, using contact information you find on your
          own rather than a number the agent gave you, and ask them to confirm a policy actually
          exists in your name and that your payment was applied correctly. Our guide to{" "}
          <Link href="/avoiding-scams/verify-a-company-is-legitimate" className="text-harbor-mid underline">
            verifying a company is legitimate
          </Link>{" "}
          walks through exactly how to find that information independently. If something
          doesn&apos;t add up, or nobody will give you a straight answer, file a complaint with
          your state&apos;s department of insurance — the same regulator who licensed the agent in
          the first place. That office exists precisely to look into situations like this, and you
          don&apos;t need proof in hand to file, just an honest account of what happened to your
          family.
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
