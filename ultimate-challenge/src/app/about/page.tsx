'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import AppAppBar from '../../components/AppAppBar';
import Footer from '../../components/Footer';
import Hero from '../../components/About/Hero';
import MissionStatement from '../../components/About/MissionStatement';
import History from '../../components/About/History';
import TeamSection from '../../components/About/TeamSection';
import CompanyValues from '../../components/About/CompanyValues';
import Contact from '../../components/About/Contact';

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
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