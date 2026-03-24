"use client";

const items = [
  { label: "PP T30S", value: "$1,015", change: "▼$8", dir: "down" },
  { label: "HDPE 5000S", value: "$940", change: "▲$5", dir: "up" },
  { label: "LLDPE 7042", value: "$925", change: "▲$3", dir: "up" },
  { label: "PA6 FDY", value: "$1,680", change: "▼$15", dir: "down" },
  { label: "ACTIVE GRADES", value: "5,400+", change: null },
  { label: "MARKETS", value: "VN · PH · BD · NG", change: null },
];

function TickerItem({ item }) {
  return (
    <span className="inline-flex items-center mr-10">
      <span className="text-muted text-[11px] tracking-wider mr-2">
        {item.label}
      </span>
      <span className="text-white text-xs font-semibold mr-1.5">
        {item.value}
      </span>
      {item.change && (
        <span
          className={`text-[11px] font-medium ${
            item.dir === "up" ? "text-ticker-green" : "text-ticker-red"
          }`}
        >
          {item.change}
        </span>
      )}
      <span className="text-muted/30 mx-5 text-[11px]">│</span>
    </span>
  );
}

export default function TrustTicker() {
  return (
    <div className="bg-ticker-bg border-b border-teal/20 overflow-hidden h-9 flex items-center font-mono">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "ticker-scroll 35s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <TickerItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
