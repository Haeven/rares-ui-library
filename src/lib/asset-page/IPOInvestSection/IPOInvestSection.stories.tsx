import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../../components/Flex/Flex';
import { IPOInvestSection, IpoViewType } from './IPOInvestSection';

export default {
  title: 'Asset Page/IPOInvestSection',
  component: IPOInvestSection,
} as ComponentMeta<typeof IPOInvestSection>;

export const Default: ComponentStory<typeof IPOInvestSection> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      maxWidth="500px"
      width="100%"
      height="100vh">
      <IPOInvestSection
        pricePerShare={25}
        numSharesAvailable={125}
        numSharesTotal={1250}
        minQuantity={1}
        valuation={53900}
        openBuyOutModal={() => null}
        inventoryAsset={{
          amt: 0,
          symbol_id: '',
          marketPrice: {
            price: 0,
          },
        }}
        symbolId={''}
        isLoggedIn={false}
        walletBalance={0}
        onSubmitInvest={(data: {
          symbolId: string;
          quantity: number;
          price: number;
        }) => null}
        view={''}
        setView={(view: IpoViewType) => null}
        submittingOrder={false}
      />
    </Flex>
  );
};
