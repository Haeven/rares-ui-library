import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import styled from 'styled-components';
import { Spacer } from '../../form-components/Spacer';
import { media } from '../../media/media-queries';
import { Container } from '../Container';
import {
  ModalButtonProps,
  ModalButtons,
} from '../ModalWrapper/ModalButtons';
import { Heading } from '../Typography';

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  buttons?: {
    primary?: ModalButtonProps;
    secondary?: ModalButtonProps;
  };
}

export const BottomDrawer: FCWithChildren<BottomDrawerProps> = ({
  title,
  isOpen,
  onClose,
  buttons,
  children,
  className,
}) => {
  return (
    <StyledDrawer
      open={isOpen}
      onClose={onClose}
      direction="bottom"
      size="auto"
      className={className}>
      <Container margin="25px">
        {title && (
          <Heading fontStyle="H3" color="raresPurple" mb="30px">
            {title}
          </Heading>
        )}
        {children}
        {!!buttons && (
          <>
            <Spacer size="30px" />
            <ModalButtons buttons={buttons} onClose={onClose} />
          </>
        )}
      </Container>
    </StyledDrawer>
  );
};

const StyledDrawer = styled(Drawer)`
  padding: 0px;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  .EZDrawer & {
    ${media.desktop(`
      display: none;
    `)}
  }
  + .EZDrawer__overlay {
    ${media.desktop(`
      display: none !important;
    `)}
  }
`;
