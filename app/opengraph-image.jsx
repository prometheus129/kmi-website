import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kantor Materials — Your China Polymer Desk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #111D35 0%, #1B2A4A 50%, #1a3355 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(46,139,139,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,139,139,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, #2E8B8B, #3AADAD)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: 800,
              fontFamily: "Georgia, serif",
            }}
          >
            K
          </div>
          <span
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "3px",
              fontFamily: "Georgia, serif",
            }}
          >
            KANTOR MATERIALS
          </span>
        </div>

        {/* Overline */}
        <div
          style={{
            fontSize: "14px",
            letterSpacing: "4px",
            color: "#2E8B8B",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          POLYMER SOURCING INTELLIGENCE
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            fontFamily: "Georgia, serif",
            marginBottom: "24px",
          }}
        >
          Your China
          <br />
          <span style={{ color: "#3AADAD" }}>polymer desk.</span>
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "20px",
            color: "#94A3B8",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Matched grades, current pricing, and documentation for polymer
          distributors across emerging markets.
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #2E8B8B, #D4A843)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
