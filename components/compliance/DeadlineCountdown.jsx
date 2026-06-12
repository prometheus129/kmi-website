"use client";

import { useEffect, useState } from "react";

/**
 * Days-remaining badge for a fixed deadline. Client-side so it never goes
 * stale between builds.
 */
export default function DeadlineCountdown({ date, label }) {
  const [days, setDays] = useState(null);

  useEffect(() => {
    const target = new Date(`${date}T00:00:00-04:00`);
    const diff = Math.ceil((target - new Date()) / (1000 * 60 * 60 * 24));
    setDays(diff);
  }, [date]);

  if (days === null) return null;

  return (
    <span className="inline-flex items-center gap-2 bg-gold/[0.12] border border-gold/30 rounded px-3 py-1.5 font-mono text-xs text-gold">
      {days > 0 ? (
        <>
          <span className="font-bold">{days} days</span>
          <span className="text-gold/80">until {label}</span>
        </>
      ) : (
        <span className="font-bold">{label} is in force</span>
      )}
    </span>
  );
}
