import * as React from 'react';
import About from './components/About';

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return <About mode={mode} onToggleColorMode={toggleColorMode} />;
}

export default App; 