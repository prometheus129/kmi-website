/**
 * Rules data for the 2026 Compliance Deadline Checker.
 * Every date below was verified against primary sources June 11, 2026
 * (Federal Register / state statutes / agency pages). When a rule changes,
 * update here AND in any article that cites it.
 *
 * Category ids map to PRODUCT_CATEGORIES. A rule with categories: "all"
 * matches every category. State rules match when the user sells in that
 * state or selects nationwide.
 */

export const PRODUCT_CATEGORIES = [
  { id: "toys", label: "Toys & games (ages 12 and under)" },
  { id: "childrens-apparel", label: "Children's apparel & sleepwear" },
  { id: "juvenile-products", label: "Baby & juvenile products (cribs, strollers, pacifiers, high chairs)" },
  { id: "childrens-other", label: "Children's jewelry, school supplies & accessories" },
  { id: "adult-apparel", label: "Adult apparel & textiles" },
  { id: "cookware", label: "Cookware & kitchenware" },
  { id: "electronics", label: "Electronics & battery-powered products" },
  { id: "furniture", label: "Furniture, carpets, rugs & textile furnishings" },
  { id: "cosmetics", label: "Cosmetics & personal care" },
  { id: "cleaning", label: "Cleaning products" },
  { id: "food-contact", label: "Food packaging & food-contact items" },
  { id: "sporting", label: "Bicycles, helmets & sporting goods" },
  { id: "mattresses", label: "Mattresses & bedding" },
  { id: "other", label: "Other consumer products" },
];

export const STATES = [
  { id: "ALL", label: "Nationwide (Amazon / online marketplaces)" },
  { id: "CA", label: "California" },
  { id: "CT", label: "Connecticut" },
  { id: "ME", label: "Maine" },
  { id: "MN", label: "Minnesota" },
  { id: "NH", label: "New Hampshire" },
  { id: "NM", label: "New Mexico" },
  { id: "NY", label: "New York" },
  { id: "WA", label: "Washington" },
];

const CHILDRENS = ["toys", "childrens-apparel", "juvenile-products", "childrens-other"];

