'use client';

import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  Typography,
  InputBase,
  alpha,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '0.75rem',
  backgroundColor: alpha(theme.palette.background.paper, 0.05),
  backdropFilter: 'blur(8px)',
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.background.paper, 0.1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '240px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: alpha(theme.palette.text.primary, 0.5),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    fontSize: '0.875rem',
    '&::placeholder': {
      color: alpha(theme.palette.text.primary, 0.5),
      opacity: 1,
    },
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: '14px',
  backdropFilter: 'blur(8px)',
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  border: '1px solid',
  borderColor: alpha(theme.palette.divider, 0.1),
  padding: '6px 8px',
  margin: '16px',
  [theme.breakpoints.up('sm')]: {
    margin: '16px 24px',
    padding: '6px 12px',
  },
}));

const NextLogo = () => (
  <svg width="82" height="40" viewBox="0 0 394 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z" fill="currentColor"/>
    <path d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z" fill="currentColor"/>
  </svg>
);

const Navigation = () => {
  return (
    <AppBar 
      position="fixed" 
      color="transparent" 
      elevation={0}
      sx={{
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 1,
        border: 0,
        borderBottom: 0,
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
              <NextLogo />
            </Link>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                sx={{
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Showcase
              </Button>
              <Button
                sx={{
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Docs
              </Button>
              <Button
                sx={{
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Blog
              </Button>
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Templates
              </Button>
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Enterprise
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search documentation..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="outlined"
                sx={{
                  color: 'text.primary',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Deploy
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'background.paper',
                  color: 'text.primary',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'background.paper',
                    opacity: 0.9,
                  },
                }}
              >
                Learn
              </Button>
            </Box>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation; 