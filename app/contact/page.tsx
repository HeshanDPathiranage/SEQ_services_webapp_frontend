import type { Metadata } from 'next';
import { EnquiryForm } from '../../components/forms/EnquiryForm';
import { PageHeading } from '../../components/sections/PageHeading';

export const metadata: Metadata = {
  title: 'Contact Us | Request a Free Commercial Cleaning Quote',
  description: 'Get in touch with SEQ Services for commercial cleaning, biohazard remediation, and facility management quotes across Queensland.',
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
