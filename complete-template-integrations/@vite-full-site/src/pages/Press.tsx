import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import NavigationBar from '../components/shared/NavigationBar';
import Footer from '../components/shared/Footer';

const pressReleases = [
  {
    title: 'Company Announces Series B Funding Round',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description: 'Leading technology company secures $50M in Series B funding to accelerate growth and innovation.',
  },
  // Add more press releases as needed
];

const Press = () => {
  return (
    <Box>
      <NavigationBar />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Press & Media
        </Typography>
        <Grid container spacing={4}>
          {pressReleases.map((release, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={release.image}
                  alt={release.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {release.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {release.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {release.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Press; 