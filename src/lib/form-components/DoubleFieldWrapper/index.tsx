import styled from 'styled-components';
import { media } from '../../media/media-queries';

export const DoubleFieldWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 20px;
  align-items: flex-start;
  ${media.tabletSm`
    grid-auto-flow: row;
  `}
`;
