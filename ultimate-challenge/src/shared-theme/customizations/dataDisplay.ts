import type { ThemeOptions } from '@mui/material/styles';

export const dataDisplayCustomizations: ThemeOptions['components'] = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
}; 