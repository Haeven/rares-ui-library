import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Line } from '.';

export default {
  title: 'Line',
  component: Line,
} as ComponentMeta<typeof Line>;

export const Default: ComponentStory<typeof Line> = () => <Line />;
