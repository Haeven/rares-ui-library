import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormExample } from './FormExample';

export default {
  title: 'Forms/Form Example',
  component: FormExample,
} as ComponentMeta<typeof FormExample>;

export interface FormProps {
  email: string;
  password: string;
  hasAcceptedTerms: boolean;
}

export const Default: ComponentStory<typeof FormExample> = () => {
  return <FormExample />;
};
