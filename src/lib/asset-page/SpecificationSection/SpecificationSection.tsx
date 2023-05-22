import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { Grid } from '../../components/Grid/Grid';
import { Heading, Typography } from '../../components/Typography/Typography';
import { CurrencyFormatter } from '../../CurrencyFormatter/CurrencyFormatter';
import { IPOValuationTooltip } from '../../tooltips/IPOValuationTooltip/IPOValuationTooltip';
import { ShoeInPack } from './ShoeInPack/ShoeInPack';

export interface ShoeProps {
  name: string;
  serial?: string;
  size?: string;
  condition?: string;
}

interface SpecificationSectionProps {
  numShares: number;
  initialMarketCap: number;
  shoes: ShoeProps[];
  isTrade: boolean;
}

export const SpecificationSection = ({
  numShares,
  initialMarketCap,
  shoes,
  isTrade,
}: SpecificationSectionProps) => {
  const isPack = shoes.length > 1;

  const specifications = [
    {
      label: 'Number of Shares',
      value: numShares,
      show: true,
    },
    {
      label: 'IPO Valuation',
      value: (
        <Flex gap="7px" alignItems="center">
          <CurrencyFormatter withoutDecimals>
            {initialMarketCap}
          </CurrencyFormatter>
          <IPOValuationTooltip align="right" />
        </Flex>
      ),
      show: isTrade,
    },
    {
      label: 'Shoes in Pack',
      value: shoes.length,
      show: isPack,
    },
    {
      label: 'Serial Number',
      value: shoes[0]?.serial,
      show: !!shoes[0]?.serial && !isPack,
    },
    {
      label: 'Size',
      value: shoes[0]?.size,
      show: !!shoes[0]?.size && !isPack,
    },
    {
      label: 'Condition',
      value: shoes[0]?.condition,
      show: !!shoes[0]?.condition && !isPack,
    },
  ];

  const shownSpecifications = specifications.filter(({ show }) => show);

  return (
    <Container>
      <Heading fontStyle="H4" mb="20px">
        Specification
      </Heading>
      <Grid gridTemplateColumns="1fr 1fr" gap="15px">
        {shownSpecifications.map(({ label, value }) => (
          <Flex key={label} flexDirection="column">
            <Typography color="darkGrey">{label}</Typography>
            <Typography fontStyle="BodyL">{value}</Typography>
          </Flex>
        ))}
      </Grid>
      {isPack && (
        <Flex flexDirection="column" gap="15px" mt="20px">
          {shoes.map((shoe) => (
            <ShoeInPack key={shoe.serial} shoe={shoe} />
          ))}
        </Flex>
      )}
    </Container>
  );
};
