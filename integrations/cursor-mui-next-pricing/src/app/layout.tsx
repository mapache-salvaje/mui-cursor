import type { Metadata } from 'next';
import { RootClientLayout } from './root-client-layout';

export const metadata: Metadata = {
  title: 'Cursor Pricing',
  description: 'Pricing page built with MUI and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootClientLayout>{children}</RootClientLayout>;
} 