export const RULES = [
  {
    id: "cpsc-efiling",
    name: "CPSC certificate eFiling (ACE)",
    level: "federal",
    categories: "all",
    deadline: "2026-07-08",
    inForce: false,
    importOnly: true,
    headline:
      "Since July 8, 2026, imported consumer products subject to a CPSC rule must have certificate of compliance data filed electronically with customs at entry.",
    detail:
      "Final rule 90 FR 1800 (amending 16 CFR part 1110). Applies to all covered imports — including former low-value parcels and mail (mail uses the CPSC Product Registry before arrival). Foreign Trade Zone entries follow on January 8, 2027. Your broker transmits the data, but you remain responsible for its accuracy.",
    documents: [
      "Children's Product Certificate (CPC) or General Certificate of Conformity (GCC) for each covered product",
      "The 16 CFR 1110.11 data elements (testing lab, dates and places of manufacture and testing, certifier contact)",
      "CPSC Product Registry registration if you use the Reference Message Set or import by mail",
    ],
    link: "/compliance/cpsc-efiling-deadline-july-8-2026-importers-guide",
  },
  {
    id: "cpc",
    name: "Children's Product Certificate (CPC)",
    level: "federal",
    categories: CHILDRENS,
    deadline: null,
    inForce: true,
    headline:
      "Children's products require a CPC backed by testing at a CPSC-accepted third-party lab — already in force.",
    detail:
      "You, the importer, issue the CPC — not your factory and not the lab. Amazon also requests CPCs for children's categories and deactivates listings when document requests go unanswered (per Amazon's published seller guidance).",
    documents: [
      "Test report from a CPSC-accepted lab for each applicable children's product safety rule",
      "CPC citing each rule, the lab, and dates and places of manufacture and testing",
    ],
    link: "/compliance/which-products-require-cpsc-efiling-hts-codes",
  },
  {
    id: "gcc",
    name: "General Certificate of Conformity (GCC)",
    level: "federal",
    categories: ["adult-apparel", "sporting", "mattresses", "furniture", "electronics"],
    deadline: null,
    inForce: true,
    headline:
      "General-use products under a CPSC rule (apparel flammability, mattresses, carpets, bikes and helmets, button-battery products) need a GCC — already in force.",
    detail:
      "A GCC rests on a test of each product or a reasonable testing program; third-party lab testing is not mandated, but you must be able to stand behind the data. Button-cell and coin-battery products fall under UL 4200A (16 CFR 1263).",
    documents: [
      "Test records or a documented reasonable testing program",
      "GCC citing each applicable rule",
    ],
    link: "/compliance/which-products-require-cpsc-efiling-hts-codes",
  },
  {
    id: "de-minimis",
    name: "De minimis eliminated — formal entry for every shipment",
    level: "federal",
    categories: "all",
    deadline: null,
    inForce: true,
    importOnly: true,
    headline:
      "Since August 29, 2025 there is no duty-free de minimis lane — shipments of any value clear through standard ACE entries.",
    detail:
      "Executive Order 14324 suspended de minimis for all countries; Type 86 entries ended. Former sub-$800 parcels now flow through the same entry types where CPSC certificate eFiling has attached since July 8, 2026.",
    documents: [
      "Appropriate ACE entry type per shipment (your broker advises)",
      "Duty payment — postal shipments used per-item bands through February 28, 2026, ad valorem since",
    ],
    link: "/compliance/de-minimis-gone-small-parcel-compliance-cascade",
  },
  {
    id: "mn-pfas-ban",
    name: "Minnesota PFAS category bans (Amara's Law)",
    level: "state",
    state: "MN",
    categories: ["cookware", "cosmetics", "cleaning", "furniture", "juvenile-products"],
    deadline: null,
    inForce: true,
    headline:
      "Minnesota bans intentionally added PFAS in 11 product categories — in force since January 1, 2025.",
    detail:
      "Minn. Stat. 116.943 covers carpets and rugs, cleaning products, cookware, cosmetics, dental floss, fabric treatments, juvenile products, menstruation products, textile furnishings, ski wax, and upholstered furniture.",
    documents: [
      "Supplier confirmation of no intentionally added PFAS (with test data where available)",
    ],
  },
  {
    id: "mn-pfas-reporting",
    name: "Minnesota PFAS-in-products reporting",
    level: "state",
    state: "MN",
    categories: "all",
    deadline: "2026-09-15",
    inForce: false,
    headline:
      "Any product with intentionally added PFAS sold in Minnesota must be reported by September 15, 2026.",
    detail:
      "Applies to manufacturers including brand owners and importers; one-time $800 fee. The deadline was extended from earlier dates in April 2026 — confirm current status with the Minnesota Pollution Control Agency before relying on it.",
    documents: ["PFAS inventory across your catalog", "Supplier declarations / test reports"],
  },
  {
    id: "ct-pfas-label-notify",
    name: "Connecticut PFAS label-or-notify deadline",
    level: "state",
    state: "CT",
    categories: [
      "adult-apparel",
      "childrens-apparel",
      "cleaning",
      "cookware",
      "cosmetics",
      "furniture",
      "juvenile-products",
      "sporting",
    ],
    deadline: "2026-07-01",
    inForce: false,
    headline:
      "Since July 1, 2026, 12 product categories with intentionally added PFAS may only be sold in Connecticut if labeled and reported to CT DEEP.",
    detail:
      "PA 24-59: apparel, carpets and rugs, cleaning products, cookware, cosmetics, dental floss, fabric treatments, juvenile products, menstruation products, textile furnishings, ski wax, upholstered furniture. This is a label-and-notify obligation — the full sales ban arrives January 1, 2028.",
    documents: [
      "PFAS determination per product (supplier declaration or testing)",
      "\"Contains PFAS\" labeling if you keep selling",
      "CT DEEP notification (PFAS Reporting Form)",
    ],
  },
  {
    id: "me-pfas-ban",
    name: "Maine PFAS category bans",
    level: "state",
    state: "ME",
    categories: [
      "cleaning",
      "cookware",
      "cosmetics",
      "juvenile-products",
      "furniture",
      "adult-apparel",
      "childrens-apparel",
    ],
    deadline: null,
    inForce: true,
    headline:
      "Maine bans intentionally added PFAS in cleaning products, cookware, cosmetics, juvenile products, textiles, upholstered furniture and more — in force since January 1, 2026.",
    detail:
      "38 MRS 1614. Severe-wet-condition outdoor apparel is deferred; a near-universal ban follows in 2032.",
    documents: ["Supplier confirmation of no intentionally added PFAS"],
  },
  {
    id: "ny-pfas-apparel",
    name: "New York PFAS apparel ban",
    level: "state",
    state: "NY",
    categories: ["adult-apparel", "childrens-apparel"],
    deadline: null,
    inForce: true,
    headline:
      "New York bans intentionally added PFAS in apparel — in force since January 1, 2025.",
    detail:
      "ECL 37-0121. Outdoor severe-wet apparel follows January 1, 2028. Fines run $1,000-2,500 per day.",
    documents: ["Supplier PFAS declarations for textile inputs"],
  },
  {
    id: "nh-pfas-ban",
    name: "New Hampshire PFAS product ban",
    level: "state",
    state: "NH",
    categories: ["furniture", "cosmetics", "food-contact", "juvenile-products"],
    deadline: "2027-01-01",
    inForce: false,
    headline:
      "From January 1, 2027, New Hampshire bans intentionally added PFAS in carpets and rugs, cosmetics, food packaging, juvenile products, upholstered furniture and more.",
    detail: "RSA 149-M:64 (HB 1649). Narrower than Connecticut or Minnesota — cookware and general apparel are not on New Hampshire's list.",
    documents: ["Supplier PFAS declarations for covered categories"],
  },
  {
    id: "nm-pfas-ban",
    name: "New Mexico PFAS phase-1 ban",
    level: "state",
    state: "NM",
    categories: ["cookware", "food-contact", "juvenile-products"],
    deadline: "2027-01-01",
    inForce: false,
    headline:
      "From January 1, 2027, New Mexico bans intentionally added PFAS in cookware, food packaging, dental floss and juvenile products.",
    detail:
      "HB 212 (PFAS Protection Act). A second phase follows January 1, 2028 (carpets, cleaning, cosmetics, textiles and more); fluoropolymers are exempt from the act's PFAS definition.",
    documents: ["Supplier PFAS declarations for covered categories"],
  },
  {
    id: "wa-pfas",
    name: "Washington Safer Products PFAS restrictions",
    level: "state",
    state: "WA",
    categories: ["adult-apparel", "childrens-apparel", "sporting"],
    deadline: "2027-01-01",
    inForce: false,
    headline:
      "Washington restricts PFAS in apparel, accessories and gear manufactured on or after January 1, 2027, with new reporting categories from 2026.",
    detail:
      "Amended WAC 173-337 (adopted November 2025), including a total-fluorine threshold. First reports for new reporting categories are due January 31, 2027.",
    documents: ["Supplier PFAS / total-fluorine data", "Reporting if in a covered category"],
  },
  {
    id: "prop65-bps",
    name: "California Prop 65 — BPS warnings",
    level: "state",
    state: "CA",
    categories: ["food-contact", "cookware", "juvenile-products"],
    deadline: null,
    inForce: true,
    headline:
      "Bisphenol S (BPS) warnings have been enforceable in California since December 29, 2024 — \"BPA-free\" plastics that substituted BPS are exposed today.",
    detail:
      "BPS was listed under Prop 65 in December 2023 (female reproductive toxicity); a developmental-toxicity endpoint added December 8, 2025 becomes enforceable December 8, 2026. Thermal receipt paper and BPA-free polymer goods are the practical hot spots.",
    documents: [
      "BPS content determination (supplier declaration or testing)",
      "Prop 65 warning where required",
    ],
  },
  {
    id: "reeses-law",
    name: "Button & coin cell battery safety (Reese's Law)",
    level: "federal",
    categories: ["electronics", "toys"],
    deadline: null,
    inForce: true,
    headline:
      "Products with button or coin cell batteries must meet UL 4200A performance and labeling requirements — in force, with a GCC required.",
    detail:
      "16 CFR 1263 applies to products manufactured or imported after March 19, 2024. Toys may instead comply via the toy standard (16 CFR 1250). Amazon gates these listings on documentation (per Amazon's published seller guidance).",
    documents: ["UL 4200A test records", "GCC (or CPC via the toy standard for toys)"],
  },
];

/**
 * Match rules for a category + list of state ids ("ALL" = nationwide).
 */
/** A dated rule is in force once its deadline has arrived (midnight ET, same clock as daysUntil). */
function deadlinePassed(deadline, now = new Date()) {
  return Boolean(deadline) && new Date(`${deadline}T00:00:00-04:00`) <= now;
}

export function matchRules(categoryId, stateIds) {
  const nationwide = stateIds.includes("ALL");
  return RULES.filter((rule) => {
    const categoryHit =
      rule.categories === "all" || rule.categories.includes(categoryId);
    if (!categoryHit) return false;
    if (rule.level === "state") {
      return nationwide || stateIds.includes(rule.state);
    }
    return true;
  }).map((rule) =>
    // Derive in-force from the deadline so passed deadlines age out of
    // "Deadlines ahead" without hand-editing static flags.
    rule.inForce || !deadlinePassed(rule.deadline)
      ? rule
      : { ...rule, inForce: true }
  );
}
