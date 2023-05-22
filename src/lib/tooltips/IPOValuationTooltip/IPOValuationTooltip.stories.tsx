import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { IPOValuationTooltip } from './IPOValuationTooltip';

export default {
  title: 'Tooltips/IPOValuationTooltip',
  component: IPOValuationTooltip,
} as ComponentMeta<typeof IPOValuationTooltip>;

export const Default: ComponentStory<typeof IPOValuationTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <IPOValuationTooltip />
    </Flex>
  );
};
