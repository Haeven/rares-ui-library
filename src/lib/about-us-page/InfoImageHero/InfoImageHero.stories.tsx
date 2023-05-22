import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { ResponsiveImage } from '../../components/ResponsiveImage/ResponsiveImage';
import { Typography } from '../../components/Typography/Typography';
import { InfoImageHero } from './InfoImageHero';

export default {
  title: 'About Us/InfoImageHero',
  component: InfoImageHero,
} as ComponentMeta<typeof InfoImageHero>;

export const Default: ComponentStory<typeof InfoImageHero> = () => {
  return (
    <InfoImageHero
      title={'Our goal is to help you diversify your investment portfolio'}
      textBlock={
        'Rares lets you invest in the collectible sneaker industry that has historically outperformed gold and S&P500'
      }
      rightSide={
        <Flex flexDirection="column" flex="1.5" gap="10px">
          <Flex aspectRatio={1.5}>
            <ResponsiveImage
              width="100%"
              height="100%"
              aspectRatio={1.5}
              src={
                'https://s3.us-west-1.amazonaws.com/io.gentrify.images.staging/media/about+rares-desktop.png'
              }
            />
          </Flex>
          <Typography fontStyle="BodyS">Rares at ComplexCon 2021</Typography>
        </Flex>
      }
    />
  );
};
