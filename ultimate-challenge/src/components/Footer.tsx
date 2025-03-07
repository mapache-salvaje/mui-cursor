import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

const links = [
  {
    title: 'Product',
    items: [
      { title: 'Home', href: '/' },
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Blog', href: '/blog' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'Checkout', href: '/checkout' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About us', href: '/about' },
      { title: 'Careers', href: '/careers' },
      { title: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { title: 'Terms', href: '/terms' },
      { title: 'Privacy', href: '/privacy' },
      { title: 'Contact', href: '/contact' },
    ],
  },
];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link href="/">Ultimate Challenge</Link> {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
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
        {links.map(({ title, items }) => (
          <Box
            key={title}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              minWidth: { xs: '100%', sm: '160px' },
              mb: { xs: 3, sm: 0 },
            }}
          >
            <Typography component="h2" variant="body2" fontWeight="bold">
              {title}
            </Typography>
            <Stack spacing={1}>
              {items.map(({ title: itemTitle, href }) => (
                <NextLink key={itemTitle} href={href} passHref style={{ textDecoration: 'none' }}>
                  <Button
                    component="a"
                    variant="text"
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      justifyContent: { sm: 'center', md: 'flex-start' },
                      minWidth: 'unset',
                      p: 0,
                    }}
                  >
                    {itemTitle}
                  </Button>
                </NextLink>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Copyright />
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            href="https://github.com"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="primary"
            href="https://twitter.com"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="primary"
            href="https://linkedin.com"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
