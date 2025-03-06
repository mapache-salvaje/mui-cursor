import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import PricingHero from './PricingHero';
import PricingTiers from './PricingTiers';

export default function PricingContent() {
  return (
    <Box component="main" sx={{ mt: { xs: 8, sm: 12 } }}>
      <PricingHero />
      <Box sx={{ py: { xs: 4, sm: 8 } }}>
        <PricingTiers />
      </Box>
      <Divider />
    </Box>
  );
} 