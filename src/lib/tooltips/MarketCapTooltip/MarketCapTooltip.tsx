import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';
interface MarketCapTooltipProps {
  align?: TooltipAlignProps;
}

export const MarketCapTooltip = ({ align }: MarketCapTooltipProps) => {
  return (
    <Tooltip title="Market Cap" align={align}>
      The market cap of an asset is calculated by multiplying the last trade
      price by the number of shares available.
    </Tooltip>
  );
};
