import styled from 'styled-components';

interface LineProps {
  size?: number;
}

export const Line = styled.hr<LineProps>`
  border-top: ${({ size }) => `${size || 2}px solid var(--main-color3)`};
  margin: 0;
  width: 100%;
`;
