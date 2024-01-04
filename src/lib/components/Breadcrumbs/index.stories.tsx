import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from '.';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

export const BreadcrumbsExample: ComponentStory<typeof Breadcrumbs> = () => {
  return (
    <Breadcrumbs
      crumbs={[
        { label: 'Rares', href: '/' },
        { label: 'Invest', href: '/invest' },
        { label: '$SYMBOL', href: '/trading/$SYMBOL' },
      ]}
    />
  );
};
