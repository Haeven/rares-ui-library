import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { CompleteFulfillmentTooltip } from './CompleteFulfillmentTooltip';

export default {
  title: 'Tooltips/CompleteFulfillmentTooltip',
  component: CompleteFulfillmentTooltip,
} as ComponentMeta<typeof CompleteFulfillmentTooltip>;

export const Default: ComponentStory<
  typeof CompleteFulfillmentTooltip
> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <CompleteFulfillmentTooltip type="bid" />
    </Flex>
  );
};
