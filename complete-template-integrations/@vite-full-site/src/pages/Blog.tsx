import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Latest from '../components/blog/Latest';
import MainContent from '../components/blog/MainContent';

export default function Blog() {
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
    >
      <MainContent />
      <Latest />
    </Container>
  );
} 