import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', lg: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minWidth: { xs: '100%', sm: '240px' },
            }}
          >
            <Box sx={{ ml: '-15px' }}>
              <SitemarkIcon />
            </Box>
            <Typography variant="body2" fontWeight={600}>
              © 2024 Your Company. All rights reserved
            </Typography>
            <Stack direction="row" spacing={1} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Product
            </Typography>
            <Link color="inherit" href="#">
              Features
            </Link>
            <Link color="inherit" href="#">
              Testimonials
            </Link>
            <Link color="inherit" href="#">
              Highlights
            </Link>
            <Link color="inherit" href="#">
              Pricing
            </Link>
            <Link color="inherit" href="#">
              FAQ
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Company
            </Typography>
            <Link color="inherit" href="#">
              About us
            </Link>
            <Link color="inherit" href="#">
              Careers
            </Link>
            <Link color="inherit" href="#">
              Press
            </Link>
            <Link color="inherit" href="#">
              Blog
            </Link>
            <Link color="inherit" href="#">
              Contact
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Legal
            </Typography>
            <Link color="inherit" href="#">
              Terms
            </Link>
            <Link color="inherit" href="#">
              Privacy
            </Link>
            <Link color="inherit" href="#">
              Contact
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <Copyright />
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
} 