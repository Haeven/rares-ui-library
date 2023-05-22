import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { AskExpiryDateTooltip } from './AskExpiryDateTooltip';

export default {
  title: 'Tooltips/AskExpiryDateTooltip',
  component: AskExpiryDateTooltip,
} as ComponentMeta<typeof AskExpiryDateTooltip>;

export const Default: ComponentStory<typeof AskExpiryDateTooltip> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh">
      <AskExpiryDateTooltip />
    </Flex>
  );
};
