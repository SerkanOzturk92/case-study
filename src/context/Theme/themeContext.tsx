import { createContext } from 'react';

export enum ThemeType {
  DEFAULT = 0,
  PRIMARY = 1,
  SECONDARY = 2
}

export type ThemePropsType = {
  theme: ThemeType;
  getBGColor: () => string;
  nextTheme: () => void;
};

export const ThemeContext = createContext<ThemePropsType>({
  theme: ThemeType.DEFAULT,
  getBGColor: () => '',
  nextTheme: () => {}
});
