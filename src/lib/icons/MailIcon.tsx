import React from 'react';

interface MailIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const MailIcon: React.FC<MailIconProps> = ({
  color = 'black',
  size = 20,
  className,
}) => {
  const width = size;
  const height = size * 0.75;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
        fill={color}
      />
    </svg>
  );
};

export { MailIcon };
