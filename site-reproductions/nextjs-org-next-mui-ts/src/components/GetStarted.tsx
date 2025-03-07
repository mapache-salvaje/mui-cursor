'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  alpha,
  Chip,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const templates = [
  { name: 'Starter', color: '#7C3AED' },
  { name: 'Ecommerce', color: '#10B981' },
  { name: 'Blog', color: '#F59E0B' },
  { name: 'AI', color: '#3B82F6' },
  { name: 'Portfolio', color: '#EC4899' },
  { name: 'SaaS', color: '#6366F1' },
  { name: 'Multi-tenant App', color: '#8B5CF6' },
];

const GetStarted = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                mb: 2,
                background: (theme) => theme.palette.mode === 'light'
                  ? 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.8) 100%)'
                  : 'linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get started in seconds
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.5rem' },
                color: (theme) => alpha(theme.palette.text.primary, 0.8),
                maxWidth: '600px',
                mx: 'auto',
                mb: 4,
              }}
            >
              Deploy Next.js to Vercel
            </Typography>
          </Box>

          <Stack spacing={4} alignItems="center">
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                gap: 1,
                justifyContent: 'center',
                mb: 2,
              }}
            >
              {templates.map((template) => (
                <Chip
                  key={template.name}
                  label={template.name}
                  sx={{
                    bgcolor: alpha(template.color, 0.1),
                    color: template.color,
                    border: '1px solid',
                    borderColor: alpha(template.color, 0.2),
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    px: 1,
                    '&:hover': {
                      bgcolor: alpha(template.color, 0.15),
                    },
                  }}
                  clickable
                />
              ))}
            </Stack>

            <Box
              sx={{
                width: '100%',
                maxWidth: '800px',
                aspectRatio: '16/9',
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid',
                borderColor: (theme) => alpha(theme.palette.divider, 0.1),
                boxShadow: (theme) => `0 24px 48px ${alpha(theme.palette.common.black, 0.12)}`,
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.05),
                backdropFilter: 'blur(8px)',
              }}
            >
              <Image
                src="/vercel-deploy.svg"
                alt="Vercel deployment process"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>

            <Stack spacing={3} alignItems="center">
              <Box
                sx={{
                  p: 2,
                  bgcolor: (theme) => alpha(theme.palette.background.paper, 0.05),
                  borderRadius: '0.75rem',
                  border: '1px solid',
                  borderColor: (theme) => alpha(theme.palette.divider, 0.1),
                  backdropFilter: 'blur(8px)',
                  fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: '0.875rem',
                  color: (theme) => alpha(theme.palette.text.primary, 0.8),
                  boxShadow: (theme) => `0 8px 32px ${alpha(theme.palette.common.black, 0.12)}`,
                  position: 'relative',
                  maxWidth: '100%',
                  overflow: 'auto',
                }}
              >
                $ npx create-next-app@latest
              </Box>

              <Button
                variant="contained"
                component={Link}
                href="/docs/getting-started"
                sx={{
                  py: 1.5,
                  px: 3,
                  fontSize: '1rem',
                  fontWeight: 500,
                  bgcolor: 'text.primary',
                  color: 'background.default',
                  borderRadius: '0.75rem',
                  textTransform: 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    bgcolor: 'text.primary',
                    opacity: 0.9,
                  },
                }}
              >
                Deploy a Template on Vercel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default GetStarted; 