import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { BidPriceTooltip } from './BidPriceTooltip';

export default {
  title: 'Tooltips/BidPriceTooltip',
  component: BidPriceTooltip,
} as ComponentMeta<typeof BidPriceTooltip>;

export const Default: ComponentStory<typeof BidPriceTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <BidPriceTooltip />
    </Flex>
  );
};
