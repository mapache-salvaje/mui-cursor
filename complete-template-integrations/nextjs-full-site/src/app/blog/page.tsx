'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from '@/components/shared/AppAppBar';
import MainContent from '@/components/Blog/MainContent';
import Latest from '@/components/blog/Latest';
import Footer from '@/components/shared/Footer';

export default function Blog() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent />
        <Latest />
      </Container>
      <Footer />
    </>
  );
}
