import * as React from 'react';
import Divider from '@mui/material/Divider';
import Hero from '../components/marketing/Hero';
import LogoCollection from '../components/marketing/LogoCollection';
import Highlights from '../components/marketing/Highlights';
import PricingTiers from '../components/pricing/PricingTiers';
import Features from '../components/marketing/Features';
import Testimonials from '../components/marketing/Testimonials';
import FAQ from '../components/shared/FAQ';

export default function Home() {
  return (
    <>
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
      </div>
    </>
  );
} 