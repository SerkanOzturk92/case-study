import { ThemeContext, ThemeType } from './themeContext';
import React, { useMemo, useState } from 'react';

type ThemeProviderType = {};
export const ThemeProvider = ({ children }: React.PropsWithChildren<ThemeProviderType>) => {
  const [theme, setTheme] = useState(ThemeType.DEFAULT);

  const getBGColor = () => {
    const colorMap = {
      [ThemeType.DEFAULT]: 'white',
      [ThemeType.PRIMARY]: 'lightblue',
      [ThemeType.SECONDARY]: 'lightgreen'
    };
    return colorMap[theme] || colorMap[ThemeType.DEFAULT];
  };

  const nextTheme = () => {
    if (theme === ThemeType.DEFAULT) {
      setTheme(ThemeType.PRIMARY);
    }
    if (theme === ThemeType.PRIMARY) {
      setTheme(ThemeType.SECONDARY);
    }

    if (theme === ThemeType.SECONDARY) {
      setTheme(ThemeType.DEFAULT);
    }
  };

  const value = useMemo(() => {
    return {
      theme,
      getBGColor,
      nextTheme
    };
  }, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
