import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = 'https://layasaranprabhu.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Layasaran Prabhu',
    template: '%s | Layasaran Prabhu',
  },
  description:
    'Portfolio of Layasaran Prabhu — an aspiring Cloud Engineer and AI Developer specializing in machine learning, LLM orchestration, and scalable cloud architectures.',
  keywords: [
    'Layasaran Prabhu',
    'Cloud Engineer',
    'AI Developer',
    'Machine Learning',
    'LLM',
    'Portfolio',
    'Full Stack Developer',
    'AWS',
    'Python',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Layasaran Prabhu', url: siteUrl }],
  creator: 'Layasaran Prabhu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Layasaran Prabhu',
    title: 'Layasaran Prabhu — Cloud Engineer & AI Developer',
    description:
      'Aspiring Cloud Engineer and AI Developer specializing in ML, LLM orchestration, and scalable cloud architectures.',
    images: [
      {
        url: '/profolio_logo.png',
        width: 512,
        height: 512,
        alt: 'Layasaran Prabhu logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layasaran Prabhu — Cloud Engineer & AI Developer',
    description:
      'Aspiring Cloud Engineer and AI Developer specializing in ML, LLM orchestration, and scalable cloud architectures.',
    creator: '@layasaranp',
    images: ['/profolio_logo.png'],
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
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Layasaran Prabhu',
  url: siteUrl,
  jobTitle: 'Cloud Engineer & AI Developer',
  description:
    'Aspiring Cloud Engineer and AI Developer specializing in machine learning, LLM orchestration, and scalable cloud architectures.',
  sameAs: [
    'https://github.com/LayasaranP',
    'https://linkedin.com/in/layasaran-p',
    'https://x.com/layasaranp',
  ],
  email: 'layasaranp@gmail.com',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Vellore Institute of Technology',
  },
  knowsAbout: [
    'Cloud Computing',
    'Artificial Intelligence',
    'Machine Learning',
    'LLM Orchestration',
    'AWS',
    'Python',
    'React',
    'Next.js',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#050505" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
