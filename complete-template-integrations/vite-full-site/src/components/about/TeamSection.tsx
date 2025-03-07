'use client';

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
import Link from '@mui/material/Link';
import CardActions from '@mui/material/CardActions';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    description: 'Visionary leader with 15+ years of experience in tech innovation.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    description: 'Expert in scalable architecture and emerging technologies.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
    description: 'Award-winning designer passionate about user experience.',
  },
  {
    name: 'David Kim',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    description: 'Operations expert with a focus on sustainable growth.',
  },
];

export default function TeamSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="team"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            mb: { xs: 4, md: 6 },
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  boxShadow: 1,
                }}
              >
                <Box
                  sx={{
                    pt: '100%',
                    position: 'relative',
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 2, color: 'primary.main', fontWeight: 500 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {member.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Link
                    href="#contact"
                    variant="outlined"
                    sx={{
                      borderRadius: 28,
                      px: 2,
                      py: 1,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      textDecoration: 'none',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        backgroundColor: alpha(theme.palette.primary.main, 0.04),
                      },
                    }}
                  >
                    Contact
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 