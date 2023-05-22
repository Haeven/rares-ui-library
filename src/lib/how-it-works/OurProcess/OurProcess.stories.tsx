import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OurProcess } from './OurProcess';

export default {
  title: 'How It Works/OurProcess',
  component: OurProcess,
} as ComponentMeta<typeof OurProcess>;

export const Default: ComponentStory<typeof OurProcess> = () => {
  return <OurProcess />;
};
