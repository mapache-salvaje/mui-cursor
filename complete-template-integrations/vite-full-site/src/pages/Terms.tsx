import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Terms() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Terms of Service
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Last updated: {new Date().toLocaleDateString()}
          </Typography>
          <Divider sx={{ my: 4 }} />
          <Typography variant="body1" paragraph>
            Welcome to our Terms of Service. Please read these terms carefully before using our service.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using this service, you accept and agree to be bound by the terms and conditions of this agreement.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            2. Use License
          </Typography>
          <Typography variant="body1" paragraph>
            Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            3. Disclaimer
          </Typography>
          <Typography variant="body1" paragraph>
            The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 