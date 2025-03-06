import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import NavigationBar from './NavigationBar';
import Hero from './Hero';
import CompanyValues from './CompanyValues';
import TeamSection from './TeamSection';
import MissionStatement from './MissionStatement';
import History from './History';
import Contact from './Contact';
import Footer from './Footer';

interface AboutProps {
  mode: 'light' | 'dark';
  onToggleColorMode: () => void;
}

export default function About({ mode, onToggleColorMode }: AboutProps) {
  return (
    <AppTheme mode={mode}>
      <CssBaseline enableColorScheme />

      <NavigationBar onToggleColorMode={onToggleColorMode} />
      <Hero />
      <div>
        <MissionStatement />
        <Divider />
        <CompanyValues />
        <Divider />
        <History />
        <Divider />
        <TeamSection />
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
} 