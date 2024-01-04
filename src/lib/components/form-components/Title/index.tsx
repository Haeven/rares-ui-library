import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: 'Space Grotesk';
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin: 0;
  color: var(--rares-purple);
  text-align: center;
`;

const Title: FCWithChildren = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export { Title };
