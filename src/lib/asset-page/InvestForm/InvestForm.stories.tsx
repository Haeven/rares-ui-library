import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '../../components/Container/Container';
import { IpoViewType } from '../IPOInvestSection/IPOInvestSection';
import { InvestForm } from './InvestForm';

export default {
  title: 'Asset Page/InvestForm',
  component: InvestForm,
} as ComponentMeta<typeof InvestForm>;

export const Default: ComponentStory<typeof InvestForm> = () => {
  return (
    <Container maxWidth="440px">
      <InvestForm
        walletBalance={100}
        numSharesAvailable={100}
        totalCost={500}
        onClose={() => null}
        setView={(arg1: IpoViewType) => null}
        quantity={5}
        minQuantity={1}
        setQuantity={(arg1: number) => null}
      />
    </Container>
  );
};
