import * as React from 'react';
import AppTheme from './shared-theme/AppTheme';
import Pricing from './Pricing';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <AppTheme mode={mode}>
      <CssBaseline enableColorScheme />
      <Pricing onToggleColorMode={toggleColorMode} />
    </AppTheme>
  );
}

export default App; 