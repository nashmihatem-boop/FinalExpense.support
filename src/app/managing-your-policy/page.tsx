import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopicCard } from "@/components/topic-card";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Caring for a Policy Your Family Already Has",
  description:
    "Already have a final expense or life insurance policy in your family? Find caring, practical help with claims, beneficiaries, missed payments, cash value, and more.",
  openGraph: { title: "Caring for a Policy Your Family Already Has", description: "Already have a final expense or life insurance policy in your family? Find caring, practical help with claims, beneficiaries, missed payments, cash value, and more." },

  twitter: { title: "Caring for a Policy Your Family Already Has", description: "Already have a final expense or life insurance policy in your family? Find caring, practical help with claims, beneficiaries, missed payments, cash value, and more." },
};

const TOPICS: { href: string; title: string; description: string; image?: string }[] = [
  {
    href: "/managing-your-policy/borrow-from-policy",
    title: "Borrowing against a policy",
    description: "A gentle explanation of how a policy loan against cash value works, and what an unpaid loan can mean for the death benefit.",
    image: "/photos/planning-seniors-conversation.jpg",
  },
  {
    href: "/managing-your-policy/beneficiary-dies-before-you",
    title: "If a beneficiary passes away first",
    description: "What happens to the policy, and why naming a backup beneficiary protects your family.",
  },
  {
    href: "/managing-your-policy/missed-premium-payment",
    title: "Missed a payment",
    description: "Grace periods, lapses, and gentle next steps if a payment slipped through the cracks.",
    image: "/photos/planning-senior-phone-call.jpg",
  },
  {
    href: "/managing-your-policy/how-to-file-a-claim",
    title: "Filing a death benefit claim",
    description: "A caring, step-by-step walkthrough for a beneficiary starting and completing a claim.",
    image: "/photos/planning-hands-signing.jpg",
  },
  {
    href: "/managing-your-policy/how-long-a-claim-takes-to-pay",
    title: "How long a claim usually takes",
    description: "The factors that genuinely speed up or slow down when a family receives a payout.",
  },
  {
    href: "/managing-your-policy/find-a-lost-policy",
    title: "Finding a policy you can't locate",
    description: "Warm, practical steps for tracking down a policy when the paperwork has gone missing.",
    image: "/photos/planning-senior-laptop.jpg",
  },
  {
    href: "/managing-your-policy/contestability-period",
    title: "Understanding the contestability period",
    description: "Why a carrier can review a claim more closely during a policy's first two years.",
  },
  {
    href: "/managing-your-policy/claim-denied",
    title: "If a claim comes back denied",
    description: "The common reasons this happens, and every option a family has from there.",
  },
  {
    href: "/managing-your-policy/change-beneficiary",
    title: "Updating a beneficiary",
    description: "How to change who's listed on a policy, and the moments in life when families usually do it.",
    image: "/photos/planning-advisor-senior-documents.jpg",
  },
  {
    href: "/managing-your-policy/cancel-policy",
    title: "Canceling a policy",
    description: "What actually happens when a policy is canceled, and what's worth checking first.",
  },
];

export default function ManagingYourPolicyPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/" className="hover:text-harbor">Home</Link> / Managing Your Policy
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Caring for a policy your family already has
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          This part of the site isn&apos;t about shopping — it&apos;s for families who already
          have a final expense or life insurance policy and just need a hand with something
          specific: a payment that didn&apos;t go through, a claim that needs filing, a
          beneficiary that&apos;s out of date, or simply a question about how the policy works.
          Find your topic below, whenever you&apos;re ready.
        </p>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          What we can help with here
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {TOPICS.map((topic) => (
            <TopicCard key={topic.href} href={topic.href} title={topic.title} description={topic.description} image={topic.image} />
          ))}
        </div>

        <h2 className="mt-14 font-display text-2xl font-extrabold text-harbor">
          Still looking for coverage for your family?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          If your family doesn&apos;t have a policy in place yet, you&apos;re in the wrong
          corner of the site — head back to the homepage to see your options, or, if a health
          condition is part of the picture, take a look at our{" "}
          <Link href="/pre-existing-conditions" className="text-harbor-mid underline">
            guide to pre-existing conditions
          </Link>{" "}
          first.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            Don&apos;t have a policy yet?{" "}
            <Link href="/get-quote" className="font-semibold text-harbor-mid hover:underline">
              See what you qualify for →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
