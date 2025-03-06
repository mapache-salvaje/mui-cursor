import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { RootClientLayout } from './root-client-layout';

export const metadata: Metadata = {
  title: 'About - MUI Template',
  description: 'About page template using Material UI v6',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <RootClientLayout>{children}</RootClientLayout>;
} 