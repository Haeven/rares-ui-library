import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from '.';

export default {
  title: 'Forms/Form Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = () => {
  return <Title>Reset your password</Title>;
};
