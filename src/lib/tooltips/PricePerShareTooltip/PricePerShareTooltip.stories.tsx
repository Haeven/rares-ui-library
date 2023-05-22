import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { PricePerShareTooltip } from './PricePerShareTooltip';

export default {
  title: 'Tooltips/PricePerShareTooltip',
  component: PricePerShareTooltip,
} as ComponentMeta<typeof PricePerShareTooltip>;

export const Default: ComponentStory<typeof PricePerShareTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <PricePerShareTooltip />
    </Flex>
  );
};
