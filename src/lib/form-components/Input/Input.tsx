import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../components/Flex/Flex';
import { Typography } from '../../components/Typography/Typography';
import { InputError } from '../InputError/InputError';

const Exclamation = styled.div`
  position: absolute;
  right: 20px;
  height: 100%;
  display: flex;
  align-items: center;
`;

interface StyledInputProps {
  invalid: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 20px;
  background: var(--main-color3);
  border: solid 2px transparent;
  border-radius: 10px !important;
  font-size: 14px;
  line-height: 18px;
  &:focus {
    border: solid 2px var(--main-color5);
    outline: none;
    background: white;
  }
  ${(props: StyledInputProps) =>
    props.invalid &&
    `
    border: solid 2px var(--error-primary);
    background: white;
    `}
`;

interface InputProps {
  type?: string;
  error?: string;
  invalid: boolean;
  value?: string | number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  name?: string;
  hideError?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    type = 'text',
    error,
    invalid,
    value,
    placeholder,
    autoComplete,
    name,
    hideError,
  } = props;

  return (
    <div>
      <Flex justifyContent="flex-end" position="relative">
        {invalid && (
          <Exclamation>
            <Typography color="errorPrimary">!</Typography>
          </Exclamation>
        )}
        <StyledInput
          placeholder={placeholder}
          type={type}
          value={value}
          autoComplete={autoComplete}
          name={name}
          {...props}
        />
      </Flex>
      {invalid && !hideError && <InputError>{error}</InputError>}
    </div>
  );
};

export { Input };
