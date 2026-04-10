/**
 * Trade corridor visualization — SVG map showing China-origin trade routes
 * radiating to Global South destination markets.
 *
 * Features:
 * - Simplified but recognizable Asia-Pacific coastline outlines
 * - Glowing origin hub (South China) with pulse animation
 * - Animated flowing trade routes (solid for active, dashed for expansion)
 * - Labeled destination nodes sized by market priority
 * - Dot grid suggesting data network coverage
 */

export default function TradeCorridorMap() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-[0.35]">
      <svg
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] lg:w-[120%] h-auto max-w-none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Route gradients */}
          <linearGradient id="route-primary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3AADAD" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3AADAD" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="route-secondary" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A843" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4A843" stopOpacity="0.05" />
          </linearGradient>

          {/* Glow effects */}
          <filter id="glow-lg" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-md" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-sm" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Animated dash for flowing routes */}
          <style>{`
            @keyframes flow {
              to { stroke-dashoffset: -20; }
            }
            @keyframes pulse-ring {
              0% { r: 14; opacity: 0.3; }
              100% { r: 28; opacity: 0; }
            }
          `}</style>
        </defs>

        {/* ================================================================ */}
        {/* LAND MASSES — simplified filled regions at very low opacity       */}
        {/* ================================================================ */}

        {/* China mainland (east coast focus) */}
        <path
          d="M620 100 L660 100 Q680 120 690 150 L700 180 Q710 200 700 230
             Q690 260 680 280 L670 300 Q660 320 650 340 L640 360
             Q620 370 600 360 L580 340 Q560 310 570 280 L580 250
             Q590 220 600 190 L610 150 Z"
          fill="#3AADAD"
          fillOpacity="0.04"
          stroke="#3AADAD"
          strokeWidth="0.8"
          strokeOpacity="0.15"
        />

        {/* Korean Peninsula */}
        <path
          d="M680 140 Q690 130 700 135 L710 155 Q715 170 710 180 L700 185 Q690 180 685 170 Z"
          fill="#3AADAD"
          fillOpacity="0.03"
          stroke="#3AADAD"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />

        {/* Japan (simplified arc) */}
        <path
          d="M730 120 Q740 140 745 165 Q748 185 740 200 Q735 210 730 205
             Q725 195 727 175 Q728 155 725 135 Z"
          fill="#3AADAD"
          fillOpacity="0.03"
          stroke="#3AADAD"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />

        {/* Vietnam (long thin coast) */}
        <path
          d="M590 340 Q585 360 575 385 Q568 400 560 420
             Q555 435 548 445 L540 440 Q545 420 550 400
             Q558 380 565 360 Q572 345 580 335 Z"
          fill="#3AADAD"
          fillOpacity="0.04"
          stroke="#3AADAD"
          strokeWidth="0.8"
          strokeOpacity="0.15"
        />

        {/* Thailand + Cambodia */}
        <path
          d="M530 360 Q520 375 510 395 Q505 410 500 425
             Q498 435 500 440 L510 438 Q515 425 518 410
             Q520 395 525 385 L535 370 Z"
          fill="#3AADAD"
          fillOpacity="0.03"
          stroke="#3AADAD"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />

        {/* Malay Peninsula */}
        <path
          d="M510 440 Q508 455 505 470 Q502 485 500 500
             Q498 510 500 515 L505 512 Q507 500 508 485
             Q510 470 513 455 Z"
          fill="#3AADAD"
          fillOpacity="0.03"
          stroke="#3AADAD"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />

        {/* Philippines (Luzon + Mindanao) */}
        <path
          d="M680 350 Q685 345 690 350 L695 370 Q693 380 688 385
             L682 380 Q678 370 680 360 Z"
          fill="#3AADAD"
          fillOpacity="0.04"
          stroke="#3AADAD"
          strokeWidth="0.6"
          strokeOpacity="0.12"
        />
        <path
          d="M675 395 Q680 390 688 395 L690 410 Q688 418 682 420
             L676 415 Q673 408 675 400 Z"
          fill="#3AADAD"
          fillOpacity="0.03"
          stroke="#3AADAD"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />

        {/* Indonesia (Java + Sumatra) */}
        <path
          d="M480 520 Q500 518 530 520 Q560 522 580 525
             Q600 528 620 530 L625 535 Q600 536 570 534
             Q540 532 510 530 Q490 528 478 525 Z"
          fill="#3AADAD"
          fillOpacity="0.03"
          stroke="#3AADAD"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />

        {/* India (subcontinent) */}
        <path
          d="M380 250 Q400 240 420 250 L430 270 Q435 295 428 320
             Q420 345 410 370 Q405 385 395 395 L390 390
             Q385 375 382 355 Q378 330 375 305 Q372 280 378 260 Z"
          fill="#D4A843"
          fillOpacity="0.025"
          stroke="#D4A843"
          strokeWidth="0.6"
          strokeOpacity="0.08"
        />

        {/* Sri Lanka */}
        <circle cx="410" cy="405" r="6" fill="#D4A843" fillOpacity="0.02" stroke="#D4A843" strokeWidth="0.4" strokeOpacity="0.06" />

        {/* Middle East / Arabian Peninsula */}
        <path
          d="M270 220 Q290 215 310 225 L320 240 Q325 260 318 280
             Q310 295 295 305 Q280 310 270 305 Q260 295 258 275
             Q256 255 262 235 Z"
          fill="#D4A843"
          fillOpacity="0.02"
          stroke="#D4A843"
          strokeWidth="0.5"
          strokeOpacity="0.06"
        />

        {/* Turkey (small outline) */}
        <path
          d="M200 170 Q220 165 240 168 L250 175 Q245 182 235 185
             Q220 188 208 183 Q200 178 200 170 Z"
          fill="#D4A843"
          fillOpacity="0.02"
          stroke="#D4A843"
          strokeWidth="0.4"
          strokeOpacity="0.05"
        />

        {/* ================================================================ */}
        {/* DOT GRID — suggests data coverage / network nodes                */}
        {/* ================================================================ */}
        {[
          // Scattered across the map area
          [180, 200], [210, 250], [250, 190], [290, 260],
          [330, 210], [360, 300], [400, 190], [430, 340],
          [460, 260], [490, 350], [520, 300], [550, 250],
          [580, 310], [610, 250], [640, 290], [660, 220],
          [700, 260], [720, 320], [580, 450], [620, 470],
          [660, 440], [700, 380], [540, 480], [480, 460],
          [440, 380], [350, 340], [310, 280], [240, 230],
          [650, 180], [690, 200], [630, 160], [570, 200],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="1"
            fill="#3AADAD"
            fillOpacity={0.06 + (i % 4) * 0.03}
          />
        ))}

        {/* ================================================================ */}
        {/* ORIGIN HUB — South China (Guangzhou/Shenzhen/Hong Kong)          */}
        {/* ================================================================ */}

        {/* Pulse ring animation */}
        <circle cx="640" cy="330" r="14" fill="none" stroke="#3AADAD" strokeWidth="1" strokeOpacity="0.3">
          <animate attributeName="r" values="14;28" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0" dur="2.5s" repeatCount="indefinite" />
        </circle>

        {/* Outer glow */}
        <circle cx="640" cy="330" r="16" fill="#3AADAD" fillOpacity="0.08" filter="url(#glow-lg)" />
        {/* Mid ring */}
        <circle cx="640" cy="330" r="8" fill="#3AADAD" fillOpacity="0.2" />
        {/* Core */}
        <circle cx="640" cy="330" r="4" fill="#3AADAD" fillOpacity="0.7" />
        {/* Center dot */}
        <circle cx="640" cy="330" r="1.5" fill="#ffffff" fillOpacity="0.9" />

        {/* Origin label */}
        <text x="640" y="308" textAnchor="middle" fill="#3AADAD" fillOpacity="0.5" fontSize="8" fontFamily="sans-serif" letterSpacing="2">
          CHINA
        </text>

        {/* ================================================================ */}
        {/* TRADE ROUTES — Primary (teal, solid) + Secondary (gold, dashed)  */}
        {/* ================================================================ */}

        {/* Route: China → Vietnam (HCMC) — PRIMARY */}
        <path
          d="M635 340 Q610 380 565 435"
          stroke="url(#route-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="565" cy="435" r="5" fill="#3AADAD" fillOpacity="0.4" filter="url(#glow-md)" />
        <circle cx="565" cy="435" r="2" fill="#fff" fillOpacity="0.7" />
        <text x="565" y="453" textAnchor="middle" fill="#3AADAD" fillOpacity="0.45" fontSize="7" fontFamily="sans-serif">
          Vietnam
        </text>

        {/* Route: China → Philippines (Manila) — PRIMARY */}
        <path
          d="M650 340 Q670 370 685 390"
          stroke="url(#route-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="685" cy="390" r="5" fill="#3AADAD" fillOpacity="0.4" filter="url(#glow-md)" />
        <circle cx="685" cy="390" r="2" fill="#fff" fillOpacity="0.7" />
        <text x="700" y="395" textAnchor="start" fill="#3AADAD" fillOpacity="0.45" fontSize="7" fontFamily="sans-serif">
          Philippines
        </text>

        {/* Route: China → Thailand — SECONDARY */}
        <path
          d="M630 340 Q580 370 520 420"
          stroke="url(#route-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="520" cy="420" r="3.5" fill="#3AADAD" fillOpacity="0.3" filter="url(#glow-sm)" />
        <circle cx="520" cy="420" r="1.5" fill="#fff" fillOpacity="0.5" />
        <text x="520" y="436" textAnchor="middle" fill="#3AADAD" fillOpacity="0.35" fontSize="6.5" fontFamily="sans-serif">
          Thailand
        </text>

        {/* Route: China → Indonesia — SECONDARY */}
        <path
          d="M638 340 Q620 430 580 520"
          stroke="url(#route-primary)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="580" cy="520" r="3" fill="#3AADAD" fillOpacity="0.25" />
        <text x="580" y="535" textAnchor="middle" fill="#3AADAD" fillOpacity="0.3" fontSize="6.5" fontFamily="sans-serif">
          Indonesia
        </text>

        {/* Route: China → India — EXPANSION (gold) */}
        <path
          d="M628 335 Q540 330 410 365"
          stroke="url(#route-secondary)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="5 4"
          style={{ animation: "flow 1.5s linear infinite" }}
        />
        <circle cx="410" cy="365" r="3" fill="#D4A843" fillOpacity="0.3" filter="url(#glow-sm)" />
        <text x="410" y="380" textAnchor="middle" fill="#D4A843" fillOpacity="0.35" fontSize="6.5" fontFamily="sans-serif">
          India
        </text>

        {/* Route: China → Turkey — EXPANSION (gold, dashed) */}
        <path
          d="M625 325 Q460 250 225 178"
          stroke="url(#route-secondary)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="4 4"
          style={{ animation: "flow 2s linear infinite" }}
        />
        <circle cx="225" cy="178" r="2.5" fill="#D4A843" fillOpacity="0.2" />
        <text x="225" y="168" textAnchor="middle" fill="#D4A843" fillOpacity="0.25" fontSize="6" fontFamily="sans-serif">
          Turkey
        </text>

        {/* Route: China → Middle East — EXPANSION (gold, dashed) */}
        <path
          d="M625 332 Q480 280 295 260"
          stroke="url(#route-secondary)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="4 4"
          style={{ animation: "flow 2s linear infinite" }}
        />
        <circle cx="295" cy="260" r="2.5" fill="#D4A843" fillOpacity="0.2" />
        <text x="295" y="250" textAnchor="middle" fill="#D4A843" fillOpacity="0.25" fontSize="6" fontFamily="sans-serif">
          Middle East
        </text>

        {/* Route: China → Bangladesh — EXPANSION */}
        <path
          d="M630 338 Q560 350 470 340"
          stroke="url(#route-secondary)"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeDasharray="3 4"
          strokeOpacity="0.5"
        />
        <circle cx="470" cy="340" r="2" fill="#D4A843" fillOpacity="0.15" />
      </svg>
    </div>
  );
}
