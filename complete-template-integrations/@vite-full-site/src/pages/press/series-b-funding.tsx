import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function SeriesBFunding() {
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
          Company Announces Series B Funding Round
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          March 15, 2024
        </Typography>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
          alt="Series B Funding"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 1,
            my: 4,
          }}
        />
        <Typography variant="body1" paragraph>
          Leading technology company secures $50M in Series B funding to accelerate growth and innovation.
        </Typography>
        <Typography variant="body1" paragraph>
          We are thrilled to announce that we have successfully closed our Series B funding round, raising $50 million from leading venture capital firms. This significant investment will enable us to accelerate our growth, expand our product offerings, and continue driving innovation in the technology sector.
        </Typography>
        <Typography variant="body1" paragraph>
          The funding round was led by prominent venture capital firms, with participation from existing investors. This investment demonstrates strong confidence in our vision and the potential of our technology platform.
        </Typography>
        <Typography variant="body1" paragraph>
          With this new capital, we plan to:
        </Typography>
        <Typography component="ul" variant="body1" paragraph>
          <li>Expand our engineering team to accelerate product development</li>
          <li>Scale our sales and marketing operations globally</li>
          <li>Invest in research and development for new features</li>
          <li>Strengthen our customer support infrastructure</li>
        </Typography>
        <Typography variant="body1" paragraph>
          We are grateful for the support of our investors and excited about the opportunities ahead. This funding will help us continue to deliver value to our customers and maintain our position as a leader in the industry.
        </Typography>
        <Typography variant="body1" paragraph>
          For more information, please contact our press team at press@company.com
        </Typography>
      </Container>
    </Box>
  );
} 