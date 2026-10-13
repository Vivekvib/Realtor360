export type Status = "Active" | "In Progress" | "Converted" | "Cold" | "Not Interested";
export type Role = "Buyer" | "Seller" | "Investor" | "Broker" | "Developer";

export interface Contact {
  id: number;
  name: string;
  email: string;
  company: string;
  role: Role;
  phone: string;
  stage: string;
  status: Status;
  assignee: string;
  city: string;
  source: string;
}

export const STATUSES: Status[] = ["Active", "In Progress", "Converted", "Cold", "Not Interested"];
export const ROLES: Role[] = ["Buyer", "Seller", "Investor", "Broker"];
export const ASSIGNEES = ["Jessica", "Mohit", "Arjun", "Emily"];
export const CITIES = ["Bengaluru", "Pune", "Mumbai", "Hyderbad", "Delhi"];
export const SOURCES = ["Website Form", "Referral", "Facebook Ads", "Walk-In", "Email Campaign"];

const mk = (
  id: number, name: string, role: Role, status: Status,
  city = CITIES[id % 5], source = SOURCES[id % 5], assignee = "Jessica",
): Contact => ({
  id, name, role, status, city, source, assignee,
  email: "john@urbanrealty.com",
  company: "Urban Realty",
  phone: "+91 9411521487",
  stage: "Negotiation",
});

/** Page 1 mirrors the design; pages 2–3 are filler rows in the same shape. */
export const CONTACTS: Contact[] = [
  mk(1, "John Doe", "Broker", "Active"),
  mk(2, "Ananya Verma", "Buyer", "In Progress"),
  mk(3, "Ravi Kapoor", "Developer", "Cold"),
  mk(4, "Emily Mehra", "Buyer", "Converted"),
  mk(5, "John Doe", "Seller", "Not Interested"),
  mk(6, "Ananya Verma", "Buyer", "Active"),
  mk(7, "Ravi Kapoor", "Investor", "Active"),
  mk(8, "Emily Mehra", "Broker", "Active"),
  mk(9, "Karan Malhotra", "Buyer", "Active", "Mumbai", "Referral", "Mohit"),
  mk(10, "Priya Nair", "Seller", "In Progress", "Pune", "Website Form", "Arjun"),
  mk(11, "Sahil Arora", "Investor", "Converted", "Delhi", "Walk-In", "Emily"),
  mk(12, "Neha Joshi", "Broker", "Cold", "Bengaluru", "Facebook Ads", "Mohit"),
  mk(13, "Rohan Gupta", "Buyer", "Not Interested", "Hyderbad", "Email Campaign", "Arjun"),
  mk(14, "Meera Iyer", "Seller", "Active", "Pune", "Referral", "Emily"),
  mk(15, "Vikram Singh", "Developer", "In Progress", "Delhi", "Website Form"),
  mk(16, "Isha Kulkarni", "Buyer", "Converted", "Mumbai", "Walk-In", "Mohit"),
  mk(17, "Aditya Rao", "Investor", "Active", "Bengaluru", "Facebook Ads", "Arjun"),
  mk(18, "Tanya Bose", "Broker", "Cold", "Delhi", "Email Campaign", "Emily"),
  mk(19, "Harsh Vora", "Buyer", "Active", "Pune", "Referral"),
  mk(20, "Simran Kaur", "Seller", "In Progress", "Hyderbad", "Website Form", "Mohit"),
  mk(21, "Dev Patel", "Investor", "Converted", "Mumbai", "Walk-In", "Arjun"),
  mk(22, "Anika Sen", "Buyer", "Not Interested", "Bengaluru", "Facebook Ads", "Emily"),
  mk(23, "Manav Shah", "Broker", "Active", "Delhi", "Email Campaign"),
  mk(24, "Riya Menon", "Buyer", "Active", "Pune", "Referral", "Mohit"),
];

export const PAGE_SIZE = 8;
