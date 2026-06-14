/**
 * Data for the CPSC Lab & Test-Report Status Checker.
 *
 * SCOPE NOTE (read before adding data): this dataset is the list of labs CPSC
 * has WITHDRAWN acceptance from "for cause" — not the full live accepted-lab
 * registry. CPSC's accepted-lab list is a rule-specific, ~hundreds-of-labs
 * search interface (cpsc.gov/cgi-bin/labsearch/) with no clean bulk export, and
 * acceptance is granted per children's-product-safety-rule. Mirroring it
 * statically would go stale and create false "this lab is accepted" reads. So
 * the deterministic spine is the small, stable, high-signal WITHDRAWN list (the
 * actual catalyst and the actual risk), and the tool ROUTES every "is it
 * currently accepted?" question to CPSC's own search rather than faking
 * coverage. See outputs/certdesk/lab-status-dataset-refresh.md for the refresh
 * procedure.
 *
 * Every lab below is entity-verified against primary/agency sources. When this
 * list changes (a new adverse action, a reinstatement), update here AND bump
 * LAST_VERIFIED, AND update the articles that cite these labs
 * (is-your-testing-lab-still-cpsc-accepted.mdx).
 */

// Date this dataset was last verified against CPSC's adverse-action publications.
export const LAST_VERIFIED = "2026-06-14";

// CPSC's accepted-lab search — the canonical source the tool routes users to.
export const CPSC_LAB_SEARCH_URL = "https://www.cpsc.gov/cgi-bin/labsearch/";

/**
 * Labs CPSC withdrew acceptance from for cause.
 *
 * Fields:
 *  - id:           CPSC Lab ID (string of digits)
 *  - name:         lab's name as CPSC published it
 *  - country:      lab location
 *  - status:       "withdrawn"
 *  - withdrawnDate / action: when and how
 *  - basis:        CPSC's stated reason
 *  - scopeNote:    what the withdrawal hits (children's-product testing)
 *  - source:       citation for verification
 *  - matchTokens:  distinctive lowercased strings used to match messy user
 *                  input to this lab (see matchWithdrawnLab). Keep these
 *                  distinctive enough not to false-positive.
 */
