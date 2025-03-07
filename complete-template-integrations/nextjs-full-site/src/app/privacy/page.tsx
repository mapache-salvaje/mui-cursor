'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/shared/Footer';

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us for support. This may include your name, email address, postal address, phone number, and payment information.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to provide, maintain, and improve our services, to process your transactions, to send you technical notices and support messages, and to communicate with you about products, services, offers, and events.',
  },
  {
    title: '3. Information Sharing',
    content: 'We do not share your personal information with third parties except as described in this privacy policy. We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.',
  },
  {
    title: '4. Data Security',
    content: 'We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable and we cannot guarantee the security of our systems.',
  },
  {
    title: '5. Your Rights',
    content: 'You have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.',
  },
];

export default function Privacy() {
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
            Privacy Policy
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 8, color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.125rem' } }}
          >
            Your privacy is important to us. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information.
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