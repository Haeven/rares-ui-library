import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';

interface CompleteFulfillmentTooltipProps {
  align?: TooltipAlignProps;
  type: 'bid' | 'ask';
}

export const CompleteFulfillmentTooltip = ({
  align,
  type,
}: CompleteFulfillmentTooltipProps) => {
  return (
    <Tooltip title="Complete Fulfillment" align={align}>
      Agreeing to Complete Fulfillment means the {type} order will only execute
      completely, for all the shares at the {type === 'ask' ? 'asking' : 'bid'}{' '}
      price at once or not at all.
    </Tooltip>
  );
};
