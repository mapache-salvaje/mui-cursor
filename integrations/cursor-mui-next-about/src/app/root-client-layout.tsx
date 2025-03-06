'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../shared-theme/AppTheme';

export function RootClientLayout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppTheme mode={mode}>
            <CssBaseline enableColorScheme />
            {children}
          </AppTheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
} 