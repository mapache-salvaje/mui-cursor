import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function EnterpriseSuite() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 12 } }}>
        <Link
          href="/press"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            mb: 4,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <ArrowBackIcon sx={{ mr: 1 }} />
          Back to Press
        </Link>
        <Typography variant="h1" gutterBottom>
          New Product Launch: Enterprise Suite
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          March 1, 2024
        </Typography>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
          alt="Enterprise Suite"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 1,
            my: 4,
          }}
        />
        <Typography variant="body1" paragraph>
          Company launches new enterprise suite with advanced features for large organizations.
        </Typography>
        <Typography variant="body1" paragraph>
          We are excited to announce the launch of our new Enterprise Suite, a comprehensive solution designed specifically for large organizations. This new offering combines powerful features with enterprise-grade security and scalability to meet the complex needs of modern businesses.
        </Typography>
        <Typography variant="body1" paragraph>
          The Enterprise Suite includes:
        </Typography>
        <Typography component="ul" variant="body1" paragraph>
          <li>Advanced security features with role-based access control</li>
          <li>Customizable dashboards and reporting tools</li>
          <li>Enterprise-grade API with comprehensive documentation</li>
          <li>Dedicated support team with 24/7 availability</li>
          <li>Compliance with major industry standards</li>
        </Typography>
        <Typography variant="body1" paragraph>
          Early adopters have already seen significant improvements in their operations, with one customer reporting a 40% increase in efficiency after implementing the Enterprise Suite.
        </Typography>
        <Typography variant="body1" paragraph>
          "The Enterprise Suite has transformed how we manage our operations," said Sarah Johnson, CIO of a Fortune 500 company. "The advanced features and enterprise-grade security give us the confidence to scale our business while maintaining the highest standards of data protection."
        </Typography>
        <Typography variant="body1" paragraph>
          The Enterprise Suite is now available for deployment. For more information or to schedule a demo, please visit our website or contact our sales team.
        </Typography>
      </Container>
    </Box>
  );
} 