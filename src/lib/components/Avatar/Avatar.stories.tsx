import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../Flex/Flex';
import { Avatar } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = () => {
  return (
    <Flex gap="50px">
      <Avatar
        src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
        alt=""
        size={200}
      />
      <Avatar
        src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
        alt=""
        size={150}
      />
      <Avatar
        src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
        alt=""
        size={100}
      />
      <Avatar
        src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
        alt=""
        size={50}
      />
    </Flex>
  );
};
