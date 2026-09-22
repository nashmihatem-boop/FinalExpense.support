// A plain-language look at how simplified-issue underwriting tends to treat common health
// conditions — meant to help your family get oriented, not to replace real guidance. These
// reflect broad, typical patterns in the final expense insurance market, not a promise, a
// medical opinion, or any single carrier's rulebook — every carrier sets its own questions and
// look-back periods, and real eligibility always comes down to full underwriting of the
// applicant's complete history. Treat this as insurance-underwriting context, not medical advice.
//
// You won't find a carrier-by-carrier comparison chart here (which real companies accept what)
// or specific dollar amounts. That kind of verified, current detail about named companies' actual
// underwriting rules and pricing isn't something to guess at on a commercial site — a licensed
// agent is who can walk your family through that part.

export type Tier = "level" | "time-dependent" | "graded-modified" | "guaranteed";

export const TIER_INFO: Record<Tier, { label: string; blurb: string }> = {
  level: {
    label: "Typically Level Coverage",
    blurb: "When this condition is stable and being well managed, most families still find at least one carrier willing to offer full coverage starting on day one.",
  },
  "time-dependent": {
    label: "Depends on Timing",
    blurb: "How long ago it happened, and how serious it was, tends to decide the outcome here — the same condition can settle at level coverage or land in a graded plan depending on timing.",
  },
  "graded-modified": {
    label: "Graded or Modified Coverage",
    blurb: "Your loved one can usually still be insured, but there's typically a waiting period before the full benefit applies to a death from natural causes.",
  },
  guaranteed: {
    label: "Often Guaranteed Acceptance",
    blurb: "At most carriers, this is enough by itself to rule out simplified-issue underwriting — so the guaranteed-acceptance route, with its two-year waiting period, is usually where families end up.",
  },
};

// The general categories nearly every simplified-issue application asks about, no matter which
// specific condition is involved. These are genuinely common across the market, not tied to any
// one carrier's proprietary wording.
export const COMMON_QUESTION_CATEGORIES: { question: string; why: string }[] = [
  { question: "When were you first diagnosed?", why: "This date is what determines which carrier's look-back window your family falls inside or outside of." },
  { question: "Is it currently controlled or stable?", why: "A condition that's calm and well-managed reads very differently to an underwriter than one that's recently changed or gotten worse." },
  { question: "Have you been hospitalized or had a related procedure recently?", why: "A recent hospital stay is one of the strongest signals underwriters pay attention to." },
  { question: "What medications do you take for it?", why: "Carriers check this answer against actual prescription records, so it helps for the two to line up." },
  { question: "Have you had any related complications?", why: "Complications often carry more weight with underwriters than the original diagnosis does." },
];

export type Scenario = { situation: string; outcome: string };

export type ConditionFact = {
  slug: string;
  name: string;
  tier: Tier;
  note: string;
  scenarios: Scenario[];
  medications?: { name: string; note: string }[];
};

