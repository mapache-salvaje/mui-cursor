import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationBar from './components/NavigationBar';
import PricingHero from './components/PricingHero';
import PricingTiers from './components/PricingTiers';
import Footer from './components/Footer';

interface PricingProps {
  onToggleColorMode: () => void;
}

export default function Pricing({ onToggleColorMode }: PricingProps) {
  return (
    <Box>
      <NavigationBar onToggleColorMode={onToggleColorMode} />
      <PricingHero />
      <PricingTiers />
      <Footer />
    </Box>
  );
} 