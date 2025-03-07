'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

export default function MissionStatement() {
  const theme = useTheme();

  return (
    <Box
      id="mission"
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(2.5rem, 8vw, 3rem)',
            }}
          >
            Our Mission
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ maxWidth: 800, fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          >
            To empower businesses and individuals through innovative technology solutions
            that drive growth, efficiency, and sustainability. We believe in creating
            a better future by combining cutting-edge technology with human-centered design.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
} 