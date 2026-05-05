#!/usr/bin/env node
/**
 * IndexNow submission for kantormaterials.com
 *
 * Submits URLs to IndexNow consortium (Bing, Yandex, Naver, Seznam, Yep)
 * for instant discovery — bypasses crawl-discovery delay.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs              # submit all URLs from sitemap
 *   node scripts/submit-indexnow.mjs <url> [...]  # submit specific URLs
 *
 * Post-deploy hook (recommended):
 *   In Vercel project settings → Git → Deploy Hooks, no built-in support.
 *   Run manually after deploys, or wire up via GitHub Actions / Vercel
 *   build command suffix:
 *     "build": "next build && node scripts/submit-indexnow.mjs"
 *
 * Reference: https://www.indexnow.org/documentation
 */

const HOST = "www.kantormaterials.com";
const KEY = "87d5a4fc7202ae2cdae1994267126943";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
  const urls = matches
    .map((m) => m.replace(/<\/?loc>/g, "").trim())
    .filter((u) => u.startsWith("https://") && u.includes(HOST));
  return [...new Set(urls)];
}

async function submitBatch(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  return { status: res.status, ok: res.ok, count: urlList.length };
}

async function main() {
  const argv = process.argv.slice(2);

  // Production-only gate when invoked as a postbuild hook (no CLI args).
  // VERCEL_ENV is set by Vercel: 'production' | 'preview' | 'development'.
  // Local builds (no VERCEL_ENV) and preview deploys exit silently to avoid
  // pinging IndexNow with non-production state. Manual CLI invocations
  // (with explicit URLs) bypass the gate.
  if (argv.length === 0 && process.env.VERCEL_ENV !== "production") {
    const reason = process.env.VERCEL_ENV
      ? `VERCEL_ENV=${process.env.VERCEL_ENV}`
      : "non-Vercel environment";
    console.log(`IndexNow: skipping postbuild ping (${reason}).`);
    process.exit(0);
  }

  let urls;

  if (argv.length > 0) {
    urls = argv.filter((u) => u.startsWith("https://"));
    if (urls.length === 0) {
      console.error("ERROR: No valid HTTPS URLs in arguments.");
      console.error("EXPECTED: Full URLs starting with https://");
      console.error("TRY: node scripts/submit-indexnow.mjs https://www.kantormaterials.com/insights/foo");
      process.exit(1);
    }
    console.log(`Submitting ${urls.length} URL(s) from arguments...`);
  } else {
    console.log(`Fetching URLs from ${SITEMAP_URL}...`);
    urls = await fetchSitemapUrls();
    console.log(`Found ${urls.length} unique URLs in sitemap.`);
  }

  // IndexNow accepts up to 10,000 URLs per request
  const BATCH = 10000;
  const results = [];
  for (let i = 0; i < urls.length; i += BATCH) {
    const slice = urls.slice(i, i + BATCH);
    const r = await submitBatch(slice);
    results.push(r);
    console.log(
      `Batch ${results.length}: status ${r.status} (${r.ok ? "OK" : "FAIL"}) — ${slice.length} URLs`
    );
  }

  const allOk = results.every((r) => r.ok);
  console.log(allOk ? "\n✓ All batches accepted." : "\n✗ Some batches failed.");
  process.exit(allOk ? 0 : 1);
}

main().catch((err) => {
  console.error("ERROR:", err.message);
  process.exit(1);
});
