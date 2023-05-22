import { Button } from '../../../buttons/Button/Button';
import { CaretDownIcon } from '../../../icons/CaretDownIcon';
import { ShoeProps } from '../SpecificationSection';
import { useState } from 'react';
import { ShoeDetails } from '../ShoeDetails/ShoeDetails';
import { Container } from '../../../components/Container/Container';
import { Flex } from '../../../components/Flex/Flex';
import { Typography } from '../../../components/Typography/Typography';

interface ShoeInPackProps {
  shoe: ShoeProps;
}

export const ShoeInPack = ({ shoe }: ShoeInPackProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const showDetails = () => setIsOpen(true);
  const hideDetails = () => setIsOpen(false);

  const hasNoDetails = !shoe.serial && !shoe.size && !shoe.condition;

  return (
    <Container>
      <Flex gap="10px" alignItems="center" justifyContent="space-between">
        <Typography>{shoe.name}</Typography>
        {!hasNoDetails && (
          <Button
            variant="secondary"
            size="md"
            leftIcon={<CaretDownIcon rotate={isOpen ? 180 : 0} />}
            onClick={isOpen ? hideDetails : showDetails}>
            Details
          </Button>
        )}
      </Flex>
      {isOpen && <ShoeDetails shoe={shoe} />}
    </Container>
  );
};
