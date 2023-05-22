import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '../../components/Container/Container';
import { GetInvolved } from './GetInvolved';

export default {
  title: 'Asset Page/GetInvolved',
  component: GetInvolved,
} as ComponentMeta<typeof GetInvolved>;

export const Default: ComponentStory<typeof GetInvolved> = () => {
  return (
    <Container maxWidth="440px">
      <GetInvolved onClickLater={() => null} />
    </Container>
  );
};
