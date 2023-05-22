import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert } from '.';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  bsStyle: 'success',
  children: 'This is a success alert',
};

export const Info = Template.bind({});
Info.args = {
  bsStyle: 'info',
  children: 'This is an info alert',
};

export const Warning = Template.bind({});
Warning.args = {
  bsStyle: 'warning',
  children: 'This is a warning alert',
};

export const Error = Template.bind({});
Error.args = {
  bsStyle: 'error',
  children: 'This is a error alert',
};
