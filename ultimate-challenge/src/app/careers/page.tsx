'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AppAppBar from '../../components/AppAppBar';
import Footer from '../../components/Footer';

const jobOpenings = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    description: 'Join our engineering team to build scalable solutions and drive innovation.',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    description: 'Help shape the future of our products through thoughtful and innovative design.',
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'New York, NY',
    description: 'Lead our marketing initiatives and help grow our brand presence.',
  },
];

export default function Careers() {
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
            Join Our Team
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 8, color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.125rem' } }}
          >
            We're looking for passionate individuals to help us build the future of technology.
            Explore our open positions and find your next opportunity.
          </Typography>
          <Grid container spacing={4}>
            {jobOpenings.map((job, index) => (
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
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {job.title}
                    </Typography>
                    <Typography
                      sx={{ mb: 2, color: 'primary.main', fontWeight: 500 }}
                    >
                      {job.department} • {job.location}
                    </Typography>
                    <Typography sx={{ mb: 3, color: 'text.secondary' }}>
                      {job.description}
                    </Typography>
                    <Button variant="contained" color="primary">
                      Apply Now
                    </Button>
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