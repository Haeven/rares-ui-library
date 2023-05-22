import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';

interface BidExpiryDateTooltipProps {
  align?: TooltipAlignProps;
}

export const BidExpiryDateTooltip = ({ align }: BidExpiryDateTooltipProps) => {
  return (
    <Tooltip title="Bid Expiry Date" align={align}>
      Our bids are set to expire within a month of being placed
    </Tooltip>
  );
};
