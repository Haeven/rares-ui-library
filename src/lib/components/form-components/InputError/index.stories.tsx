import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputError } from '.';

export default {
  title: 'Forms/Form Components/InputError',
  component: InputError,
} as ComponentMeta<typeof InputError>;

export const Default: ComponentStory<typeof InputError> = () => {
  return <InputError>Required</InputError>;
};
