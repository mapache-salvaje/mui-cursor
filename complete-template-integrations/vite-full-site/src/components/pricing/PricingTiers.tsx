import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import { alpha, useTheme } from '@mui/material/styles';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      'Up to 5 users',
      'Basic analytics',
      'Community support',
      '1GB storage',
      'Email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '29',
    description: 'Everything you need for a growing business',
    features: [
      'Up to 50 users',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'API access',
      'Custom integrations',
    ],
    buttonText: 'Start free trial',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '99',
    description: 'Advanced features for scaling teams',
    features: [
      'Unlimited users',
      'Custom analytics',
      'Dedicated support',
      'Unlimited storage',
      'Advanced security',
      'Custom branding',
      'SLA guarantee',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

export default function PricingTiers() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 8 },
        px: 2,
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="stretch">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease-in-out',
                  ...(tier.title === 'Pro' && {
                    borderColor: 'primary.main',
                    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.2)}`,
                    },
                  }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 24px ${alpha(theme.palette.text.primary, 0.1)}`,
                  },
                }}
              >
                {tier.subheader && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      padding: '4px 10px',
                      backgroundColor: 'primary.main',
                      borderRadius: '12px',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'primary.contrastText' }}>
                      {tier.subheader}
                    </Typography>
                  </Box>
                )}
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center', fontWeight: 'bold' }}
                  sx={{ pb: 0 }}
                />
                <CardContent sx={{ pt: 1, px: 3, flexGrow: 1 }}>
                  <Stack spacing={2} alignItems="center">
                    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                      <Typography component="h2" variant="h3" color="text.primary">
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary" align="center">
                      {tier.description}
                    </Typography>
                    <Stack spacing={1} alignItems="flex-start" width="100%">
                      {tier.features.map((feature) => (
                        <Box key={feature} sx={{ display: 'flex', alignItems: 'center' }}>
                          <CheckIcon sx={{ mr: 1, color: 'primary.main' }} fontSize="small" />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 3, pb: 3 }}>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    color="primary"
                    sx={{
                      py: 1.5,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: (theme) =>
                          `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
                      },
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 