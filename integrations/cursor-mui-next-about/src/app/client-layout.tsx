'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../shared-theme/AppTheme';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <AppRouterCacheProvider>
      <AppTheme mode={mode}>
        <CssBaseline />
        {React.cloneElement(children as React.ReactElement, { onToggleColorMode: toggleColorMode })}
      </AppTheme>
    </AppRouterCacheProvider>
  );
} 