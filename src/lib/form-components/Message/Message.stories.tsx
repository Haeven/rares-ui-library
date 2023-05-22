import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Message } from './Message';

export default {
  title: 'Forms/Form Components/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

export const Default: ComponentStory<typeof Message> = () => {
  return (
    <Message>
      You will receive an email shortly with a link to reset your password.
    </Message>
  );
};
