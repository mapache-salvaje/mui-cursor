import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD 0%, #F6F9FC 100%)'
            : `linear-gradient(180deg, ${alpha(
                theme.palette.primary.main,
                0.2,
              )} 0%, ${alpha(theme.palette.background.paper, 0.2)} 100%)`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.mode === 'light'
            ? 'white'
            : theme.palette.background.paper,
        pt: { xs: 20, sm: 24 },
        pb: { xs: 8, sm: 12 },
        px: { xs: 2, sm: 0 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'light'
            ? `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.1)} 0%, transparent 50%)`
            : `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 50%)`,
          zIndex: 0,
        },
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 2,
              background: theme.palette.mode === 'light'
                ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                : `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Our Company
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            We are a team of passionate individuals dedicated to creating innovative solutions
            that make a difference in people's lives. Our journey began with a simple idea
            and has grown into a global movement.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 