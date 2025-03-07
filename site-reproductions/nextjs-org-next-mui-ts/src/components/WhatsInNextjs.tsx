'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  alpha,
  Link as MuiLink,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const features = [
  {
    title: 'Built-in Optimizations',
    description: 'Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.',
  },
  {
    title: 'Data Fetching',
    description: 'Make your React component async and await your data. Next.js supports both server and client data fetching.',
  },
  {
    title: 'Server Actions',
    description: 'Run server code by calling a function. Skip the API. Then, easily revalidate cached data and update your UI in one network roundtrip.',
  },
  {
    title: 'Advanced Routing & Nested Layouts',
    description: 'Create routes using the file system, including support for more advanced routing patterns and UI layouts.',
  },
  {
    title: 'Dynamic HTML Streaming',
    description: 'Instantly stream UI from the server, integrated with the App Router and React Suspense.',
  },
  {
    title: 'CSS Support',
    description: 'Style your application with your favorite tools, including support for CSS Modules, Tailwind CSS, and popular community libraries.',
  },
  {
    title: 'Route Handlers',
    description: 'Build API endpoints to securely connect with third-party services for handling auth or listening for webhooks.',
  },
  {
    title: 'Middleware',
    description: 'Take control of the incoming request. Use code to define routing and access rules for authentication, experimentation, and internationalization.',
  },
  {
    title: 'React Server Components',
    description: 'Add components without sending additional client-side JavaScript. Built on the latest React features.',
  },
  {
    title: 'Client and Server Rendering',
    description: 'Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level.',
  },
];

export default function WhatsInNextjs() {
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
            What's in Next.js?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontWeight: 400,
              color: 'text.secondary',
              mb: 8,
            }}
          >
            Everything you need to build great products on the web.
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