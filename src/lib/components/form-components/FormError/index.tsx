import { Typography } from '../../components/Typography';

interface FormErrorProps {
  align?: 'left' | 'center' | 'right';
}

const FormError: FCWithChildren<FormErrorProps> = ({ align, children }) => {
  return (
    <Typography textAlign={align || 'center'} color="errorPrimary">
      {children}
    </Typography>
  );
};

export { FormError };
