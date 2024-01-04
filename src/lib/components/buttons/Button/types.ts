import { ReactChild, ReactElement } from 'react';

export interface ButtonProps {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'submit' | 'button';
  leftIcon?: ReactElement;
  children: ReactChild;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (arg0: any) => void;
  color?: string;
  noPadding?: boolean;
  className?: string;
}

export interface ButtonStyleProps {
  size: 'md' | 'lg';
  fullWidth?: boolean;
  noPadding?: boolean;
  styles: {
    default: {
      color: string;
      backgroundColor: string;
      borderColor: string;
    };
    hover: {
      backgroundColor: string;
      borderColor: string;
    };
  };
}
