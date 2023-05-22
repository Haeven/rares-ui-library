import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PurchaseOrderSuccessful } from './PurchaseOrderSuccessful';

export default {
  title: 'Asset Page/PurchaseOrderSuccessful',
  component: PurchaseOrderSuccessful,
} as ComponentMeta<typeof PurchaseOrderSuccessful>;

export const Default: ComponentStory<typeof PurchaseOrderSuccessful> = () => {
  return <PurchaseOrderSuccessful numShares={1} symbolId="$OVO" price={25} />;
};
