import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import './globals.css';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm',
});

export const metadata: Metadata = {
  title: 'SmartPulse - Modern Health Monitoring',
  description: 'Advanced biofeedback device for real-time health insights. Non-invasive cardiac, arterial, and wellness monitoring.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" suppressHydrationWarning className={ibmPlexSansThai.variable}>
      <body style={{ fontFamily: 'var(--font-ibm), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
