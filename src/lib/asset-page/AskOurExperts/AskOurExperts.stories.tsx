import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AskOurExperts } from './AskOurExperts';

export default {
  title: 'Asset Page/AskOurExperts',
  component: AskOurExperts,
} as ComponentMeta<typeof AskOurExperts>;

export const Default: ComponentStory<typeof AskOurExperts> = () => {
  return (
    <AskOurExperts blurb="We curated the Drake x OVO Pack immediately thanks to it's strong cultural heritage and Drake's ongoing success. We're hoping to see a significant return on this show when we sell it, aiming for 2025." />
  );
};
