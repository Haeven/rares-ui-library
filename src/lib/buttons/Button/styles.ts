import styled from 'styled-components';
import {
  bodyStyles,
  headingStyles,
} from '../../components/Typography/Typography';
import { ButtonStyleProps } from './types';

export const variantStyles = {
  primary: {
    default: {
      color: 'white',
      backgroundColor: 'raresPurple',
      borderColor: 'raresPurple',
    },
    hover: {
      backgroundColor: 'lightRaresPurple',
      borderColor: 'lightRaresPurple',
    },
  },
  secondary: {
    default: {
      color: 'raresPurple',
      backgroundColor: 'white',
      borderColor: 'grey',
    },
    hover: {
      backgroundColor: 'lightGrey',
      borderColor: 'lightGrey',
    },
  },
  text: {
    default: {
      color: 'raresPurple',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    hover: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
  },
};

interface SizeStyleProps {
  padding: string;
  borderRadius: string;
  fontStyle: keyof typeof headingStyles | keyof typeof bodyStyles;
}

interface SizeStylesProps {
  md: SizeStyleProps;
  lg: SizeStyleProps;
}

export const sizeStyles: SizeStylesProps = {
  md: {
    padding: '8px 15px',
    borderRadius: '5px',
    fontStyle: 'H6',
  },
  lg: {
    padding: '12px 23px',
    borderRadius: '10px',
    fontStyle: 'H5',
  },
};

export const StyledButton = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  color: ${({ styles, theme }) => theme.colors[styles.default.color]};
  background-color: ${({ styles, theme }) =>
    theme.colors[styles.default.backgroundColor]};
  border-radius: ${({ size }) => sizeStyles[size].borderRadius};
  padding: ${({ noPadding, size }) =>
    noPadding ? 0 : sizeStyles[size].padding};
  cursor: pointer;
  text-align: center;
  border: 2px solid
    ${({ styles, theme }) => theme.colors[styles.default.borderColor]};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    background-color: ${({ styles, theme }) =>
      theme.colors[styles.hover.backgroundColor]};
    border-color: ${({ styles, theme }) =>
      theme.colors[styles.hover.borderColor]};
  }

  &:disabled {
    cursor: default;
    opacity: 20%;
    background-color: ${({ styles, theme }) =>
      theme.colors[styles.default.backgroundColor]};
    border-color: ${({ styles, theme }) =>
      theme.colors[styles.default.borderColor]};
  }
`;

export const ButtonContents = styled.div`
  position: relative;
`;

export const LoadingSpinnerWrapper = styled.div<{ backgroundColor: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const Label = styled.div<{ loading?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${({ loading }) => (loading ? 0 : 1)};
`;
