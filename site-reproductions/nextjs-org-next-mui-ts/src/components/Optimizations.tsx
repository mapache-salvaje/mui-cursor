'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  alpha,
  Stack,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import SpeedIcon from '@mui/icons-material/Speed';

const optimizations = [
  {
    title: 'Image Optimization',
    description: 'Automatic image optimization with instant builds. Support for modern image formats.',
    icon: <ImageIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: 'Data Fetching',
    description: 'Built-in data fetching methods for any use case. Fetch data at build time or request time.',
    icon: <StorageIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: 'Edge Functions',
    description: 'Run code at the edge, closer to your users. Instant deployments with zero cold starts.',
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
  },
  {
    title: 'Core Web Vitals',
    description: 'Optimized for Core Web Vitals out of the box. No additional configuration required.',
    icon: <SpeedIcon sx={{ fontSize: 32 }} />,
  },
];

const Optimizations = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) => theme.palette.mode === 'light'
            ? `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.12)} 0%, transparent 50%)`
            : `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.24)} 0%, transparent 50%)`,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" position="relative" zIndex={1}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              background: (theme) => theme.palette.mode === 'light'
                ? `linear-gradient(to bottom right, ${theme.palette.text.primary} 30%, ${alpha(theme.palette.text.primary, 0.8)})`
                : `linear-gradient(to bottom right, ${theme.palette.common.white}, ${alpha(theme.palette.common.white, 0.8)})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Built-in Optimizations
          </Typography>

          <Grid container spacing={3}>
            {optimizations.map((optimization, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: (theme) => alpha(theme.palette.background.paper, 0.6),
                    backdropFilter: 'blur(8px)',
                    borderRadius: '0.75rem',
                    border: '1px solid',
                    borderColor: (theme) => alpha(theme.palette.divider, 0.1),
                    transition: 'all 0.15s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => `0 12px 24px ${alpha(theme.palette.common.black, 0.08)}`,
                      borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: (theme) => `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 50%)`,
                      borderRadius: 'inherit',
                      zIndex: -1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {optimization.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 1,
                      background: (theme) => theme.palette.mode === 'light'
                        ? `linear-gradient(to bottom right, ${theme.palette.text.primary} 30%, ${alpha(theme.palette.text.primary, 0.8)})`
                        : `linear-gradient(to bottom right, ${theme.palette.common.white}, ${alpha(theme.palette.common.white, 0.8)})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {optimization.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: (theme) => alpha(theme.palette.text.primary, 0.7),
                      lineHeight: 1.6,
                      fontSize: '0.875rem',
                    }}
                  >
                    {optimization.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Optimizations; 