import Link from "next/link";

export function About() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
          Who we are
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
          About FinalExpense.support
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/80">
          FinalExpense.support was built around one idea: choosing final expense
          coverage should feel like getting help from someone who cares, not like
          being sold to. We work alongside multiple licensed carriers so we can
          lay out real options side by side, in plain language, for families who
          came here looking for a little reassurance.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
          Every plan we show comes from a licensed insurance carrier — we
          don&apos;t underwrite policies ourselves. Our part is simply to walk
          beside you, answer the questions insurance companies don&apos;t always
          explain well, and connect you with a licensed agent who treats your
          family&apos;s situation like it matters. Because it does.
        </p>
        <Link
          href="/final-expense-insurance"
          className="mt-7 inline-block text-sm font-bold text-harbor-mid hover:underline"
        >
          See how final expense coverage works →
        </Link>
      </div>
    </section>
  );
}
