import { Button } from '../Button';
import { ButtonProps } from '../Button/types';

export const SubmitButton = (props: ButtonProps) => {
  return <Button {...props} type="submit" />;
};
