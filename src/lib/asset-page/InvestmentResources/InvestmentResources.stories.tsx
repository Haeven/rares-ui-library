import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InvestmentResources } from './InvestmentResources';

export default {
  title: 'Asset Page/InvestmentResources',
  component: InvestmentResources,
} as ComponentMeta<typeof InvestmentResources>;

export const Default: ComponentStory<typeof InvestmentResources> = () => {
  return (
    <InvestmentResources
      resources={[
        {
          label: 'SEC Documentation',
          link: 'https://www.sec.gov/edgar/browse/?CIK=0001832034',
          isExternal: true,
        },
        {
          label: 'Investment Thesis',
          link: 'https://www.sec.gov/edgar/browse/?CIK=0001832034',
          isExternal: true,
        },
      ]}
    />
  );
};
