import * as React from 'react';
import { Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import AppTheme from '../../shared-theme/AppTheme';
import AppAppBar from './AppAppBar';
import Footer from './Footer';

export default function Layout() {
  return (
    <CssVarsProvider>
      <AppTheme>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <Box
          component="main"
          sx={{
            pt: { xs: 'calc(var(--template-frame-height, 0px) + 80px)', md: 'calc(var(--template-frame-height, 0px) + 100px)' },
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </AppTheme>
    </CssVarsProvider>
  );
} 