export const WITHDRAWN_LABS = [
  {
    id: "1843",
    name: "Shenzhen GTT Testing Technology Co., Ltd.",
    country: "China",
    status: "withdrawn",
    withdrawnDate: "2026-01-15",
    action: "Immediate withdrawal (effective immediately)",
    basis:
      "Falsified test reports and an undisclosed relocation of the testing facility.",
    scopeNote:
      "Children's product safety rule testing. CPSC stated certifications resting on this lab are no longer accepted.",
    source:
      "CPSC Chairman statement, Jan 15 2026; corroborated by Mondaq, Mohawk Global, Retail & Consumer Products Law Observer.",
    matchTokens: ["gtt testing", "shenzhen gtt", "gtt"],
  },
  {
    id: "1755",
    name: "Dongguan True Safety Testing Co., Ltd.",
    country: "China",
    status: "withdrawn",
    withdrawnDate: "2026-01-15",
    action: "Immediate withdrawal (effective immediately)",
    basis:
      "Violated testing rules; its accreditation was suspended; failed to disclose that adverse action to CPSC.",
    scopeNote:
      "Children's product safety rule testing. CPSC stated certifications resting on this lab are no longer accepted.",
    source:
      "CPSC Chairman statement, Jan 15 2026; corroborated by Mondaq, Mohawk Global.",
    matchTokens: ["true safety", "dongguan true safety"],
  },
  {
    id: "1857",
    name: "Fujian Berton Testing Service Co., Ltd.",
    country: "China",
    status: "withdrawn",
    withdrawnDate: "2026-01-15",
    action: "Immediate withdrawal (effective immediately)",
    basis:
      "Violated testing rules; its accreditation was revoked; failed to disclose that adverse action to CPSC.",
    scopeNote:
      "Children's product safety rule testing. CPSC stated certifications resting on this lab are no longer accepted.",
    source:
      "CPSC Chairman statement, Jan 15 2026; corroborated by Mondaq, Mohawk Global.",
    matchTokens: ["berton", "fujian berton"],
  },
  {
    id: "1710",
    name: "Shenzhen HUAK Testing Technology Co., Ltd.",
    country: "China",
    status: "withdrawn",
    withdrawnDate: "2026-01-15",
    action: "Immediate withdrawal (effective immediately)",
    basis:
      "Certified furniture that later failed independent tip-over testing; systemic failures in children's-product testing procedures, including infant walkers, bath seats, and bassinets.",
    scopeNote:
      "Children's product safety rule testing. CPSC stated certifications resting on this lab are no longer accepted.",
    source:
      "CPSC Chairman statement, Jan 15 2026; corroborated by Mondaq, Mohawk Global.",
    matchTokens: ["huak", "shenzhen huak"],
  },
  {
    id: "1606",
    name: "Shenzhen LCS Compliance Testing Laboratory Ltd.",
    country: "China",
    status: "withdrawn",
    withdrawnDate: "2024-03",
    action: "Permanent withdrawal — Final Notice issued March 2024",
    basis:
      "Investigation evidence included a Chinese government penalty for issuing false test reports.",
    scopeNote: "Children's product safety rule testing.",
    source:
      "CPSC adverse-action list, Final Notice March 2024 (primary-verified via Wayback re-pull of the 2024 adverse-action PDF, session #263).",
    matchTokens: ["lcs compliance", "shenzhen lcs"],
  },
  {
    id: "1415",
    name: "Bay Area Compliance Laboratories Corp. (Dongguan)",
    country: "China",
    status: "withdrawn",
    withdrawnDate: "2024-04",
    action: "Permanent withdrawal — Final Notice issued April 2024",
    basis:
      "Roughly 690 test reports over about a decade fraudulently carried another lab's address and emblem.",
    scopeNote: "Children's product safety rule testing.",
    source:
      "CPSC adverse-action list, Final Notice April 2024 (primary-verified via Wayback re-pull of the 2024 adverse-action PDF, session #263).",
    matchTokens: ["bay area compliance", "bacl"],
  },
];

/** Normalize a lab name for fuzzy matching: lowercase, drop legal suffixes and
 * punctuation, collapse whitespace. */
export function normalizeLabName(raw) {
  if (!raw) return "";
  return String(raw)
    .toLowerCase()
    .replace(/[.,]/g, " ")
    .replace(/\b(co|ltd|inc|corp|corporation|limited|company|llc|services?)\b/g, " ")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Extract the digits from a lab-ID input ("Lab ID 1843", "#1843", "1843"). */
export function normalizeLabId(raw) {
  if (!raw) return "";
  const digits = String(raw).replace(/\D/g, "");
  return digits;
}

/**
 * Deterministic lookup: does this lab name and/or CPSC lab code match a
 * withdrawn lab? Returns { lab, matchedBy } or null.
 *
 * Priority: exact lab-ID match (highest confidence) → distinctive name token.
 * Name matching requires a stored matchToken to appear in the normalized input
 * (or the input to appear in the normalized lab name), so generic words can't
 * trigger a false positive.
 */
export function matchWithdrawnLab(name, code) {
  const codeDigits = normalizeLabId(code);
  if (codeDigits) {
    const byId = WITHDRAWN_LABS.find((lab) => lab.id === codeDigits);
    if (byId) return { lab: byId, matchedBy: "id" };
  }

  const normName = normalizeLabName(name);
  if (normName) {
    for (const lab of WITHDRAWN_LABS) {
      // Forward containment only: a stored distinctive token must appear in the
      // user's normalized input. Typing the full lab name still hits because the
      // tokens are substrings of it; short/generic input cannot false-positive.
      const tokenHit = lab.matchTokens.some((t) => normName.includes(t));
      if (tokenHit) return { lab, matchedBy: "name" };
    }
  }

  return null;
}
