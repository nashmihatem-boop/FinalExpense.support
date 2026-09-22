const FAQS = [
  {
    q: "What does final expense insurance actually pay for?",
    a: "It's a cash payout to whoever you name as your beneficiary. Most families use it for funeral and burial costs, an outstanding medical bill, or everyday expenses, so no one has to cover them out of pocket. There's no restriction on how the money gets used.",
  },
  {
    q: "Will I need to take a medical exam?",
    a: "For most simplified-issue policies, no. You'll answer a short set of yes/no health questions instead of a physical exam or bloodwork. A few guaranteed-issue plans skip health questions entirely, though those tend to cost more for the same payout.",
  },
  {
    q: "I have a pre-existing condition — can I still qualify?",
    a: "Often, yes. It depends on the condition and the carrier, which is exactly what a licensed agent can check for you, at no cost and no obligation.",
  },
  {
    q: "How much coverage does my family actually need?",
    a: "Most people choose an amount that covers a funeral and burial or cremation — commonly $8,000–$15,000 — plus a little extra for any outstanding bills. An agent can help you land on a number instead of guessing.",
  },
  {
    q: "How is this different from a regular life insurance policy?",
    a: "Final expense policies are smaller, whole life policies designed to be easy to qualify for and built specifically to cover end-of-life costs, rather than replace years of income the way a large term policy would.",
  },
  {
    q: "Does asking for a quote commit me to anything?",
    a: "No. Answering a few questions and talking with an agent costs nothing and enrolls you in nothing. You're only covered if you choose to accept an offer and the carrier issues it.",
  },
  {
    q: "What happens if a payment gets missed?",
    a: "Most policies include a grace period before coverage lapses, and many carriers reach out before that happens. If you're ever worried about a payment, call your agent first — there are usually ways to keep the policy in force.",
  },
  {
    q: "Can more than one person be named as a beneficiary?",
    a: "Yes. You can typically name multiple beneficiaries and choose what share of the payout each one receives, and update that list later if life changes.",
  },
  {
    q: "How do carriers decide what I'll pay?",
    a: "Mostly your age and the coverage amount you pick, plus your health answers on a simplified-issue policy. Since the payout is smaller than a large life insurance policy, premiums tend to stay modest and fixed for life.",
  },
  {
    q: "Can coverage be adjusted after I'm enrolled?",
    a: "In most cases, yes — you can typically increase coverage (subject to new underwriting) or update beneficiaries whenever you need to. Your agent can walk you through what your specific carrier allows.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-canvas-alt">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            Questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            Straightforward answers, before you ever pick up the phone.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-mist bg-canvas-raised px-6 py-5 open:border-harbor-mid/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-harbor marker:content-none">
                {item.q}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0 text-harbor-mid transition-transform duration-200 group-open:-rotate-180"
                >
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal/80">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
