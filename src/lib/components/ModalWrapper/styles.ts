import styled from 'styled-components';
import { media } from '../../media/media-queries';

export const ModalBody = styled.div`
  border-radius: 25px;
  border: none;
  padding: 0;
  width: 100%;
  height: fit-content;
  max-width: 640px;
  overflow: unset;
  position: undefined;
  background-color: white;
  display: none;
  ${media.desktop`
    display: block;
  `}
`;

export const ModalOverlay = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;

  padding: 200px 16px;
  z-index: 1000;
  ${media.desktop(`
    display: flex;
    justify-content: center;
  `)}
`;

export const ModalContents = styled.div`
  margin: 40px;
  @media (max-width: 768px) {
    margin: 40px 20px 20px;
  }
`;

export const ChildrenWrapper = styled.div`
  margin: 20px 0 40px;
`;
