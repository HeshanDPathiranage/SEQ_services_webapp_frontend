import type { Metadata } from 'next';
import { AboutClient } from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us | Professional Cleaning Services',
  description: 'Learn about SEQ Services — Queensland-owned commercial cleaning and specialist remediation experts delivering trusted, compliant facility solutions across Australia.',
  alternates: {
    canonical: 'https://seqservices.com.au/about',
  },
  openGraph: {
    title: 'About SEQ Services | Professional Cleaning Services',
    description: 'Learn about SEQ Services — Queensland-owned commercial cleaning and specialist remediation experts delivering trusted, compliant facility solutions across Australia.',
    url: 'https://seqservices.com.au/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
