import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Privacy() {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Last updated: {new Date().toLocaleDateString()}
        </Typography>
        <Typography variant="body1" paragraph>
          This Privacy Policy describes how we collect, use, and handle your personal information.
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          1. Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We collect information that you provide directly to us, including but not limited to:
        </Typography>
        <Typography component="ul" variant="body1" paragraph>
          <li>Name and contact information</li>
          <li>Account credentials</li>
          <li>Payment information</li>
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          We use the information we collect to:
        </Typography>
        <Typography component="ul" variant="body1" paragraph>
          <li>Provide and maintain our services</li>
          <li>Process your transactions</li>
          <li>Send you technical notices and support messages</li>
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          3. Information Sharing
        </Typography>
        <Typography variant="body1" paragraph>
          We do not sell or rent your personal information to third parties. We may share your information with:
        </Typography>
        <Typography component="ul" variant="body1" paragraph>
          <li>Service providers who assist in our operations</li>
          <li>Law enforcement when required by law</li>
          <li>Business partners with your consent</li>
        </Typography>
      </Container>
    </Box>
  );
} 