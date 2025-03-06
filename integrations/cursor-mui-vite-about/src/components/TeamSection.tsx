import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { alpha, useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: '/team/sarah.jpg',
    bio: 'Visionary leader with 15+ years of industry experience.',
    social: {
      linkedin: 'https://linkedin.com/in/sarah-johnson',
      twitter: 'https://twitter.com/sarahjohnson',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: '/team/michael.jpg',
    bio: 'Tech innovator and former Silicon Valley engineer.',
    social: {
      linkedin: 'https://linkedin.com/in/michael-chen',
      twitter: 'https://twitter.com/michaelchen',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: '/team/emily.jpg',
    bio: 'Award-winning designer with a passion for user experience.',
    social: {
      linkedin: 'https://linkedin.com/in/emily-rodriguez',
      twitter: 'https://twitter.com/emilyrodriguez',
    },
  },
  {
    name: 'David Kim',
    role: 'Head of Operations',
    image: '/team/david.jpg',
    bio: 'Operations expert with a track record of scaling companies.',
    social: {
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/davidkim',
    },
  },
];

export default function TeamSection() {
  const theme = useTheme();

  return (
    <Box
      id="team"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #FFFFFF 0%, #F6F9FC 100%)'
            : `linear-gradient(180deg, ${alpha(
                theme.palette.background.paper,
                0.8,
              )} 0%, ${alpha(theme.palette.background.paper, 0.2)} 100%)`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.mode === 'light'
            ? 'white'
            : theme.palette.background.paper,
        py: { xs: 8, sm: 10 },
        px: { xs: 2, sm: 0 },
      })}
    >
      <Container>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '2.5rem' },
          }}
        >
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={member.image}
                  alt={member.name}
                  sx={{
                    objectFit: 'cover',
                  }}
                />
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Typography
                    component="h3"
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      lineHeight: 1.8,
                    }}
                  >
                    {member.bio}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                    }}
                  >
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit' }}
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit' }}
                    >
                      <TwitterIcon />
                    </a>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 