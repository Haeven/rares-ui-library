import { Tooltip, TooltipAlignProps } from '../../components/Tooltip/Tooltip';

interface OrderExpirationTooltipProps {
  align?: TooltipAlignProps;
}

export const OrderExpirationTooltip = ({
  align,
}: OrderExpirationTooltipProps) => {
  return (
    <Tooltip title="Order Expiration" align={align}>
      Setting an Order Expiration means if your order is not fulfilled by the
      date you request, it will be cancelled. The default Order Expiration is 30
      days.
    </Tooltip>
  );
};
