import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from '../components/layout/Providers';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { JsonLdSchema } from '../components/seo/JsonLdSchema';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: {
    default: 'SEQ Services | Commercial Cleaning & Facility Management Queensland',
    template: '%s | SEQ Services'
  },
  description: 'SEQ Services provides QBCC & cm3 accredited commercial cleaning, biohazard remediation, construction cleaning, and facility management across SEQ, Brisbane, Gold Coast & Sunshine Coast.',
  keywords: [
    'Commercial Cleaning Queensland',
    'Facility Management SEQ',
    'Construction Cleaning Brisbane',
    'Biohazard Cleaning Gold Coast',
    'QBCC Accredited Cleaners',
    'cm3 Certified Commercial Cleaning',
    'SEQ Services'
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://seqservices.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SEQ Services | Commercial Cleaning & Facility Management Queensland',
    description: 'QBCC & cm3 accredited commercial cleaning, trauma remediation, and builder cleaning across South East Queensland.',
    url: 'https://seqservices.com.au',
    siteName: 'SEQ Services Integrated Solutions',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/hero-office.png',
        width: 1200,
        height: 630,
        alt: 'SEQ Services Commercial Office Cleaning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEQ Services | Commercial Cleaning & Facility Management',
    description: 'QBCC & cm3 accredited commercial cleaning across SEQ & Regional Queensland.',
    images: ['/images/hero-office.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <head />
      <body className="bg-slate-50 text-[#4A5568] font-sans antialiased selection:bg-[#29B6F6]/10 selection:text-[#0B1221] overflow-x-hidden" suppressHydrationWarning>
        <JsonLdSchema />
        <Providers>
          <Header />
          <main className="min-h-screen pt-[72px] overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
