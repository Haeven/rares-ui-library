import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingSpinnerProps {
  size?: string;
  circleWidth?: string;
  color?: string;
  margin?: string;
}

const spinner = keyframes`{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

interface SpinnerProps {
  size: string;
  circleWidth: string;
  color: string;
  margin?: string;
}

const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border: ${(props) => `${props.circleWidth} solid rgba(0, 0, 0, 0)`};
  border-top: ${(props) => `${props.circleWidth} solid ${props.color}`};
  border-right: ${(props) => `${props.circleWidth} solid ${props.color}`};
  border-radius: 50%;
  animation: ${spinner} 0.75s linear infinite;
  margin: ${(props) => props.margin || undefined};
`;

export const LoadingSpinner = ({
  size = '50px',
  color = 'var(--main-color5);',
  circleWidth = '5px',
  margin,
}: LoadingSpinnerProps) => {
  return (
    <Spinner
      size={size}
      color={color}
      circleWidth={circleWidth}
      margin={margin}
    />
  );
};
