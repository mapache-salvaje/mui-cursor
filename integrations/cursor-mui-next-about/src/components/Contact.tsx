'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  const theme = useTheme();

  return (
    <Box
      id="contact"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #F6F9FC 0%, #FFFFFF 100%)'
            : `linear-gradient(180deg, ${alpha(
                theme.palette.background.paper,
                0.8,
              )} 0%, ${alpha(theme.palette.background.paper, 0.2)} 100%)`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.mode === 'light'
            ? 'white'
            : theme.palette.background.paper,
        py: { xs: 8, sm: 10 },
        px: { xs: 2, sm: 0 },
      })}
    >
      <Container>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '2.5rem' },
          }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                p: 4,
                borderRadius: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? alpha(theme.palette.primary.main, 0.04)
                    : alpha(theme.palette.primary.main, 0.1),
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) =>
                    `0 12px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateX(8px)',
                  },
                }}
              >
                <LocationOnIcon
                  color="primary"
                  sx={{
                    fontSize: 32,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <Typography variant="body1">
                  123 Business Street, Suite 100
                  <br />
                  San Francisco, CA 94107
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateX(8px)',
                  },
                }}
              >
                <PhoneIcon
                  color="primary"
                  sx={{
                    fontSize: 32,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <Typography variant="body1">+1 (555) 123-4567</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateX(8px)',
                  },
                }}
              >
                <EmailIcon
                  color="primary"
                  sx={{
                    fontSize: 32,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
                <Typography variant="body1">contact@company.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 4,
                borderRadius: 2,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? alpha(theme.palette.primary.main, 0.04)
                    : alpha(theme.palette.primary.main, 0.1),
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) =>
                    `0 12px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                },
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  },
                }}
              />
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  alignSelf: 'flex-start',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: (theme) =>
                      `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 