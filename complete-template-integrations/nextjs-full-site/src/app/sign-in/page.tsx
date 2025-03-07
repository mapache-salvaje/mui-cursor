'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppAppBar from '@/components/shared/AppAppBar';
import Footer from '@/components/shared/Footer';
import SignInForm from '@/components/auth/SignInForm';

export default function SignIn() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <AppAppBar />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 12, sm: 14, md: 16 },
            pb: { xs: 8, sm: 10, md: 12 },
          }}
        >
          <SignInForm />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
