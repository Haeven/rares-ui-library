import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormTabs } from './FormTabs';

export default {
  title: 'tabs/Form Tabs',
  component: FormTabs,
} as ComponentMeta<typeof FormTabs>;

export const Default: ComponentStory<typeof FormTabs> = () => {
  return (
    <FormTabs
      tabs={[
        {
          label: 'Log In',
          onClick: () => null,
          isActive: true,
        },
        {
          label: 'Sign Up',
          onClick: () => null,
          isActive: false,
        },
      ]}
    />
  );
};
