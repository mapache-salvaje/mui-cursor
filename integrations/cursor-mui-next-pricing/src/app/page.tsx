'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationBar from '@/components/NavigationBar';
import PricingContent from '@/components/PricingContent';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <Box>
      <NavigationBar />
      <PricingContent />
      <Footer />
    </Box>
  );
} 