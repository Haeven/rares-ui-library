import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';

interface AskPriceTooltipProps {
  align?: TooltipAlignProps;
}

export const AskPriceTooltip = ({ align }: AskPriceTooltipProps) => {
  return (
    <Tooltip title="Ask Price" align={align}>
      The ask price is the price at which you would like to sell your shares.
      <br />
      <br />
      If you are hoping to sell your shares immediately, we recommend listing
      your ask price below the current trading price.
    </Tooltip>
  );
};
