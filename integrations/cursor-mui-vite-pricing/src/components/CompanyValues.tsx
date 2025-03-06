import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { alpha, useTheme } from '@mui/material/styles';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new possibilities to create cutting-edge solutions.',
    icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do, from code to customer service.',
    icon: <EmojiObjectsIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and working together to achieve great things.',
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and transparency in all our dealings.',
    icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
  },
];

export default function CompanyValues() {
  const theme = useTheme();

  return (
    <Box
      id="values"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #FFFFFF 0%, #F6F9FC 100%)'
            : `linear-gradient(180deg, ${alpha(
                theme.palette.background.paper,
                0.2,
              )} 0%, ${alpha(theme.palette.background.paper, 0.8)} 100%)`,
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
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {values.map((value) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? alpha(theme.palette.primary.main, 0.04)
                        : alpha(theme.palette.primary.main, 0.1),
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: (theme) =>
                        `linear-gradient(45deg, ${alpha(
                          theme.palette.primary.main,
                          0.1,
                        )}, ${alpha(theme.palette.primary.main, 0)})`,
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) =>
                        `0 12px 24px ${alpha(theme.palette.primary.main, 0.1)}`,
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
} 