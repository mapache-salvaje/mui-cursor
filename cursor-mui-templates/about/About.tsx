import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import CompanyValues from './components/CompanyValues';
import TeamSection from './components/TeamSection';
import MissionStatement from './components/MissionStatement';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function About(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <NavigationBar />
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