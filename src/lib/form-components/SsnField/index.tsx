import { useField } from 'formik';
import { Input } from '../Input/Input';
import InputMask from 'react-input-mask';

interface SsnFieldProps {
  name: string;
}

interface InputProps {
  mask: string;
  maskChar: null;
  value: string;
  onChange: () => void;
}

export const SsnField = ({ name }: SsnFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <InputMask
      mask="999 - 99 - 9999"
      maskChar={null}
      value={field.value}
      onChange={field.onChange}>
      {
        ((inputProps: InputProps) => (
          <Input
            placeholder="Social security number"
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
