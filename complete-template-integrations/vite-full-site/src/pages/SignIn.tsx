import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignInCard from '../components/auth/SignInCard';

export default function SignIn() {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="sm">
        <SignInCard />
      </Container>
    </Box>
  );
} 