import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';

interface AskExpiryDateTooltipProps {
  align?: TooltipAlignProps;
}

export const AskExpiryDateTooltip = ({ align }: AskExpiryDateTooltipProps) => {
  return (
    <Tooltip title="Ask Expiry Date" align={align}>
      Our asks are set to expire within a month of being placed
    </Tooltip>
  );
};
