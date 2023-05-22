import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormError } from './FormError';

export default {
  title: 'Forms/Form Components/FormError',
  component: FormError,
} as ComponentMeta<typeof FormError>;

export const Default: ComponentStory<typeof FormError> = () => {
  return <FormError>Required</FormError>;
};
