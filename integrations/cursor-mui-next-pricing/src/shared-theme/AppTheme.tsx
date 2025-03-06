import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { inputsCustomizations } from './customizations/inputs';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { feedbackCustomizations } from './customizations/feedback';
import { navigationCustomizations } from './customizations/navigation';
import { surfacesCustomizations } from './customizations/surfaces';
import { getDesignTokens } from './themePrimitives';

interface AppThemeProps {
  children: React.ReactNode;
  mode: 'light' | 'dark';
  disableCustomTheme?: boolean;
  themeComponents?: Record<string, any>;
}

function AppTheme({ children, mode, disableCustomTheme, themeComponents }: AppThemeProps) {
  const theme = React.useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          ...getDesignTokens(mode),
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents, mode]);

  if (disableCustomTheme) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppTheme;
