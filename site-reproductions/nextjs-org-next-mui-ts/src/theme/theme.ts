import { createTheme, alpha } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000',
      light: alpha('#000', 0.8),
      dark: alpha('#000', 0.6),
    },
    background: {
      default: '#fff',
      paper: '#fafafa',
    },
    text: {
      primary: '#000',
      secondary: alpha('#000', 0.7),
    },
    divider: alpha('#000', 0.1),
    action: {
      hover: alpha('#000', 0.05),
      selected: alpha('#000', 0.1),
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: '5rem',
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: 0,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: 0,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#fff',
          color: '#000',
          minHeight: '100vh',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px',
          fontSize: '1rem',
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          backgroundColor: '#000',
          color: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#000',
            opacity: 0.9,
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 1,
          borderColor: alpha('#000', 0.1),
          '&:hover': {
            borderColor: alpha('#000', 0.2),
            backgroundColor: alpha('#000', 0.05),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#fff', 0.8),
          backdropFilter: 'blur(8px)',
          borderRadius: 16,
          border: `1px solid ${alpha('#000', 0.1)}`,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 12px 32px ${alpha('#000', 0.08)}`,
            borderColor: alpha('#000', 0.2),
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width: 600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 32,
          fontSize: '0.875rem',
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
        },
        clickable: {
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: '#000',
          transition: 'color 0.2s ease-in-out',
          '&:hover': {
            color: alpha('#000', 0.8),
          },
        },
      },
    },
  },
}); 