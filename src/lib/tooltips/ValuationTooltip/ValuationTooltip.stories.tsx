import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { ValuationTooltip } from './ValuationTooltip';

export default {
  title: 'Tooltips/ValuationTooltip',
  component: ValuationTooltip,
} as ComponentMeta<typeof ValuationTooltip>;

export const Default: ComponentStory<typeof ValuationTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <ValuationTooltip />
    </Flex>
  );
};
