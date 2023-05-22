import { useState } from 'react';
import styled from 'styled-components';

import { BottomDrawer } from '../../components/BottomDrawer/BottomDrawer';
import { Flex } from '../../components/Flex/Flex';
import { Spacer } from '../../form-components/Spacer/Spacer';
import { media } from '../../media/media-queries';
import { GetInvolved } from '../GetInvolved/GetInvolved';
import { InvestForm } from '../InvestForm/InvestForm';
import { InvestOrderSummaryForm } from '../InvestOrderSummaryForm/InvestOrderSummaryForm';
import { OwnedShares } from '../OwnedShares/OwnedShares';
import { PurchaseOrderSuccessful } from '../PurchaseOrderSuccessful/PurchaseOrderSuccessful';
import { IPOInfo } from './IPOInfo/IPOInfo';

export type IpoViewType =
  | 'invest-form'
  | 'get-involved'
  | 'order-summary'
  | 'order-successful'
  | '';

interface IPOInvestSectionProps {
  symbolId: string;
  pricePerShare: number;
  numSharesAvailable: number;
  numSharesTotal: number;
  minQuantity: number;
  valuation: number;
  openBuyOutModal: () => void;
  isLoggedIn: boolean;
  walletBalance: number;
  inventoryAsset: {
    amt: number;
    symbol_id: string;
    marketPrice: { price: number };
  };
  onSubmitInvest: (data: {
    symbolId: string;
    quantity: number;
    price: number;
  }) => void;
  view: IpoViewType;
  setView: (view: IpoViewType) => void;
  submittingOrder: boolean;
  formError?: string;
}

export const IPOInvestSection = ({
  symbolId,
  inventoryAsset,
  pricePerShare,
  numSharesAvailable,
  numSharesTotal,
  minQuantity,
  valuation,
  openBuyOutModal,
  isLoggedIn,
  walletBalance,
  onSubmitInvest,
  view,
  setView,
  submittingOrder,
  formError,
}: IPOInvestSectionProps) => {
  const [quantity, setQuantity] = useState(minQuantity);
  const totalCost = quantity * pricePerShare;

  const onClickInvest = () => {
    if (!isLoggedIn) return setView('get-involved');
    setView('invest-form');
  };

  const Contents = () => {
    switch (view) {
      case 'invest-form':
        return (
          <InvestForm
            totalCost={totalCost}
            walletBalance={walletBalance}
            numSharesAvailable={numSharesAvailable}
            onClose={() => setView('')}
            setView={setView}
            quantity={quantity}
            minQuantity={minQuantity}
            setQuantity={setQuantity}
          />
        );
      case 'get-involved':
        return <GetInvolved onClickLater={() => setView('')} />;
      case 'order-summary':
        return (
          <InvestOrderSummaryForm
            numShares={quantity}
            totalCost={totalCost}
            balanceAfterPurchase={walletBalance - totalCost}
            onClickBack={() => setView('invest-form')}
            submittingOrder={submittingOrder}
            onClickCompleteBuyOrder={() =>
              onSubmitInvest({ symbolId, quantity, price: pricePerShare })
            }
            formError={formError}
          />
        );
      case 'order-successful':
        return (
          <PurchaseOrderSuccessful
            numShares={quantity}
            symbolId={symbolId}
            price={totalCost}
          />
        );
      default:
        return null;
    }
  };

  const sharesOwned = inventoryAsset?.amt;

  return (
    <Flex flexDirection="column" flex={1} gap="40px">
      {!!sharesOwned && (
        <OwnedShares
          numShares={sharesOwned}
          value={(sharesOwned * inventoryAsset.marketPrice.price) / 100}
        />
      )}
      <DesktopOnly>
        {view && view !== 'invest-form' ? (
          <Contents />
        ) : (
          <>
            <IPOInfo
              pricePerShare={pricePerShare}
              numSharesAvailable={numSharesAvailable}
              numSharesTotal={numSharesTotal}
              valuation={valuation}
              showButtons={view !== 'invest-form'}
              onClickInvest={onClickInvest}
              openBuyOutModal={openBuyOutModal}
            />
            {view === 'invest-form' && (
              <>
                <Spacer size="35px" />
                <Contents />
              </>
            )}
          </>
        )}
      </DesktopOnly>
      <MobileOnly>
        <IPOInfo
          pricePerShare={pricePerShare}
          numSharesAvailable={numSharesAvailable}
          numSharesTotal={numSharesTotal}
          valuation={valuation}
          showButtons={true}
          onClickInvest={onClickInvest}
          openBuyOutModal={openBuyOutModal}
        />
        <BottomDrawer
          isOpen={!!view}
          onClose={() => {
            setQuantity(0);
            setView('');
          }}>
          <Contents />
        </BottomDrawer>
      </MobileOnly>
    </Flex>
  );
};

const DesktopOnly = styled.div`
  ${media.phone`
    display: none;
  `}
`;

const MobileOnly = styled.div`
  display: none;
  ${media.phone`
    display: block;
  `}
`;
