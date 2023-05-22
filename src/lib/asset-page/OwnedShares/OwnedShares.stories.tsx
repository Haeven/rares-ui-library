import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OwnedShares } from './OwnedShares';

export default {
  title: 'Asset Page/OwnedShares',
  component: OwnedShares,
} as ComponentMeta<typeof OwnedShares>;

export const Default: ComponentStory<typeof OwnedShares> = () => {
  return <OwnedShares numShares={1} value={25} />;
};
