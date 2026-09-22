import type { SVGProps } from "react";
import Image from "next/image";

function IconPhoneOff(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C9.5 21 3 14.5 3 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconEar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M9 18c-2.5 0-5-2.2-5-5.5C4 7.5 7.5 4 12 4s8 3 8 7c0 2.8-2 4-3.5 4S14 13.8 14 12v-1a2 2 0 10-4 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconWallet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 10h18M15 14h2.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconGlobe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconHandHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M3 13l4-1 4 1.2c1 .3 1 1.7-.1 1.9l-3.4.6-3.5-.7z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M11 13l3.5 1c1 .3 2 .1 2.8-.6l3.2-2.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M12.3 6.8c-.9-1.4-3-1-3 .6 0 1.4 1.8 2.4 3 3.4 1.2-1 3-2 3-3.4 0-1.6-2.1-2-3-.6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

const POINTS = [
  {
    Icon: IconPhoneOff,
    title: "No robocalls, no scripts",
    body: "You'll talk to a licensed agent — an actual person, not a call center reading off a list.",
  },
  {
    Icon: IconEar,
    title: "People who genuinely listen",
    body: "We take the time to understand your health, your budget, and what matters to your family before we suggest anything.",
  },
  {
    Icon: IconWallet,
    title: "Coverage that fits your budget",
    body: "Fixed income or still working, we look for something that's honestly affordable, not just easy to sell.",
  },
  {
    Icon: IconGlobe,
    title: "A guide for every state",
    body: "Dedicated resources for all 50 states and D.C., since what's available depends on where you live.",
  },
  {
    Icon: IconHandHeart,
    title: "Always free, never obligated",
    body: "A quote and a conversation with an agent cost nothing, and enrolling is always your choice.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-canvas-alt">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brass uppercase">
            Why families choose us
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-harbor sm:text-4xl">
            Why choose FinalExpense.support
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/75">
            Insurance shouldn&apos;t feel like a sales pitch, and it definitely
            shouldn&apos;t feel cold. We believe in real conversations, at your
            pace.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
            <Image
              src="/photos/family-multigenerational-group.jpg"
              alt="Three generations of a family together in their kitchen"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-4 lg:order-1">
            {POINTS.map((p) => (
              <div key={p.title} className="flex gap-4 rounded-xl bg-canvas-raised p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-canvas-alt text-harbor">
                  <p.Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-extrabold text-harbor">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/70">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
