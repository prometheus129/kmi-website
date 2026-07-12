/**
 * KC-Series grade-selection map — application → grade, by top cut (D97) matched to gauge.
 * Mirrors the published grade guide (/insights/which-calcium-carbonate-grade-for-your-application).
 * Pure data + pure functions, no I/O.
 *
 * HONESTY: the selector recommends a STARTING grade — the grade a technical rep would
 * reach for first. It never asserts the grade is final; qualification happens on the
 * buyer's own line via a free sample with a per-lot COA. Whiteness does not vary across
 * the ladder (≥98 on every grade) — grade choice is a particle-size decision. No producer
 * cost, margin, or price appears anywhere.
 */

export const GRADES = {
  "KC-4": { id: "KC-4", d50: "~1.5 µm", d97: "~5.5 µm", cut: "Finest cut" },
  "KC-6": { id: "KC-6", d50: "~1.7 µm", d97: "~6 µm", cut: "Fine" },
  "KC-10": { id: "KC-10", d50: "~2.0 µm", d97: "~10 µm", cut: "General-purpose middle" },
  "KC-17": { id: "KC-17", d50: "~3.6 µm", d97: "~17 µm", cut: "Coarse & economical" },
};

export const GRADE_ORDER = ["KC-4", "KC-6", "KC-10", "KC-17"];

/** Shared chemistry — identical on every grade. Values typical; confirmed per lot on the COA. */
export const SHARED_SPEC = [
  { k: "CaCO₃", v: "≥98%" },
  { k: "Fe₂O₃", v: "≤0.05%" },
  { k: "Whiteness", v: "≥98" },
  { k: "ISO brightness (R457)", v: "≥95" },
  { k: "Surface", v: "Coated or uncoated" },
];

/**
 * Coating is an orthogonal decision (loading, gauge, dispersion process — not the grade
 * number). Rule of thumb per the coated-vs-uncoated guide: the higher the loading, the
 * thinner the product, and the finer the grade, the more coating pays off.
 */
export const COATING_NOTES = {
  coated:
    "Usually coated (stearic acid) here — thin gauges, fine grades, and high loadings in PP/PE are where coating gives the most benefit.",
  uncoated:
    "Often runs uncoated — thick sections at moderate loadings usually disperse acceptably without coating; confirm against your process.",
  either:
    "Coated or uncoated is decided by loading, gauge, and your dispersion process — not by the grade number.",
};

