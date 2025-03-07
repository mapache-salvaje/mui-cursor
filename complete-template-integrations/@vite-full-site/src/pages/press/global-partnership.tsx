import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function GlobalPartnership() {
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
          Partnership with Global Tech Leader
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          February 15, 2024
        </Typography>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80"
          alt="Global Partnership"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 1,
            my: 4,
          }}
        />
        <Typography variant="body1" paragraph>
          Strategic partnership announced with leading technology provider to expand market reach.
        </Typography>
        <Typography variant="body1" paragraph>
          We are pleased to announce a strategic partnership with one of the world's leading technology providers. This collaboration will enable us to expand our market reach and deliver enhanced value to our customers through integrated solutions.
        </Typography>
        <Typography variant="body1" paragraph>
          The partnership will focus on:
        </Typography>
        <Typography component="ul" variant="body1" paragraph>
          <li>Joint product development and integration</li>
          <li>Shared go-to-market strategies</li>
          <li>Cross-selling opportunities</li>
          <li>Technical collaboration and knowledge sharing</li>
        </Typography>
        <Typography variant="body1" paragraph>
          "This partnership represents a significant milestone in our growth strategy," said Michael Chen, CEO. "By combining our strengths with our partner's global reach and technical expertise, we can deliver even more value to our customers."
        </Typography>
        <Typography variant="body1" paragraph>
          The partnership will initially focus on key markets in North America and Europe, with plans to expand to additional regions in the coming months. Customers can expect to see the first integrated solutions available by the end of Q2 2024.
        </Typography>
        <Typography variant="body1" paragraph>
          For more information about this partnership and its benefits for customers, please contact our partnership team at partnerships@company.com
        </Typography>
      </Container>
    </Box>
  );
} 