import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SignUpForm from '../components/auth/SignUpForm';

export default function SignUp() {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="sm">
        <SignUpForm />
      </Container>
    </Box>
  );
} 