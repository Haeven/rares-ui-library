import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';
interface IPOValuationTooltipProps {
  align?: TooltipAlignProps;
}

export const IPOValuationTooltip = ({ align }: IPOValuationTooltipProps) => {
  return (
    <Tooltip title="IPO Valuation" align={align}>
      The original valuation at listing for IPO on Rares.
    </Tooltip>
  );
};
