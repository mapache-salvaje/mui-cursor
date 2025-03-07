import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Stack,
  alpha,
  styled,
} from '@mui/material';

const testimonials = [
  {
    quote: "Next.js has been a game-changer for our team's productivity and our site's performance.",
    author: "Tobi Lutke",
    role: "CEO",
    company: "Shopify",
    image: "/showcase/shopify.jpg"
  },
  {
    quote: "Next.js enables us to build high-performance, personalized storefronts faster than ever before.",
    author: "Margaret Wheeler",
    role: "CIO",
    company: "Lululemon",
    image: "/showcase/lululemon.jpg"
  },
  {
    quote: "With Next.js, we've seen incredible improvements in both developer productivity and site performance.",
    author: "Ashley Fester",
    role: "Tech Lead",
    company: "TripActions",
    image: "/showcase/tripactions.jpg"
  }
];

const TestimonialCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  height: '100%',
  background: alpha(theme.palette.background.paper, 0.5),
  backdropFilter: 'blur(8px)',
  borderRadius: 24,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.1)}`,
    borderColor: alpha(theme.palette.primary.main, 0.2),
  },
}));

const Testimonials = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              mb: 3,
              background: theme => theme.palette.mode === 'light'
                ? 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.8) 100%)'
                : 'linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Trusted by the world's most innovative teams
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
              mt: 8,
              position: 'relative',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} elevation={0}>
                <Stack spacing={3}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 500,
                      lineHeight: 1.6,
                      color: 'text.primary',
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Stack spacing={1}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                      }}
                    >
                      {testimonial.author}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                      }}
                    >
                      {testimonial.role}, {testimonial.company}
                    </Typography>
                  </Stack>
                </Stack>
              </TestimonialCard>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 