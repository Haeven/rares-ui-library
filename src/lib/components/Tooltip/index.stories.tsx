import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../Flex';
import { Typography } from '../Typography';
import { Tooltip } from '.';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%">
      <Tooltip title="Price per Share">
        <Typography>
          The price per share for an IPO is calculated by dividing the valuation
          by the number of shares available in the IPO
        </Typography>
      </Tooltip>
    </Flex>
  );
};

export const Left_Aligned: ComponentStory<typeof Tooltip> = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%">
      <Tooltip title="Price per Share" align="left">
        <Typography>
          The price per share for an IPO is calculated by dividing the valuation
          by the number of shares available in the IPO
        </Typography>
      </Tooltip>
    </Flex>
  );
};

export const Right_Aligned: ComponentStory<typeof Tooltip> = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100%">
      <Tooltip title="Price per Share" align="right">
        <Typography>
          The price per share for an IPO is calculated by dividing the valuation
          by the number of shares available in the IPO
        </Typography>
      </Tooltip>
    </Flex>
  );
};
