import type { SVGProps } from "react";
import Image from "next/image";

function IconCompass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M15 9l-2 5-4 1 2-5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function IconTrendingDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 7l6 6 4-4 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10v5h-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTrendingUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 17l6-6 4 4 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 9v5h-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGift(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="9" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 13h16M12 9v11" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 9c-2-3.5-7-2.5-7-.2C5 10 7 9 12 9zM12 9c2-3.5 7-2.5 7-.2 0 1.2-2 .2-7 .2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

const SCENARIOS = [
  {
    Icon: IconCompass,
    title: "New to all of this",
    body: "Not sure where to even start? We'll explain how it works, gently and at your pace, with no pressure to decide today.",
  },
  {
    Icon: IconTrendingDown,
    title: "Paying more than you'd like",
    body: "Already have a policy? We'll compare it to what's available now, to see if there's a better fit for the same coverage.",
  },
  {
    Icon: IconTrendingUp,
    title: "Worried you don't have enough",
    body: "If your current coverage would leave a gap, we'll help you size something that closes it.",
  },
  {
    Icon: IconGift,
    title: "Wanting to leave a little more",
    body: "Some families want a cushion beyond funeral costs — for medical bills, or just a gift. We'll help you find the right number.",
  },
];

export function HowWeCanHelp() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            However you found us
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            However you got here, we&apos;re glad you did
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            Everyone who visits this page is at a different point in the
            journey. Here&apos;s where most families begin.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/photos/planning-seniors-conversation.jpg"
              alt="A group of seniors gathered together in conversation"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            {SCENARIOS.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-xl border-l-[3px] border-harbor-mid bg-canvas-alt p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-harbor text-canvas">
                  <s.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-extrabold text-harbor">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center font-display text-lg font-bold text-harbor">
          However long it takes, we&apos;ll go at your pace.
        </p>
      </div>
    </section>
  );
}
