import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';

interface BidPriceTooltipProps {
  align?: TooltipAlignProps;
}

export const BidPriceTooltip = ({ align }: BidPriceTooltipProps) => {
  return (
    <Tooltip title="Bid Price" align={align}>
      The bid price is the amount you are hoping to buy each share for.
      <br />
      <br />
      If you are looking to purchase immediately, we recommend placing a bid at
      a price above the price of the last trade.
    </Tooltip>
  );
};
