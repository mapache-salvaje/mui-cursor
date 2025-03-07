import * as React from 'react';
import Box from '@mui/material/Box';
import Hero from '../components/about/Hero';
import MissionStatement from '../components/about/MissionStatement';
import History from '../components/about/History';
import TeamSection from '../components/about/TeamSection';
import CompanyValues from '../components/about/CompanyValues';
import Contact from '../components/about/Contact';

export default function About() {
  return (
    <Box>
      <Hero />
      <MissionStatement />
      <History />
      <TeamSection />
      <CompanyValues />
      <Contact />
    </Box>
  );
} 