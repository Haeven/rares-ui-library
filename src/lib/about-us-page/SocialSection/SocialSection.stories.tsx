import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SocialSection } from './SocialSection';

export default {
  title: 'About Us/SocialSection',
  component: SocialSection,
} as ComponentMeta<typeof SocialSection>;

export const Default: ComponentStory<typeof SocialSection> = () => {
  return (
    <SocialSection
      linkText="Show me the sneakers"
      linkHref="/invest"
      tagline="Invest in the Culture®"
    />
  );
};
