/**
 * Kantor Signals table for The Polymer Compass issues.
 * Usage in MDX: <SignalsTable issue="1" />
 * Add new issues' signals to the SIGNALS_DATA map below.
 */

const SIGNALS_DATA = {
  "1": [
    { grade: "LLDPE C4 Film", signal: "HOLD", dots: 5, filled: 3 },
    { grade: "PP Yarn (raffia)", signal: "HOLD", dots: 5, filled: 3 },
    { grade: "PP Thin Wall", signal: "HOLD", dots: 5, filled: 3 },
    { grade: "PVC SG-5", signal: "BUY", dots: 5, filled: 4 },
  ],
};

const signalColors = {
  BUY: { text: "#22C55E", bg: "rgba(34,197,94,0.15)" },
  HOLD: { text: "#D4A843", bg: "rgba(212,168,67,0.15)" },
  WAIT: { text: "#EF4444", bg: "rgba(239,68,68,0.15)" },
};

export default function SignalsTable({ issue = "1" }) {
  const signals = SIGNALS_DATA[issue] || [];
  if (signals.length === 0) return null;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0F1D2F 0%, #162540 100%)",
        borderRadius: "12px",
        padding: "24px 28px",
        border: "1px solid rgba(255,255,255,0.06)",
        marginBottom: "20px",
        marginTop: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 0 12px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          marginBottom: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#94A3B8",
            textTransform: "uppercase",
          }}
        >
          Grade
        </span>
        <div style={{ display: "flex", gap: "80px" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#94A3B8",
              textTransform: "uppercase",
            }}
          >
            Signal
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#94A3B8",
              textTransform: "uppercase",
            }}
          >
            Confidence
          </span>
        </div>
      </div>

      {signals.map((row, i) => {
        const colors = signalColors[row.signal] || signalColors.HOLD;
        return (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 0",
              borderBottom:
                i < signals.length - 1
                  ? "1px solid rgba(255,255,255,0.04)"
                  : "none",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "13px",
                color: "#E8E4D9",
                fontWeight: 600,
              }}
            >
              {row.grade}
            </span>
            <div
              style={{ display: "flex", alignItems: "center", gap: "60px" }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  color: colors.text,
                  background: colors.bg,
                  padding: "3px 12px",
                  borderRadius: "4px",
                }}
              >
                {row.signal}
              </span>
              <span style={{ display: "flex", gap: "4px" }}>
                {Array.from({ length: row.dots }).map((_, j) => (
                  <span
                    key={j}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background:
                        j < row.filled
                          ? colors.text
                          : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
