'use client';

import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import WhatsInNextjs from '../components/WhatsInNextjs';
import Features from '../components/Features';
import Frameworks from '../components/Frameworks';
import Showcase from '../components/Showcase';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatsInNextjs />
      <Features />
      <Frameworks />
      <Showcase />
      <Footer />
    </main>
  );
}
