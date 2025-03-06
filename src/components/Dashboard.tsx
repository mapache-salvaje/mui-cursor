import { Grid, Paper, Typography } from '@mui/material';

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard Overview
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, height: '400px' }}>
          <Typography variant="h6" gutterBottom>
            Statistics
          </Typography>
          <Typography>
            Placeholder for statistics content
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, height: '400px' }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography>
            Placeholder for summary content
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 2, height: '400px' }}>
          <Typography variant="h6" gutterBottom>
            Details
          </Typography>
          <Typography>
            Placeholder for detailed information
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
} 