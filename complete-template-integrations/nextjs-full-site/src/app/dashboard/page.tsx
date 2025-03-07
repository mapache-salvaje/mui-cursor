'use client';

import * as React from 'react';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { areaElementClasses } from '@mui/x-charts/LineChart';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import AppAppBar from '../../components/AppAppBar';
import Footer from '../../components/Footer';

type StatCardProps = {
  title: string;
  value: string;
  interval: string;
  trend: 'up' | 'down' | 'neutral';
  data: number[];
};

const data: StatCardProps[] = [
  {
    title: 'Users',
    value: '14k',
    interval: 'Last 30 days',
    trend: 'up',
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
      360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: 'Conversions',
    value: '325',
    interval: 'Last 30 days',
    trend: 'down',
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
      780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
    ],
  },
  {
    title: 'Event count',
    value: '200k',
    interval: 'Last 30 days',
    trend: 'neutral',
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
      520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString('en-US', {
    month: 'short',
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

function StatCard({ title, value, interval, trend, data }: StatCardProps) {
  const theme = useTheme();
  const daysInWeek = getDaysInMonth(4, 2024);

  const trendColors = {
    up:
      theme.palette.mode === 'light'
        ? theme.palette.success.main
        : theme.palette.success.dark,
    down:
      theme.palette.mode === 'light'
        ? theme.palette.error.main
        : theme.palette.error.dark,
    neutral:
      theme.palette.mode === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[700],
  };

  const labelColors = {
    up: 'success' as const,
    down: 'error' as const,
    neutral: 'default' as const,
  };

  const color = labelColors[trend];
  const chartColor = trendColors[trend];
  const trendValues = { up: '+25%', down: '-25%', neutral: '+5%' };

  return (
    <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}
        >
          <Stack sx={{ justifyContent: 'space-between' }}>
            <Stack
              direction="row"
              sx={{ justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Typography variant="h4" component="p">
                {value}
              </Typography>
              <Chip size="small" color={color} label={trendValues[trend]} />
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {interval}
            </Typography>
          </Stack>
          <Box sx={{ width: '100%', height: 50 }}>
            <SparkLineChart
              colors={[chartColor]}
              data={data}
              area
              showHighlight
              showTooltip
              xAxis={{
                scaleType: 'band',
                data: daysInWeek,
              }}
              sx={{
                [`& .${areaElementClasses.root}`]: {
                  fill: `url(#area-gradient-${value})`,
                },
              }}
            >
              <AreaGradient color={chartColor} id={`area-gradient-${value}`} />
            </SparkLineChart>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

function HighlightedCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        flexGrow: 1,
        bgcolor: (theme) =>
          theme.palette.mode === 'light'
            ? alpha(theme.palette.primary.main, 0.1)
            : alpha(theme.palette.primary.main, 0.2),
      }}
    >
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Pro plan
        </Typography>
        <Typography variant="h4" component="p" sx={{ mb: 1 }}>
          $99/mo
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Cancel anytime. Upgrade now and get 50% off!
        </Typography>
      </CardContent>
    </Card>
  );
}

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'event', headerName: 'Event', width: 130 },
  { field: 'status', headerName: 'Status', width: 130 },
  { field: 'timestamp', headerName: 'Timestamp', width: 160 },
];

const rows = [
  { id: 1, event: 'Page View', status: 'Success', timestamp: '2024-03-20 10:30:00' },
  { id: 2, event: 'Purchase', status: 'Success', timestamp: '2024-03-20 10:35:00' },
  { id: 3, event: 'Login', status: 'Failed', timestamp: '2024-03-20 10:40:00' },
];

const NAVIGATION_ITEMS: TreeViewBaseItem[] = [
  {
    id: '1',
    label: 'Dashboard',
    children: [
      { id: '2', label: 'Analytics' },
      { id: '3', label: 'Reports' },
      { id: '4', label: 'Settings' },
    ],
  },
  {
    id: '5',
    label: 'Users',
    children: [
      { id: '6', label: 'Management' },
      { id: '7', label: 'Permissions' },
    ],
  },
];

export default function Dashboard() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <AppAppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 10, sm: 11, md: 12 },
          pb: 4,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            maxWidth: 'lg',
            mx: 'auto',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Overview
          </Typography>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {data.map((card, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <StatCard {...card} />
              </Grid>
            ))}
            <Grid item xs={12} sm={6} lg={3}>
              <HighlightedCard />
            </Grid>
          </Grid>

          <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
            Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={9}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flex: 1, p: 0 }}>
                  <DataGridPro
                    rows={rows}
                    columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{
                      border: 'none',
                      '& .MuiDataGrid-cell': {
                        borderColor: 'divider',
                      },
                      '& .MuiDataGrid-columnHeaders': {
                        borderColor: 'divider',
                        bgcolor: 'background.default',
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    Navigation
                  </Typography>
                  <RichTreeView
                    items={NAVIGATION_ITEMS}
                    aria-label="Navigation tree"
                    defaultExpandedItems={['1']}
                    sx={{
                      flexGrow: 1,
                      overflowY: 'auto',
                      maxHeight: 300,
                      '& .MuiTreeItem-content': {
                        py: 1,
                        borderRadius: 1,
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
