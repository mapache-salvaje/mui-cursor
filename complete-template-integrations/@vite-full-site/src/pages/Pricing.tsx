import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PricingTiers from '../components/pricing/PricingTiers';

export default function Pricing() {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Choose the plan that's right for you
        </Typography>
        <PricingTiers />
      </Container>
    </Box>
  );
} 