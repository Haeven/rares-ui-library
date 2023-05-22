import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RaresStory } from './RaresStory';

export default {
  title: 'About Us/RaresStory',
  component: RaresStory,
} as ComponentMeta<typeof RaresStory>;

export const Default: ComponentStory<typeof RaresStory> = () => {
  return (
    <RaresStory
      imageCaption="CEO Gerome Sapp"
      imageUrl={
        'https://cdn.rares.io/production/assets/photos/about-us/rares_story_img.jpg'
      }
      title="The Rares Story"
      textBlocks={[
        'Rares is an alternative asset investment platform that allows you to invest in fractional shares of ultra rare, vintage, and collectible assets where you can buy, sell, and trade.',
        'It was founded by former Notre Dame football standout and retired NFL athlete Gerome Sapp and close friend Hector Tantoh, who sought to increase access and empower you to benefit economically based on cultures you know and create–embodying the desire for culture, work ethic, and providing exceptional products and services.',
      ]}
    />
  );
};
