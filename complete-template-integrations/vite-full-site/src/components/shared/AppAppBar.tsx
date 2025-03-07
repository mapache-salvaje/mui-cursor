import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import ColorModeIconDropdown from '@/shared-theme/ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex' }}>
              <Sitemark />
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="text" color="info" size="small">
                  Home
                </Button>
              </Link>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Button variant="text" color="info" size="small">
                  Dashboard
                </Button>
              </Link>
              <Link to="/blog" style={{ textDecoration: 'none' }}>
                <Button variant="text" color="info" size="small">
                  Blog
                </Button>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button variant="text" color="info" size="small">
                  About
                </Button>
              </Link>
              <Link to="/pricing" style={{ textDecoration: 'none' }}>
                <Button variant="text" color="info" size="small">
                  Pricing
                </Button>
              </Link>
              <Link to="/checkout" style={{ textDecoration: 'none' }}>
                <Button variant="text" color="info" size="small">
                  Checkout
                </Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
              <Button color="primary" variant="text" size="small">
                Sign in
              </Button>
            </Link>
            <Link to="/sign-up" style={{ textDecoration: 'none' }}>
              <Button color="primary" variant="contained" size="small">
                Sign up
              </Button>
            </Link>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem>Dashboard</MenuItem>
                </Link>
                <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem>Blog</MenuItem>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem>About</MenuItem>
                </Link>
                <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem>Pricing</MenuItem>
                </Link>
                <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem>Checkout</MenuItem>
                </Link>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Link to="/sign-up" style={{ textDecoration: 'none', width: '100%' }}>
                    <Button color="primary" variant="contained" fullWidth>
                      Sign up
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/sign-in" style={{ textDecoration: 'none', width: '100%' }}>
                    <Button color="primary" variant="outlined" fullWidth>
                      Sign in
                    </Button>
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
} 