export const APPLICATIONS = [
  // Film
  {
    id: "bopp_high_gloss_film",
    label: "BOPP / high-gloss film",
    group: "Film",
    grade: "KC-4",
    coating: "coated",
    why: "A thin gauge cannot hide a coarse particle — one oversize grain becomes a gel, speck, or tear, and gloss needs the finest, tightest top cut.",
  },
  {
    id: "breathable_film",
    label: "Breathable film",
    group: "Film",
    grade: "KC-6",
    coating: "coated",
    why: "Fine enough for stretched, voided films without paying for the very finest cut.",
  },
  // Masterbatch
  {
    id: "white_masterbatch",
    label: "White masterbatch (premium)",
    group: "Masterbatch",
    grade: "KC-4",
    coating: "coated",
    why: "Premium white masterbatch carries the surface spec of the film it tints — the finest cut protects gloss, and ≥98 whiteness is what lets it extend TiO₂ furthest.",
  },
  {
    id: "filler_colour_masterbatch",
    label: "Filler / colour masterbatch",
    group: "Masterbatch",
    grade: "KC-10",
    coating: "coated",
    why: "The general-purpose middle grade — it balances loading and dispersion for general end-uses.",
    refine: {
      question: "Thinnest product this masterbatch ends up in?",
      options: [
        {
          id: "general",
          label: "Sheet, injection, general",
          grade: "KC-10",
          default: true,
          why: "For general end-uses, KC-10 balances loading and dispersion — match the grade to the thinnest product the masterbatch serves.",
        },
        {
          id: "fine_film_tape",
          label: "Fine film or tape",
          grade: "KC-6",
          why: "Masterbatch destined for fine film or tape steps one grade finer — the end product's gauge sets the top cut, not the masterbatch itself.",
        },
      ],
    },
  },
  // Sheet, tape & injection
  {
    id: "fine_sheet_tape",
    label: "Fine sheet & tape",
    group: "Sheet, tape & injection",
    grade: "KC-6",
    coating: "coated",
    why: "Fine enough for thin gauges; a tight top cut keeps surfaces smooth on sheet and tape lines.",
  },
  {
    id: "injection_moulding",
    label: "Injection moulding",
    group: "Sheet, tape & injection",
    grade: "KC-10",
    coating: "either",
    why: "The general-purpose middle grade — enough fineness for most compounds, economical at high loadings.",
    refine: {
      question: "Wall thickness?",
      options: [
        {
          id: "standard_wall",
          label: "Standard / thick wall",
          grade: "KC-10",
          default: true,
          why: "Standard walls suit the general-purpose middle grade — enough fineness for most compounds, economical at high loadings.",
        },
        {
          id: "thin_wall",
          label: "Thin-wall",
          grade: "KC-6",
          why: "Thin walls behave like film — a coarse particle becomes a visible defect, so step one grade finer.",
        },
      ],
    },
  },
  {
    id: "modified_plastics",
    label: "Modified plastics / compounding",
    group: "Sheet, tape & injection",
    grade: "KC-10",
    coating: "either",
    why: "Enough fineness for most compounds, economical enough for high loadings.",
  },
  // Pipe, profile & other
  {
    id: "pvc_pipe_profile",
    label: "PVC pipe & profile",
    group: "Pipe, profile & other",
    grade: "KC-17",
    coating: "uncoated",
    why: "Thick walls tolerate a coarser particle — ultrafine adds cost without benefit. Low iron (Fe₂O₃ ≤0.05%) and a consistent top cut lot to lot are what matter here.",
  },
  {
    id: "coatings_ink",
    label: "Coatings & ink",
    group: "Pipe, profile & other",
    grade: "KC-17",
    coating: "either",
    why: "The coarser, economical grade — a consistent top cut lot to lot matters more than ultrafineness.",
  },
  {
    id: "paper",
    label: "Paper",
    group: "Pipe, profile & other",
    grade: "KC-17",
    coating: "either",
    why: "The economical grade for paper filling — consistency and low iron matter more than an ultrafine cut.",
  },
  {
    id: "rubber",
    label: "Rubber",
    group: "Pipe, profile & other",
    grade: "KC-17",
    coating: "either",
    why: "Rubber compounds tolerate the coarser cut — the economics favour KC-17 at typical loadings.",
  },
  {
    id: "general_filler",
    label: "General filler",
    group: "Pipe, profile & other",
    grade: "KC-17",
    coating: "either",
    why: "Where the product doesn't demand a fine top cut, the coarser grade performs well at the lowest cost.",
  },
  // Fallback
  {
    id: "other",
    label: "Other / not sure",
    group: "Pipe, profile & other",
    grade: null,
    coating: "either",
    why: null,
  },
];

export const APPLICATION_GROUPS = ["Film", "Masterbatch", "Sheet, tape & injection", "Pipe, profile & other"];

/**
 * Resolve a recommendation. Returns null when no application is selected.
 * grade is null for the "Other / not sure" fallback (rep picks with the buyer).
 */
export function recommend(appId, refineId) {
  const app = APPLICATIONS.find((a) => a.id === appId);
  if (!app) return null;

  let gradeId = app.grade;
  let why = app.why;
  let refineLabel = null;

  if (app.refine) {
    const opt =
      app.refine.options.find((o) => o.id === refineId) ||
      app.refine.options.find((o) => o.default) ||
      app.refine.options[0];
    gradeId = opt.grade;
    why = opt.why || app.why;
    refineLabel = opt.label;
  }

  return {
    application: app,
    grade: gradeId ? GRADES[gradeId] : null,
    why,
    refineLabel,
    coatingNote: COATING_NOTES[app.coating] || COATING_NOTES.either,
  };
}
