import * as React from 'react';
import AppTheme from './shared-theme/AppTheme';
import About from './About';

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppTheme mode={mode}>
      <About mode={mode} onToggleColorMode={toggleColorMode} />
    </AppTheme>
  );
}

export default App; 