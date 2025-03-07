'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  alpha,
  Stack,
} from '@mui/material';
import Link from 'next/link';

const sections = [
  {
    title: 'Resources',
    links: [
      { text: 'Documentation', href: '/docs' },
      { text: 'Learn', href: '/learn' },
      { text: 'Showcase', href: '/showcase' },
      { text: 'Blog', href: '/blog' },
      { text: 'Analytics', href: '/analytics' },
    ],
  },
  {
    title: 'More',
    links: [
      { text: 'Commerce', href: '/commerce' },
      { text: 'Contact Sales', href: '/contact' },
      { text: 'GitHub', href: 'https://github.com/vercel/next.js' },
      { text: 'Releases', href: '/releases' },
      { text: 'Telemetry', href: '/telemetry' },
    ],
  },
  {
    title: 'About Vercel',
    links: [
      { text: 'Open Source Software', href: '/oss' },
      { text: 'GitHub', href: 'https://github.com/vercel' },
      { text: 'Twitter', href: 'https://twitter.com/vercel' },
      { text: 'Career', href: '/careers' },
      { text: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
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
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            {sections.map((section) => (
              <Grid item xs={12} sm={6} md={4} key={section.title}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={1.5}>
                  {section.links.map((link) => (
                    <Link
                      key={link.text}
                      href={link.href}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: '0.875rem',
                          color: (theme) => alpha(theme.palette.text.primary, 0.7),
                          transition: 'all 0.15s ease-in-out',
                          '&:hover': {
                            color: 'text.primary',
                          },
                        }}
                      >
                        {link.text}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              pt: 3,
              borderTop: '1px solid',
              borderColor: (theme) => alpha(theme.palette.divider, 0.1),
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: '0.75rem',
                color: (theme) => alpha(theme.palette.text.primary, 0.6),
              }}
            >
              © {new Date().getFullYear()} Vercel, Inc. All rights reserved.
            </Typography>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                '& a': {
                  fontSize: '0.75rem',
                  color: (theme) => alpha(theme.palette.text.primary, 0.6),
                  textDecoration: 'none',
                  transition: 'all 0.15s ease-in-out',
                  '&:hover': {
                    color: 'text.primary',
                  },
                },
              }}
            >
              <MuiLink href="/trademark">Trademark Policy</MuiLink>
              <MuiLink href="/privacy">Privacy Policy</MuiLink>
              <MuiLink href="/terms">Terms of Service</MuiLink>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 