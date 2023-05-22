import { useField } from 'formik';
import { InputError } from '../InputError/InputError';
import { TextArea } from '../TextArea/TextArea';

interface InputFieldProps {
  placeholder: string;
  name: string;
}

export const TextAreaField: React.FC<InputFieldProps> = (props) => {
  const [field, meta] = useField(props.name);
  const invalid = !!meta.error;

  return (
    <div>
      <TextArea invalid={invalid} {...field} {...props} />
      {invalid ? <InputError>{meta.error}</InputError> : null}
    </div>
  );
};
