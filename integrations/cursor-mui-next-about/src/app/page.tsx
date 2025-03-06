'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import MissionStatement from '../components/MissionStatement';
import History from '../components/History';
import TeamSection from '../components/TeamSection';
import CompanyValues from '../components/CompanyValues';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <Box>
      <NavigationBar />
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