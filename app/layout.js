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
  title: "Kantor Materials International — Global Polymer Procurement Infrastructure",
  description:
    "Aggregated commodity procurement and application-specific advanced materials for distributors and manufacturers across emerging markets. Hong Kong headquartered, sourcing across China.",
  metadataBase: new URL("https://kantormaterials.com"),
  openGraph: {
    title: "Kantor Materials International",
    description:
      "Global polymer procurement infrastructure. Connecting the world to China's industrial core.",
    type: "website",
    locale: "en_US",
    siteName: "Kantor Materials International",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KantorMaterials",
    title: "Kantor Materials International",
    description:
      "Global polymer procurement infrastructure. The full market on every order.",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
