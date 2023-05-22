import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';
interface PricePerShareTooltipProps {
  align?: TooltipAlignProps;
}

export const PricePerShareTooltip = ({ align }: PricePerShareTooltipProps) => {
  return (
    <Tooltip title="Price per Share" align={align}>
      The price per share for an IPO is calculated by dividing the valuation by
      the number of shares available in the IPO
    </Tooltip>
  );
};
