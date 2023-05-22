import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '../../components/Container/Container';
import { SpecificationSection } from './SpecificationSection';

export default {
  title: 'Asset Page/SpecificationSection',
  component: SpecificationSection,
} as ComponentMeta<typeof SpecificationSection>;

export const Default: ComponentStory<typeof SpecificationSection> = () => {
  return (
    <Container maxWidth="440px">
      <SpecificationSection
        numShares={300}
        initialMarketCap={15000}
        isTrade
        shoes={[
          {
            name: 'Drake OVO Air Jordan Series 1: "Friends & Family"',
            serial: 'H016-MNJDLS-281',
            size: '9.5',
            condition: undefined,
          },
          {
            name: 'Drake OVO Jordan Series 2: Air Jordan 4 "Splatter"',
            serial: undefined,
            size: '12',
            condition: 'Mint',
          },
          {
            name: 'Drake OVO Jordan Series 2: Air Jordan 8 "Oakley"',
            serial: 'H016-MNJDLS-281',
            size: '8.5',
            condition: 'Mint',
          },
          {
            name: 'Drake OVO Jordan Series 2: Air Jordan 16 "OVO"',
            serial: undefined,
            size: undefined,
            condition: undefined,
          },
        ]}
      />
    </Container>
  );
};
