'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  alpha,
  styled,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const showcaseImages = [
  {
    src: '/showcase/spoken.jpg',
    alt: 'Spoken website',
    title: 'We Unleash The Power of The Spoken Word',
    href: 'https://spoken.io',
  },
  {
    src: '/showcase/dice.jpg',
    alt: 'DICE website',
    title: 'Popular Events in San Francisco, CA',
    href: 'https://dice.fm',
  },
  {
    src: '/showcase/wiki.jpg',
    alt: 'Wiki website',
    title: 'Your wiki, docs, & projects. Together.',
    href: 'https://wiki.js.org',
  },
  {
    src: '/showcase/nike.jpg',
    alt: 'Nike website',
    title: 'The Best of Air Max',
    href: 'https://nike.com',
  },
  {
    src: '/showcase/news.jpg',
    alt: 'News website',
    title: 'The Washington Post',
    href: 'https://washingtonpost.com',
  },
];

const ShowcaseGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(6),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const ShowcaseImage = styled('a')(({ theme }) => ({
  width: '100%',
  aspectRatio: '16/9',
  borderRadius: '1rem',
  overflow: 'hidden',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.1),
  backgroundColor: alpha(theme.palette.background.paper, 0.05),
  backdropFilter: 'blur(8px)',
  cursor: 'pointer',
  display: 'block',
  textDecoration: 'none',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 12px 32px ${alpha(theme.palette.common.black, 0.12)}`,
    borderColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

const ShowcaseOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
  color: theme.palette.common.white,
}));

const FrameworkChoice = () => {
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
              The framework of choice when it matters
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
              Next.js is trusted by some of the biggest names on the web.
            </Typography>
            <Button
              variant="contained"
              component={Link}
              href="/showcase"
              sx={{
                bgcolor: 'text.primary',
                color: 'background.default',
                fontSize: '1rem',
                fontWeight: 500,
                textTransform: 'none',
                py: 1.5,
                px: 3,
                borderRadius: '0.75rem',
                '&:hover': {
                  bgcolor: 'text.primary',
                  opacity: 0.9,
                },
              }}
            >
              View the Next.js Showcase
            </Button>
          </Box>

          <ShowcaseGrid>
            {showcaseImages.map((image, index) => (
              <ShowcaseImage
                key={index}
                href={image.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={index < 2}
                />
                <ShowcaseOverlay>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'common.white',
                    }}
                  >
                    {image.title}
                  </Typography>
                </ShowcaseOverlay>
              </ShowcaseImage>
            ))}
          </ShowcaseGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default FrameworkChoice; 