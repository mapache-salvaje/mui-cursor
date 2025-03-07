'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import AppTheme from '@/shared-theme/AppTheme';
import AppAppBar from '@/components/shared/AppAppBar';
import Hero from '@/components/marketing/Hero';
import LogoCollection from '@/components/marketing/LogoCollection';
import Highlights from '@/components/marketing/Highlights';
import PricingTiers from '@/components/Pricing/PricingTiers';
import Features from '@/components/marketing/Features';
import Testimonials from '@/components/marketing/Testimonials';
import FAQ from '@/components/shared/FAQ';
import Footer from '@/components/shared/Footer';

export default function MarketingPage() {
  return (
    <CssVarsProvider>
      <AppTheme>
        <CssBaseline enableColorScheme />

        <AppAppBar />
        <Hero />
        <div>
          <LogoCollection />
          <Features />
          <Divider />
          <Testimonials />
          <Divider />
          <Highlights />
          <Divider />
          <PricingTiers />
          <Divider />
          <FAQ />
          <Divider />
          <Footer />
        </div>
      </AppTheme>
    </CssVarsProvider>
  );
}
