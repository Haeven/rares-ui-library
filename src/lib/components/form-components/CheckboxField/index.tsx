import { useField } from 'formik';
import {
  CheckboxInput,
  CheckboxLabel,
  IconWrapper,
} from '../Checkbox';
import { InputError } from '../InputError';

interface CheckboxFieldProps {
  name: string;
}

const CheckboxField: FCWithChildren<CheckboxFieldProps> = ({
  name,
  children,
}) => {
  const [field, meta] = useField(name);
  const isInvalid = !!meta.error;

  return (
    <div>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" {...field} />
        <IconWrapper color="var(--rares-purple)" isChecked={field.value} />
        <div>{children}</div>
      </CheckboxLabel>
      {isInvalid && <InputError>{meta.error}</InputError>}
    </div>
  );
};

export { CheckboxField };
