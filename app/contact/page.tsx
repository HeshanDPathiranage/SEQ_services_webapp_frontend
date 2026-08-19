import type { Metadata } from 'next';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { PageHeading } from '../../components/sections/PageHeading';

export const metadata: Metadata = {
  title: 'Contact SEQ Services | Request a Free Cleaning Quote',
  description: 'Contact SEQ Services to discuss your cleaning requirements or request a fast, tailored quote for your commercial or specialist facility.',
  alternates: {
    canonical: 'https://seqservices.com.au/contact',
  },
  openGraph: {
    title: 'Contact SEQ Services | Request a Free Cleaning Quote',
    description: 'Contact SEQ Services to discuss your cleaning requirements or request a fast, tailored quote for your commercial or specialist facility.',
    url: 'https://seqservices.com.au/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeading title="Contact SEQ Services" description="Send an enquiry and our team will respond quickly with a tailored quote." />
      <section className="mt-10">
        <EnquiryForm />
      </section>
    </main>
  );
}
