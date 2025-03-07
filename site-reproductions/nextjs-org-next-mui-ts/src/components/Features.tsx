'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, alpha } from '@mui/material';

const features = [
  {
    title: 'Fast Refresh',
    description: 'Fast Refresh enables you to get near-instant feedback on edits made to your React components, without ever losing component state.',
  },
  {
    title: 'Zero Config',
    description: 'Automatic compilation and bundling. Optimized for production from the start.',
  },
  {
    title: 'File-system Routing',
    description: 'Every component in the app directory is a route. No configuration necessary.',
  },
  {
    title: 'API Routes',
    description: 'Add API endpoints to your Next.js application in the app directory to handle requests.',
  },
  {
    title: 'TypeScript Support',
    description: 'Improved TypeScript support with better type checking and more efficient compilation.',
  },
  {
    title: 'Edge Runtime',
    description: 'Run code at the Edge, closer to your users, with optimal performance and minimal latency.',
  },
];

export default function Features() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
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
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 2,
              background: theme => theme.palette.mode === 'light'
                ? 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.8) 100%)'
                : 'linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Features
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontWeight: 400,
              color: 'text.secondary',
              mb: 8,
            }}
          >
            Production-ready features you'd expect from a modern web framework.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: theme => alpha(theme.palette.background.paper, 0.05),
                  backdropFilter: 'blur(8px)',
                  border: '1px solid',
                  borderColor: theme => alpha(theme.palette.divider, 0.1),
                  borderRadius: '1rem',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme => `0 12px 32px ${alpha(theme.palette.common.black, 0.12)}`,
                    borderColor: theme => alpha(theme.palette.primary.main, 0.2),
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontSize: '1.125rem',
                    color: 'text.primary',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: theme => alpha(theme.palette.text.primary, 0.7),
                    lineHeight: 1.6,
                    fontSize: '0.875rem',
                  }}
                >
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 