import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConditionalWrapper } from '.';

export default {
  title: 'Conditional Wrapper',
  component: ConditionalWrapper,
} as ComponentMeta<typeof ConditionalWrapper>;

export const noWrapper: ComponentStory<typeof ConditionalWrapper> = () => {
  return (
    <ConditionalWrapper
      condition={false}
      wrapper={(children) => <div style={{ opacity: 0.2 }}>{children}</div>}>
      <p>There is no wrapper div around this p tag</p>
    </ConditionalWrapper>
  );
};

export const wrapperAdded: ComponentStory<typeof ConditionalWrapper> = () => {
  return (
    <ConditionalWrapper
      condition={true}
      wrapper={(children) => <div style={{ opacity: 0.2 }}>{children}</div>}>
      <p>The p tag has been wrapped with a div with opacity 0.2</p>
    </ConditionalWrapper>
  );
};
