'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppAppBar from '../../components/AppAppBar';
import Latest from '../../components/Latest';
import MainContent from '../../components/MainContent';
import Footer from '../../components/Footer';

export default function Blog() {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <AppAppBar />
      <Container>
        <Box sx={{ py: { xs: 12, sm: 14, md: 16 } }}>
          <MainContent />
          <Box sx={{ mt: { xs: 8, sm: 10 } }}>
            <Latest />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
