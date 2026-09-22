import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Updating Who's Listed on Your Family's Policy",
  description:
    "A gentle, simple guide to updating your policy's beneficiary, and the life moments when families usually think to do it.",
  openGraph: { title: "Updating Who's Listed on Your Family's Policy", description: "A gentle, simple guide to updating your policy's beneficiary, and the life moments when families usually think to do it." },

  twitter: { title: "Updating Who's Listed on Your Family's Policy", description: "A gentle, simple guide to updating your policy's beneficiary, and the life moments when families usually think to do it." },
};

export default function ChangeBeneficiaryPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/managing-your-policy" className="hover:text-harbor">Managing Your Policy</Link> / Change Your Beneficiary
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          Updating who&apos;s listed on your family&apos;s policy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Updating a beneficiary is far simpler than most families expect — it doesn&apos;t touch
          your coverage, your premium, or anything else about the policy. It&apos;s really just a
          matter of telling your carrier who you&apos;d like listed now.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          A simple form, not a whole new policy
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Changing a beneficiary is normally handled through a short beneficiary-change form, sent
          in on paper or through your carrier&apos;s online portal if one&apos;s available. Once
          it&apos;s processed, every other part of your policy — coverage amount, premium, terms —
          stays exactly as it was. There&apos;s no need to reapply or go through underwriting
          again.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Primary and contingent beneficiaries
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Your primary beneficiary receives the death benefit first. A contingent beneficiary is
          the caring backup, stepping in only if the primary beneficiary has already passed away.
          If you&apos;re updating one, it&apos;s worth reviewing both together — see{" "}
          <Link href="/managing-your-policy/beneficiary-dies-before-you" className="text-harbor-mid underline">
            what happens if a beneficiary dies before you do
          </Link>{" "}
          for why the contingent choice matters so much.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Life moments that usually prompt an update
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Divorce or remarriage, the passing of the person currently listed, welcoming a new child
          or grandchild, or simply a change of heart about who should receive the benefit are the
          most common reasons families revisit this. Some also update it years later, after
          originally naming a parent who has since passed, shifting the benefit to a spouse or
          child instead.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold tracking-wide text-harbor uppercase">A note on ex-spouses</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Some states automatically revoke an ex-spouse&apos;s beneficiary status after a
            divorce, but this varies and isn&apos;t something to lean on alone. If you want an
            ex-spouse removed — or, in some cases, kept on purpose — submitting a beneficiary-change
            form yourself is the reliable way to make sure the policy truly reflects your wishes.
          </p>
        </div>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          How often it&apos;s worth revisiting
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          There&apos;s no set schedule. Tying a check-in to major life events, or simply looking
          every few years, is a caring habit that only takes a few minutes with your carrier.
        </p>

        <div className="mt-14 text-center">
          <Button as="link" href={siteConfig.supportPhoneHref} variant="outline" size="lg">
            Call {siteConfig.supportPhoneDisplay}
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/managing-your-policy" className="font-semibold text-harbor-mid hover:underline">
              ← Back to Managing Your Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
