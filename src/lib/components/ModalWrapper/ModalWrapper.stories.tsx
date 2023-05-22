import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { ModalWrapper } from './ModalWrapper';
import { Button } from '../../buttons/Button/Button';

export default {
  title: 'Modal Wrapper',
  component: ModalWrapper,
} as ComponentMeta<typeof ModalWrapper>;

export const Default: ComponentStory<typeof ModalWrapper> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onClick={openModal}>Click to open modal</Button>
      <ModalWrapper
        isOpen={isOpen}
        onClose={onClose}
        title="Your profile is incomplete"
        buttons={{
          primary: {
            label: 'Verify my identity',
          },
          secondary: {
            label: "I'll do this later",
          },
        }}>
        Modal content goes here...
      </ModalWrapper>
    </>
  );
};
