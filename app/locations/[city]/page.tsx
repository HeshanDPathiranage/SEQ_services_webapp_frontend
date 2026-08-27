import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHeading } from '../../../components/sections/PageHeading';
import { cities } from '../../../lib/constants';

interface LocationPageProps {
  params: { city: string };
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const city = cities.find((item) => item.slug === params.city);
  if (!city) return {};

  const title = `Commercial Cleaning in ${city.name}`;
  const description = city.description;
  const canonical = `https://seqservices.com.au/locations/${city.slug}`;

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

export default function LocationPage({ params }: LocationPageProps) {
  const city = cities.find((item) => item.slug === params.city);
  if (!city) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <PageHeading title={`Commercial Cleaning in ${city.name}`} description={city.description} />
      <section className="mt-10 space-y-6 text-slate-700">
        <p>
          SEQ Services provides commercial cleaning and facility management for businesses in {city.name}. Our local team is ready for site cleanups, regular maintenance and responsive client support.
        </p>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}
