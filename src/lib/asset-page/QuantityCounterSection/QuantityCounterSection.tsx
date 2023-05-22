import styled from 'styled-components';
import { Flex } from '../../components/Flex/Flex';
import { Typography } from '../../components/Typography/Typography';
import { Input } from '../../form-components/Input/Input';
import { InputError } from '../../form-components/InputError/InputError';
import { AddIcon } from '../../icons/AddIcon';
import { SubtractIcon } from '../../icons/SubtractIcon';

const QuantityInput = styled(Input)`
  padding: 15px 20px;
  width: 53px;
  text-align: center;
  padding: 5px;
  border: 2px solid var(--main-color3);
  background-color: transparent;
  border-radius: 10px;
  height: 46px;
  font-weight: 700;
  outline: none;
  &:focus {
    outline: none;
    border: 2px solid var(--rares-purple);`;

const IncrementorButton = styled.button`
  width: 46px;
  height: 46px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid var(--main-color3);
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--main-color3);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: transparent;
  }
`;

interface QuantityErrorProps {
  quantity: number;
  sharesAvailable: number;
  minQuantity: number;
}

const QuantityError = ({
  quantity,
  sharesAvailable,
  minQuantity,
}: QuantityErrorProps) => {
  let error = '';
  switch (true) {
    case quantity > sharesAvailable:
      error = `Quantity cannot be greater than the number of shares available: ${sharesAvailable}`;
      break;
    case quantity < minQuantity:
      error = `Quantity must be at least ${minQuantity}`;
      break;
    case !quantity:
      error = 'Please select a quantity';
      break;
    default:
      error = '';
  }

  if (!error) return null;

  return (
    <InputError noPadding align="right">
      {error}
    </InputError>
  );
};

interface QuantityCounterSectionProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  sharesAvailable: number;
  minQuantity: number;
  showErrors: boolean;
}

export const QuantityCounterSection = ({
  quantity,
  setQuantity,
  sharesAvailable,
  minQuantity,
  showErrors,
}: QuantityCounterSectionProps) => {
  const incrementUp = () => setQuantity(quantity + 1);
  const incrementUpDisabled = quantity >= sharesAvailable;
  const incrementDown = () => setQuantity(quantity - 1);
  const incrementDownDisabled = quantity <= minQuantity;
  return (
    <Flex justifyContent="space-between">
      <Flex alignItems="center" gap="6px">
        <Typography color="darkGrey">Quantity</Typography>
      </Flex>
      <Flex flexDirection="column" alignItems="flex-end">
        <Flex gap="8px">
          <QuantityInput
            value={quantity || ''}
            onChange={(e) => setQuantity(Number(e.target.value))}
            invalid={false}
          />
          <IncrementorButton
            onClick={incrementDown}
            disabled={incrementDownDisabled}>
            <SubtractIcon />
          </IncrementorButton>
          <IncrementorButton
            onClick={incrementUp}
            disabled={incrementUpDisabled}>
            <AddIcon />
          </IncrementorButton>
        </Flex>
        {showErrors && (
          <QuantityError
            quantity={quantity}
            sharesAvailable={sharesAvailable}
            minQuantity={minQuantity}
          />
        )}
      </Flex>
    </Flex>
  );
};
