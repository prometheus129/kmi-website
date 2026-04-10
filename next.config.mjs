/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
