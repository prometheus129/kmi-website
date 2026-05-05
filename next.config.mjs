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
    ];
  },
};

export default nextConfig;
