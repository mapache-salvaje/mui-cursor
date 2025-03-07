'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import AppAppBar from '@/components/shared/AppAppBar';
import Hero from '@/components/about/Hero';
import MissionStatement from '@/components/about/MissionStatement';
import History from '@/components/about/History';
import TeamSection from '@/components/about/TeamSection';
import CompanyValues from '@/components/about/CompanyValues';
import Contact from '@/components/about/Contact';
import Footer from '@/components/shared/Footer';

export default function AboutPage() {
  return (
    <Box>
      <AppAppBar />
      <Hero />
      <MissionStatement />
      <History />
      <TeamSection />
      <CompanyValues />
      <Contact />
      <Footer />
    </Box>
  );
} 