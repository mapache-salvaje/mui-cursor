import type { ThemeOptions } from '@mui/material/styles';

export const navigationCustomizations: ThemeOptions['components'] = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        borderRadius: '0 8px 8px 0',
      },
    },
  },
}; 