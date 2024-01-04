import styled, { keyframes } from 'styled-components';
import { Container } from '../Container';

const skeleton = keyframes`
0% {
  background-color: hsl(200, 12%, 87%);
}
100% {
  background-color: hsl(0, 0%, 95%);
}
`;

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
}

export const SkeletonLoader = styled(Container)<SkeletonLoaderProps>`
  animation-name: ${skeleton};
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;
