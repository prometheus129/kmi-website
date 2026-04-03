/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kantormaterials.com" }],
        destination: "https://kantormaterials.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
