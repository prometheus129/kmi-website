/**
 * CertDesk payment seam.
 *
 * Paste a Stripe Payment Link URL next to a service id when it is ready to take
 * card payment. While a value is empty, that service falls back to the
 * intake-first flow (/compliance/verify-request) and is billed by invoice
 * after scope confirmation — the interim probe behavior. So nothing on the site
 * changes until a link is pasted here.
 *
 * Material Verification is intentionally intake-first even if you paste a link:
 * scope and sample logistics are confirmed before billing, so it should never
 * pre-charge a full fee. Use the deposit slot if you want a card deposit.
 */
export const STRIPE_PAYMENT_LINKS = {
  "readiness-review": "", // $250 — fixed scope, pre-pay OK
  "report-verification": "", // $199 — fixed scope, pre-pay OK
  "material-verification": "", // leave empty: intake → scope → invoice
  "material-verification-deposit": "", // optional refundable deposit link
};

export function paymentLinkFor(id) {
  const url = STRIPE_PAYMENT_LINKS[id];
  return url && url.length > 0 ? url : null;
}
