import CurrencyFormat from 'react-currency-format';

interface CurrencyFormatterProps {
  withoutDecimals?: boolean;
  children?: number;
}

export const CurrencyFormatter = ({
  withoutDecimals,
  children,
}: CurrencyFormatterProps) => {
  return (
    <CurrencyFormat
      value={children || 0}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
      decimalScale={withoutDecimals ? 0 : 2}
      fixedDecimalScale={withoutDecimals ? false : true}
    />
  );
};
