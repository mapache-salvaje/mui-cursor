'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/shared/Footer';

export default function SeriesBFunding() {
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
            Company Announces Series B Funding Round
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            March 15, 2024
          </Typography>
          <Card sx={{ mb: 6 }}>
            <CardMedia
              component="img"
              height="400"
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Business meeting"
              sx={{ objectFit: 'cover' }}
            />
          </Card>
          <Typography variant="body1" paragraph>
            We are thrilled to announce that our company has successfully closed a $50 million Series B funding round. This significant investment will accelerate our growth and innovation initiatives across key markets.
          </Typography>
          <Typography variant="body1" paragraph>
            The funding round was led by prominent venture capital firms, with participation from existing investors. This new capital will enable us to:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 4 }}>
            <li>Expand our product development team</li>
            <li>Accelerate international market expansion</li>
            <li>Invest in cutting-edge technology infrastructure</li>
            <li>Scale our customer support operations</li>
          </Typography>
          <Typography variant="body1" paragraph>
            "This funding represents a significant milestone in our journey," said our CEO. "We're grateful for the trust and support of our investors, and we're excited to continue delivering value to our customers."
          </Typography>
          <Typography variant="body1" paragraph>
            The company plans to use this investment to further strengthen its position in the market and continue developing innovative solutions that address our customers' evolving needs.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
} 