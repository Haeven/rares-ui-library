import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageTabs } from './PageTabs';

export default {
  title: 'tabs/Page Tabs',
  component: PageTabs,
} as ComponentMeta<typeof PageTabs>;

export const Default: ComponentStory<typeof PageTabs> = () => {
  return (
    <PageTabs
      tabs={[
        {
          label: 'IPO',
          href: '/invest/ipo',
          isActive: true,
        },
        {
          label: 'Trade',
          href: '/invest/trade',
          isActive: false,
        },
      ]}
    />
  );
};
