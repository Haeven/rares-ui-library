import styled from 'styled-components';

interface SpacerProps {
  size?: string;
}

export const Spacer = styled.div<SpacerProps>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`;
