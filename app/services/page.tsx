import type { Metadata } from 'next';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services Across Australia | SEQ Services',
  description: 'Explore SEQ Services\' comprehensive range of commercial, biohazard, builders handover, and specialist cleaning services delivered across Australia.',
  alternates: {
    canonical: 'https://seqservices.com.au/services',
  },
  openGraph: {
    title: 'Professional Cleaning Services Across Australia | SEQ Services',
    description: 'Explore SEQ Services\' comprehensive range of commercial, biohazard, builders handover, and specialist cleaning services delivered across Australia.',
    url: 'https://seqservices.com.au/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
