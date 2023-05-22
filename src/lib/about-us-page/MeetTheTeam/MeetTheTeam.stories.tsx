import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MeetTheTeam } from './MeetTheTeam';

export default {
  title: 'About Us/MeetTheTeam',
  component: MeetTheTeam,
} as ComponentMeta<typeof MeetTheTeam>;

export const Default: ComponentStory<typeof MeetTheTeam> = () => {
  return <MeetTheTeam />;
};
