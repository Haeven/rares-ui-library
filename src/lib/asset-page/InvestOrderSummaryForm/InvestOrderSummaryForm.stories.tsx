import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InvestOrderSummaryForm } from './InvestOrderSummaryForm';

export default {
  title: 'Asset Page/InvestOrderSummaryForm',
  component: InvestOrderSummaryForm,
} as ComponentMeta<typeof InvestOrderSummaryForm>;

export const Default: ComponentStory<typeof InvestOrderSummaryForm> = () => {
  return (
    <InvestOrderSummaryForm
      numShares={1}
      totalCost={25}
      balanceAfterPurchase={75}
      onClickBack={() => null}
      onClickCompleteBuyOrder={() => null}
      submittingOrder={false}
    />
  );
};
