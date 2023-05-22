import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopLevelDetails } from './TopLevelDetails';

export default {
  title: 'Asset Page/TopLevelDetails',
  component: TopLevelDetails,
} as ComponentMeta<typeof TopLevelDetails>;

export const Default: ComponentStory<typeof TopLevelDetails> = () => {
  return (
    <TopLevelDetails
      avatar={{
        src: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Faf287b3c-d436-48c6-ac13-8b73a9cd28fe.jpg?fit=scale-down&source=next&width=700',
        alt: 'Drake x OVO Pack',
      }}
      symbolId="$OVO"
      assetType="ipo"
      title="Drake x OVO Pack"
    />
  );
};
