const POINTS = [
  {
    title: "Covers the costs Medicare leaves behind",
    body: "A funeral and burial can easily reach five figures. This coverage pays your family directly, so they're never left wondering how to pay for it during the hardest week of their lives.",
  },
  {
    title: "Designed to be gentle to qualify for",
    body: "Most plans are “simplified issue” — a short list of health questions, no exam, no bloodwork. Many families hear back the very same day.",
  },
  {
    title: "A rate that stays put",
    body: "It's whole life coverage: once you're approved, your premium won't rise and your coverage won't shrink, for as long as premiums are paid.",
  },
];

export function Education() {
  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            What it actually is
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            A small policy that carries one big responsibility.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {POINTS.map((point) => (
            <div key={point.title}>
              <div className="h-1 w-10 rounded-full bg-sage" />
              <h3 className="mt-5 font-display text-xl font-extrabold text-harbor">
                {point.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
