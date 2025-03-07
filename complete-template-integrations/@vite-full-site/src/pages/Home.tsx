import * as React from 'react';
import Divider from '@mui/material/Divider';
import Hero from '../components/marketing/Hero';
import LogoCollection from '../components/marketing/LogoCollection';
import Highlights from '../components/marketing/Highlights';
import Pricing from '../components/marketing/Pricing';
import Features from '../components/marketing/Features';
import Testimonials from '../components/marketing/Testimonials';
import FAQ from '../components/marketing/FAQ';
import Footer from '../components/shared/Footer';

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
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </>
  );
} 