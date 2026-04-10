/**
 * Abstract trade corridor visualization — SVG showing origin (China coast)
 * radiating to destination markets (SE Asia, South Asia, Middle East, LATAM).
 * Purely decorative — adds geographic context without exposing technology.
 *
 * Positioned absolutely in the hero as a background layer.
 */

export default function TradeCorridorMap() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-[0.32]">
      <svg
        viewBox="0 0 1200 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] lg:w-[110%] h-auto max-w-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for corridor lines — bright at origin, fading to destination */}
          <linearGradient id="corridor-teal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3AADAD" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3AADAD" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="corridor-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A843" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#D4A843" stopOpacity="0.1" />
          </linearGradient>
          {/* Glow filter for origin node */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-sm" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ---- Simplified continent outlines (very abstract) ---- */}
        {/* China coast suggestion */}
        <path
          d="M680 180 Q700 200 710 240 Q720 280 700 320 Q690 350 680 380 Q670 400 660 420"
          stroke="#3AADAD"
          strokeWidth="1"
          strokeOpacity="0.25"
          fill="none"
        />
        {/* SE Asia coast suggestion */}
        <path
          d="M660 420 Q640 460 620 480 Q600 500 580 510 Q560 520 540 525"
          stroke="#3AADAD"
          strokeWidth="0.8"
          strokeOpacity="0.15"
          fill="none"
        />

        {/* ---- Origin node: South China (Guangzhou/Shenzhen area) ---- */}
        <circle cx="670" cy="340" r="12" fill="#3AADAD" fillOpacity="0.15" filter="url(#glow)" />
        <circle cx="670" cy="340" r="5" fill="#3AADAD" fillOpacity="0.6" />
        <circle cx="670" cy="340" r="2" fill="#fff" fillOpacity="0.8" />

        {/* ---- Trade corridors (curved paths from origin to destinations) ---- */}

        {/* Route 1: China → Vietnam (Ho Chi Minh City) — primary market */}
        <path
          d="M670 340 Q640 380 600 430"
          stroke="url(#corridor-teal)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="600" cy="430" r="4" fill="#3AADAD" fillOpacity="0.5" filter="url(#glow-sm)" />
        <circle cx="600" cy="430" r="1.5" fill="#fff" fillOpacity="0.6" />

        {/* Route 2: China → Philippines (Manila) — primary market */}
        <path
          d="M670 340 Q710 380 750 420"
          stroke="url(#corridor-teal)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="750" cy="420" r="4" fill="#3AADAD" fillOpacity="0.5" filter="url(#glow-sm)" />
        <circle cx="750" cy="420" r="1.5" fill="#fff" fillOpacity="0.6" />

        {/* Route 3: China → Thailand */}
        <path
          d="M670 340 Q620 370 560 420"
          stroke="url(#corridor-teal)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="560" cy="420" r="3" fill="#3AADAD" fillOpacity="0.35" />

        {/* Route 4: China → Indonesia */}
        <path
          d="M670 340 Q650 420 620 500"
          stroke="url(#corridor-teal)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="620" cy="500" r="3" fill="#3AADAD" fillOpacity="0.35" />

        {/* Route 5: China → India (Mumbai) — longer corridor */}
        <path
          d="M670 340 Q580 330 480 360"
          stroke="url(#corridor-gold)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="480" cy="360" r="3" fill="#D4A843" fillOpacity="0.3" />

        {/* Route 6: China → Turkey (Istanbul) — long corridor */}
        <path
          d="M670 340 Q540 260 380 230"
          stroke="url(#corridor-gold)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
        <circle cx="380" cy="230" r="2.5" fill="#D4A843" fillOpacity="0.25" />

        {/* Route 7: China → Middle East */}
        <path
          d="M670 340 Q560 300 440 290"
          stroke="url(#corridor-gold)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
        <circle cx="440" cy="290" r="2.5" fill="#D4A843" fillOpacity="0.25" />

        {/* Route 8: China → Latin America (Peru/Mexico) — faint, future */}
        <path
          d="M670 340 Q500 400 280 460"
          stroke="url(#corridor-gold)"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeDasharray="3 4"
          strokeOpacity="0.5"
        />
        <circle cx="280" cy="460" r="2" fill="#D4A843" fillOpacity="0.15" />

        {/* ---- Subtle grid dots (suggest data points / market nodes) ---- */}
        {[
          [300, 200], [350, 350], [420, 180], [500, 250],
          [530, 450], [580, 300], [620, 250], [700, 450],
          [750, 300], [800, 250], [650, 200], [720, 180],
          [400, 400], [480, 480], [550, 180], [330, 280],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="1"
            fill="#3AADAD"
            fillOpacity={0.08 + (i % 3) * 0.04}
          />
        ))}
      </svg>
    </div>
  );
}
