import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { BottomDrawer } from './BottomDrawer';
import { Button } from '../../buttons/Button/Button';

export default {
  title: 'Bottom Drawer',
  component: BottomDrawer,
} as ComponentMeta<typeof BottomDrawer>;

export const Default: ComponentStory<typeof BottomDrawer> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <BottomDrawer
        title="Test Drawer"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        buttons={{
          primary: {
            label: 'Review Order',
          },
          secondary: {
            label: 'Close',
          },
        }}>
        <div>Drawer content goes here...</div>
      </BottomDrawer>
    </>
  );
};
