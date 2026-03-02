import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

export interface ServicePackage {
  title: string;
  price?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  image?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  tools?: string[];
}
