import React from 'react';
import Script from 'next/script';
import { CONTACT_INFO } from '../../lib/data';

export function JsonLdSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    name: 'SEQ Services Integrated Solutions',
    url: 'https://seqservices.com.au',
    logo: 'https://seqservices.com.au/images/logo.jpg',
    image: 'https://seqservices.com.au/images/hero-office.png',
    description: 'QBCC & cm3 accredited commercial cleaning, biohazard remediation, builder cleaning, and facility management across South East Queensland.',
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    areaServed: [
      'South East Queensland',
      'Brisbane',
      'Gold Coast',
      'Sunshine Coast',
      'Regional QLD',
    ],
    priceRange: '$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Cleaning & Facility Management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Biohazard & Trauma Remediation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction & Builders Cleaning',
          },
        },
      ],
    },
  };

  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


