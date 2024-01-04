import { useField } from 'formik';
import { Input } from '../Input';
import InputMask from 'react-input-mask';

interface PhoneNumberFieldProps {
  name: string;
}

interface InputProps {
  mask: string;
  maskChar: null;
  value: string;
  onChange: () => void;
}

export const PhoneNumberField = ({ name }: PhoneNumberFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <InputMask
      mask="(999) 999 - 9999"
      maskChar={null}
      value={field.value}
      onChange={field.onChange}>
      {
        ((inputProps: InputProps) => (
          <Input
            placeholder="Phone number"
            type="tel"
            error={meta.error}
            invalid={!!meta.error}
            name={name}
            {...inputProps}
          />
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        )) as any
      }
    </InputMask>
  );
};
