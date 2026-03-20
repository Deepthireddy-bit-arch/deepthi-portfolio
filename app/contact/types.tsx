// types/contact.types.ts

export interface FormData {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?:    string;
  email?:   string;
  subject?: string;
  message?: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface SocialLink {
  label: string;
  href:  string;
  icon:  string;
}

export interface ContactInfo {
  icon:  string;
  label: string;
  value: string;
  href?: string;
}
