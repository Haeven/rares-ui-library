import React from 'react';

interface ChatIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const ChatIcon: React.FC<ChatIconProps> = ({
  color = 'black',
  size = 20,
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
        d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM7 9H5V7H7V9ZM11 9H9V7H11V9ZM15 9H13V7H15V9Z"
        fill={color}
      />
    </svg>
  );
};

export { ChatIcon };
