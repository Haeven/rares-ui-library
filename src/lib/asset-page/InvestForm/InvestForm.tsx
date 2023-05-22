import { Button } from '../../buttons/Button/Button';
import { Flex } from '../../components/Flex/Flex';
import { Heading, Typography } from '../../components/Typography/Typography';
import { CurrencyFormatter } from '../../CurrencyFormatter/CurrencyFormatter';
import { Link } from '../../form-components/Link/Link';
import { ArrowUpIcon } from '../../icons/ArrowUpIcon';
import { IpoViewType } from '../IPOInvestSection/IPOInvestSection';
import { QuantityCounterSection } from '../QuantityCounterSection/QuantityCounterSection';

interface InvestFormProps {
  totalCost: number;
  numSharesAvailable: number;
  minQuantity: number;
  onClose: () => void;
  walletBalance: number;
  setView: (arg1: IpoViewType) => void;
  quantity: number;
  setQuantity: (arg1: number) => void;
}

export const InvestForm = ({
  totalCost,
  numSharesAvailable,
  minQuantity,
  onClose,
  walletBalance,
  setView,
  quantity,
  setQuantity,
}: InvestFormProps) => {
  const notEnoughFunds = walletBalance < totalCost;

  return (
    <Flex flexDirection="column" gap="30px" flex={1}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap="16px"
        cursor="pointer"
        onClick={onClose}>
        <Heading fontStyle="H4">How much would you like to invest?</Heading>
        <ArrowUpIcon />
      </Flex>
      <QuantityCounterSection
        quantity={quantity}
        setQuantity={setQuantity}
        minQuantity={minQuantity}
        sharesAvailable={numSharesAvailable}
        showErrors={true}
      />
      <Flex justifyContent="space-between">
        <Typography color="darkGrey">Total Cost</Typography>
        <Typography fontStyle="H5">
          <CurrencyFormatter>{totalCost}</CurrencyFormatter>
        </Typography>
      </Flex>
      <Flex justifyContent="space-between">
        <Typography color="darkGrey">Wallet Balance</Typography>
        <Typography fontStyle="H5">
          <CurrencyFormatter>{walletBalance}</CurrencyFormatter>
        </Typography>
      </Flex>
      {notEnoughFunds && (
        <Typography>
          You need to{' '}
          <Link to="/wallet" color="raresPurple">
            <b>add funds</b>
          </Link>{' '}
          to your wallet before you can continue
        </Typography>
      )}
      <Flex gap="25px" justifyContent="flex-end">
        <Button
          variant="primary"
          disabled={notEnoughFunds}
          onClick={() => setView('order-summary')}>
          Continue
        </Button>
      </Flex>
    </Flex>
  );
};
