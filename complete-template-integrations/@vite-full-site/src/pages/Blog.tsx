import * as React from 'react';
import Box from '@mui/material/Box';
import Latest from '../components/blog/Latest';
import MainContent from '../components/blog/MainContent';

export default function Blog() {
  return (
    <Box>
      <Latest />
      <MainContent />
    </Box>
  );
} 