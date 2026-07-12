import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AttributionTracker from "@/components/AttributionTracker";

const GA_MEASUREMENT_ID = "G-TQZ2DKCKPS";

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
  title: "Premium Calcium Carbonate & China Polymers | Kantor Materials",
  description:
    "Producer of premium Vietnamese calcium carbonate (KC Series) and supplier of China-origin engineering and commodity polymers for industrial buyers across Asia and the Global South.",
  metadataBase: new URL("https://www.kantormaterials.com"),
  openGraph: {
    title:
      "Kantor Materials — Premium Calcium Carbonate & China-Origin Polymers",
    description:
      "Premium calcium carbonate from our own production. Engineering and commodity polymers from the same supplier.",
    type: "website",
    locale: "en_US",
    siteName: "Kantor Materials",
  },
  twitter: {
    card: "summary_large_image",
    site: "@KantorMaterials",
    title:
      "Kantor Materials — Premium Calcium Carbonate & China-Origin Polymers",
    description:
      "Producer of premium Vietnamese calcium carbonate and supplier of China-origin engineering and commodity polymers across Asia and the Global South.",
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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <AttributionTracker />
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
