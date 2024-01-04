import React from 'react';
import styled from 'styled-components';
import { media } from '../../media/media-queries';

interface TextProps {
  color?: string;
  fontWeight?: number;
}

const Text = styled.p<TextProps>`
  color: ${(props) => props.color || 'var(--text-primary)'};
  font-family: 'Space Grotesk';
  font-weight: ${(props) => props.fontWeight || 400};
  font-size: 24px;
  line-height: 36px;
  margin: 0;
  padding: 0;
  ${media.tabletSm`
    font-size: 14px;
    line-height: 21px;
  `}
`;

interface MessageProps {
  color?: string;
  fontWeight?: number;
}

const Message: FCWithChildren<MessageProps> = ({
  color,
  fontWeight,
  children,
}) => {
  return (
    <Text color={color} fontWeight={fontWeight}>
      {children}
    </Text>
  );
};

export { Message };
