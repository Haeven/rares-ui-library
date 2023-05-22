import React from 'react';

interface TikTokFilledIconProps {
  color?: string;
  backgroundColor?: string;
  size?: number;
  className?: string;
}

export const TikTokFilledIcon: React.FC<TikTokFilledIconProps> = ({
  size = 50,
  color = 'black',
  backgroundColor = 'white',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 10C0 4.47715 4.47715 0 10 0H40C45.5228 0 50 4.47715 50 10V40C50 45.5228 45.5228 50 40 50H10C4.47715 50 0 45.5228 0 40V10Z"
        fill={backgroundColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.6036 12C31.0161 15.5476 32.9961 17.6627 36.4388 17.8877V21.8778C34.4437 22.0728 32.6961 21.4203 30.6636 20.1903V27.653C30.6636 37.1333 20.3282 40.0959 16.1731 33.3007C13.503 28.928 15.1381 21.2553 23.7033 20.9478V25.1554C23.0508 25.2604 22.3533 25.4254 21.7158 25.6429C19.8107 26.288 18.7307 27.4955 19.0307 29.6256C19.6082 33.7057 27.0935 34.9132 26.4709 26.9405V12.0075H30.6036V12Z"
        fill={color}
      />
    </svg>
  );
};
