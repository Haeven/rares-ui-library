import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { OrderExpirationTooltip } from './OrderExpirationTooltip';

export default {
  title: 'Tooltips/OrderExpirationTooltip',
  component: OrderExpirationTooltip,
} as ComponentMeta<typeof OrderExpirationTooltip>;

export const Default: ComponentStory<typeof OrderExpirationTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <OrderExpirationTooltip />
    </Flex>
  );
};
