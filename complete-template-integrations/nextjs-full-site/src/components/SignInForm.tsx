import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GoogleIcon, FacebookIcon } from './CustomIcons';
import ForgotPassword from './ForgotPassword';

export default function SignInForm() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false);

  const handleForgotPasswordOpen = () => {
    setForgotPasswordOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setForgotPasswordOpen(false);
  };

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        Sign in
      </Typography>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          required
          fullWidth
          id="email"
          placeholder="your@email.com"
          name="email"
          autoComplete="email"
          variant="outlined"
          error={emailError}
          helperText={emailErrorMessage}
          color={emailError ? 'error' : 'primary'}
        />
      </FormControl>
      <FormControl>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Link
            component="button"
            type="button"
            onClick={handleForgotPasswordOpen}
            variant="body2"
            sx={{ alignSelf: 'baseline' }}
          >
            Forgot your password?
          </Link>
        </Box>
        <TextField
          required
          fullWidth
          name="password"
          placeholder="••••••"
          type="password"
          id="password"
          autoComplete="current-password"
          variant="outlined"
          error={passwordError}
          helperText={passwordErrorMessage}
          color={passwordError ? 'error' : 'primary'}
        />
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={validateInputs}
      >
        Sign in
      </Button>
      <Divider>
        <Typography sx={{ color: 'text.secondary' }}>or</Typography>
      </Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Facebook')}
          startIcon={<FacebookIcon />}
        >
          Sign in with Facebook
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Don't have an account?{' '}
          <Link href="/sign-up" variant="body2" sx={{ alignSelf: 'center' }}>
            Sign up
          </Link>
        </Typography>
      </Box>
      <ForgotPassword
        open={forgotPasswordOpen}
        handleClose={handleForgotPasswordClose}
      />
    </Box>
  );
} 