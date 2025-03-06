import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import NavigationBar from './components/NavigationBar';
import PricingHero from './components/PricingHero';
import PricingTiers from './components/PricingTiers';
import Footer from './components/Footer';

export default function Pricing({ mode, onToggleColorMode }) {
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