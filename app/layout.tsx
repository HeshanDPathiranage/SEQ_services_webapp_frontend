import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { Providers } from '../components/layout/Providers';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { JsonLdSchema } from '../components/seo/JsonLdSchema';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: {
    default: 'Professional Commercial & Specialist Cleaning Services Across Australia | SEQ Services',
    template: '%s | SEQ Services'
  },
  description: 'SEQ Services provides professional commercial, construction, biohazard, and specialist cleaning solutions across Australia. Request a free, no-obligation quote today.',
  metadataBase: new URL('https://seqservices.com.au'),
  alternates: {
    canonical: 'https://seqservices.com.au',
  },
  openGraph: {
    title: 'Professional Commercial & Specialist Cleaning Services Across Australia | SEQ Services',
    description: 'SEQ Services provides professional commercial, construction, biohazard, and specialist cleaning solutions across Australia.',
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
    title: 'Professional Commercial & Specialist Cleaning Services Across Australia | SEQ Services',
    description: 'SEQ Services provides professional commercial, construction, biohazard, and specialist cleaning solutions across Australia.',
    images: ['/images/hero-office.png'],
  },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const isRealGaId = Boolean(gaId && gaId !== 'G-XXXXXXXXXX' && /^G-[A-Z0-9]+$/i.test(gaId));

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-slate-50 text-[#4A5568] font-sans antialiased selection:bg-[#29B6F6]/10 selection:text-[#0B1221] overflow-x-hidden" suppressHydrationWarning>
        <JsonLdSchema />
        {isRealGaId && <GoogleAnalytics gaId={gaId!} />}
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
