import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PartnersAndInvestors } from './PartnersAndInvestors';

export default {
  title: 'About Us/PartnersAndInvestors',
  component: PartnersAndInvestors,
} as ComponentMeta<typeof PartnersAndInvestors>;

export const Default: ComponentStory<typeof PartnersAndInvestors> = () => {
  return <PartnersAndInvestors />;
};
