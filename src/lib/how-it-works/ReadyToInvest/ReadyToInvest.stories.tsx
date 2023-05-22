import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReadyToInvest } from './ReadyToInvest';

export default {
  title: 'How It Works/ReadyToInvest',
  component: ReadyToInvest,
} as ComponentMeta<typeof ReadyToInvest>;

export const Default: ComponentStory<typeof ReadyToInvest> = () => {
  return (
    <ReadyToInvest
      image={{
        src: 'https://amazon-cloudfront-secure-static-site-s3bucketroot-1m4j3j43rbytl.s3.amazonaws.com/production/assets/photos/how-it-works/austin_air_jordan_8_and_3.jpeg',
        alt: 'Austin with Air Jordan 8s and 3s from the $KOBEAJPACK',
        caption: 'Austin with Air Jordan 8s and 3s from the $KOBEAJPACK',
      }}
      heading="Ready to Invest in the Culture?"
      text="Now that you know our process, see what opportunities there are"
    />
  );
};
