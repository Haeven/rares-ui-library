import { LinkButton } from '../../buttons/LinkButton/LinkButton';
import { Flex } from '../../components/Flex/Flex';
import { Heading, Typography } from '../../components/Typography/Typography';
import { CurrencyFormatter } from '../../CurrencyFormatter/CurrencyFormatter';

interface PurchaseOrderSuccessfulProps {
  numShares: number;
  symbolId: string;
  price: number;
}

export const PurchaseOrderSuccessful = ({
  numShares,
  symbolId,
  price,
}: PurchaseOrderSuccessfulProps) => {
  return (
    <Flex flexDirection="column" gap="20px">
      <Heading fontStyle="H4">Purchase Order Successful</Heading>
      <Typography>
        You've bought <b>{`${numShares} share${numShares === 1 ? '' : 's'}`}</b>{' '}
        of <b>{`${symbolId}`}</b> for the amount of{' '}
        <b>
          <CurrencyFormatter>{price}</CurrencyFormatter>
        </b>
        . You can track your shares in your Stock Room.
      </Typography>
      <LinkButton to="/portfolio" fullWidth>
        Go to Stock Room
      </LinkButton>
    </Flex>
  );
};
