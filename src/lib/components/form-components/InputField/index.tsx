import React from 'react';
import { useField } from 'formik';
import { Input } from '../Input';

interface InputFieldProps {
  placeholder: string;
  type?: string;
  name: string;
  hideError?: boolean;
  invalid?: boolean;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, meta] = useField(props.name);
  const invalid = props.invalid !== undefined ? props.invalid : !!meta.error;

  return (
    <Input
      invalid={invalid}
      error={props.hideError ? '' : meta.error}
      {...field}
      {...props}
    />
  );
};

export { InputField };
