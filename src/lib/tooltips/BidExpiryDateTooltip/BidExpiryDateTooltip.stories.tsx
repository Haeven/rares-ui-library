import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { BidExpiryDateTooltip } from './BidExpiryDateTooltip';

export default {
  title: 'Tooltips/BidExpiryDateTooltip',
  component: BidExpiryDateTooltip,
} as ComponentMeta<typeof BidExpiryDateTooltip>;

export const Default: ComponentStory<typeof BidExpiryDateTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <BidExpiryDateTooltip />
    </Flex>
  );
};
