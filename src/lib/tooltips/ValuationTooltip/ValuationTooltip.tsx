import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';

interface ValuationTooltipProps {
  align?: TooltipAlignProps;
}

export const ValuationTooltip = ({ align }: ValuationTooltipProps) => {
  return (
    <Tooltip title="Valuation" align={align}>
      The valuation is based on the value at the time of purchase. For more
      information, reach out to our experts.
    </Tooltip>
  );
};
