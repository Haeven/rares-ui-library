import { useField } from 'formik';
import { Input } from '../Input/Input';
import InputMask from 'react-input-mask';

export const DateField = (props) => {
  const [field, meta] = useField(props.name);

  return (
    <InputMask
      mask="99/99/9999"
      maskChar={null}
      value={field.value}
      onChange={field.onChange}>
      {(inputProps) => (
        <Input
          placeholder={props.placeholder}
          type="tel"
          error={meta.error}
          invalid={!!meta.error}
          autoComplete="on"
          {...inputProps}
          {...props}
        />
      )}
    </InputMask>
  );
};
