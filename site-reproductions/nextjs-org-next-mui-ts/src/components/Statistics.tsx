'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  alpha,
  styled,
} from '@mui/material';

const stats = [
  {
    number: '480M+',
    label: 'Next.js Downloads',
    description: 'Framework of choice for millions of developers',
  },
  {
    number: '220K+',
    label: 'GitHub Stars',
    description: 'Largest React community on GitHub',
  },
  {
    number: '150K+',
    label: 'Production Sites',
    description: 'Powering the biggest names on the web',
  },
  {
    number: '9.9/10',
    label: 'Developer Satisfaction',
    description: 'Highest rated React framework',
  },
];

const StatCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  background: alpha(theme.palette.background.paper, 0.5),
  backdropFilter: 'blur(8px)',
  borderRadius: 24,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.1)}`,
    borderColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

const Statistics = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200%',
          height: '200%',
          background: theme => `radial-gradient(circle at center, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 50%)`,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              mb: 3,
              background: theme => theme.palette.mode === 'light'
                ? 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.8) 100%)'
                : 'linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            The proof is in the numbers
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatCard elevation={0}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      fontWeight: 800,
                      mb: 1,
                      background: theme => theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.8) 100%)'
                        : 'linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: 'text.primary',
                    }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                    }}
                  >
                    {stat.description}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Statistics; 