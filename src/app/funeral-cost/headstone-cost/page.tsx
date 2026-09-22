import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What Affects Headstone Cost, Explained Gently",
  description:
    "A caring look at how material, size, and engraving affect headstone and grave marker pricing for your family, and how to get an accurate quote.",
  openGraph: { title: "What Affects Headstone Cost, Explained Gently", description: "A caring look at how material, size, and engraving affect headstone and grave marker pricing for your family, and how to get an accurate quote." },

  twitter: { title: "What Affects Headstone Cost, Explained Gently", description: "A caring look at how material, size, and engraving affect headstone and grave marker pricing for your family, and how to get an accurate quote." },
};

export default function HeadstoneCostPage() {
  return (
    <div className="bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm text-charcoal/50">
          <Link href="/funeral-cost" className="hover:text-harbor">Funeral Cost</Link> / Headstone Cost
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          What affects headstone cost, explained gently
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          Like everything else in this guide, headstone pricing isn&apos;t standardized — it&apos;s
          set by individual monument companies based on a handful of gentle, understandable
          factors worth knowing before your family starts comparing quotes.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Material is the biggest driver
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Granite is the modern standard for permanent markers, prized for durability, priced by
          the grade and amount of stone used. Bronze markers are priced by the weight and detail
          of the casting plus the base. Simpler options — a smaller flat marker, or a temporary
          one meant to be replaced later — cost less than a large upright monument. None is
          objectively better; it&apos;s personal preference and what the cemetery allows.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Size and shape change the price
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          A flat marker set level with the ground generally costs less than an upright monument,
          since an upright needs more material and a larger foundation. A companion marker,
          meant to eventually cover two plots, costs more than a single but usually less than two
          separate ones bought later. Custom shapes simply need more material and fabrication
          work.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          Engraving adds up gently
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Cost scales with how much is engraved — a name and two dates costs less than a verse or
          detailed design. Leaving room for a second name to be added later, common for a spouse,
          is usually cheaper to plan for now than engrave in full afterward. Custom artwork or a
          portrait takes far more skilled labor than a standard catalog emblem.
        </p>

        <h2 className="mt-14 font-display text-xl font-extrabold text-harbor">
          The cemetery may gently limit your options
        </h2>
        <p className="mt-4 text-base leading-relaxed text-charcoal/80">
          Many cemeteries, especially newer &quot;memorial garden&quot; sections, allow only flat
          markers for easier mowing and don&apos;t permit upright monuments there at all. Some
          require markers ordered through an approved list of companies. Worth checking the
          cemetery&apos;s own rules before your family settles on a specific marker.
        </p>

        <div className="mt-8 rounded-2xl border border-mist bg-canvas-alt p-6">
          <p className="text-sm font-bold text-harbor">Getting a real, gentle quote</p>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            Monument companies quote directly — ask exactly what&apos;s included, since the
            marker, engraving, and installation are sometimes bundled and sometimes billed
            separately. Get that real number before deciding how much coverage to set aside, with
            a little cushion for whatever else comes up.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Button as="link" href="/get-quote" size="lg">
            See what you qualify for
          </Button>
          <p className="mt-4 text-sm text-charcoal/60">
            <Link href="/funeral-cost" className="font-semibold text-harbor-mid hover:underline">
              ← Back to the funeral cost guide
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
