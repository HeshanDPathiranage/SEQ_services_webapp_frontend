export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seqservices.com.au';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SEQ Services',
    description: 'Commercial cleaning, construction cleaning and facility management in South East Queensland.',
    url: siteUrl,
    telephone: '+61 7 0000 0000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    service: [
      {
        '@type': 'Service',
        name: 'Facility Management',
      },
      {
        '@type': 'Service',
        name: 'Construction Cleaning',
      },
    ],
  };

  const jsonLdText = JSON.stringify(jsonLd);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText }} />;
}
