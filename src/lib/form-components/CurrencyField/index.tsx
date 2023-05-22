import { useField } from 'formik';
import { Input } from '../Input/Input';

interface CurrencyFieldProps {
  name: string;
  placeholder: string;
  invalid?: boolean;
}

export const CurrencyField = ({
  name,
  placeholder,
  invalid,
}: CurrencyFieldProps) => {
  const [field, meta, helpers] = useField(name);

  const format = (value: string) => {
    const numbersOnly = value.replace(/[^\d]/g, '');
    if (!numbersOnly) return '';
    return `$${numbersOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <Input
      type="tel"
      error={meta.error}
      invalid={invalid || !!meta.error}
      value={field.value}
      onChange={(e) => helpers.setValue(format(e.target.value))}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};
