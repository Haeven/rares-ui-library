import Modal from 'react-modal';
import { Heading } from '../Typography';
import { BottomDrawer } from '../BottomDrawer';
import {
  ModalContents,
  ChildrenWrapper,
  ModalBody,
  ModalOverlay,
} from './styles';
import { createPortal } from 'react-dom';
import { ModalButtonProps, ModalButtons } from './ModalButtons';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttons?: {
    primary?: ModalButtonProps;
    secondary?: ModalButtonProps;
  };
}

export const ModalWrapper: FCWithChildren<ModalWrapperProps> = ({
  isOpen,
  onClose,
  title,
  buttons,
  children,
  className,
}) => {
  return (
    <>
      {createPortal(
        <BottomDrawer
          title={title}
          isOpen={isOpen}
          onClose={onClose}
          buttons={buttons}>
          {children}
        </BottomDrawer>,
        document.body,
      )}

      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <ModalBody {...props}>{children}</ModalBody>
        )}
        overlayElement={(props, contentElement) => (
          <ModalOverlay {...props}>{contentElement}</ModalOverlay>
        )}>
        <ModalContents>
          <Heading fontStyle="H3" color="raresPurple">
            {title}
          </Heading>
          <ChildrenWrapper>{children}</ChildrenWrapper>
          {!!buttons && <ModalButtons buttons={buttons} onClose={onClose} />}
        </ModalContents>
      </Modal>
    </>
  );
};
