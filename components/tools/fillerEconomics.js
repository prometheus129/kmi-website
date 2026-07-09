/**
 * Filler-economics model — the honest TiO2-extension + resin-displacement math.
 * Mirrors scripts/gcc_tio2_savings.py (KMI repo). Pure functions, no I/O.
 *
 * HONESTY: CaCO3 (RI ~1.6) EXTENDS TiO2 (RI ~2.7) — it does not replace it 1:1.
 * This module never asserts a displacement %; it returns LEVERAGE (value per point)
 * and a sensitivity range. The achievable displacement is the buyer's lab-verified
 * variable. Illustrative ranges are labelled illustrative. No producer cost/margin
 * is expressed — inputs are the buyer's own numbers + public pigment prices.
 */

export const APPLICATIONS = [
  { id: "white_masterbatch", label: "White masterbatch", range: [15, 35] },
  { id: "white_film", label: "White / opaque film", range: [10, 30] },
  { id: "paint_white_base", label: "Paint — white base", range: [10, 25] },
  { id: "general_white", label: "General white line", range: [10, 30] },
];

export const SENSITIVITY_POINTS = [5, 10, 15, 20, 25, 30]; // % of TiO2 displaced
export const REPLACE_RATIO = 1.0; // mass filler added per mass TiO2 removed

/** Net $/MT of finished product saved at a given TiO2 displacement fraction. */
export function tio2SavingPerMt(
  tio2KgPerMt,
  tio2PriceMt,
  fillerPriceMt,
  dispFrac,
  replaceRatio = REPLACE_RATIO
) {
  const removed = tio2KgPerMt * dispFrac;
  const added = removed * replaceRatio;
  return removed * (tio2PriceMt / 1000) - added * (fillerPriceMt / 1000);
}

/** Full TiO2-lever result: leverage per point + sensitivity table + optional headline. */
export function computeTio2Lever({ tio2Pct, tio2Price, annualMt, fillerPrice, displacementPct }) {
  const tio2Kg = (tio2Pct || 0) * 10; // 1% of 1 MT (1000 kg) = 10 kg
  const perPointMt = tio2SavingPerMt(tio2Kg, tio2Price, fillerPrice, 0.01);
  const perPointYr = perPointMt * (annualMt || 0);

  const sensitivity = SENSITIVITY_POINTS.map((d) => {
    const perMt = tio2SavingPerMt(tio2Kg, tio2Price, fillerPrice, d / 100);
    return { displacementPct: d, perMt, perYr: perMt * (annualMt || 0) };
  });

  let headline = null;
  const disp = Number(displacementPct);
  if (displacementPct !== "" && Number.isFinite(disp) && disp > 0) {
    const perMt = tio2SavingPerMt(tio2Kg, tio2Price, fillerPrice, disp / 100);
    headline = { displacementPct: disp, perMt, perYr: perMt * (annualMt || 0) };
  }

  // Nearest sensitivity row to the user's entered displacement (for highlighting).
  let nearest = null;
  if (headline) {
    nearest = SENSITIVITY_POINTS.reduce((a, b) =>
      Math.abs(b - disp) < Math.abs(a - disp) ? b : a
    );
  }

  return { tio2Kg, perPointMt, perPointYr, sensitivity, headline, nearest };
}

/** Resin-displacement lever ($/MT) — the value of filling at all, not a switch benefit. */
export function resinSavingPerMt(loadingPct, resinPrice, fillerPrice) {
  return ((loadingPct || 0) / 100) * ((resinPrice || 0) - (fillerPrice || 0));
}
