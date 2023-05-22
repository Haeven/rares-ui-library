import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ResponsiveImage } from './ResponsiveImage';

export default {
  title: 'Responsive Image',
  component: ResponsiveImage,
} as ComponentMeta<typeof ResponsiveImage>;

const Template: ComponentStory<typeof ResponsiveImage> = (args) => (
  <ResponsiveImage {...args} />
);

export const AutoSized = Template.bind({});
AutoSized.args = {
  src: 'https://rares.io/content/img/aj1-metallic-blue.jpg',
  alt: 'AJ1 Metallic Blue',
};

export const CustomSizes = Template.bind({});
CustomSizes.args = {
  ...AutoSized.args,
  sizes: '(max-width: 600px) 100vw, (min-width: 600) 50vw',
};

export const NoResizing = Template.bind({});
NoResizing.args = {
  ...AutoSized.args,
  sizes: '100vw',
};
