import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { MarketCapTooltip } from './MarketCapTooltip';

export default {
  title: 'Tooltips/MarketCapTooltip',
  component: MarketCapTooltip,
} as ComponentMeta<typeof MarketCapTooltip>;

export const Default: ComponentStory<typeof MarketCapTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <MarketCapTooltip />
    </Flex>
  );
};
