import { Button } from "@/components/ui/button";

const STEPS = [
  {
    n: "1",
    title: "Share a little about yourself",
    body: "Your age, general health, and how much coverage feels right. About two minutes, whenever you're ready.",
  },
  {
    n: "2",
    title: "A licensed agent takes it from there",
    body: "Someone who's done this before matches your answers to real carriers, then calls to walk through it with you — no script, no pressure.",
  },
  {
    n: "3",
    title: "Decide at your own pace",
    body: "Like what you hear? You can enroll on that same call. If it's not the right fit, you walk away owing nothing.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            Three gentle steps, one caring phone call.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-2xl bg-canvas-raised p-7 shadow-[0_1px_2px_rgba(22,39,61,0.06)]">
              <span className="font-display text-3xl font-extrabold text-brass">{step.n}</span>
              <h3 className="mt-4 font-display text-lg font-extrabold text-harbor">{step.title}</h3>
              <p className="mt-2.5 text-base leading-relaxed text-charcoal/80">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <Button as="link" href="/get-quote" size="lg">
            Start my two-minute conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
