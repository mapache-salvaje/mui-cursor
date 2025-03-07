'use client';

import React from 'react';
import { Box, Container, Typography, alpha } from '@mui/material';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 'lg',
            mx: 'auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 4,
              background: theme => theme.palette.mode === 'light'
                ? 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.8) 100%)'
                : 'linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            The React Framework for the Web
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontWeight: 400,
              color: 'text.secondary',
              mb: 6,
              maxWidth: 'md',
              mx: 'auto',
            }}
          >
            Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.
          </Typography>
          <Box
            sx={{
              fontFamily: 'monospace',
              bgcolor: 'background.paper',
              p: 2,
              borderRadius: 2,
              maxWidth: 'sm',
              mx: 'auto',
              boxShadow: theme => `0 0 0 1px ${alpha(theme.palette.divider, 0.1)}`,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'inherit',
                color: 'text.secondary',
              }}
            >
              ▲ ~ npx create-next-app@latest
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 