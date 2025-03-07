import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined' as const,
    buttonColor: 'primary' as const,
    buttonLink: '/sign-up',
  },
  {
    title: 'Professional',
    subheader: 'Recommended',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
      'Dedicated team',
      'Best deals',
    ],
    buttonText: 'Start now',
    buttonVariant: 'contained' as const,
    buttonColor: 'secondary' as const,
    buttonLink: '/sign-up',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined' as const,
    buttonColor: 'primary' as const,
    buttonLink: '/contact',
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Pricing
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Choose the perfect plan for your needs. Get started with our free tier or
          upgrade for more features.
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        {tiers.map((tier) => (
          <Grid xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4} key={tier.title}>
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  background: 'none',
                },
                tier.title === 'Professional' &&
                  ((theme) => ({
                    border: 'none',
                    background:
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #1976d2, #0d47a1)'
                        : 'linear-gradient(180deg, #42a5f5, #1976d2)',
                    boxShadow: `0 8px 24px ${theme.palette.mode === 'light' 
                      ? 'rgba(25, 118, 210, 0.2)' 
                      : 'rgba(66, 165, 245, 0.2)'}`,
                  })),
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    },
                    tier.title === 'Professional' && { color: 'grey.100' },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {tier.title}
                  </Typography>
                  {tier.title === 'Professional' && (
                    <Chip
                      icon={<AutoAwesomeIcon />}
                      label={tier.subheader}
                      size="small"
                      sx={{ background: 'rgba(255, 255, 255, 0.1)' }}
                    />
                  )}
                </Box>
                <Box
                  sx={[
                    {
                      display: 'flex',
                      alignItems: 'baseline',
                      mb: 2,
                    },
                    tier.title === 'Professional' && { color: 'grey.50' },
                  ]}
                >
                  <Typography component="h3" variant="h2">
                    ${tier.price}
                  </Typography>
                  <Typography component="h3" variant="h6">
                    &nbsp; per month
                  </Typography>
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                  >
                    <CheckCircleRoundedIcon
                      sx={[
                        { width: 20 },
                        tier.title === 'Professional'
                          ? { color: 'primary.light' }
                          : { color: 'primary.main' },
                      ]}
                    />
                    <Typography
                      component="span"
                      variant="subtitle2"
                      sx={[
                        tier.title === 'Professional'
                          ? { color: 'grey.50' }
                          : { color: 'text.primary' },
                      ]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Link
                  component={RouterLink}
                  to={tier.buttonLink}
                  style={{ width: '100%' }}
                >
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color={tier.buttonColor}
                    sx={
                      tier.title === 'Professional'
                        ? {
                            border: '1px solid',
                            borderColor: 'primary.light',
                            color: 'primary.light',
                          }
                        : {}
                    }
                  >
                    {tier.buttonText}
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
