import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

export default function PricingHero() {
  return (
    <Box
      id="pricing-hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #F6F9FC 0%, #FFFFFF 100%)'
            : `linear-gradient(180deg, ${alpha(
                theme.palette.background.paper,
                0.8,
              )} 0%, ${alpha(theme.palette.background.paper, 0.2)} 100%)`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.mode === 'light'
          ? 'white'
          : theme.palette.background.paper,
        py: { xs: 8, sm: 10 },
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
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            sx={{
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`
                  : `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Simple, transparent pricing
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
            Choose the plan that best fits your needs. All plans include unlimited updates
            and access to our premium support team.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 