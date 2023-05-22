import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

export default {
  title: 'Loading Spinner',
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

export const Default: ComponentStory<typeof LoadingSpinner> = () => (
  <LoadingSpinner />
);

export const Big: ComponentStory<typeof LoadingSpinner> = () => {
  return <LoadingSpinner size="250px" circleWidth="50px" color="blue" />;
};
