export const DONATION_ACCOUNT = {
  accountName: "HOPE TRUST",
  bank: "Federal Bank",
  accountNumber: "23660200002000",
  ifsc: "FDRL0002356",
  accountType: "Current Account",
  branch: "Kalpudur, Vellore",
} as const;

export const BANK_DETAILS = [
  { label: "Account name", value: DONATION_ACCOUNT.accountName },
  { label: "Bank", value: DONATION_ACCOUNT.bank },
  { label: "Account number", value: DONATION_ACCOUNT.accountNumber, copy: true },
  { label: "IFSC code", value: DONATION_ACCOUNT.ifsc, copy: true },
  { label: "Account type", value: DONATION_ACCOUNT.accountType },
  { label: "Branch", value: DONATION_ACCOUNT.branch },
] as const;
