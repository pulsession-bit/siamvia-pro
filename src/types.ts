
export enum VisaType {
  DTV = 'DTV',
  TOURIST = 'TR',
  LTR = 'LTR',
  NON_B = 'NON_B',
  RETIREMENT = 'NON_O'
}

export interface UserProfile {
  fullName?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  age: number;
  nationality: string;
  countryOfResidence?: string; // Added for Agent Intake

  // Project Details
  visaType: string;
  arrivalDate?: string;
  duration?: string;

  // Professional / Financial
  jobTitle: string;
  incomeSource: 'freelance' | 'remote_employee' | 'business_owner' | 'soft_power' | 'other';
  savingsAmount: number; // In THB equivalent
  currency: string;

  purpose: string;
  notes?: string;
}

export interface AiAnalysisResult {
  eligibilityScore: number; // 0-100
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  verdict: string;
  strengths: string[];
  weaknesses: string[];
  recommendedDocuments: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}


export type MailStatus = "SENT" | "FAILED";

export interface MailLogEntry {
  id: string;
  createdAt: string;
  type: string;
  to: string;
  from: string;
  subject: string;
  status: MailStatus;
  errorMessage?: string;
  meta?: any;
}
