import React from 'react';
import { Typography } from '../../components/Typography/Typography';

interface InputErrorProps {
  noPadding?: boolean;
  align?: 'left' | 'center' | 'right';
}

const InputError: FCWithChildren<InputErrorProps> = ({
  noPadding,
  align,
  children,
}) => {
  return (
    <Typography
      color="errorPrimary"
      padding={noPadding ? '0' : '10px 20px 0'}
      textAlign={align}>
      {children}
    </Typography>
  );
};

export { InputError };
