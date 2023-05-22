import React from 'react';

interface AboutIconProps {
  color?: string;
  size?: number;
}

export const AboutIcon: React.FC<AboutIconProps> = ({
  size = 20,
  color = 'black',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 0H1.66667C0.75 0 0 0.75 0 1.66667V13.3333C0 14.25 0.75 15 1.66667 15H13.3333C14.25 15 15 14.25 15 13.3333V1.66667C15 0.75 14.25 0 13.3333 0ZM9.16667 11.6667H3.33333V10H9.16667V11.6667ZM11.6667 8.33333H3.33333V6.66667H11.6667V8.33333ZM11.6667 5H3.33333V3.33333H11.6667V5Z"
        fill={color}
      />
    </svg>
  );
};
