import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Timeline from '@mui/material/Timeline';
import TimelineItem from '@mui/material/TimelineItem';
import TimelineSeparator from '@mui/material/TimelineSeparator';
import TimelineConnector from '@mui/material/TimelineConnector';
import TimelineContent from '@mui/material/TimelineContent';
import TimelineDot from '@mui/material/TimelineDot';
import { alpha, useTheme } from '@mui/material/styles';

const history = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Our journey began with a vision to revolutionize the industry through innovative solutions.',
  },
  {
    year: '2018',
    title: 'Global Expansion',
    description: 'We expanded our operations to serve clients worldwide, establishing offices in key markets.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched our flagship digital platform, setting new industry standards for user experience.',
  },
  {
    year: '2022',
    title: 'Sustainability Initiative',
    description: 'Committed to environmental responsibility with our comprehensive sustainability program.',
  },
  {
    year: '2024',
    title: 'Future Forward',
    description: 'Continuing to innovate and grow, we're shaping the future of our industry.',
  },
];

export default function History() {
  const theme = useTheme();

  return (
    <Box
      id="history"
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
          Our History
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/history.svg"
              alt="Company History"
              sx={{
                width: '100%',
                maxWidth: 500,
                height: 'auto',
                display: { xs: 'none', md: 'block' },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Timeline position="right">
              {history.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {index < history.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 'bold',
                        mb: 1,
                      }}
                    >
                      {item.year}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                        mb: 1,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 