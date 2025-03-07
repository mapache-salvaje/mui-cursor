'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/shared/Footer';

export default function GlobalExpansion() {
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
            Global Expansion Milestone
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            January 10, 2024
          </Typography>
          <Card sx={{ mb: 6 }}>
            <CardMedia
              component="img"
              height="400"
              image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern office space"
              sx={{ objectFit: 'cover' }}
            />
          </Card>
          <Typography variant="body1" paragraph>
            We are proud to announce the successful expansion of our operations into key Asian markets, marking a significant milestone in our global growth strategy.
          </Typography>
          <Typography variant="body1" paragraph>
            The expansion includes new office openings in:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 4 }}>
            <li>Singapore - Regional Headquarters</li>
            <li>Tokyo - Japanese Operations Center</li>
            <li>Seoul - Korean Market Hub</li>
            <li>Shanghai - Chinese Operations Base</li>
          </Typography>
          <Typography variant="body1" paragraph>
            "This expansion represents our commitment to serving our growing customer base in Asia," said our Chief Operating Officer. "We're excited to bring our innovative solutions closer to our customers in these important markets."
          </Typography>
          <Typography variant="body1" paragraph>
            The new offices will provide local support, sales, and development teams to better serve our customers in these regions. We expect to create over 200 new jobs across these locations in the coming year.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
} 