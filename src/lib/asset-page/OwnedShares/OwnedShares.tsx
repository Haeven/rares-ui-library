import { Flex } from '../../components/Flex/Flex';
import { Typography } from '../../components/Typography/Typography';
import { CurrencyFormatter } from '../../CurrencyFormatter/CurrencyFormatter';

interface OwnedSharesProps {
  numShares: number;
  value: number;
}

export const OwnedShares = ({ numShares, value }: OwnedSharesProps) => {
  return (
    <Flex
      border="1px solid var(--main-color3)"
      padding="16px"
      borderRadius="8px">
      <Typography>
        {`You own ${numShares} share${
          numShares === 1 ? '' : 's'
        } of this item `}
        (<CurrencyFormatter withoutDecimals>{value}</CurrencyFormatter>)
      </Typography>
    </Flex>
  );
};
