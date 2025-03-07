import { Theme } from '@mui/material/styles';

export const chartsCustomizations = (theme: Theme) => ({
  PieChart: {
    margin: { right: 5 },
    width: 400,
    height: 200,
    series: [
      {
        data: [
          { value: 35, label: 'USA' },
          { value: 20, label: 'India' },
          { value: 15, label: 'Brazil' },
          { value: 10, label: 'Spain' },
          { value: 10, label: 'UK' },
          { value: 10, label: 'Germany' },
        ],
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30 },
      },
    ],
  },
});

export const dataGridCustomizations = (theme: Theme) => ({
  root: {
    border: 0,
    color:
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, 0.87)'
        : 'rgb(255, 255, 255, 0.87)',
    fontFamily: theme.typography.fontFamily,
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
      borderRight: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
      borderBottom: `1px solid ${
        theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
      }`,
    },
    '& .MuiDataGrid-cell': {
      color:
        theme.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.87)'
          : 'rgba(255, 255, 255, 0.65)',
    },
    '& .MuiPaginationItem-root': {
      borderRadius: 0,
    },
  },
}); 