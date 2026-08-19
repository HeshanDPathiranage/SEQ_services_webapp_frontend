import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES_DATA } from '../../../lib/data';
import { ServiceDetailClient } from './ServiceDetailClient';

interface ServicePageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = SERVICES_DATA.find((s) => s.id === params.slug);
  if (!service) return {};

  const title = `${service.title} | Professional Cleaning Services | SEQ Services`;
  const description = `Professional ${service.title} by SEQ Services. Compliant, reliable cleaning solutions tailored for commercial and specialist facilities across Australia.`;
  const canonical = `https://seqservices.com.au/services/${service.id}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES_DATA.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}
