import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

const pressReleases = [
  {
    title: 'Company Announces Series B Funding Round',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description: 'Leading technology company secures $50M in Series B funding to accelerate growth and innovation.',
    link: '/press/series-b-funding',
  },
  {
    title: 'New Product Launch: Enterprise Suite',
    date: 'March 1, 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Company launches new enterprise suite with advanced features for large organizations.',
    link: '/press/enterprise-suite',
  },
  {
    title: 'Partnership with Global Tech Leader',
    date: 'February 15, 2024',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=800&q=80',
    description: 'Strategic partnership announced with leading technology provider to expand market reach.',
    link: '/press/global-partnership',
  },
];

export default function Press() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 12 } }}>
        <Typography variant="h1" gutterBottom>
          Press & Media
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Stay up to date with our latest news, press releases, and media coverage.
        </Typography>
        <Grid container spacing={4}>
          {pressReleases.map((release, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={release.image}
                  alt={release.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {release.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {release.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {release.description}
                  </Typography>
                  <Link href={release.link} color="primary">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 