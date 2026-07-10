/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Host canonicalization: non-www → www (308 Permanent).
      // Without this, Vercel applies a 307 Temporary Redirect by default,
      // which causes Google to index both hosts as separate URLs and split
      // authority/click data across variants. SEO Run #9 (May 5, 2026)
      // identified this as the root cause of indexing regression
      // (113→109) and the Apr 27 CTR sprint producing zero visible lift.
      {
        source: "/:path*",
        has: [{ type: "host", value: "kantormaterials.com" }],
        destination: "https://www.kantormaterials.com/:path*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/approach",
        permanent: true,
      },
      // CertDesk paid-service pages retired (venture wound down, July 2026).
      // Free checkers and guides remain; the priced-offer pages redirect to
      // the hub so the 11 in-article links keep resolving.
      {
        source: "/compliance/services",
        destination: "/compliance",
        permanent: true,
      },
      {
        source: "/compliance/verify-request",
        destination: "/compliance",
        permanent: true,
      },
      {
        source: "/terminal",
        destination: "/polymer-compass",
        permanent: true,
      },
      {
        source: "/terminal/:path*",
        destination: "/polymer-compass/:path*",
        permanent: true,
      },
      {
        source: "/:locale(vi|tr|es|id|pt|th|bn|ru|ar|fr|ur)/terminal",
        destination: "/:locale/polymer-compass",
        permanent: true,
      },
      {
        source: "/:locale(vi|tr|es|id|pt|th|bn|ru|ar|fr|ur)/terminal/:path*",
        destination: "/:locale/polymer-compass/:path*",
        permanent: true,
      },
      // Localized inquiry routes don't exist yet — many localized articles
      // (incl. the ID GCC cornerstone) link to /<locale>/inquiry, which 404'd.
      // Temporary redirect to the working /inquiry form until per-locale inquiry
      // pages are built (then replace these with real pages). permanent:false so
      // the future localized routes aren't cached away.
      {
        source: "/:locale(vi|tr|es|id|pt|th|bn|ru|ar|fr|ur)/inquiry",
        destination: "/inquiry",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
