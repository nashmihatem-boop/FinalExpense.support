export type MedicationFact = {
  slug: string;
  name: string;
  examples: string;
  summary: string;
  detail: string;
};

export const MEDICATIONS: MedicationFact[] = [
  {
    slug: "anti-seizure-medication",
    name: "Anti-Seizure Medication",
    examples: "e.g., Keppra, Dilantin, Lamictal",
    summary: "Carriers tend to read this as a sign of epilepsy or a seizure history, more than a worry in its own right.",
    detail:
      "What matters to a carrier isn't really the medication itself — it's the story behind it: how long it's been since the last seizure, and whether things are under control. A good long stretch seizure-free on a steady dose commonly clears the way for level coverage. A seizure that happened recently, or a recent change in dosage, is more likely to bring extra questions and a graded outcome instead.",
  },
  {
    slug: "antidepressants",
    name: "Antidepressants",
    examples: "e.g., Zoloft, Lexapro, Wellbutrin",
    summary: "Among the most common prescriptions a carrier will see, and rarely a barrier on its own.",
    detail:
      "Depression and anxiety touch an enormous number of families, and most carriers treat a steady antidepressant prescription as routine rather than a warning sign. Stability is what really counts — how long your loved one has been taking it, whether the dose has changed recently, and whether there's ever been a hospitalization tied to it. A prescription that's been steady for a long time is usually a non-issue.",
  },
  {
    slug: "blood-thinners",
    name: "Blood Thinners",
    examples: "e.g., Eliquis, Xarelto, Warfarin",
    summary: "Why your loved one takes one matters far more to underwriters than the medication itself.",
    detail:
      "There are plenty of reasons a doctor might prescribe a blood thinner — AFib, a past blood clot, a mechanical heart valve among them — and carriers look past the prescription itself to whatever's underneath it. One tied to a well-managed condition like AFib is often perfectly fine at level rates; one tied to a more serious, recent cardiac event may steer things toward a graded outcome instead.",
  },
  {
    slug: "opioid-pain-medication",
    name: "Opioid Pain Medication",
    examples: "e.g., Oxycodone, Hydrocodone, Tramadol",
    summary: "This is the category carriers look at most closely, since they're specifically watching for signs of dependency.",
    detail:
      "Short-term use tied to a specific event, like a past surgery, is viewed very differently than an ongoing, long-term prescription. What carriers are mainly trying to rule out is substance dependency, along with the more serious chronic pain conditions that opioids sometimes treat. A stable, long-standing prescription for a known condition tends to fare better than one that's recent or with no clear end in sight.",
  },
];

export function findMedication(slug: string): MedicationFact | undefined {
  return MEDICATIONS.find((m) => m.slug === slug);
}
