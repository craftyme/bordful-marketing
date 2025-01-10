export const CATEGORIES = {
  COUNTRY: "Country",
  CITY: "City",
  INDUSTRY: "Industry",
  ROLE: "Role",
  TECHNOLOGY: "Technology",
  REMOTE: "Remote",
} as const;

export type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES];
