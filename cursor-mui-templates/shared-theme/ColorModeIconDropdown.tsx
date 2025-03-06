import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

interface ColorModeIconDropdownProps {
  onToggleColorMode: () => void;
}

export default function ColorModeIconDropdown({ onToggleColorMode }: ColorModeIconDropdownProps) {
  const theme = useTheme();

  return (
    <Box>
      <IconButton
        sx={{ ml: 1 }}
        onClick={onToggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}
