import type { ThemeOptions } from '@mui/material/styles';

export const feedbackCustomizations: ThemeOptions['components'] = {
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
    },
  },
}; 