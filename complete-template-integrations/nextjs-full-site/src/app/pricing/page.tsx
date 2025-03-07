'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/shared/Footer';
import PricingHero from '@/components/Pricing/PricingHero';
import PricingTiers from '@/components/Pricing/PricingTiers';

export default function PricingPage() {
  return (
    <Box>
      <AppAppBar />
      <PricingHero />
      <PricingTiers />
      <Footer />
    </Box>
  );
} 