import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from './Container';

export default {
  title: 'Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = () => {
  return (
    <Container>
      <p>Default Container</p>
    </Container>
  );
};

export const Marin_And_Padding: ComponentStory<typeof Container> = () => {
  return (
    <Container margin="24px" padding="16px 0px">
      <h1>Margin & Padding</h1>
    </Container>
  );
};

export const Full_Width: ComponentStory<typeof Container> = () => {
  return (
    <Container height="100%" width="100%">
      Full Size Container
    </Container>
  );
};

export const Container_With_Border: ComponentStory<typeof Container> = () => {
  return (
    <Container border="1px solid black" borderRadius="10px" padding="0px 16px">
      <h1>Container with Border</h1>
    </Container>
  );
};
