import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Is Green Burial? A Gentle Introduction",
  description:
    "A caring introduction to what eco-friendly green burial actually involves for your family, and why it's often, though not always, less costly than a traditional burial.",
  openGraph: { title: "What Is Green Burial? A Gentle Introduction", description: "A caring introduction to what eco-friendly green burial actually involves for your family, and why it's often, though not always, less costly than a traditional burial." },

  twitter: { title: "What Is Green Burial? A Gentle Introduction", description: "A caring introduction to what eco-friendly green burial actually involves for your family, and why it's often, though not always, less costly than a traditional burial." },
};

export default function GreenBurialPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What is green burial? A gentle introduction
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Green, or natural, burial is a caring approach built around minimizing environmental
          impact, and it&apos;s been growing steadily as an option alongside conventional burial
          and cremation. Here&apos;s what the term truly means, and how it tends to affect cost
          for your family.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          What actually makes a burial &quot;green&quot;
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A few things typically define it. There&apos;s no embalming with the chemical solutions
          used conventionally, since a green approach avoids putting those into the ground. The
          container is biodegradable — sometimes just a simple shroud, sometimes a casket made
          from untreated wood, wicker, or bamboo designed to break down naturally. There&apos;s
          typically no concrete vault, and burial often takes place in a natural or conservation
          burial ground set aside specifically for this loving purpose.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Why it tends to cost less
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Green burial often — though not always — costs less than conventional burial, simply
          because it eliminates several costs rather than discounting them. No embalming means no
          chemicals to pay for. A simple shroud or untreated wood casket typically costs less than
          a traditional metal one. No vault removes another cost entirely. That said, &quot;often
          less&quot; isn&apos;t &quot;always less&quot; — a natural burial ground still sets its
          own plot pricing, and some higher-end natural-material caskets aren&apos;t inexpensive.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Availability varies gently by area
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Not every cemetery offers green burial, and what counts as &quot;green&quot; isn&apos;t
          applied the same way everywhere. Some burial grounds carry independent certification;
          others use the term more loosely. It&apos;s genuinely worth asking a specific provider
          what their green option actually includes, so your family knows exactly what to expect.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Where cremation fits alongside it
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cremation is a separate path from green burial — it uses its own energy and
          isn&apos;t automatically the &quot;greener&quot; choice, though some families see it as
          simpler and lower-impact. Some combine both ideas, choosing cremation followed by a
          biodegradable urn for a natural burial of the remains. There&apos;s no single right
          answer — it comes down to what matters most to your family.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Ask gently, then size your coverage</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Since green burial is newer and less standardized, it&apos;s worth confirming details
            directly with a provider — including whether a vault is required even in a
            &quot;green&quot; section, since that changes the cost. Once you have a real number,
            that&apos;s the figure to build your family&apos;s coverage around.
          </p>
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
