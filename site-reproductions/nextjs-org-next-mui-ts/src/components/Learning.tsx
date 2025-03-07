'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  alpha,
  Stack,
  Button,
} from '@mui/material';
import Link from 'next/link';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const courses = [
  {
    title: 'Foundations',
    description: 'A comprehensive introduction to Next.js and React, perfect for beginners.',
    icon: <SchoolIcon sx={{ fontSize: 32 }} />,
    chapters: 16,
    hours: 4,
  },
  {
    title: 'Create Your First App',
    description: 'Learn by building a full-stack application with Next.js features.',
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
    chapters: 12,
    hours: 3,
  },
  {
    title: 'Advanced Features',
    description: 'Deep dive into advanced patterns and features for production apps.',
    icon: <RocketLaunchIcon sx={{ fontSize: 32 }} />,
    chapters: 14,
    hours: 5,
  },
];

const Learning = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) => theme.palette.mode === 'light'
            ? `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.12)} 0%, transparent 50%)`
            : `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.24)} 0%, transparent 50%)`,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center" position="relative" zIndex={1}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textAlign: 'center',
              background: (theme) => theme.palette.mode === 'light'
                ? `linear-gradient(to bottom right, ${theme.palette.text.primary} 30%, ${alpha(theme.palette.text.primary, 0.8)})`
                : `linear-gradient(to bottom right, ${theme.palette.common.white}, ${alpha(theme.palette.common.white, 0.8)})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Learn Next.js
          </Typography>

          <Grid container spacing={3}>
            {courses.map((course, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: (theme) => alpha(theme.palette.background.paper, 0.6),
                    backdropFilter: 'blur(8px)',
                    borderRadius: '0.75rem',
                    border: '1px solid',
                    borderColor: (theme) => alpha(theme.palette.divider, 0.1),
                    transition: 'all 0.15s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => `0 12px 24px ${alpha(theme.palette.common.black, 0.08)}`,
                      borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: (theme) => `radial-gradient(circle at 50% 50%, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 50%)`,
                      borderRadius: 'inherit',
                      zIndex: -1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                    }}
                  >
                    {course.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 1,
                      background: (theme) => theme.palette.mode === 'light'
                        ? `linear-gradient(to bottom right, ${theme.palette.text.primary} 30%, ${alpha(theme.palette.text.primary, 0.8)})`
                        : `linear-gradient(to bottom right, ${theme.palette.common.white}, ${alpha(theme.palette.common.white, 0.8)})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: (theme) => alpha(theme.palette.text.primary, 0.7),
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {course.description}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      pt: 2,
                      borderTop: '1px solid',
                      borderColor: (theme) => alpha(theme.palette.divider, 0.1),
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.75rem',
                        color: (theme) => alpha(theme.palette.text.primary, 0.6),
                      }}
                    >
                      {course.chapters} Chapters
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.75rem',
                        color: (theme) => alpha(theme.palette.text.primary, 0.6),
                      }}
                    >
                      {course.hours} Hours
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Link href="/learn" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                px: 3,
                fontSize: '0.875rem',
                fontWeight: 500,
                bgcolor: 'text.primary',
                color: 'background.paper',
                borderRadius: '0.75rem',
                textTransform: 'none',
                transition: 'all 0.15s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-1px)',
                  bgcolor: 'text.primary',
                  boxShadow: (theme) => `0 4px 8px ${alpha(theme.palette.text.primary, 0.25)}`,
                },
              }}
            >
              Start Learning
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Learning; 