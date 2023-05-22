import { Button } from '../Button/Button';
import { ButtonProps } from '../Button/types';

export const SubmitButton = (props: ButtonProps) => {
  return <Button {...props} type="submit" />;
};