export const CONDITIONS: ConditionFact[] = [
  { slug: "adl-limitations", name: "ADL Limitations", tier: "guaranteed", note: "When a loved one needs regular hands-on help with everyday things like bathing or getting dressed, most carriers see that as a serious red flag.",
    scenarios: [
      { situation: "Needs a hand with one or two tasks now and then, otherwise independent", outcome: "Can sometimes still qualify for level or graded coverage with the right carrier" },
      { situation: "Needs regular help with several daily activities", outcome: "Usually points toward guaranteed acceptance" },
    ] },
  { slug: "alcohol-use-history", name: "Alcohol-Use History", tier: "time-dependent", note: "If treatment was recent, expect a waiting period — a longer, steady stretch of sobriety tends to open more doors.",
    scenarios: [
      { situation: "Sober for 5+ years, with no related health problems", outcome: "Often qualifies for level coverage" },
      { situation: "Treated or hospitalized for this within the past 1–2 years", outcome: "Usually lands in graded, modified, or guaranteed-acceptance territory" },
    ] },
  { slug: "aortic-aneurysm", name: "Aortic Aneurysm", tier: "time-dependent", note: "Once it's been surgically repaired and a couple of years have passed without issue, more carriers become willing to say yes.",
    scenarios: [
      { situation: "Repaired 2+ years ago and stable ever since", outcome: "Often level coverage with certain carriers" },
      { situation: "Diagnosed recently, or not yet repaired", outcome: "Usually a graded or modified plan" },
    ] },
  { slug: "asthma", name: "Asthma", tier: "level", note: "When it's well controlled and doesn't require oxygen, this rarely changes the outcome at all.",
    scenarios: [
      { situation: "Kept under control with an inhaler, no oxygen needed", outcome: "Almost always qualifies for level coverage" },
      { situation: "Frequent flare-ups or trips to the emergency room", outcome: "Can shift to graded with some carriers" },
    ] },
  { slug: "afib", name: "Atrial Fibrillation (AFib)", tier: "level", note: "Once it's being treated and has settled down, this is commonly accepted at level rates.",
    scenarios: [
      { situation: "Kept under control with medication, with no other heart conditions", outcome: "Usually qualifies for level coverage" },
      { situation: "Newly diagnosed, or paired with other cardiac issues", outcome: "Can move to graded or modified" },
    ] },
  { slug: "bipolar-disorder", name: "Bipolar Disorder", tier: "level", note: "Carriers generally treat this the same as other well-managed mental health conditions — commonly accepted without much extra fuss.",
    scenarios: [
      { situation: "Stable on medication, with no recent hospital stays", outcome: "Usually level coverage" },
      { situation: "A recent hospital stay or a change in medication", outcome: "Can move to graded or modified" },
    ] },
  { slug: "blood-clots-dvt-pe", name: "Blood Clots / DVT / PE", tier: "level", note: "This is often not a problem at all — what matters more to carriers is why your loved one is on blood thinners in the first place, not the clot itself.",
    scenarios: [
      { situation: "One past episode, resolved and stable since", outcome: "Often level coverage" },
      { situation: "Clots that keep recurring, or an underlying condition that's still unresolved", outcome: "Can move to graded or modified" },
    ] },
  { slug: "bypass-surgery", name: "Bypass Surgery", tier: "time-dependent", note: "Once roughly a year has passed since surgery and things have stayed stable, level coverage becomes much more common.",
    scenarios: [
      { situation: "A year or more past surgery, stable, with no further procedures", outcome: "Often level coverage" },
      { situation: "Less than a year out, or additional procedures since", outcome: "Usually graded or modified" },
    ] },
  { slug: "cancer-history", name: "Cancer History", tier: "time-dependent", note: "Around the two-year remission mark, many carriers become open to full coverage; if treatment is still active or the cancer has spread, guaranteed acceptance is the more likely path.",
    scenarios: [
      { situation: "In remission for 2+ years, with no recurrence", outcome: "Often level coverage with several carriers" },
      { situation: "Still in treatment, or diagnosed within this past year", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "chronic-pancreatitis", name: "Chronic Pancreatitis", tier: "graded-modified", note: "This tends to fall into a graded plan, and if alcohol use played a role in it, the options can narrow even further.",
    scenarios: [
      { situation: "Well managed, with flare-ups few and far between", outcome: "Often graded" },
      { situation: "Frequent flare-ups, or a hospital stay because of it", outcome: "Can move to modified or guaranteed acceptance" },
    ] },
  { slug: "cirrhosis-liver-disease", name: "Cirrhosis / Liver Disease", tier: "level", note: "Milder cases are often not a problem — it's liver failure or a doctor recommending a transplant that points toward a much longer wait.",
    scenarios: [
      { situation: "Caught early, stable, with no complications", outcome: "Sometimes still level coverage" },
      { situation: "More advanced disease, or a transplant recommended", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "congestive-heart-failure", name: "Congestive Heart Failure", tier: "guaranteed", note: "With this diagnosis, it's hard to avoid some kind of waiting period.",
    scenarios: [
      { situation: "A milder, well-managed case (lower classification)", outcome: "Occasionally graded with select carriers" },
      { situation: "A moderate to advanced case", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "copd", name: "COPD", tier: "graded-modified", note: "A handful of carriers still offer level rates here; needing home oxygen, though, is nearly always a dealbreaker.",
    scenarios: [
      { situation: "A mild case, managed with inhalers, no oxygen needed", outcome: "Sometimes level with select carriers" },
      { situation: "Relying on home oxygen", outcome: "Almost always guaranteed acceptance" },
    ],
    medications: [{ name: "Albuterol, Spiriva, Symbicort", note: "These everyday maintenance inhalers are usually read as a sign of a moderate, well-managed case rather than a serious concern." }] },
  { slug: "crohns-colitis-ibd", name: "Crohn's / Colitis (IBD)", tier: "level", note: "As long as it's being kept under control, this is commonly accepted.",
    scenarios: [
      { situation: "On medication and currently in remission", outcome: "Usually level" },
      { situation: "Currently flaring up, or recent surgery", outcome: "Can move to graded" },
    ] },
  { slug: "dementia-alzheimers", name: "Dementia or Alzheimer's", tier: "guaranteed", note: "This one typically rules out simplified-issue coverage entirely — and if you're the one reading this, there's a good chance it's on behalf of someone you love rather than for yourself.",
    scenarios: [
      { situation: "An early-stage diagnosis with mild cognitive impairment", outcome: "Occasionally graded with select carriers" },
      { situation: "A moderate to advanced diagnosis", outcome: "Almost always guaranteed acceptance" },
    ] },
  { slug: "depression-anxiety", name: "Depression or Anxiety", tier: "level", note: "When it's being treated, this is one of the most commonly accepted conditions there is.",
    scenarios: [
      { situation: "Stable, and managed with medication or therapy", outcome: "Usually level" },
      { situation: "A recent hospital stay, or a history of self-harm", outcome: "Can move to graded or guaranteed acceptance" },
    ],
    medications: [{ name: "Zoloft, Lexapro, Wellbutrin", note: "These are common, stable prescriptions that carriers tend to read as routine rather than a warning sign." }] },
  { slug: "diabetes", name: "Diabetes", tier: "level", note: "Type 2 diabetes that's stable and well controlled is one of the most common conditions that still lands at level coverage — it's complications that tend to move the needle.",
    scenarios: [
      { situation: "Controlled through diet, pills, or insulin, with no complications", outcome: "Often level, sometimes at standard non-diabetic rates" },
      { situation: "Stable overall, but with complications like neuropathy or retinopathy", outcome: "Often still level with the right carrier; sometimes graded" },
      { situation: "A diabetic coma, insulin shock, or amputation within the past 2 years", outcome: "Usually graded, modified, or guaranteed acceptance" },
    ],
    medications: [
      { name: "Metformin, glipizide, Januvia", note: "These common oral medications generally signal type 2 diabetes that's being well managed." },
      { name: "Insulin (Lantus, Novolog, and similar)", note: "This points to a more advanced or longer-standing case, though many carriers will still offer level coverage." },
    ] },
  { slug: "diabetic-amputation", name: "Diabetic Amputation", tier: "time-dependent", note: "After about two stable years have gone by, level coverage becomes an option again for more families.",
    scenarios: [
      { situation: "2+ years past the amputation, stable, no further complications", outcome: "Often level with select carriers" },
      { situation: "Less than 2 years out", outcome: "Usually graded, modified, or guaranteed acceptance" },
    ] },
  { slug: "enlarged-prostate", name: "Enlarged Prostate", tier: "level", note: "This one rarely tips the outcome in either direction.",
    scenarios: [{ situation: "A typical case, whether it's being treated or not", outcome: "Almost always level" }] },
  { slug: "epilepsy-seizures", name: "Epilepsy / Seizures", tier: "level", note: "This is commonly accepted, especially once medication has the seizures under control.",
    scenarios: [
      { situation: "A year or more seizure-free on a stable medication routine", outcome: "Usually level" },
      { situation: "A recent seizure, or a recent change in medication", outcome: "Can move to graded" },
    ],
    medications: [{ name: "Keppra, Dilantin, Lamictal", note: "Carriers care less about which medication is listed and more about how long it's been since the last seizure." }] },
  { slug: "fibromyalgia", name: "Fibromyalgia", tier: "level", note: "This tends to be commonly accepted, without a lot of extra scrutiny.",
    scenarios: [{ situation: "A typical case, whether managed or not", outcome: "Usually level" }] },
  { slug: "heart-attack", name: "Heart Attack", tier: "time-dependent", note: "If things have stayed stable since, level coverage commonly becomes available again around the one-year mark.",
    scenarios: [
      { situation: "A year or more out, stable, with no further heart events", outcome: "Often level with select carriers" },
      { situation: "Less than 12 months out", outcome: "Usually graded or modified" },
    ] },
  { slug: "heart-valve-disease", name: "Heart Valve Disease", tier: "time-dependent", note: "A diagnosis or repair that's still recent typically means waiting before full coverage kicks in.",
    scenarios: [
      { situation: "Repaired, stable, a year or more out", outcome: "Often level with select carriers" },
      { situation: "Recently diagnosed, or recently repaired", outcome: "Usually graded or modified" },
    ] },
  { slug: "hepatitis-c", name: "Hepatitis C", tier: "level", note: "Once treatment has been successful and it's fully cleared, more carriers are willing to offer coverage.",
    scenarios: [
      { situation: "Treated, cleared, and undetectable", outcome: "Often level" },
      { situation: "Still active, or not yet treated", outcome: "Can move to graded or modified" },
    ] },
  { slug: "high-blood-pressure", name: "High Blood Pressure", tier: "level", note: "This is one of the most common conditions carriers come across, and when it's under control, it's usually treated as nothing out of the ordinary.",
    scenarios: [{ situation: "Kept under control through medication or lifestyle changes", outcome: "Almost always level" }],
    medications: [{ name: "Lisinopril, losartan, amlodipine", note: "These are some of the most commonly prescribed medications out there, and on their own they're generally treated as routine." }] },
  { slug: "high-cholesterol", name: "High Cholesterol", tier: "level", note: "This rarely even registers as a concern during underwriting.",
    scenarios: [{ situation: "A typical case, whether treated or not", outcome: "Almost always level" }],
    medications: [{ name: "Statins (Lipitor, Crestor, and similar)", note: "Extremely common, and generally a non-issue when it comes to underwriting." }] },
  { slug: "hiv-aids", name: "HIV / AIDS", tier: "graded-modified", note: "HIV that's being well managed can sometimes find a graded plan; a diagnosis of AIDS tends to point toward guaranteed acceptance instead.",
    scenarios: [
      { situation: "HIV, well managed, with an undetectable viral load", outcome: "Sometimes graded with select carriers" },
      { situation: "A diagnosis of AIDS", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "home-oxygen", name: "Home Oxygen", tier: "guaranteed", note: "This is almost always a dealbreaker, with one notable exception — oxygen used specifically to treat sleep apnea.",
    scenarios: [
      { situation: "Oxygen used only for treated sleep apnea", outcome: "Often still level or graded" },
      { situation: "Oxygen needed for a lung or heart condition", outcome: "Almost always guaranteed acceptance" },
    ] },
  { slug: "kidney-disease", name: "Kidney Disease", tier: "level", note: "Caught in its earlier stages, kidney disease is often not a problem; dialysis or kidney failure, though, usually means a wait.",
    scenarios: [
      { situation: "An early stage, stable, no dialysis needed", outcome: "Often level" },
      { situation: "Currently on dialysis, or in kidney failure", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "lupus", name: "Lupus", tier: "level", note: "A number of carriers will still offer level coverage; cases that are more severe or currently active may be shifted to a graded plan.",
    scenarios: [
      { situation: "Mild, well managed, with flare-ups few and far between", outcome: "Often level with select carriers" },
      { situation: "Currently active, or affecting major organs", outcome: "Usually graded or modified" },
    ] },
  { slug: "multiple-sclerosis", name: "Multiple Sclerosis", tier: "level", note: "A number of carriers will offer this at level coverage; needing significant help with daily activities can mean a longer wait instead.",
    scenarios: [
      { situation: "Stable, independent, with mild symptoms", outcome: "Often level with select carriers" },
      { situation: "Real mobility limitations, or needing help with daily activities", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "neuropathy", name: "Neuropathy", tier: "level", note: "On its own, this is often not a problem; some carriers will grade it, though, when it's a complication of diabetes.",
    scenarios: [
      { situation: "Mild, and not tied to a more serious underlying condition", outcome: "Usually level" },
      { situation: "A complication of progressing diabetes or another condition", outcome: "Can move to graded" },
    ] },
  { slug: "obesity-bmi-over-40", name: "Obesity / BMI Over 40", tier: "level", note: "Quite a few carriers leave build out of simplified-issue underwriting entirely.",
    scenarios: [{ situation: "A typical case, with or without related conditions", outcome: "Often still level with the right carrier" }] },
  { slug: "organ-transplant", name: "Organ Transplant", tier: "time-dependent", note: "The further out you get from the transplant, the more options open up — closer to it, expect a longer wait instead.",
    scenarios: [
      { situation: "5+ years past the transplant, stable", outcome: "Sometimes level with select carriers" },
      { situation: "A few years out or less, or still on the waiting list", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "osteoporosis", name: "Osteoporosis", tier: "level", note: "This rarely has any effect on the outcome.",
    scenarios: [{ situation: "A typical case, treated or untreated", outcome: "Almost always level" }] },
  { slug: "pacemaker-defibrillator", name: "Pacemaker / Defibrillator", tier: "time-dependent", note: "About a year out, level coverage is common — unless there's an underlying heart-failure diagnosis, which changes the picture.",
    scenarios: [
      { situation: "A year or more out, stable, no heart-failure diagnosis", outcome: "Often level" },
      { situation: "Recently placed, or paired with a heart-failure diagnosis", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "parkinsons-disease", name: "Parkinson's Disease", tier: "level", note: "Some carriers will offer this at level coverage; significant mobility limitations can mean a longer wait instead.",
    scenarios: [
      { situation: "An early stage, independent, with mild symptoms", outcome: "Often level with select carriers" },
      { situation: "Real mobility limitations, or wheelchair use", outcome: "Usually graded or guaranteed acceptance" },
    ] },
  { slug: "peripheral-artery-disease", name: "Peripheral Artery Disease", tier: "level", note: "This is often not a problem; recent vascular surgery, though, can push things toward a waiting period.",
    scenarios: [
      { situation: "Managed with medication, no recent surgery", outcome: "Often level" },
      { situation: "Recent vascular surgery, or an amputation", outcome: "Usually graded or modified" },
    ] },
  { slug: "rheumatoid-arthritis", name: "Rheumatoid Arthritis", tier: "level", note: "This is commonly accepted, generally without extra hurdles.",
    scenarios: [{ situation: "Kept under control with medication", outcome: "Usually level" }] },
  { slug: "sarcoidosis", name: "Sarcoidosis", tier: "level", note: "As long as oxygen isn't involved, this is commonly accepted.",
    scenarios: [
      { situation: "A mild case, no oxygen needed", outcome: "Usually level" },
      { situation: "Requires home oxygen", outcome: "Usually guaranteed acceptance" },
    ] },
  { slug: "sleep-apnea", name: "Sleep Apnea", tier: "level", note: "Once it's being treated with a CPAP machine, this is usually a non-issue rather than something to worry about.",
    scenarios: [
      { situation: "Diagnosed, and using a CPAP machine", outcome: "Almost always level" },
      { situation: "Diagnosed, but not yet being treated", outcome: "Can move to graded with some carriers" },
    ] },
  { slug: "smokers-tobacco-users", name: "Smokers & Tobacco Users", tier: "level", note: "Using tobacco changes the rate your family pays, not whether coverage is available at all — day-one coverage is still on the table, just priced at a tobacco rate.",
    scenarios: [{ situation: "A typical case", outcome: "Level coverage at a tobacco-rated premium" }] },
  { slug: "social-security-disability", name: "Social Security Disability", tier: "time-dependent", note: "It's the underlying diagnosis that determines the tier here, not the disability status on its own.",
    scenarios: [{ situation: "Comes down entirely to the underlying condition", outcome: "See that condition's own guide" }] },
  { slug: "stent-placement", name: "Stent Placement", tier: "time-dependent", note: "If things have stayed stable, level coverage is common again by around a year after the procedure.",
    scenarios: [
      { situation: "A year or more out, stable, no further procedures", outcome: "Often level" },
      { situation: "Less than 12 months out", outcome: "Usually graded or modified" },
    ] },
  { slug: "stroke", name: "Stroke", tier: "time-dependent", note: "Around the one-year mark, level coverage commonly becomes available again; a mini-stroke, or TIA, tends to be treated more leniently than a full stroke.",
    scenarios: [
      { situation: "A year or more out and stable, or a TIA (mini-stroke)", outcome: "Often level with select carriers" },
      { situation: "Less than 12 months out, or repeated events", outcome: "Usually graded or modified" },
    ] },
  { slug: "thyroid-disease", name: "Thyroid Disease", tier: "level", note: "This is commonly accepted, plain and simple.",
    scenarios: [{ situation: "Kept under control with medication", outcome: "Almost always level" }],
    medications: [{ name: "Levothyroxine (Synthroid)", note: "Extremely common, and generally not a concern for underwriting." }] },
];

export function findCondition(slug: string): ConditionFact | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

// Groups the A–Z list by body system / condition type for the browse-by-condition widgets.
// A different axis than Tier above (which groups by underwriting outcome) — this one is purely
// for scanability, so visitors can jump to the area relevant to them instead of reading straight
// down an alphabetical wall.
export const CONDITION_CATEGORIES: { label: string; slugs: string[] }[] = [
  { label: "Heart & Circulatory", slugs: [
    "aortic-aneurysm", "afib", "blood-clots-dvt-pe", "bypass-surgery", "congestive-heart-failure",
    "heart-attack", "heart-valve-disease", "high-blood-pressure", "high-cholesterol",
    "pacemaker-defibrillator", "peripheral-artery-disease", "stent-placement", "stroke",
  ] },
  { label: "Respiratory", slugs: ["asthma", "copd", "home-oxygen", "sleep-apnea", "smokers-tobacco-users"] },
  { label: "Diabetes & Metabolic", slugs: ["diabetes", "diabetic-amputation", "obesity-bmi-over-40", "thyroid-disease"] },
  { label: "Cancer", slugs: ["cancer-history"] },
  { label: "Neurological", slugs: ["dementia-alzheimers", "epilepsy-seizures", "multiple-sclerosis", "neuropathy", "parkinsons-disease"] },
  { label: "Mental & Behavioral Health", slugs: ["alcohol-use-history", "bipolar-disorder", "depression-anxiety"] },
  { label: "Digestive & Liver", slugs: ["chronic-pancreatitis", "cirrhosis-liver-disease", "crohns-colitis-ibd", "hepatitis-c"] },
  { label: "Kidney, Organs & Immune", slugs: ["kidney-disease", "organ-transplant", "hiv-aids"] },
  { label: "Autoimmune & Joint", slugs: ["fibromyalgia", "lupus", "osteoporosis", "rheumatoid-arthritis", "sarcoidosis"] },
  { label: "Other", slugs: ["adl-limitations", "enlarged-prostate", "social-security-disability"] },
];
