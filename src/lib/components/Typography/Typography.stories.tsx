import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../Flex/Flex';
import { Typography, bodyStyles, headingStyles, Heading } from './Typography';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Default: ComponentStory<typeof Typography> = () => {
  return (
    <Flex flexDirection="column" gap={'20px'}>
      {Object.keys(bodyStyles).map((style) => (
        <Typography key={style} fontStyle={style as keyof typeof bodyStyles}>
          Body Style {style}
        </Typography>
      ))}
    </Flex>
  );
};

export const Headings: ComponentStory<typeof Typography> = () => {
  return (
    <Flex flexDirection="column" gap={'20px'}>
      {Object.keys(headingStyles).map((style) => (
        <Heading key={style} fontStyle={style as keyof typeof headingStyles}>
          Heading {style}
        </Heading>
      ))}
    </Flex>
  );
};
