export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/syndicate"],
      },
    ],
    sitemap: "https://www.kantormaterials.com/sitemap.xml",
  };
}
