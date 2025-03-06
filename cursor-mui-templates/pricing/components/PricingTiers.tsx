import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

const tiers = [
  {
    title: 'Basic',
    price: '9',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '29',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
      'Phone support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '99',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
      'API access',
      'Custom integrations',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

export default function PricingTiers() {
  return (
    <Box
      id="pricing-tiers"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #F6F9FC 0%, #FFFFFF 100%)'
            : `linear-gradient(180deg, ${alpha(
                theme.palette.background.paper,
                0.8,
              )} 0%, ${alpha(theme.palette.background.paper, 0.2)} 100%)`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.mode === 'light'
          ? 'white'
          : theme.palette.background.paper,
        py: { xs: 8, sm: 10 },
        px: { xs: 2, sm: 0 },
      })}
    >
      <Container>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Pro' ? 12 : 6}
              md={4}
            >
              <Card
                sx={{
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: (theme) =>
                      `0 12px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                  },
                }}
              >
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                      }}
                    >
                      <CheckIcon
                        sx={{
                          color: 'primary.main',
                          fontSize: 20,
                        }}
                      />
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    sx={{
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