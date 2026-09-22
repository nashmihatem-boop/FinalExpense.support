import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Final Expense Insurance for a Child, Explained with Care",
  description:
    "If you searched for this, here's an honest, gentle explanation of the different, much smaller product people usually mean by final expense insurance for a child.",
  openGraph: { title: "Final Expense Insurance for a Child, Explained with Care", description: "If you searched for this, here's an honest, gentle explanation of the different, much smaller product people usually mean by final expense insurance for a child." },

  twitter: { title: "Final Expense Insurance for a Child, Explained with Care", description: "If you searched for this, here's an honest, gentle explanation of the different, much smaller product people usually mean by final expense insurance for a child." },
};

export default function ChildPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/final-expense-insurance-for" className="hover:text-harbor">Final Expense Insurance For</Link> / Child
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Final expense insurance for a child, explained with care
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          If this is what brought you here, it&apos;s only fair to be upfront: what people usually
          mean by &quot;final expense insurance for a child&quot; is a genuinely different, far
          smaller product than the senior-focused coverage the rest of this site gently walks
          through. It&apos;s real, and it has its place, but it&apos;s a niche corner — here&apos;s
          an honest look at what it actually is.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A different, much smaller product than senior coverage
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Everywhere else on this site, &quot;final expense insurance&quot; means coverage built
          for seniors — sized specifically for funeral and end-of-life costs later in life. A
          policy on a child sits in an entirely different category, usually a small juvenile whole
          life policy. It&apos;s legitimate and it exists, but it&apos;s a much smaller part of the
          insurance world, serving a genuinely different purpose than what the rest of this site
          focuses on. We&apos;d rather tell you that plainly than stretch our usual content to fit
          a situation it was never written for.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why some parents consider it anyway
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          The honest reason usually has little to do with expecting the worst — thankfully, a
          child&apos;s death is rare, and most parents already know that. The real appeal is
          optionality. A small whole life policy on a child locks in insurability for life:
          whatever health conditions might develop later, the coverage already in place stays
          untouched, and it&apos;s often possible to convert or grow it into a larger adult policy
          down the road without new health questions. It also locks in a gentle, permanently low
          premium, since cost is tied to the age you begin. Some families also treat it as a slow,
          quiet savings vehicle, since whole life coverage builds a little cash value over time.
          Covering an actual funeral cost is rarely the main reason — it usually sits further down
          the list than the other two.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How it works differently for a child
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Since a minor can&apos;t enter into a contract themselves, a parent or legal guardian
          serves as the applicant and owner by default, with the child as the insured.
          Underwriting tends to be light — often little more than a short health form, since
          children are, statistically, about as low-risk as an applicant gets. Coverage amounts
          are typically modest, in keeping with the policy&apos;s purpose. Exact terms, minimum
          ages, and how conversion options work all vary by carrier, so this is genuinely a
          &quot;talk to an agent about specifics&quot; kind of product.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A few things gently worth weighing first
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Because the likelihood of ever using the death benefit is thankfully very low, it&apos;s
          worth being clear-eyed about what you&apos;re genuinely buying: mostly locked-in future
          insurability and a small amount of lifelong coverage, not a product built around
          probability the way senior final expense insurance is. That&apos;s not a reason to avoid
          it — many families find real, lasting value in it — but it&apos;s a different kind of
          value than the coverage the rest of this site describes, and it&apos;s worth choosing it
          for the right reason rather than out of a feeling that every family simply
          &quot;needs&quot; one.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Looking for coverage for yourself or a parent instead?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If you landed here but you&apos;re actually hoping to cover funeral or final costs for
          yourself or an aging family member, that&apos;s exactly the coverage the rest of this
          site focuses on. Our{" "}
          <Link href="/final-expense-insurance" className="text-harbor-mid underline">
            final expense insurance guide
          </Link>{" "}
          is the gentle place to start, or see our guide for{" "}
          <Link href="/final-expense-insurance-for/parents" className="text-harbor-mid underline">
            buying coverage for a parent
          </Link>{" "}
          specifically.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/final-expense-insurance-for" className="font-semibold text-harbor-mid hover:underline">
              ← See all relationships
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
