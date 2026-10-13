import { useState } from "react";

interface Props {
  size: number;
  seed: number;
  /** Photo URL. Falls back to the generated illustration if missing or it fails to load. */
  src?: string;
  alt?: string;
  ring?: boolean;
  style?: React.CSSProperties;
}

const SKIN = ["#c98d65", "#8a5a3c", "#e1b48f", "#a66d4a", "#f0c9a8", "#6e4430"];
const BG = ["#c9d7e8", "#e8d9c9", "#d3e6d6", "#e6d3df", "#d8d8ef", "#f1e3b8"];
const HAIR = ["#1d1a17", "#2b211b", "#503a2a", "#0f0f0f", "#3a2a1f", "#6b5a4a"];

export default function Avatar({ size, seed, src, alt = "", ring, style }: Props) {
  const [failed, setFailed] = useState(false);
  const i = seed % 6;
  const common: React.CSSProperties = {
    borderRadius: "50%", flex: "none", boxShadow: ring ? "0 0 0 2px #fff" : undefined, ...style,
  };

  if (src && !failed) {
    return (
      <img
        src={src} alt={alt} width={size} height={size} loading="lazy"
        onError={() => setFailed(true)}
        style={{ ...common, objectFit: "cover", background: BG[i], display: "block" }}
      />
    );
  }
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} style={common} role="img" aria-label={alt}>
      <rect width="40" height="40" fill={BG[i]} />
      <path d="M5 40c0-8 6-12.5 15-12.5S35 32 35 40z" fill={["#33415c", "#7d4f50", "#2f4858", "#5b5f97", "#3d405b", "#264653"][i]} />
      <rect x="17" y="21" width="6" height="8" rx="3" fill={SKIN[i]} />
      <ellipse cx="20" cy="15.5" rx="6.6" ry="7.4" fill={SKIN[i]} />
      <path d="M13.2 14.5c0-5 3.3-7.7 7-7.7s6.9 2.7 6.9 7.5c-1.7-2.4-3.8-3.4-6.9-3.4s-5.3 1.2-7 3.6z" fill={HAIR[i]} />
    </svg>
  );
}
