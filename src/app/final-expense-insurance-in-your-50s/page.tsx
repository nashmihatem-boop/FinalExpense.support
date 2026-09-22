import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance in Your 50s, Gently Explained",
  description:
    "A caring look at why your 50s are often the gentlest decade to qualify for final expense insurance, and how locking in a rate now compares with waiting.",
  openGraph: { title: "Final Expense Insurance in Your 50s, Gently Explained", description: "A caring look at why your 50s are often the gentlest decade to qualify for final expense insurance, and how locking in a rate now compares with waiting." },

  twitter: { title: "Final Expense Insurance in Your 50s, Gently Explained", description: "A caring look at why your 50s are often the gentlest decade to qualify for final expense insurance, and how locking in a rate now compares with waiting." },
};

export default function FinalExpenseInsuranceInYour50sPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance" className="hover:text-harbor">Final Expense Insurance</Link> / Your 50s
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance in your 50s, gently explained
        </h1>
        <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-2xl">
          <Image
            src="/photos/senior-gardening.jpg"
            alt="A woman in her 50s gardening outdoors"
            fill
            sizes="(min-width: 640px) 768px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          People are often surprised to hear how many families first ask us about this coverage
          in their 50s — well before the retirement years most folks associate it with. There&apos;s
          a lovely reason for that timing: this decade tends to be the gentlest one for actually
          getting approved at an insurer&apos;s very best rate. Here&apos;s the honest case for
          not waiting.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Your health history is likely still simple right now
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Families in their 50s tend to have shorter, simpler medical histories than families a
          decade or two further along — fewer daily prescriptions, fewer recent hospital stays,
          less actively being treated in an ongoing way. That naturally means fewer of the tough
          &quot;knockout&quot; questions on a typical application will apply to your family, which
          gently tilts the odds toward the outcome everyone hopes for: full coverage, starting the
          very first day. Please know this is never guaranteed — every person&apos;s health is
          genuinely their own story — but as a decade, the 50s quietly offer the kindest odds of
          any age.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Whatever you lock in today travels with you
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          These policies work as whole life insurance underneath, meaning your premium freezes the
          moment you&apos;re approved and simply never moves again for as long as you keep the
          policy — no annual review, no future increase tied to your age. Practically, that means
          the birthday closest to your application date becomes your rate forever. Apply now, in
          your 50s, and your family locks in a gentler number than applying for the identical
          coverage would cost later on — and that difference quietly follows the policy for its
          entire life. We can&apos;t promise an exact figure, since health, state, and the
          specific insurer all play a part, but the pattern itself never changes: sooner tends to
          cost your family less.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A few things that can still shift your rate
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s completely common for someone in their 50s to already be gently managing
          blood pressure, an early diabetes diagnosis, or a family health history an insurer wants
          to ask about. None of that quietly shuts the door on a strong outcome. If any of this
          sounds like your family, our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            pre-existing conditions guide
          </Link>{" "}
          walks through how these situations are typically viewed, and roughly where each tends to
          land. And whatever your age, using tobacco tends to move your price more meaningfully
          than almost any single well-managed condition on its own.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Wondering if 50 feels too soon?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          It&apos;s a completely fair thing to wonder, since so much marketing around this
          coverage leans toward retirement-age imagery. Truthfully, there&apos;s no age where this
          conversation officially &quot;begins&quot; — what matters instead is whether your family
          already has savings set aside for final costs, and whether you&apos;d simply rather that
          expense never touch the people you love. If you&apos;re still weighing whether now is
          the right moment for your own family, our{" "}
          <Link href="/final-expense-insurance/is-it-worth-it" className="text-harbor-mid underline">
            honest look at who this coverage is worth it for
          </Link>{" "}
          gently covers both sides of that question.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-in-your-60s" className="font-semibold text-harbor-mid hover:underline">
              What changes in your 60s →
            </Link>
          </p>
          <p className="mt-2 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the full guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
