import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

export default function About() {
  return (
    <Container
      id="about"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h1" variant="h2" sx={{ mb: 4 }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
          We're a passionate team dedicated to creating beautiful, functional, and accessible web applications. Our mission is to make the web a better place through thoughtful design and powerful technology.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', height: '100%' }}>
            <Box
              sx={{
                p: 3,
                mb: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === 'light'
                    ? alpha(theme.palette.primary.main, 0.1)
                    : alpha(theme.palette.primary.main, 0.2),
                borderRadius: 2,
              }}
            >
              <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                2015
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Founded
              </Typography>
            </Box>
            <Typography variant="body1">
              Started with a vision to revolutionize web development through modern design principles and cutting-edge technology.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', height: '100%' }}>
            <Box
              sx={{
                p: 3,
                mb: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === 'light'
                    ? alpha(theme.palette.primary.main, 0.1)
                    : alpha(theme.palette.primary.main, 0.2),
                borderRadius: 2,
              }}
            >
              <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                50+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Team Members
              </Typography>
            </Box>
            <Typography variant="body1">
              A diverse team of designers, developers, and innovators working together to create exceptional digital experiences.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center', height: '100%' }}>
            <Box
              sx={{
                p: 3,
                mb: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === 'light'
                    ? alpha(theme.palette.primary.main, 0.1)
                    : alpha(theme.palette.primary.main, 0.2),
                borderRadius: 2,
              }}
            >
              <Typography variant="h3" component="div" sx={{ mb: 1 }}>
                1M+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Users
              </Typography>
            </Box>
            <Typography variant="body1">
              Trusted by over a million users worldwide, from startups to enterprise companies building the future of the web.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
} 