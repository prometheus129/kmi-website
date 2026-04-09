import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Kantor Materials International — Your China Polymer Desk",
  description:
    "Describe what you need. We search tens of thousands of grades and respond with matched specs, pricing, and documentation. Sourcing intelligence for polymer distributors.",
  metadataBase: new URL("https://www.kantormaterials.com"),
  openGraph: {
    title: "Kantor Materials International — Your China Polymer Desk",
    description:
      "Describe what you need. We search tens of thousands of grades and respond with matched specs, pricing, and documentation.",
    type: "website",
    locale: "en_US",
    siteName: "Kantor Materials International",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KantorMaterials",
    title: "Kantor Materials International — Your China Polymer Desk",
    description:
      "Your China polymer desk. Sourcing intelligence for polymer distributors across emerging markets.",
  },
  verification: {
    yandex: "c9236dfd176b2903",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-teal focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
