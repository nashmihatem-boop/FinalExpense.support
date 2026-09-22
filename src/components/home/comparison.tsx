const ROWS: { feature: string; finalExpense: string; term: string }[] = [
  {
    feature: "Coverage length",
    finalExpense: "Stays with you for life, as long as premiums are paid.",
    term: "A set number of years (10, 20, 30) — then it simply stops.",
  },
  {
    feature: "Monthly cost",
    finalExpense: "A smaller benefit keeps your premium small and unchanging.",
    term: "Can look cheaper at first, but often jumps sharply at renewal.",
  },
  {
    feature: "Medical exam",
    finalExpense: "Typically skipped — just a short health conversation instead.",
    term: "Usually required, and your results shape your price.",
  },
  {
    feature: "Cash value",
    finalExpense: "Grows a modest cash value over time, since it's whole life.",
    term: "None — it's temporary protection only.",
  },
  {
    feature: "Best for",
    finalExpense: "Making sure funeral, burial, and final costs are covered.",
    term: "Replacing income or a mortgage while your family depends on it.",
  },
];

export function Comparison() {
  return (
    <section id="compare" className="scroll-mt-20 bg-canvas">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            How it compares
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            Final expense coverage vs. a term policy.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            Both are technically life insurance, but they&apos;re built for
            different moments in life. Here&apos;s the plain-language difference.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-mist bg-canvas-raised">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist">
                <th className="px-6 py-4 text-sm font-semibold text-charcoal/60">Feature</th>
                <th className="px-6 py-4 font-display text-base font-extrabold text-harbor">
                  Final expense
                </th>
                <th className="px-6 py-4 font-display text-base font-extrabold text-charcoal/60">
                  Term life
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i < ROWS.length - 1 ? "border-b border-mist" : ""}>
                  <td className="px-6 py-5 text-sm font-semibold text-charcoal/70 align-top">
                    {row.feature}
                  </td>
                  <td className="px-6 py-5 text-sm leading-relaxed text-charcoal align-top">
                    {row.finalExpense}
                  </td>
                  <td className="px-6 py-5 text-sm leading-relaxed text-charcoal/70 align-top">
                    {row.term}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
