import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { AskPriceTooltip } from './AskPriceTooltip';

export default {
  title: 'Tooltips/AskPriceTooltip',
  component: AskPriceTooltip,
} as ComponentMeta<typeof AskPriceTooltip>;

export const Default: ComponentStory<typeof AskPriceTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <AskPriceTooltip />
    </Flex>
  );
};
