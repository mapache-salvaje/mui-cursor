'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AppAppBar from '../../components/AppAppBar';
import Footer from '../../components/Footer';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
  },
  {
    title: '2. Use License',
    content: 'Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.',
  },
  {
    title: '3. Disclaimer',
    content: 'The materials on our website are provided on an \'as is\' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
  },
  {
    title: '4. Limitations',
    content: 'In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.',
  },
  {
    title: '5. Revisions and Errata',
    content: 'The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our website are accurate, complete or current.',
  },
];

export default function Terms() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <AppAppBar />
      <Container>
        <Box sx={{ py: { xs: 12, sm: 14, md: 16 } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              mb: 4,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
              fontWeight: 800,
            }}
          >
            Terms of Service
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 8, color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.125rem' } }}
          >
            Please read these terms of service carefully before using our website.
            Last updated: March 20, 2024
          </Typography>
          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                {section.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.7 }}
              >
                {section.content}
              </Typography>
              {index < sections.length - 1 && (
                <Divider sx={{ my: 4 }} />
              )}
            </Box>
          ))}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
} 