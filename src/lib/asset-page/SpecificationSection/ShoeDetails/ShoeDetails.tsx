import { Flex } from '../../../components/Flex/Flex';
import { Grid } from '../../../components/Grid/Grid';
import { Typography } from '../../../components/Typography/Typography';
import { ShoeProps } from '../SpecificationSection';

interface ShoeDetailsProps {
  shoe: ShoeProps;
}

export const ShoeDetails = ({ shoe }: ShoeDetailsProps) => {
  const { serial, size, condition } = shoe;

  const details = [
    {
      label: 'Serial Number',
      value: serial,
      show: !!serial,
    },
    {
      label: 'Size',
      value: size,
      show: !!size,
    },
    {
      label: 'Condition',
      value: condition,
      show: !!condition,
    },
  ];

  const shownDetails = details.filter(({ show }) => show);

  return (
    <Grid gridTemplateColumns="1fr 1fr" gap="10px" mt="10px">
      {shownDetails.map(({ label, value }) => (
        <Flex key={label} flexDirection="column">
          <Typography fontStyle="BodyS" color="darkGrey">
            {label}
          </Typography>
          <Typography fontStyle="BodyM">{value}</Typography>
        </Flex>
      ))}
    </Grid>
  );
};
