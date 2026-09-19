import React from 'react';

// Hand-drawn glyphs for the Services page — deliberately not pulled from a shared icon pack
// (that repetition was the whole complaint). Each is a small duotone mark built from currentColor
// so the existing per-card color classes still drive the tint; a shared 24x24 viewBox keeps them
// drop-in compatible with the old lucide icons they replace.
type IconProps = { className?: string };

// Browser window — echoes the site's own browser-chrome motif (used for real client sites on
// Made by Smooth) instead of a generic "</>" code-brackets glyph.
export const WebsiteGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2.5 8.7h19" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="5.3" cy="6.6" r="0.7" fill="currentColor" />
    <circle cx="7.3" cy="6.6" r="0.7" fill="currentColor" />
    <circle cx="9.3" cy="6.6" r="0.7" fill="currentColor" />
    <path d="M6 12.7h8M6 15.7h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Price tag — a fresher pick than the extremely common shopping-cart/bag glyph.
export const EcommerceGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M11 3.5h6.5A2.5 2.5 0 0 1 20 6v6.3L11.8 20.5a2 2 0 0 1-2.8 0l-5-5a2 2 0 0 1 0-2.8L11 3.5Z"
      fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
    />
    <circle cx="15.3" cy="8.7" r="1.6" fill="currentColor" />
  </svg>
);

// Asymmetric app grid — avoids the equally common smartphone-silhouette cliche.
export const MobileGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="8" height="8" rx="2.2" fill="currentColor" />
    <rect x="13" y="3" width="8" height="8" rx="2.2" fill="currentColor" fillOpacity="0.35" />
    <rect x="3" y="13" width="8" height="8" rx="2.2" fill="currentColor" fillOpacity="0.35" />
    <rect x="13" y="13" width="8" height="8" rx="2.2" fill="currentColor" />
  </svg>
);

// Node triangle — "structured data" read without the ubiquitous stacked-cylinder database icon.
export const DatabaseGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 17 12 6 18 17Z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="12" cy="6" r="2.1" fill="currentColor" />
    <circle cx="6" cy="17" r="2.1" fill="currentColor" fillOpacity="0.5" />
    <circle cx="18" cy="17" r="2.1" fill="currentColor" fillOpacity="0.5" />
  </svg>
);

// Pulse line — diagnostic readout, not a magnifying glass or stethoscope.
export const DiagnosticsGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 12h3.5l2-5.5 3 11 2-5.5H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="20" cy="12" r="1.1" fill="currentColor" />
  </svg>
);

// Four-point sparkle — a bold filled shape reads as "clean/fresh" far more reliably at 20px than
// a thin curved swirl stroke, which just smeared into a blob at that size.
export const CleaningGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3.5 13.6 9.4 19.5 11 13.6 12.6 12 18.5 10.4 12.6 4.5 11 10.4 9.4Z" fill="currentColor" />
    <circle cx="18" cy="5.5" r="1.2" fill="currentColor" opacity="0.55" />
  </svg>
);

// Monitor with an install arrow — reinstall/refresh, without reproducing the (trademarked)
// Windows flag. A straight arrow + chevron reads cleanly at small size, unlike a thin arc.
export const ReinstallGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3.5" y="4" width="17" height="11" rx="2" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 6.8v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M9.3 9.4 12 12 14.7 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8.5 18h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

// Ascending bars + plus — upgrade/boost.
export const UpgradeGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5.5" y="13" width="3" height="6" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="10.5" y="9.5" width="3" height="9.5" rx="1" fill="currentColor" opacity="0.75" />
    <rect x="15.5" y="6" width="3" height="13" rx="1" fill="currentColor" />
    <path d="M17 3v3M15.5 4.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

// Shield + checkmark — cleaned/protected, not a bug icon.
export const ShieldGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 4.5 17.5 6.5V10.5C17.5 14.3 15.2 16.9 12 18 8.8 16.9 6.5 14.3 6.5 10.5V6.5Z"
      fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
    />
    <path d="M9.3 11.8 11.2 13.7 14.8 9.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// Old device -> new device — literal migration, instead of a generic cloud-upload glyph. A
// straight diagonal + right-angle arrowhead instead of a shallow curve, which read as a stray
// scribble at small size.
export const TransferGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3.5" y="14.5" width="6" height="5" rx="1.2" fill="currentColor" opacity="0.45" />
    <rect x="14.5" y="4.5" width="6" height="5" rx="1.2" fill="currentColor" />
    <path d="M9.8 13.8 14.2 9.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M11.4 9.4h2.8v2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// Stacked component bars — abstract PC build, not a generic desktop-tower silhouette.
export const BuildGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="5.5" width="14" height="3.2" rx="1" fill="currentColor" />
    <rect x="5" y="10.3" width="14" height="3.2" rx="1" fill="currentColor" opacity="0.6" />
    <rect x="5" y="15.1" width="9.5" height="3.2" rx="1" fill="currentColor" opacity="0.35" />
  </svg>
);

// Person + check badge — onboarding complete.
export const OnboardingGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="10.5" cy="7.5" r="3.2" fill="currentColor" />
    <path d="M4 19Q4 13 10.5 13Q17 13 17 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <circle cx="18" cy="16.5" r="3.6" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.4" />
    <path d="M16.3 16.5 17.4 17.6 19.5 15.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// Isometric package — turnkey delivery.
export const PackageGlyph: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M4 8.5 12 4.5 20 8.5 20 16 12 20 4 16Z"
      fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
    />
    <path d="M4 8.5 12 12.5 20 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
    <path d="M12 12.5V20" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);
