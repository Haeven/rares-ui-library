import { Button } from '../../../buttons/Button/Button';
import { Flex } from '../../../components/Flex/Flex';
import { Typography } from '../../../components/Typography/Typography';
import { CurrencyFormatter } from '../../../CurrencyFormatter/CurrencyFormatter';
import { PricePerShareTooltip } from '../../../tooltips/PricePerShareTooltip/PricePerShareTooltip';
import { ValuationTooltip } from '../../../tooltips/ValuationTooltip/ValuationTooltip';

interface IPOInfoProps {
  pricePerShare: number;
  numSharesAvailable: number;
  numSharesTotal: number;
  valuation: number;
  showButtons: boolean;
  onClickInvest: () => void;
  openBuyOutModal: () => void;
}

export const IPOInfo = ({
  pricePerShare,
  numSharesAvailable,
  numSharesTotal,
  valuation,
  showButtons,
  onClickInvest,
  openBuyOutModal,
}: IPOInfoProps) => {
  return (
    <Flex flexDirection="column" gap="25px" width="100%">
      <Flex justifyContent="space-between" gap="15px">
        <Flex flexDirection="column" gap="4px">
          <Typography color="darkGrey">Price per Share</Typography>
          <Flex alignItems="center" gap="10px">
            <Typography fontStyle="H4">
              <CurrencyFormatter withoutDecimals>
                {pricePerShare}
              </CurrencyFormatter>
            </Typography>
            <PricePerShareTooltip align="left" />
          </Flex>
          <Typography>
            <b>{numSharesAvailable}</b> of <b>{numSharesTotal}</b> shares
            available
          </Typography>
        </Flex>
        <Flex flexDirection="column" gap="4px" alignItems="flex-end">
          <Typography color="darkGrey">Valuation</Typography>
          <Flex alignItems="center" gap="10px">
            <Typography fontStyle="H4">
              <CurrencyFormatter withoutDecimals>{valuation}</CurrencyFormatter>
            </Typography>
            <ValuationTooltip align="right" />
          </Flex>
        </Flex>
      </Flex>
      {showButtons && (
        <Flex gap="15px" justifyContent="flex-end">
          <Button variant="secondary" onClick={openBuyOutModal}>
            Inquire to buy outright
          </Button>
          <Button onClick={onClickInvest}>Invest</Button>
        </Flex>
      )}
    </Flex>
  );
};
