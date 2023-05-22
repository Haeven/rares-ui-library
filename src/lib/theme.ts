import { Theme } from 'styled-system';

export interface Breakpoints {
  phone: string;
  tabletSm: string;
  tablet: string;
  desktop: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const breakpoints: any = ['576px', '768px', '868px', '992px'];

// aliases
breakpoints.phone = breakpoints[0];
breakpoints.tabletSm = breakpoints[1];
breakpoints.tablet = breakpoints[2];
breakpoints.desktop = breakpoints[3];

const colors = {
  black: 'var(--main-color1)',
  white: 'var(--main-color2)',
  grey: 'var(--main-color3)',
  lightGrey: 'var(--main-color13)',
  darkGrey: 'var(--main-color11)',
  backgroundGrey: 'var(--main-color14)',
  lightRaresPurple: 'var(--rares-purple-light)',
  raresPurple: 'var(--main-color5)',
  ipoGreen: 'var(--ipo-green)',
  tradeGreen: 'var(--trade-green)',
  tradeGreen2: 'var(--green-text)',
  errorPrimary: 'var(--error-primary)',
  successPrimary: 'var(--success-primary)',
  transparent: 'transparent',
};

export const theme: Theme = { colors, breakpoints };
