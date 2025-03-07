import * as React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import AppTheme from '../../shared-theme/AppTheme';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

export default function Layout() {
  return (
    <CssVarsProvider>
      <AppTheme>
        <CssBaseline enableColorScheme />
        <NavigationBar />
        <Outlet />
        <Footer />
      </AppTheme>
    </CssVarsProvider>
  );
} 