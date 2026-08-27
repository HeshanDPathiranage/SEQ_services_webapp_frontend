import type { Metadata } from 'next';
import { FaqClient } from './FaqClient';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about SEQ Services\' commercial cleaning, biohazard remediation, accreditation, and facility management services.',
  alternates: {
    canonical: 'https://seqservices.com.au/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | SEQ Services',
    description: 'Find answers to common questions about SEQ Services\' commercial cleaning, biohazard remediation, accreditation, and facility management services.',
    url: 'https://seqservices.com.au/faq',
  },
};

export default function FAQPage() {
  return <FaqClient />;
}
