import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { xmlns: "http://www.w3.org/2000/svg", fill: "none" } as const;

export const SearchIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="26" height="26" {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="2.4" />
    <path d="M15.5 15.5 21 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
  </svg>
);

export const CaretDown = (p: P) => (
  <svg {...base} viewBox="0 0 10 6" width="10" height="6" {...p}>
    <path d="M0 0h10L5 6z" fill="currentColor" />
  </svg>
);

export const HomeIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="30" height="30" {...p}>
    <path d="M12 2.6 1.8 11.4a1 1 0 0 0 .65 1.76H4.4V21a1 1 0 0 0 1 1h4.1v-6h5v6h4.1a1 1 0 0 0 1-1v-7.84h1.95a1 1 0 0 0 .65-1.76z" fill="currentColor" />
  </svg>
);

export const LeadIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="30" height="30" {...p}>
    <circle cx="12" cy="7" r="4.2" fill="currentColor" />
    <path d="M4 21v-1.6C4 16.4 7.4 14 12 14s8 2.4 8 5.4V21z" fill="currentColor" />
    <path d="m11 15.5 1 3 1-3z" fill="#fff" opacity=".85" />
  </svg>
);

export const HandshakeIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="30" height="30" {...p}>
    <path d="M1.5 9.2 5.8 7l3.6 1.2L7 12.4l5.2 4.6-1.6 1.8L5.2 14 2.8 15.4zM22.5 9.2 18.2 7l-3.4.9-3.5 1.7c-.7.4-.9 1.2-.4 1.8.5.6 1.4.7 2 .2l2.5-1.8 4.7 4.7 2.4-1.4z" fill="currentColor" />
    <path d="m9.5 18.6 1.2-1.4 1.6 1.3-1.2 1.4zM12.6 19.6l1.1-1.3 1.4 1.1-1.1 1.3zM15.4 18.6l.9-1.1 1.4 1.1-.9 1.1z" fill="currentColor" />
  </svg>
);

export const CoinsIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="30" height="30" {...p}>
    <circle cx="9" cy="8" r="5.6" fill="currentColor" />
    <path d="M9 5v6M7.2 6.6h3.2a1 1 0 0 1 0 2H7.8a1 1 0 0 0 0 2h3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" opacity=".9" />
    <ellipse cx="16" cy="17.2" rx="6.4" ry="3.6" fill="currentColor" />
    <ellipse cx="16" cy="15.4" rx="6.4" ry="3.6" fill="currentColor" stroke="#fff" strokeWidth="1" />
  </svg>
);

export const PhoneIcon = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="20" height="20" {...p}>
    <path d="M6.6 2.5 9 2.2c.5 0 .9.3 1.1.8l1 3c.1.5 0 1-.4 1.3L9.2 8.5a12 12 0 0 0 6.3 6.3l1.2-1.5c.3-.4.8-.5 1.3-.4l3 1.1c.5.2.8.6.8 1.1l-.3 2.4c-.1 1-1 1.9-2 1.9C10.8 19.4 4.6 13.2 4.7 4.5c0-1 .9-1.9 1.9-2z" fill="currentColor" />
  </svg>
);

export const ArrowUpRight = (p: P) => (
  <svg {...base} viewBox="0 0 12 12" width="11" height="11" {...p}>
    <path d="M3 9 9 3M4 3h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowDownRight = (p: P) => (
  <svg {...base} viewBox="0 0 12 12" width="11" height="11" {...p}>
    <path d="M3 3l6 6M9 4v5H4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChevronLeft = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="30" height="30" {...p}>
    <path d="m15 5-7 7 7 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const ChevronRight = (p: P) => (
  <svg {...base} viewBox="0 0 24 24" width="30" height="30" {...p}>
    <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GridIcon = (p: P) => (
  <svg {...base} viewBox="0 0 22 22" width="22" height="22" {...p}>
    <rect x="2" y="2" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="2" />
    <rect x="12.5" y="2" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="2" />
    <rect x="2" y="12.5" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="2" />
    <rect x="12.5" y="12.5" width="7.5" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const Logo = (p: P) => (
  <svg {...base} viewBox="0 0 28 34" width="28" height="34" {...p}>
    <g stroke="#C59B27" strokeWidth="2.2" strokeLinecap="round">
      <path d="M14 4v27" />
      <path d="M9 9v22M19 9v22" />
      <path d="M4 31V15C4 9 8 5 14 2c6 3 10 7 10 13v16" strokeWidth="1.8" />
    </g>
  </svg>
);
