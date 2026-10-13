export interface Kpi {
  key: "listing" | "leads" | "closed" | "revenue";
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}

export const KPIS: Kpi[] = [
  { key: "listing", label: "Active Listing", value: "23", delta: "-12%", trend: "down" },
  { key: "leads", label: "Active Leads", value: "120", delta: "+12%", trend: "up" },
  { key: "closed", label: "Total Closed", value: "42", delta: "+12%", trend: "up" },
  { key: "revenue", label: "Total Revenue", value: "Rs.22Cr.", delta: "+12%", trend: "up" },
];

export interface LeadSource { name: string; count: number; pct: string; color: string }
export const LEAD_SOURCES: LeadSource[] = [
  { name: "Inbound Call", count: 9, pct: "37.87%", color: "#f6eed7" },
  { name: "Reference", count: 1, pct: "30.6%", color: "#d4af37" },
  { name: "Facebook", count: 1, pct: "6.78%", color: "#ecd691" },
  { name: "Website", count: 10, pct: "24.83%", color: "#efe2b4" },
];

export const SERIES = [
  { name: "Angel Plaza", color: "#d4af37" },
  { name: "Angel Garden", color: "#ebddaa" },
  { name: "None", color: "#f6eed6" },
] as const;

/** Cumulative stack tops (Angel Plaza, +Angel Garden, +None) per stage. */
export const STAGES: { label: string; tops: [number, number, number] }[] = [
  { label: "Interested", tops: [3.0, 5.6, 7.85] },
  { label: "Site Visit Done", tops: [3.8, 7.1, 10] },
  { label: "Unit Shortlisted", tops: [3.5, 6.6, 9.3] },
  { label: "Contracts Signed", tops: [3.8, 7.1, 10] },
  { label: "Offer Initiated", tops: [3.2, 5.9, 8.3] },
  { label: "Offer Accepted", tops: [3.8, 7.1, 10] },
];

/** Overlapping horizontal bars (x-axis in record count). */
export const SALES_BARS: { owner: string; tops: [number, number, number] }[] = [
  { owner: "Row 1", tops: [4.9, 11.1, 17.8] },
  { owner: "Row 2", tops: [2.35, 7.9, 12.1] },
];

export const PIPELINE = [
  { name: "None", count: 14 },
  { name: "Angel Plaza", count: 3 },
  { name: "Angel Garden", count: 1 },
];

export interface Listing {
  name: [string, string];
  type: string;
  units: string;
  price: string;
  leads: [number, number, string];
  views: string;
  status: "occupied" | "available" | "sold";
  statusLabel: string;
  tone: number;
}
export const LISTINGS: Listing[] = [
  { name: ["Maplewood", "House"], type: "House", units: "12", price: "Rs.85L", leads: [0, 1, "+35"], views: "125", status: "available", statusLabel: "8/12 Occupied", tone: 0 },
  { name: ["Serenity", "Villa"], type: "Villa", units: "9300", price: "Rs.2.8Cr", leads: [0, 1, "+40"], views: "930", status: "available", statusLabel: "Available", tone: 1 },
  { name: ["Rosehill", "Cottage"], type: "House", units: "25", price: "Rs.1.1Cr", leads: [0, 1, "+15"], views: "355", status: "available", statusLabel: "Available", tone: 2 },
  { name: ["Skyline", "Edge"], type: "Apartment", units: "17", price: "Rs.75L", leads: [0, 1, "+11"], views: "425", status: "sold", statusLabel: "Sold Out", tone: 3 },
];

export const LEAD_CONTACTS = [
  { name: "John Doe", city: "New York", seed: 3 },
  { name: "Jessica Chen", city: "California, LA", seed: 1 },
  { name: "Evan Chris", city: "New York", seed: 4 },
  { name: "Jack B.", city: "Ohio, Columbus", seed: 5 },
  { name: "Emily Paris", city: "California, LA", seed: 2 },
];

export const REMINDERS = [
  { title: "Submit Final Offer- Villa Deal", body: "Finalize and send offer documents." },
  { title: "Review Contract with Legal", body: "Ensure attorney reviews apartment deal contract today." },
  { title: "Call Jessica Chen – Follow-up", body: "Discuss her feedback after site visit to Angel Plaza." },
];

export const SCHEDULE: { title: string; body: string; color: string }[] = [
  { title: "Visit Client- Angel Plaza", body: "Sector 45, Gurugram, Haryana", color: "#2fd4b5" },
  { title: "Visit Client – Site Walkthrough", body: "Whitefield Road, Bengaluru, Karnataka", color: "#2fd4b5" },
  { title: "Follow Up – Jessica Chen", body: "jessica.chen@email.com", color: "#f08fa4" },
  { title: "Follow Up – Roger Bouchard", body: "roger.bouchard@clientmail.com", color: "#f08fa4" },
  { title: "Submit Final Offer – Villa Deal", body: "Finalize and send offer documents.", color: "#f3d95b" },
  { title: "Submit Internal Review – Apartment PricingFinal Offer – Villa Deal", body: "Update CRM with latest market rates.", color: "#f3d95b" },
];

/** Days that carry a coloured underline in the July 2025 calendar. */
export const CAL_MARKS: Record<number, string> = { 10: "#2fd4b5", 11: "#f3d95b", 14: "#f08fa4" };
