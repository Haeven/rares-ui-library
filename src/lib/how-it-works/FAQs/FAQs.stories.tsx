import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FAQs } from './FAQs';

export default {
  title: 'How It Works/FAQs',
  component: FAQs,
} as ComponentMeta<typeof FAQs>;

export const Default: ComponentStory<typeof FAQs> = () => {
  return <FAQs />;
};
