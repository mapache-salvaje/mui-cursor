import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import NavigationBar from './components/NavigationBar';
import PricingHero from './components/PricingHero';
import PricingTiers from './components/PricingTiers';
import Footer from './components/Footer';

interface PricingProps {
  mode: 'light' | 'dark';
  onToggleColorMode: () => void;
}

export default function Pricing({ mode, onToggleColorMode }: PricingProps) {
  return (
    <AppTheme mode={mode}>
      <CssBaseline enableColorScheme />

      <NavigationBar onToggleColorMode={onToggleColorMode} />
      <PricingHero />
      <div>
        <PricingTiers />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
} 