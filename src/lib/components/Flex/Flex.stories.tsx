import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

export const Default: ComponentStory<typeof Flex> = () => {
  return (
    <Flex>
      <p>Default Flex Container</p>
    </Flex>
  );
};

export const Flex_Direction_Column: ComponentStory<typeof Flex> = () => {
  return (
    <Flex flexDirection="column">
      <h1>Heading 1</h1>
      <h1>Heading 2</h1>
    </Flex>
  );
};

export const Align_Items_Center: ComponentStory<typeof Flex> = () => {
  return (
    <Flex alignItems="center">
      <h1>Center Aligned</h1>
    </Flex>
  );
};

export const Aligned_Both_Center: ComponentStory<typeof Flex> = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <h1>Vertically and Horizontally aligned</h1>
    </Flex>
  );
};

export const Gap: ComponentStory<typeof Flex> = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap="20px"
      flexDirection="column">
      <h1>Heading 1</h1>
      <h1>Heading 2</h1>
      <h1>Heading 3</h1>
    </Flex>
  );
};
