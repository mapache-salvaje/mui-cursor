'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import AppAppBar from '../../../components/AppAppBar';
import Footer from '../../../components/Footer';

export default function ProductLaunch() {
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
            New Product Launch Success
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 4, color: 'text.secondary' }}
          >
            February 28, 2024
          </Typography>
          <Card sx={{ mb: 6 }}>
            <CardMedia
              component="img"
              height="400"
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaboration"
              sx={{ objectFit: 'cover' }}
            />
          </Card>
          <Typography variant="body1" paragraph>
            We are excited to announce the successful launch of our latest product, which has received overwhelming positive feedback from both industry experts and users alike.
          </Typography>
          <Typography variant="body1" paragraph>
            The new product represents a significant leap forward in our technology stack, offering:
          </Typography>
          <Typography component="ul" sx={{ pl: 4, mb: 4 }}>
            <li>Enhanced performance and reliability</li>
            <li>Intuitive user interface</li>
            <li>Advanced security features</li>
            <li>Seamless integration capabilities</li>
          </Typography>
          <Typography variant="body1" paragraph>
            "The response from our users has been incredible," said our Product Director. "We've worked closely with our community to develop this solution, and their feedback has been invaluable in shaping the final product."
          </Typography>
          <Typography variant="body1" paragraph>
            Early adoption metrics show strong user engagement and satisfaction rates, with 95% of users reporting improved productivity and efficiency.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
} 