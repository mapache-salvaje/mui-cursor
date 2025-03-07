'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import AppAppBar from '../../components/AppAppBar';
import Footer from '../../components/Footer';

const pressReleases = [
  {
    title: 'Company Announces Series B Funding Round',
    date: 'March 15, 2024',
    image: '/images/press-1.jpg',
    description: 'Leading technology company secures $50M in Series B funding to accelerate growth and innovation.',
    link: '#',
  },
  {
    title: 'New Product Launch Success',
    date: 'February 28, 2024',
    image: '/images/press-2.jpg',
    description: 'Revolutionary new product receives widespread acclaim from industry experts and users alike.',
    link: '#',
  },
  {
    title: 'Global Expansion Milestone',
    date: 'January 10, 2024',
    image: '/images/press-3.jpg',
    description: 'Company celebrates successful expansion into Asian markets with new office openings.',
    link: '#',
  },
];

export default function Press() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <AppAppBar />
      <Container>
        <Box sx={{ py: { xs: 12, sm: 14, md: 16 } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              mb: 4,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
              fontWeight: 800,
            }}
          >
            Press & Media
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 8, color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.125rem' } }}
          >
            Stay up to date with our latest news, announcements, and media coverage.
            For press inquiries, please contact press@company.com
          </Typography>
          <Grid container spacing={4}>
            {pressReleases.map((release, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow: (theme) => theme.shadows[8],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={release.image}
                    alt={release.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      sx={{ mb: 1, color: 'text.secondary', fontSize: '0.875rem' }}
                    >
                      {release.date}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {release.title}
                    </Typography>
                    <Typography sx={{ mb: 3, color: 'text.secondary' }}>
                      {release.description}
                    </Typography>
                    <Link
                      href={release.link}
                      sx={{
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      Read More →
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
} 